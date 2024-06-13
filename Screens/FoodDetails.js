import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';


const FoodDetailsScreen = () => {
  const navigation = useNavigation();
  const PrevButton = () => {
  navigation.navigate('Home');
  }
  return (
    <>
    <StatusBar/>
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Images/fruitsalad.jpg')}
          style={styles.foodImage}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={PrevButton}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.rightIcons}>
            <TouchableOpacity>
              <Icon name="heart-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="share-social-outline" size={24} color="#fff" style={{marginLeft: 5}}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.foodName}>Big Garden Salad</Text>
        <View style={styles.Row}>
          <Icon name="star" size={18} color="#FFA500" style={{marginRight: 5}}/>
          <Text style={styles.infoText}>4.8 <Text style={{fontSize: 12, color: '#666'}}>(4.8k reviews)</Text></Text>
        </View>
        <View style={styles.infoRow}>
         <View style={styles.downRow}>
          <Icon name="location" size={18} color="#03C04A" style={{marginRight: 5}}/>
          <Text style={styles.infoText}>2.4 km</Text>
         </View>
          <View style={{flexDirection:'row', }}>
            <Text style={{fontSize: 12}}>Delivery Now | </Text>
            <Icon name="bicycle" size={14} color="#03C04A" style={styles.iconSpacing} />
            <Text style={{fontSize: 12}}> $2.00</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.offerButton}>
          <Icon name="pricetag" size={20} color="#03C04A" style={{marginRight: 5}}/>
          <Text style={styles.offerText}>Offers are available</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>For You</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {forYouItems.map((item, index) => (
            <View key={index} style={styles.horizontalCard}>
              <Image source={item.image} style={styles.horizontalImage} />
              <Text style={styles.cardText}>{item.name}</Text>
              <Text style={styles.cardPrice}>${item.price}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Menu</Text>
        {menuItems.map((item, index) => (
          <View key={index} style={styles.menuItem}>
            <Image source={item.image} style={styles.menuImage} />
            <View style={styles.menuInfo}>
              <Text style={styles.menuName}>{item.name}</Text>
              <Text style={styles.menuPrice}>${item.price}</Text>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Drink</Text>
        {drinkItems.map((item, index) => (
          <View key={index} style={styles.menuItem}>
            <Image source={item.image} style={styles.menuImage} />
            <View style={styles.menuInfo}>
              <Text style={styles.menuName}>{item.name}</Text>
              <Text style={styles.menuPrice}>${item.price}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
    </>
  );
};

const forYouItems = [
  { name: 'Mixed Vegetable Salad', price: '12.00', image: require('../assets/Images/fruitsalad.jpg') },
  { name: 'Fruit & Spice Salad', price: '10.00', image: require('../assets/Images/fruitsalad.jpg') },
];

const menuItems = [
  { name: 'Special Bound Salad', price: '10.50', image: require('../assets/Images/fruitsalad.jpg') },
  { name: 'Special Pasta Salad', price: '8.00', image: require('../assets/Images/fruitsalad.jpg') },
  { name: 'Mixed Caesar Salad', price: '9.50', image: require('../assets/Images/fruitsalad.jpg') },
];

const drinkItems = [
  { name: 'Fresh Avocado Juice', price: '4.00', image: require('../assets/Images/fruitsalad.jpg') },
  { name: 'Fresh Orange Juice', price: '3.00', image: require('../assets/Images/fruitsalad.jpg') },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop: 25,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 10
  },
  foodImage: {
    width: '100%',
    height: 250,
  },
  iconContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContainer: {
    padding: 16,
  },
  foodName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6'
  },
  Row:{
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    padding: 8
  },
  downRow:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },
  infoText: {
    fontSize: 16,
    marginLeft: 4,
    color: '#000',
    fontWeight: 'bold'
  },
  iconSpacing: {
    marginLeft: 4,
  },
  offerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    padding: 4
  },
  offerText: {
    fontSize: 16,
    marginLeft: 4,
    color: '#000',
    fontWeight: 'bold'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  horizontalScroll: {
    marginBottom: 16,
  },
  horizontalCard: {
    width: 150,
    marginRight: 16,
  },
  horizontalImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  menuImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  menuInfo: {
    flex: 1,
  },
  menuName: {
    fontSize: 16,
    marginBottom: 4,
  },
  menuPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FoodDetailsScreen;
