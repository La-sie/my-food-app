import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FoodDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Images/fruitsalad.jpg')}
          style={styles.foodImage}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.rightIcons}>
            <TouchableOpacity style={styles.icon}>
              <Icon name="heart-outline" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Icon name="share-social-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.foodName}>Big Garden Salad</Text>
        <View style={styles.infoRow}>
          <Icon name="star" size={20} color="#FFA500" />
          <Text style={styles.infoText}>4.8 (4.8k reviews)</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="location-outline" size={20} color="#000" />
          <Text style={styles.infoText}>2.4 km</Text>
          <Icon name="bicycle-outline" size={20} color="#000" style={styles.iconSpacing} />
          <Text style={styles.infoText}>$2.00</Text>
        </View>
        <TouchableOpacity style={styles.offerButton}>
          <Icon name="pricetag-outline" size={20} color="#000" />
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
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 8,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContainer: {
    padding: 16,
  },
  foodName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 4,
    color: '#666',
  },
  iconSpacing: {
    marginLeft: 16,
  },
  offerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  offerText: {
    fontSize: 16,
    marginLeft: 4,
    color: '#000',
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
