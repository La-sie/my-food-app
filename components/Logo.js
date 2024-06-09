import React from 'react';
import {View, Image, StyleSheet } from 'react-native';

export default function Logo(){
  return(
      <View style={styles.img}>
      <Image 
          source = {require('../assets/Images/Chef.png')}
          style = {{height: 40, width: 40}}/>
      </View>
  )
}




const styles = StyleSheet.create({
  img:{
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})