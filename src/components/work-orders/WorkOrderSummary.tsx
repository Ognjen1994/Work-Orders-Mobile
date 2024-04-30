import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {Colors} from '../../constants/colors';
import {Card, IconButton} from 'react-native-paper';
import {Dropdown} from '../dropdown/Dropdown';
import {WorkOrderSummary as WorkOrderSummaryProps} from '../../types/workOrder';
import CorrectiveMaintenance from './CorrectiveMaintenance';
import PreventativeMaintenance from './PreventiveMaintenance';
import {useState} from 'react';
import workOrderStore from '../../mobx/store';

const priorityOptions = {
  options: [
    {label: '1 - Emergency', value: '1 - Emergency'},
    {label: '2 - Urgent', value: '2 - Urgent'},
    {label: '3 - Important', value: '3 - Important'},
    {label: '4 - General Issues', value: '4 - General Issues'},
    {label: '5 - Planned', value: '5 - Planned'},
    {label: '6 - Work List Deficiency', value: '6 - Work List Deficiency'},
  ],
};

const statusOptions = {
  options: [
    {label: 'Completed', value: 'Completed'},
    {label: 'Canceled', value: 'Canceled'},
    {label: 'Failed', value: 'Failed'},
    {label: 'Open', value: 'Open'},
    {label: 'On Hold', value: 'On Hold'},
    {label: 'Closed', value: 'Closed'},
  ],
};

export const WorkOrderSummary = ({
  id,
  generatedDate,
  targetDueDate,
  status,
  priority,
  fullType,
  type,
  subtype,
  scheduleId,
  scheduleName,
  frequency,
  name,
  email,
  number,
}: WorkOrderSummaryProps) => {
  const [selectedPriority, setSelectedPriority] = useState(priority);
  const [selectedStatus, setSelectedStatus] = useState(status);
  const {allWorkOrders, updateWorkOrder} = workOrderStore;

  const handlePriorityChange = (value: string) => {
    setSelectedPriority(value);
    const workOrderIndex = allWorkOrders.findIndex(order => order.id === id);
    if (workOrderIndex !== -1) {
      const updatedWorkOrder = {...allWorkOrders[workOrderIndex]};
      updatedWorkOrder.priority = value;
      updateWorkOrder(updatedWorkOrder)
    }
  };

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
    const workOrderIndex = allWorkOrders.findIndex(order => order.id === id);
    if (workOrderIndex !== -1) {
      allWorkOrders[workOrderIndex].status = value;
      const updatedWorkOrder = {...allWorkOrders[workOrderIndex]};
      updatedWorkOrder.status = value;
      updateWorkOrder(updatedWorkOrder)
    }
  };

  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Content style={{marginHorizontal: -10, marginVertical: -16}}>
          <Text style={[styles.title, {color: Colors.lightBlue}]}>
            Work Order: {id}
          </Text>
          <View style={styles.row}>
            <View style={styles.leftSide}>
              <View style={{minWidth: '60%'}}>
                <Dropdown
                  label="Priority"
                  data={priorityOptions}
                  value={selectedPriority}
                  onValueChange={handlePriorityChange}
                />
              </View>
            </View>
            <View style={styles.rightSide}>
              <View style={styles.column}>
                <Text style={[styles.date, styles.label]}>Target Due Date</Text>
                <Text style={[styles.date, styles.value]}>{targetDueDate}</Text>
              </View>
            </View>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Work Order Type:</Text>
            <Text style={styles.value}>{fullType}</Text>
          </View>
          <View style={styles.dropdown}>
            <View style={{flex: 1}}>
              <Dropdown />
            </View>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Work Order Sub-type:</Text>
            <Text style={styles.value}>{subtype}</Text>
          </View>

          <View style={styles.row}>
            <View>
              <Text style={styles.label}>Generation Date:</Text>
              <Text style={styles.value}>{generatedDate}</Text>
            </View>
            <View style={[styles.status, styles.column]}>
              <Text style={styles.currentStatus}>Current status:</Text>
              <TouchableOpacity>
                <View>
                  <Dropdown
                    label="Status"
                    data={statusOptions}
                    value={selectedStatus}
                    onValueChange={handleStatusChange}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dropdown}>
            <View style={{flex: 1}}>
              <Dropdown />
            </View>
          </View>
        </Card.Content>
      </Card>
      {type === 'CM' ? (
        <CorrectiveMaintenance
          name={name || ''}
          email={email || ''}
          number={number || ''}
        />
      ) : (
        <PreventativeMaintenance
          scheduleId={scheduleId || ''}
          scheduleName={scheduleName || ''}
          frequency={frequency || ''}
        />
      )}
      <Card style={styles.card}>
        <Card.Content style={{marginHorizontal: -10, marginVertical: -16}}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Notes</Text>
            <Text style={styles.notesText}>
              1. Test the TRP valve{'\n'}
              2. Check the anode rod{'\n'}
              3. Drain the tank and wash out sediment{'\n'}
              4. Adjust the temperature{'\n'}
              5. Insulate pipes and heater
            </Text>
          </View>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content style={{marginHorizontal: -10, marginVertical: -16}}>
          <TouchableOpacity style={[styles.email]}>
            <IconButton icon="email" iconColor={Colors.white} size={18} />
            <Text style={{color: Colors.white}}>EMAIL THIS WORK ORDER</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  column: {
    flexDirection: 'column',
    marginBottom: 8,
  },
  label: {
    fontWeight: '300',
  },
  value: {
    fontWeight: 'bold',
  },
  categoryContainer: {
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  categoryText: {
    color: 'white',
    fontWeight: 'bold',
  },
  status: {
    marginTop: -26,
  },
  statusContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.darkBlue,
    borderRadius: 5,
    paddingRight: 10,
  },
  statusText: {
    color: 'white',
    fontWeight: 'bold',
  },
  notesContainer: {
    marginBottom: 10,
  },
  notesText: {
    marginLeft: 10,
    fontWeight: '600',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    alignSelf: 'flex-start',
  },
  email: {
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 30,
    borderRadius: 5,
    backgroundColor: Colors.darkBlue,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  sectionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  dropdown: {
    flexDirection: 'row',
  },
  date: {
    alignSelf: 'flex-end',
  },
  currentStatus: {
    alignSelf: 'flex-end',
    marginBottom: 4,
  },
});
