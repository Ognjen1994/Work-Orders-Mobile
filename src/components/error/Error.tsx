import React from 'react';
import { StyleSheet, Text } from 'react-native';

type ErrorProps = {
    errorMessage: any
}


export const Error = ({ errorMessage }: ErrorProps) => {
    return (
      errorMessage && (
        <Text style={styles.errorText}>
          {errorMessage.toString()}
        </Text>
      )
    );
  }
  
  const styles = StyleSheet.create({
    errorText: {
        color: 'red',
      },
  })