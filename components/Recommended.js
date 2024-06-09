import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';



const data = [
  { key: 'All', icon: 'checkmark-circle-outline' },
  { key: 'Hamburger', image: require('../assets/Images/Burger.png') },
  { key: 'Sushi', image: require('../assets/Images/sushi.png') },
  { key: 'Coffee', image: require('../assets/Images/coffee.png') },
  { key: 'Nuggets', image: require('../assets/Images/nuggets.png') },
  { key: 'Sandwich', image: require('../assets/Images/sandwich.png') },
  { key: 'Soup', image: require('../assets/Images/soup.png') },
  { key: 'Bento', image: require('../assets/Images/bento.png') },
  { key: 'Icrecream', image: require('../assets/Images/icecream.png') },
  { key: 'Taco', image: require('../assets/Images/taco.png') },
];

const FilterScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.filterButton}>
      {item.icon ? (
        <Ionicons name={item.icon} size={19} color="green" style={styles.filterIcon} />
      ) : (
        <Image source={item.image} style={styles.filterImage} />
      )}
      <Text style={styles.filterText}>{item.key}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        horizontal
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingRight: 20,
  },
  listContainer: {
    paddingVertical: 20,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#03C04A',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  filterIcon: {
    marginRight: 5,
  },
  filterImage: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  filterText: {
    fontSize: 14,
    color: 'green',
  },
});

export default FilterScreen;
