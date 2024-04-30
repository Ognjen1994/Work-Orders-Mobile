import WorkOrderCard from '../components/work-orders/WorkOrderCard';
import {
  View,
  SafeAreaView,
  SectionList,
  ActivityIndicator,
  Text,
} from 'react-native';
import {Colors} from '../constants/colors';
import workOrderStore from '../mobx/store';
import { observer } from 'mobx-react';
import { createStackNavigator } from '@react-navigation/stack';
import { WorkOrderDetails } from '../components/work-orders/WorkOrderDetails';
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';
import { WorkOrder } from '../types/WorkOrder';

type WorkOrderDetailsRouteParams = {
  workOrder: {
    id: string;
  };
};

type RenderItemParams = {
  item: WorkOrder
}

 const WorkOrdersScreen = observer(() => {
  const { displayedWorkOrders, isLoading, loadMoreWorkOrders } = workOrderStore;
  const navigation: NavigationProp<ParamListBase> = useNavigation();


  const renderItem = ({item}: RenderItemParams) => {
    return (
    <WorkOrderCard
      id={item.id}
      generatedDate={item.generatedDate}
      status={item.status}
      priority={item.priority}
      description={item.description}
      type={item.type}
      resource={item.resource}
      open={item.open}
      completed={item.completed}
      canceled={item.canceled}
      onHold={item.onHold}
      handlePress={() => navigation.navigate('WorkOrderDetails', { workOrder: item })}
    />
  )};

  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      <View style={{paddingVertical: 20}}>
        <ActivityIndicator size="large" color={Colors.darkBlue} />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
        <Text style={{color: Colors.darkBlue, fontSize: 16}}>Total Work Orders: {displayedWorkOrders.length}</Text>
      </View>
      <SectionList
        sections={[{data: displayedWorkOrders}]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={loadMoreWorkOrders}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
});

const Stack = createStackNavigator();

export const WorkOrders = () => {
  return (
    <Stack.Navigator initialRouteName="WorkOrderList" screenOptions={{
      headerTitleStyle: {color: Colors.darkBlue}
    }}>
      <Stack.Screen
        name="WorkOrderList"
        component={WorkOrdersScreen}
        options={{ title: 'Work Orders' }}
      />
      <Stack.Screen
        name="WorkOrderDetails"
        component={WorkOrderDetails}
        options={({ route }) => ({ title: `WO: ${(route.params as WorkOrderDetailsRouteParams).workOrder.id}` })}
      />
    </Stack.Navigator>
  );
};
