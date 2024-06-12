import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../components/Logo';
import {StatusBar} from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';


const ProfileScreen = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
    <StatusBar/>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 15, marginBottom: 15}}>
        <Logo/>
        <Text style={{marginLeft: 15, fontWeight: 'bold', fontSize: 19, marginRight: 160}}>Profile</Text>
        <Feather name="more-horizontal" size={24} color="black" />
      </View>
      <View style={styles.profileHeader}>
        <Image
          source={require('../assets/Images/girl.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Andrew Ainsley</Text>
          <Text style={styles.profilePhone}>+1 111 467 378 399</Text>
        </View>
        <TouchableOpacity style={styles.editIcon}>
          <Icon name="pencil" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Icon name={item.icon} size={24} color="#000" />
            </View>
            <Text style={styles.menuText}>{item.text}</Text>
            {item.switch ? (
              <Switch
                value={darkMode}
                onValueChange={(value) => setDarkMode(value)}
              />
            ) : (
              <Icon name="chevron-forward" size={20} color="#ccc" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Icon name="log-out-outline" size={24} color="red" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const menuItems = [
  { text: 'My Favorite Restaurants', icon: 'restaurant-outline' },
  { text: 'Special Offers & Promo', icon: 'pricetags-outline' },
  { text: 'Payment Methods', icon: 'card-outline' },
  { text: 'Profile', icon: 'person-outline' },
  { text: 'Address', icon: 'location-outline' },
  { text: 'Notification', icon: 'notifications-outline' },
  { text: 'Security', icon: 'shield-outline' },
  { text: 'Language', icon: 'language-outline', additionalText: 'English (US)' },
  { text: 'Dark Mode', icon: 'moon-outline', switch: true },
  { text: 'Help Center', icon: 'help-circle-outline' },
  { text: 'Invite Friends', icon: 'people-outline' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F5F5F5',
    marginBottom: 5
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profilePhone: {
    fontSize: 14,
    color: '#666',
  },
  editIcon: {
    padding: 8,
  },
  menuContainer: {
    marginTop: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  menuIcon: {
    width: 30,
    alignItems: 'center',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
  },
  logoutText: {
    fontSize: 16,
    color: 'red',
    marginLeft: 8,
  },
});

export default ProfileScreen;
