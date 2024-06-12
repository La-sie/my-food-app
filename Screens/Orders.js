import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header2 from '../components/Header2';

const Tab = createMaterialTopTabNavigator();

const OrdersScreen = () => {
  return (
    <>
    <Header2/>
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: 'green' },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Active" component={ActiveOrders} />
      <Tab.Screen name="Completed" component={CompletedOrders} />
      <Tab.Screen name="Cancelled" component={CancelledOrders} />
    </Tab.Navigator>
    </>
  );
};

const ActiveOrders = () => {
  return (
    <View style={styles.container}>
     <View style={styles.img}>
       <Image
        source={require('../assets/Images/emptyorders.png')}
        style={styles.image}
      />
     </View>
      <Text style={styles.emptyText}>Empty</Text>
      <Text style={styles.descriptionText}>You do not have an active order at this time</Text>
    </View>
  );
};

const CompletedOrders = () => {
  return (
  <View style={styles.container}>
    <View style={styles.img}>
    <Image
        source={require('../assets/Images/emptyorders.png')}
        style={styles.image}
      />
  </View>
      <Text style={styles.emptyText}>Empty</Text>
       <Text style={styles.descriptionText}>You do not have a completed order at this time</Text>
  </View>
  );
}

const CancelledOrders = () => {
  return (
  <View style={styles.container}>
  <View style={styles.img}>
    <Image
        source={require('../assets/Images/emptyorders.png')}
        style={styles.image}
      />
  </View>
      <Text style={styles.emptyText}>Empty</Text>
       <Text style={styles.descriptionText}>You do not have a cancelled order at this time</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginTop: 25
  },
  img:{
    width: 200,
    height: 200,
    borderRadius: 150,
    backgroundColor: '#03C04A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    width: 100,
    height: 100,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});

export default OrdersScreen;
