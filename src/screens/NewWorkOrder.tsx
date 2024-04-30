import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInput} from 'react-native-paper';
import {Dropdown} from '../components/dropdown/Dropdown';
import {DatePickerInput} from 'react-native-paper-dates';
import {Colors} from '../constants/colors';
import {useForm, Controller, SubmitHandler, FieldValues} from 'react-hook-form';
import {Error} from '../components/error/Error';
import workOrderStore from '../mobx/store';
import {WorkOrder} from '../types/WorkOrder';
import {generateRandomWorkOrderId} from '../util/random';
import {Banner} from 'react-native-paper'; // replace this with snackbar
import {NavigationProp, ParamListBase, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const NewWorkOrder = () => {
  const [inputDate, setInputDate] = useState<Date | undefined>(new Date());
  const [bannerVisible, setBannerVisible] = useState(false);
  const {addWorkOrder} = workOrderStore;
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const workOrderData: WorkOrder = {
      id: generateRandomWorkOrderId(),
      generatedDate: new Date().toISOString().substring(0, 10),
      status: 'Open',
      priority: data.priority,
      description: data.description,
      type: 'CM',
      resource: data.resourceName,
      category: data.workOrderCategory,
      subtype: data.workOrderSubtype,
      notes: data.notes,
    };
    addWorkOrder(workOrderData);
    
    storeWorkOrderToStorage(workOrderData);

    reset();

    navigation.navigate('WorkOrderDetails',  {workOrder: workOrderData}) ;
  };
  
  const storeWorkOrderToStorage = async (workOrderData: WorkOrder) => {
    try {
      const storedWorkOrders = await AsyncStorage.getItem('workOrders');
      let workOrders: WorkOrder[] = [];
      if (storedWorkOrders) {
        workOrders = JSON.parse(storedWorkOrders);
      }
      workOrders.push(workOrderData);
      await AsyncStorage.setItem('workOrders', JSON.stringify(workOrders));
      return true;
    } catch (error) {
      console.error('Error storing work order to async storage:', error);
      return false;
    }
  };

  const workOrderTypeData = {
    options: [
      {label: 'CM -- Corrective Maintenance', value: 'Item 1'},
      {label: 'PM -- Preventive Maintenance', value: 'Item 2'},
    ],
    selected: '1',
  };

  const cancelHandler = () => {
    reset();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Banner
          visible={bannerVisible}
          actions={[
            {
              label: 'Close',
              onPress: () => setBannerVisible(false),
            },
          ]}
          theme={{colors: {onSurface: Colors.white, primary: Colors.white}}}
          style={{backgroundColor: Colors.green}}>
          Work Order was created successfully
        </Banner>

        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <>
              <TextInput
                label={'Description*'}
                value={value}
                onChangeText={onChange}
                mode="outlined"
                outlineColor={
                  errors?.description?.message ? Colors.red : Colors.lightGray
                }
                style={{marginVertical: 20}}
              />
              <Error errorMessage={errors?.description?.message} />
            </>
          )}
          name="description"
          rules={{required: 'Description is not allowed to be empty'}}
          defaultValue=""
        />
        <View style={{marginVertical: 10}}>
          <Dropdown
            data={workOrderTypeData}
            placeholder="Work Order Type*"
            label="Work Order Type"
            disabled={true}
            value="Item 1"
          />
        </View>

        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <View style={{marginVertical: 20}}>
              <Dropdown
                placeholder="Work Order Sub-Type*"
                value={value}
                onValueChange={onChange}
              />
              <Error errorMessage={errors?.workOrderSubtype?.message} />
            </View>
          )}
          name="workOrderSubtype"
          rules={{required: 'Work Order Sub-type is required'}}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <View style={{marginVertical: 10}}>
              <Dropdown
                placeholder="Work Order Category*"
                value={value}
                onValueChange={onChange}
              />
              <Error errorMessage={errors?.workOrderCategory?.message} />
            </View>
          )}
          name="workOrderCategory"
          rules={{required: 'Work Order Category is required'}}
          defaultValue=""
        />

        <View style={[styles.rowContainer, {marginVertical: 20} ]}>
          <View style={styles.dropdownContainer}>
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <>
                  <Dropdown
                    placeholder="Priority"
                    value={value}
                    onValueChange={onChange}
                  />
                </>
              )}
              name="priority"
              rules={{required: 'Priority is required'}}
              defaultValue=""
            />
          </View>

          <View style={styles.datePickerContainer}>
            <DatePickerInput
              locale="en"
              label="Target Due Date"
              value={inputDate}
              onChange={d => setInputDate(d)}
              inputMode="start"
              mode="outlined"
              disabled={true}
            />
          </View>
        </View>

        <Error errorMessage={errors?.priority?.message} />

        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <View style={{marginVertical: 20}}>
              <Dropdown
                placeholder="Resource Name"
                value={value}
                onValueChange={onChange}
              />
              <Error errorMessage={errors?.resourceName?.message} />
            </View>
          )}
          name="resourceName"
          rules={{required: 'Resource Name is required'}}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              label="Notes"
              value={value}
              onChangeText={onChange}
              mode="outlined"
              multiline={true}
              numberOfLines={10}
              outlineStyle={{borderColor: Colors.lightGray}}
              style={{marginVertical: 20}}
            />
          )}
          name="notes"
          defaultValue=""
        />
        <View style={[styles.saveCancelBtn, styles.rowContainer]}>
          <TouchableOpacity style={styles.cancel} onPress={cancelHandler}>
            <Text style={{color: Colors.darkBlue}}>CANCEL</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.save}
            onPress={handleSubmit(onSubmit)}>
            <Text style={{color: Colors.white}}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  dropdownContainer: {
    flex: 1,
    marginRight: 4,
  },
  datePickerContainer: {
    flex: 1,
    marginLeft: 4,
  },
  saveCancelBtn: {
    height: 50,
    marginTop: 20,
  },
  cancel: {
    flex: 1,
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: Colors.darkBlue,
    borderWidth: 1,
  },
  save: {
    flex: 1,
    marginLeft: 4,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkBlue,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
