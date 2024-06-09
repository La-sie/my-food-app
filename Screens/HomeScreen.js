import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import DeliveryLocation from '../components/DeliveryLocation';
import SpecialOffer from '../components/SpecialOffer';
import Category from '../components/Category';
import PromoScreen from '../components/Promo';
import FilterScreen from '../components/Recommended';
import FoodListScreen from '../components/FoodList';
import {useNavigation} from '@react-navigation/native';

  export default function Home(){
      const navigation = useNavigation();
      const NextPage = () => {
      navigation.navigate('RecommendedScreen');
       }
      return(
        <View 
          style={styles.container}>
          <StatusBar/>
          <ScrollView
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{paddingBottom: 50}}
          >
            <DeliveryLocation/>
            <SpecialOffer/> 
            <Category/>  
            <PromoScreen/>
            <View style={styles.headerContainer}>
            <Text style={styles.header}>Recommended For You <Ionicons name="heart" size={22} color="orange" /></Text>
              <TouchableOpacity onPress={NextPage}> 
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
           </View>
            <FilterScreen/>
            <FoodListScreen/>
                
          </ScrollView>
        </View>
    );
  }

    const styles = StyleSheet.create({
        container:{
          flex: 1,
          paddingTop: 30,
          paddingLeft: 20,
          backgroundColor: '#F5F5F5'
        },
        headerContainer: {
          flexDirection: 'row',
          textAlign: 'center',
          alignItems: 'center',
        },
        header: {
          fontSize: 17,
          fontWeight: 'bold',
        },
        seeAll: {
          color: '#03C04A',
          fontSize: 17,
          marginLeft: 70,
          fontWeight: 600
        },
    })