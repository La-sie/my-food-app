import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import OnboardingScreen from './OnboardingScreen';
import {StatusBar} from 'expo-status-bar';


export default function Splashscreen(){
  const navigation = useNavigation();

    useEffect(()=>{
     setTimeout(()=> navigation.navigate('OnboardingScreen'), 2500), []
    })

  return(
    <View style={styles.container}>
    <StatusBar/>
      <View style = {styles.img}>
        <Image 
          source = {require('../assets/Images/Chef.png')}
          style = {{height: 120, width: 120}}/>
      </View>    
        <Text style={styles.foodText}>
          Meal4U
        </Text>
    </View>
  );
}




const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#03C04A',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins'
  },
  img:{
    height: 150,
    width: 150,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  foodText:{
    color: "#fff",
    fontSize: 21,
    fontWeight: 600,
    marginTop: 15,
    fontFamily:  'Poppins'
  },
})