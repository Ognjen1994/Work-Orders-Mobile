import {makeObservable, observable, action, reaction } from 'mobx';
import {workOrdersMock} from '../mockData/workOrdersMock';
import {WorkOrder} from '../types/workOrder';
import AsyncStorage from '@react-native-async-storage/async-storage';

class WorkOrderStore {
  allWorkOrders: WorkOrder[] = [];
  displayedWorkOrders: WorkOrder[] = [];
  pageNumber = 1;
  isLoading = false;
  itemsPerPage = 10;
  allWorkOrdersLoaded = false;
  currentUser = 'Ognjen Ristic';

  constructor() {
    makeObservable(this, {
      allWorkOrders: observable,
      displayedWorkOrders: observable,
      pageNumber: observable,
      isLoading: observable,
      allWorkOrdersLoaded: observable,
      loadMoreWorkOrders: action,
      addWorkOrder: action,
    });

    this.initializeWorkOrders();
  }
  

  setCurrentUser(user: string) {
    this.currentUser = user;
  }

  async initializeWorkOrders() {
    try {
      const storedWorkOrders = await AsyncStorage.getItem('workOrders');
      if (storedWorkOrders) {
        this.allWorkOrders = JSON.parse(storedWorkOrders);
        this.displayedWorkOrders = this.allWorkOrders.slice(
          0,
          this.itemsPerPage,
        );
      } else {
        await AsyncStorage.setItem(
          'workOrders',
          JSON.stringify(workOrdersMock),
        );
        this.allWorkOrders = workOrdersMock;
        this.displayedWorkOrders = workOrdersMock.slice(0, this.itemsPerPage);
      }
      this.allWorkOrdersLoaded =
        this.displayedWorkOrders.length === this.allWorkOrders.length;
    } catch (error) {
      console.error('Error loading work orders from async storage:', error);
      this.displayedWorkOrders = workOrdersMock.slice(0, this.itemsPerPage);
    }
  }

  fetchMoreWorkOrders = action(() => {
    const startIndex = this.pageNumber * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const newWorkOrders = this.allWorkOrders.slice(startIndex, endIndex);
    this.displayedWorkOrders = [...this.displayedWorkOrders, ...newWorkOrders];
    this.pageNumber++;
    this.isLoading = false;
    this.allWorkOrdersLoaded =
      this.displayedWorkOrders.length === this.allWorkOrders.length;
  });

  loadMoreWorkOrders = () => {
    if (!this.isLoading && !this.allWorkOrdersLoaded) {
      this.isLoading = true;
      this.fetchMoreWorkOrders();
    }
  };

  addWorkOrder = action((newWorkOrder: WorkOrder) => {
    this.displayedWorkOrders = [...this.displayedWorkOrders, ...[newWorkOrder]];
    this.allWorkOrdersLoaded =
      this.displayedWorkOrders.length === this.allWorkOrders.length;
  });
  
  updateWorkOrder = action((updatedWorkOrder: WorkOrder) => {
    const index = this.allWorkOrders.findIndex(
      (order) => order.id === updatedWorkOrder.id
    );
    if (index !== -1) {
      this.allWorkOrders[index] = updatedWorkOrder;
      const displayedIndex = this.displayedWorkOrders.findIndex(
        (order) => order.id === updatedWorkOrder.id
      );
      if (displayedIndex !== -1) {
        this.displayedWorkOrders[displayedIndex] = updatedWorkOrder;
      }
    }
  });

  assignWorkOrderToCurrentUser = action((workOrderId: string) => {
    const workOrderIndex = this.allWorkOrders.findIndex(
      (order) => order.id === workOrderId
    );
    if (workOrderIndex !== -1) {
      this.allWorkOrders[workOrderIndex].assignedTo = this.currentUser;
    }
  });
}

const workOrderStore = new WorkOrderStore();
export default workOrderStore;
