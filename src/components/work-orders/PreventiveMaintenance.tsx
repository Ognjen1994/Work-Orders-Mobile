import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import {Colors} from '../../constants/colors';

type PreventativeMaintenanceProps = {
    scheduleId: string,
    scheduleName: string,
    frequency: string
}

const PreventativeMaintenance = ({
  scheduleId,
  scheduleName,
  frequency,
}: PreventativeMaintenanceProps) => {
  return (
    <Card style={styles.card}>
      <Card.Content style={{marginHorizontal: -10, marginVertical: -16}}>
        <View style={styles.scheduleContainer}>
          <View style={styles.row}>
            <Text style={styles.scheduleTitle}>Schedule</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Schedule id:</Text>
            <Text style={styles.value}>{scheduleId}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Schedule name:</Text>
            <Text style={styles.value}>{scheduleName}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Frequency:</Text>
            <Text style={styles.value}>{frequency}</Text>
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
  scheduleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  scheduleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});

export default PreventativeMaintenance;
