import {View, Text, StyleSheet, Image, FlatList, ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import Logo from '../components/Logo'
import { Feather } from '@expo/vector-icons'



export default function Ewallet(){
  const historyData = [
    {
      id: '1',
      image: require('../assets/Images/vegetablenoodles.jpg'),
      name: 'Big Garden Salad',
      price: '$ 20.00',
      date: 'Dec 16, 2024 | 4 : 42 PM',
      topUp: 'Top Up'
    },
    {
      id: '2',
      image: require('../assets/Images/vegetablenoodles.jpg'),
      name: 'Big Garden Salad',
      price: '$ 20.00',
      date: 'Dec 16, 2024 | 4 : 42 PM',
      topUp: 'Top Up'
    },
    {
      id: '3',
      image: require('../assets/Images/vegetablenoodles.jpg'),
      name: 'Big Garden Salad',
      price: '$ 20.00',
      date: 'Dec 16, 2024 | 4 : 42 PM',
      topUp: 'Top Up'
    },
    {
      id: '4',
      image: require('../assets/Images/vegetablenoodles.jpg'),
      name: 'Big Garden Salad',
      price: '$ 20.00',
      date: 'Dec 16, 2024 | 4 : 42 PM',
      topUp: 'Top Up'
    },
    {
      id: '5',
      image: require('../assets/Images/vegetablenoodles.jpg'),
      name: 'Big Garden Salad',
      price: '$ 20.00',
      date: 'Dec 16, 2024 | 4 : 42 PM',
      topUp: 'Top Up'
    },
    {
      id: '6',
      image: require('../assets/Images/vegetablenoodles.jpg'),
      name: 'Big Garden Salad',
      price: '$ 20.00',
      date: 'Dec 16, 2024 | 4 : 42 PM',
      topUp: 'Top Up'
    },
    {
      id: '7',
      image: require('../assets/Images/vegetablenoodles.jpg'),
      name: 'Big Garden Salad',
      price: '$ 20.00',
      date: 'Dec 16, 2024 | 4 : 42 PM',
      topUp: 'Top Up'
    },
  ]
  const renderItem = ({item}) =>(
    <View style={styles.historyCard}>
      <Image source={item.image}/>
      
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>

      <View>
      <Text> {item.date}</Text>
      <Text> {item.topUp}</Text>
      </View>
    
    </View>
  )
  return(
    <ScrollView style={styles.container}>
      <StatusBar/>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Logo/>
        <Text style={{marginLeft: 15, fontWeight: 'bold', fontSize: 19}}> E-Wallet</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.firstSection}>
          <View style={styles.name}> 
            <Text style={styles.name}> Andrew Ainsley</Text>
            <View style={styles.icon}>
              <Feather name="more-horizontal" size={24} color="white" />
              <Feather name="more-horizontal" size={24} color="white" />
              <Feather name="more-horizontal" size={24} color="white" />
              <Text style={{fontSize: 15, color: '#fff', fontWeight: 400}}> 4567 </Text>
            </View>  
          </View>
          <View style={styles.linkedCard}>
            <Image source = {require('../assets/Images/visa.png')} style={{ height: 43, width: 50, marginRight: 5}}/>
            <Image source = {require('../assets/Images/mastercard.png')} style={{ height: 43, width: 73}}/>
          </View>
        </View>
        <View style={styles.secondSection}>
          <View style={styles.balance}>
            <Text style={{fontSize: 13, color: '#fff'}}> Your balance </Text>
            <Text style={{fontSize: 45, color: '#fff', fontWeight: 'bold'}}>$9,000</Text>
          </View>
          <View style={styles.btn}>
          <Ionicons name="bag-add-outline" size={15} color="black" style={{marginRight: 3}}/>
          <Text> Top Up </Text>
          </View>
        </View>
      </View>

      <View>
        <View>
          <Text>Transaction History</Text>
          <Text> See All </Text>
        </View>
      
      <FlatList
       data={historyData}
       keyExtractor={item => item.id}
       renderItem={renderItem}
       contentContainerStyle={styles.listContainer}
      />
      </View>
    
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F5F5F5'
  },
  card:{
    backgroundColor: '#0F9D58',
    color: '#fff',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    padding: 15,
    marginTop: 25,
    marginBottom: 15
  },
  firstSection:{
    flexDirection: 'row',
    padding: 10,
    marginTop: 10
  },
  name:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 10
  },
  icon:{
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  linkedCard:{
    flexDirection: 'row',
    marginLeft: 40
  }, 
  secondSection:{
    flexDirection: 'row',
    padding: 10
  },
  balance: {
    marginRight: 60
  },
  btn:{
    width: 90,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
})