import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const data = [
  { key: 'Burger', image: require('../assets/Images/Burger.png') },
  { key: 'Noodles', image: require('../assets/Images/noodles.png') },
  { key: 'Pizza', image: require('../assets/Images/pizzaslice.png') },
  { key: 'Salad', image: require('../assets/Images/salad.png') },
  { key: 'Icecream', image: require('../assets/Images/icecream.png') },
  { key: 'Soup', image: require('../assets/Images/soup.png') },
  { key: 'Taco', image: require('../assets/Images/taco.png') },
  { key: 'More', image: require('../assets/Images/sushi.png') },
];

const numColumns = 4;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / numColumns;

const Category = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.key}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  },
  itemContainer: {
    width: itemWidth,
    alignItems: 'center',
    marginVertical: 5,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10
  },
});

export default Category;
