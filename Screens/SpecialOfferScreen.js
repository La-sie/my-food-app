import {ScrollView, Text, Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Home from './HomeScreen';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';

export default function SpecialOfferScreen(){
  const navigation = useNavigation();
  const PrevButton = () => {
  navigation.navigate('Home');
}
  const offers = [
    {
      discount: '30%',
      image: require('../assets/Images/Burger.png'), 
      backgroundColor: '#00a000',
    },
    {
      discount: '15%',
      image: require('../assets/Images/soup.png'), 
      backgroundColor: '#F4C430',
    },
    {
      discount: '20%',
      image: require('../assets/Images/sushi.png'), 
      backgroundColor: '#ff6666',
    },
    {
      discount: '25%',
      image: require('../assets/Images/chicken.png'), 
      backgroundColor: '#ff9933',
    },
    {
      discount: '35%',
      image: require('../assets/Images/pizzaslice.png'), 
      backgroundColor: '#3399ff',
    },
    {
      discount: '5%',
      image: require('../assets/Images/sandwich.png'), 
      backgroundColor: '#F4C430',
    },
    {
      discount: '10%',
      image: require('../assets/Images/taco.png'), 
      backgroundColor: '#ff6666',
    },
    {
      discount: '30%',
      image: require('../assets/Images/salad.png'), 
      backgroundColor: '#00a000',
    },
  ];

  return(
    <ScrollView style={styles.container}>
    <StatusBar/>
     <View style={styles.headtext}>
     <TouchableOpacity onPress={PrevButton}>
      <Ionicons name="arrow-back" size={24} color="black"/>
     </TouchableOpacity>
      <Text style={styles.header}>Special Offers</Text>
     </View>
      {offers.map((offer, index) => (
        <View key={index} style={[styles.offerContainer, { backgroundColor: offer.backgroundColor }]}>
          <View style={styles.textContainer}>
            <Text style={styles.discountText}>{offer.discount}</Text>
            <Text style={styles.validText}>DISCOUNT ONLY</Text>
            <Text style={styles.validText}>VALID FOR TODAY!</Text>
          </View>
          <Image
            style={styles.image}
            source={offer.image}
          />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingLeft: 20,
    backgroundColor: '#F5F5F5',
    paddingRight: 20,
    marginBottom: 10
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 75
  },
  offerContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    padding: 14,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  discountText: {
    color: '#ffffff',
    fontSize: 55,
    fontWeight: 'bold',
  },
  validText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 800
  },
  image: {
    width: 150,
    height: 140,
    borderRadius: 8,
  },
  headtext:{
    flexDirection: 'row',
    marginBottom: 25,
    marginTop: 15,
  },
});
