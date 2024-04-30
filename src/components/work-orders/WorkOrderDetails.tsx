import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors} from '../../constants/colors';
import {WorkOrderSummary} from './WorkOrderSummary';
import {WorkOrderLaborMaterials} from './WorkOrderLaborMaterials';
import {WorkOrderDocuments} from './WorkOrderDocuments';

const Tab = createMaterialTopTabNavigator();

export const WorkOrderDetails = ({route}: any) => {
  const {workOrder} = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.darkBlue,
        tabBarInactiveTintColor: Colors.gray,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.darkBlue,
        },
      }}>
      <Tab.Screen
        name="Summary"
        children={()=><WorkOrderSummary {...workOrder}/>}
      />
      <Tab.Screen
        name="Labor & Materials"
        component={WorkOrderLaborMaterials}
      />
      <Tab.Screen name="Documents" component={WorkOrderDocuments} />
    </Tab.Navigator>
  );
};
