import React,{useState} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


export default function DeliveryLocation(){
  return(
    <>
    <View style={styles.profileSection}>
        <Image source={require('../assets/Images/girl.jpg')} style={styles.profileImg}/>
        <View style={styles.profileText}>
          <Text style={styles.firstText}> Deliver to</Text>
          <Text style={styles.secondText}> 
          Accra Mall
          </Text>
        </View>
        <View style={styles.profileicon}>
          <MaterialCommunityIcons name="bell-badge-outline" size={24} color="black" style={{marginRight: 14}}/>
          <SimpleLineIcons name="handbag" size={22} color="black" />
        </View>
      </View>

      <View style={styles.searchBar}>
        <TextInput 
          placeholder='What are you craving'
          placeholderTextColor ={'gray'}
          style={styles.input}
        />
      </View>
     </> 
  );
}


const styles = StyleSheet.create({
  profileSection:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 20
  },
  profileImg:{
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10
  },
  profileText:{
    color: 'black',
    flexDirection: 'column'
  },
  firstText:{
    marginBottom: 5,
    fontSize: 12,
    color: 'gray'
  },
  secondText:{
    fontWeight: 800,
  },
  profileicon:{
    flexDirection: 'row',
    right: -100
  },
  searchBar:{
    marginTop: 10,
    backgroundColor: '#E8E9EB',
    borderRadius: 10,
    marginRight: 30
  },
  input:{
    padding: 10, 
    fontSize: 13, 
  }
})