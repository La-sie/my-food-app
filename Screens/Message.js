import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';




const Tab = createMaterialTopTabNavigator();

export default function Message(){
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: 'green' },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
}

const Chat = () => {
  const messageData = [
  {
    id: '1',
    image: require('../assets/Images/girl.jpg'),
    name: "Jessica Doe",
    textMessage: 'Great, I will arrive soon',
    time: 'Now'
  },
  {
    id: '2',
    image: require('../assets/Images/girl.jpg'),
    name: "Jessica Doe",
    textMessage: 'Great, I will arrive soon',
    time: '03 : 21'
  },
  {
    id: '3',
    image: require('../assets/Images/girl.jpg'),
    name: "Jessica Doe",
    textMessage: 'Great, I will arrive soon',
    time: '11 : 01'
  },
  {
    id: '4',
    image: require('../assets/Images/girl.jpg'),
    name: "Jessica Doe",
    textMessage: 'Great, I will arrive soon',
    time: '09 : 00'
  },
  {
    id: '5',
    image: require('../assets/Images/girl.jpg'),
    name: "Jessica Doe",
    textMessage: 'Great, I will arrive soon',
    time: 'Yesterday'
  },
  {
    id: '6',
    image: require('../assets/Images/girl.jpg'),
    name: "Jessica Doe",
    textMessage: 'Great, I will arrive soon',
    time: 'Yesterday'
  },
  {
    id: '7',
    image: require('../assets/Images/girl.jpg'),
    name: "Jessica Doe",
    textMessage: 'Great, I will arrive soon',
    time: '19/07/2023'
  },
  {
    id: '8',
    image: require('../assets/Images/girl.jpg'),
    name: "Jessica Doe",
    textMessage: 'Great, I will arrive soon',
    time: '18/07/2023'
  },
  {
    id: '9',
    image: require('../assets/Images/girl.jpg'),
    name: "Jessica Doe",
    textMessage: 'Great, I will arrive soon',
    time: '15/06/2023'
  },
  {
    id: '10',
    image: require('../assets/Images/girl.jpg'),
    name: "Jessica Doe",
    textMessage: 'Great, I will arrive soon',
    time: '16/04/2023'
  },
  {
    id: '11',
    image: require('../assets/Images/girl.jpg'),
    name: "Jessica Doe",
    textMessage: 'Great, I will arrive soon',
    time: '12/02/2023'
  },
]
  const renderItem = ({item}) => (
    <View style={styles.card}>
     <View style={styles.imgRing}>
        <Image source={item.image} style={styles.img}/>
     </View>
    <View style={styles.txt}>
     <Text style={styles.txtname}>{item.name}</Text>
     <Text style={styles.textMessage}>{item.textMessage}</Text>
    </View>
    <View style={styles.txttime}>
      <Text style={styles.time}>{item.time}</Text>
    </View>
    </View>
  )
  return(
    <ScrollView 
    styles={styles.container}
    showsVerticalScrollIndicator={false}
    >
      <FlatList
      data={messageData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
      />

    </ScrollView>
  );
}

const Calls = () => {
  return(
    <View style={styles.container}>
      <View style={styles.phoneRing}>
        <Ionicons name="call" size={80} color="#03C04A" />
      </View> 
        <Text> No calls yet</Text> 
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 30,
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  card:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    marginBottom: 6,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  listContainer: {
    paddingBottom: 5,
  },
  imgRing:{
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#03C04A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  img:{
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  txt:{
    justifyContent: 'center'
  },
  txtname:{
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 6
  },
  textMessage:{
    fontSize: 12,
    fontWeight: 300,
    color: 'gray'
  },
  txttime:{
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 55,
    marginTop: 10
  },
  time:{
    fontWeight: 500,
    fontSize: 10,
    marginRight: 10,
    marginLeft: 10
  },
  phoneRing:{
    height: 200,
    width: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#03C04A',
    marginBottom: 15
  }
})