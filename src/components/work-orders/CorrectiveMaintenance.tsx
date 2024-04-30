import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import { Colors } from '../../constants/colors';

type CorrectiveMaintenanceProps = {
    name: string
    email: string
    number: string
}

const CorrectiveMaintenance = ({name, email, number}: CorrectiveMaintenanceProps) => {
  return (
    <Card style={styles.card}>
      <Card.Content style={{marginHorizontal: -10, marginVertical: -16}}>
        <View style={styles.sectionContainer}>
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Requestor</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{name}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{email}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Phone Number:</Text>
            <Text style={styles.value}>{number}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
    card: {
      marginVertical: 6,
      marginHorizontal: 10,
      borderRadius: 5,
      backgroundColor: Colors.white,
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
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    sectionContainer: {
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
  });

export default CorrectiveMaintenance;
