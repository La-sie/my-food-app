import { Text, Image, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Home from './HomeScreen';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';


const {width, height} = Dimensions.get('window');

export default function OnboardingScreen(){
const navigation = useNavigation();
const handleDone = () => {
  navigation.navigate('Home');
}
const doneButton = ({...props}) => {
  return(
    <TouchableOpacity style = {styles.doneButton} {...props}>
      <Text>Done</Text>
  </TouchableOpacity>
  )
}

  return(
    <View style={styles.container}>
    <StatusBar/>
      <Onboarding
        
    onDone={handleDone}
    onSkip={handleDone} 
    bottomBarHighlight = {false}
    DoneButtonComponent = {doneButton}       
    containerStyles={{paddingHorizontal: 15}}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
           <View style={styles.onboardingstyle}> 
            <Image source={require('../assets/Images/order.jpg')} style={styles.onImage} />
           </View>      
                 ),
          title: 'Order for Food',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          titleStyles:{color: '#03C04A', marginTop: 100 },
        },
        {
          backgroundColor: '#fff',
          image: (
           <View style={styles.onboardingstyle}> 
            <Image source={require('../assets/Images/payment.jpg')} style={styles.onImage} />
           </View>     
                ),
          title: 'Easy Payment',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          titleStyles:{color: '#03C04A', marginTop: 100 },
        },
        {
          backgroundColor: '#fff',
          image: (
           <View style={styles.onboardingstyle}> 
            <Image source={require('../assets/Images/delivery.jpg')} style={styles.onImage} />
           </View>
          ),
          title: 'Fast Delivery',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          titleStyles:{color: '#03C04A', marginTop: 100 },
        },
        ]}
    />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  onboardingstyle:{
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -180,
    height: width,
    width: width * .9,
  },
  onImage:{
    height: 280,
    width: 300,
  },
  doneButton:{
    backgroundColor: '#03C04A',
    padding: 15,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
 }
})