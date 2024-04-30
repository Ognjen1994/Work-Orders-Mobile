import React, {memo} from 'react';
import {View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {Card, Badge, Text, IconButton} from 'react-native-paper';
import {Colors} from '../../constants/colors';
import {Swipeable} from 'react-native-gesture-handler';
import {WorkOrder} from '../../types/WorkOrder';
import workOrderStore from '../../mobx/store';

const WorkOrderCard = ({
  id,
  generatedDate,
  status,
  priority,
  description,
  type,
  resource,
  open = false,
  completed = false,
  canceled = false,
  onHold = false,
  handlePress,
}: WorkOrder & { handlePress: () => void }) => {
  const { currentUser, assignWorkOrderToCurrentUser } = workOrderStore;

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<string | number>,
    dragX: Animated.AnimatedInterpolation<string | number>,
  ) => {
    const trans = dragX.interpolate({
      inputRange: [-200, 0],
      outputRange: [0, 200],
      extrapolate: 'clamp',
    });
    
    const handleAssignToMe = () => {      
      assignWorkOrderToCurrentUser(id)
    };
    
    
    return (
      <Animated.View
        style={[
          styles.leftActionContainer,
          {transform: [{translateX: trans}]},
        ]}>
        <TouchableOpacity style={styles.leftAction} onPress={handleAssignToMe}>
          <View style={styles.row}>
            <IconButton
              icon="account-box"
              iconColor={Colors.darkBlue}
              style={styles.icon}
              size={18}
            />
            <Text style={[styles.leftActionText, {color: Colors.darkBlue}]}>
              ASSIGN TO ME
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.leftAction}>
          <View style={styles.row}>
            <IconButton
              icon="plus"
              iconColor={Colors.darkBlue}
              style={styles.icon}
              size={18}
            />
            <Text style={[styles.leftActionText, {color: Colors.darkBlue}]}>
              ADD LABOR
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.leftAction, {backgroundColor: Colors.darkBlue}]}>
          <View style={[styles.row]}>
            <IconButton
              icon="pencil"
              iconColor={Colors.white}
              style={styles.icon}
              size={18}
            />
            <Text style={styles.leftActionText}>NEW COMMENT</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const renderLeftActions = (
    progress: Animated.AnimatedInterpolation<string | number>,
    dragX: Animated.AnimatedInterpolation<string | number>,
  ) => {
    const trans = dragX.interpolate({
      inputRange: [0, 200],
      outputRange: [-200, 0],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View
        style={[
          styles.rightActionContainer,
          {transform: [{translateX: trans}]},
        ]}>
        {open && (
          <TouchableOpacity
            style={[styles.rightAction, {backgroundColor: Colors.darkBlue}]}>
            <Text style={styles.rightActionText}>OPEN</Text>
          </TouchableOpacity>
        )}
        {completed && (
          <TouchableOpacity
            style={[styles.rightAction, {backgroundColor: Colors.green}]}>
            <Text style={styles.rightActionText}>COMPLETED</Text>
          </TouchableOpacity>
        )}
        {canceled && (
          <TouchableOpacity
            style={[styles.rightAction, {backgroundColor: Colors.darkOrange}]}>
            <Text style={styles.rightActionText}>CANCELED</Text>
          </TouchableOpacity>
        )}
        {onHold && (
          <TouchableOpacity
            style={[styles.rightAction, {backgroundColor: Colors.orange}]}>
            <Text style={styles.rightActionText}>ON HOLD</Text>
          </TouchableOpacity>
        )}
      </Animated.View>
    );
  };

  return (
    <Swipeable
      key={id}
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
      leftThreshold={30}
      rightThreshold={30}>
      <TouchableOpacity onPress={handlePress}>
        <Card style={styles.card}>
          <Card.Content style={{marginHorizontal: -10, marginVertical: -16}}>
            <View style={styles.row}>
              <View style={styles.leftSide}>
                <Text style={{color: Colors.lightBlue, marginRight: -10}}>
                  {id}
                </Text>
                <IconButton icon="new-box" size={26} />
              </View>
              <View style={styles.rightSide}>
                <IconButton icon="file" size={26} />
                <Text style={{fontWeight: '600', marginLeft: -10}}>
                  Generated{' '}
                  <Text style={{fontWeight: 'bold'}}>{generatedDate}</Text>
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.leftSide}>
                <View>
                  <Text>Status</Text>
                  <Badge
                    style={{
                      flex: 1,
                      paddingHorizontal: 10,
                      backgroundColor: Colors.darkBlue,
                      ...styles.badge,
                    }}
                    size={26}>
                    {status}
                  </Badge>
                </View>
              </View>
              <View style={styles.rightSide}>
                <View>
                  <Text>Priority</Text>
                  <Badge
                    style={{
                      flex: 1,
                      paddingHorizontal: 10,
                      backgroundColor: Colors.lightBlue,
                      ...styles.badge,
                    }}
                    size={26}>
                    {priority}
                  </Badge>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <View>
                <Text>Description</Text>
                <Text>{description}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.leftSide}>
                <Text style={{marginRight: 8}}>Type</Text>
                <Badge style={{backgroundColor: Colors.lightGray}} size={26}>
                  {type}
                </Badge>
              </View>
              <View style={styles.rightSide}>
                <Text style={{marginRight: 8}}>Resource</Text>
                <Badge style={{backgroundColor: Colors.gray}} size={26}>
                  {resource}
                </Badge>
              </View>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 4,
    borderColor: Colors.darkBlue,
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
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
  rightActionContainer: {
    width: 200,
    alignItems: 'stretch',
    backgroundColor: '#e5e5e5',
  },
  rightAction: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 5,
    borderRadius: 5,
  },
  rightActionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  leftActionContainer: {
    width: 200,
    alignItems: 'stretch',
  },
  leftAction: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 5,
    paddingTop: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.darkBlue,
  },
  leftActionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  icon: {
    margin: -3,
  },
});

export default memo(WorkOrderCard);
