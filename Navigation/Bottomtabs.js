
import {StyleSheet, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/HomeScreen';
import Message from '../Screens/Message';
import Orders from '../Screens/Orders';
import EWallet from '../Screens/EWallet';
import Profile from '../Screens/ProfileScreen';
import { AntDesign } from '@expo/vector-icons';


const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.label,
        tabBarStyle: [
          styles.tabContainer,
          Platform.OS === 'ios' && {
            shadowOffset: { height: -2, width: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 15,
          },
        ],
        tabBarItemStyle: {
          marginBottom: 7,
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#03C04A',
      }}
      safeAreaInsets={{
        bottom: 0,
      }}
    >
      <BottomTabNavigator.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={20}
              color={focused ? '#03C04A' : 'gray'}
            />
          ),
          headerShown: false
        }}
      />
      <BottomTabNavigator.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="message1"
              size={20}
              color={focused ? '#03C04A' : 'gray'}
            />
          ),
          headerShown: false
        }}
        name="Message"
        component={Message}
      />
      <BottomTabNavigator.Screen
        name="settings"
        component={Orders}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="setting"
              size={20}
              color={focused ? '#03C04A' : 'gray'}
            />
          ),
          headerShown: false
        }}
      />
      <BottomTabNavigator.Screen
        name="E-Wallet"
        component={EWallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="wallet"
              size={20}
              color={focused ? '#03C04A' : 'gray'}
            />
          ),
          headerShown: false
        }}
      />
      <BottomTabNavigator.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="user"
              size={20}
              color={focused ? '#03C04A' : 'gray'}
            />
          ),
          headerShown: false
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    width: '90%',
    borderRadius: 12,
    left: '5%',
    bottom: 10,
    backgroundColor: 'white',
    height: 60,
    padding:5
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 12,
  },
});
