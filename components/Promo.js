import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const data = [
  {
    key: 'Garden Salad',
    image: require('../assets/Images/salad.png'),
    distance: '1.5 km',
    rating: '4.8 (1.2k)',
    price: '$6.00',
    delivery: '$2.00',
  },
  {
    key: 'Noodles',
    image: require('../assets/Images/noodles.png'),
    distance: '1.7 km',
    rating: '4.7 (900)',
    price: '$5.50',
    delivery: '$2.00',
  },
  {
    key: 'Cheese Burger',
    image: require('../assets/Images/Burger.png'),
    distance: '1.7 km',
    rating: '4.7 (900)',
    price: '$5.50',
    delivery: '$2.00',
  },
  {
    key: 'Roasted Chicken',
    image: require('../assets/Images/chicken.png'),
    distance: '1.7 km',
    rating: '4.7 (900)',
    price: '$5.50',
    delivery: '$2.00',
  },
  {
    key: 'Ham Sandwich',
    image: require('../assets/Images/sandwich.png'),
    distance: '1.7 km',
    rating: '4.7 (900)',
    price: '$5.50',
    delivery: '$2.00',
  },
];

const PromoScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.promoBadge}>
        <Text style={styles.promoText}>PROMO</Text>
      </View>
      <Text style={styles.title}>{item.key}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{item.distance} <Text> | </Text></Text>
        <MaterialIcons name="star" size={16} color="orange" />
        <Text style={styles.infoText}>{item.rating}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{item.price}<Text> | </Text></Text>
        <Ionicons name="bicycle-outline" size={14} color="green" />
        <Text style={styles.delivery}>{item.delivery}</Text>
        <Ionicons name="heart-outline" size={25} color="red" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.promotxt}>
        <Text style={styles.header}>Discount Guaranteed! <Ionicons name="thumbs-up" size={18} color="orange" /></Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        horizontal
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
      />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingRight: 20,
  },
  promotxt: {
    flexDirection: 'row',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 75
  },
  seeAll: {
    fontSize: 15, 
    fontWeight: 800,
    color: '#03C04A'
  },
  listContainer: {
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 17,
    width: 200,
    elevation: 2,
    marginRight: 15
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 25,
  },
  promoBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  promoText: {
    color: '#fff',
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 12,
    marginHorizontal: 5,
    margin: 5
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginRight: 10
  },
  delivery: {
    fontSize: 12,
    marginLeft: 5,
    marginRight: 45
  },
});

export default PromoScreen;
