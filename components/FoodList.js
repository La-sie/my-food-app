import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity , ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const foodData = [
  {
    key: '1',
    title: 'Vegetarian Noodles',
    distance: '800 m',
    rating: '4.9',
    reviews: '2.3k',
    image: require('../assets/Images/vegetablenoodles.jpg'),
  },
  {
    key: '2',
    title: 'Pizza Hut - Lumintu',
    distance: '1.2 km',
    rating: '4.5',
    reviews: '1.9k',
    image: require('../assets/Images/fruitsalad.jpg'),
  },
  {
    key: '3',
    title: 'Mozarella Cheese Burger',
    distance: '1.6 km',
    rating: '4.6',
    reviews: '1.5k',
    image: require('../assets/Images/fruitsalad.jpg'),
  },
  {
    key: '4',
    title: 'Fruit Salad - Kumpa',
    distance: '1.4 km',
    rating: '4.7',
    reviews: '1.7k',
    image: require('../assets/Images/fruitsalad.jpg'),
  },
  {
    key: '5',
    title: 'Vegetarian Noodles',
    distance: '800 m',
    rating: '4.9',
    reviews: '2.3k',
    image: require('../assets/Images/vegetablenoodles.jpg'),
  },
  {
    key: '6',
    title: 'Pizza Hut - Lumintu',
    distance: '1.2 km',
    rating: '4.5',
    reviews: '1.9k',
    image: require('../assets/Images/fruitsalad.jpg'),
  },
  {
    key: '7',
    title: 'Mozarella Cheese Burger',
    distance: '1.6 km',
    rating: '4.6',
    reviews: '1.5k',
    image: require('../assets/Images/fruitsalad.jpg'),
  },
];

export default FoodListScreen = () => {
    const navigation = useNavigation();
    const NextPage = () => {
    navigation.navigate('FoodDetailsScreen');
    }
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={NextPage}>
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.details}>{item.distance} | <Ionicons name="star" size={16} color="orange" /> {item.rating} ({item.reviews})</Text>
        <View style={styles.priceContainer}>
          <Ionicons name="bicycle" size={16} color="green" />
          <Text style={styles.deliveryFee}>$2.00</Text>
          <Ionicons name="heart" size={20} color="red" style={styles.favoriteIcon} />
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <FlatList
        data={foodData}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.listContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    marginRight: 15,
  },
  listContainer: {
    paddingBottom: 5,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryFee: {
    marginLeft: 4,
    fontSize: 11,
    color: '#666',
  },
  favoriteIcon: {
    marginLeft: 'auto',
  },
});
