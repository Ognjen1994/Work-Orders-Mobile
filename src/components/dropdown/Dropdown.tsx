import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown as DropdownElement} from 'react-native-element-dropdown';
import {Colors} from '../../constants/colors';

type DropdownProps = {
  data?: any
  value?: any
  placeholder?: string
  label?: string
  disabled?: boolean;
  onValueChange?: any
};

const mockData = [
  {label: 'Item 1', value: 'Item 1'},
  {label: 'Item 2', value: 'Item 2'},
  {label: 'Item 3', value: 'Item 3'},
  {label: 'Item 4', value: 'Item 4'},
  {label: 'Item 5', value: 'Item 5'},
  {label: 'Item 6', value: 'Item 6'},
  {label: 'Item 7', value: 'Item 7'},
  {label: 'Item 8', value: 'Item 8'},
];

export const Dropdown = ({data, value, placeholder, label, disabled = false, onValueChange}: DropdownProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = (disabled: boolean) => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}, disabled && {opacity: 0.6}]}>
          {label}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {label && renderLabel(disabled)}
      <DropdownElement
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}, disabled && {opacity: 0.6}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data? data.options: mockData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          onValueChange(item.value); 
          setIsFocus(false);
        }}
        disable={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  dropdown: {
    height: 50,
    borderColor: Colors.gray,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    borderStyle: 'dashed',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: Colors.white,
    left: 22,
    top: -8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

