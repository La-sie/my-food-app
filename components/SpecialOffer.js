import {View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SpecialOfferScreen from '../Screens/SpecialOfferScreen';


export default function SpecialOffer(){
  const navigation = useNavigation();
  const NextPage = () => {
  navigation.navigate('SpecialOfferScreen');
}
  return(
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, marginTop: 20}}>
        <Text style={{color: 'black', fontWeight: 800, fontSize: 21}}> Special Offers</Text>
        <TouchableOpacity>
          <Text style={{color: '#03C04A', fontSize: 15, fontWeight: 800}} onPress={NextPage}>See All</Text>
        </TouchableOpacity>
      </View>
       <View style={styles.offerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.discountText}>30%</Text>
          <Text style={styles.validText}>DISCOUNT ONLY</Text>
          <Text style={styles.validText}>VALID FOR TODAY!</Text>
        </View>
        <Image
          style={styles.image}
          source={require('../assets/Images/Burger.png')} 
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  offerContainer: {
    flexDirection: 'row',
    backgroundColor: '#00a000',
    borderRadius: 25,
    padding: 16,
    marginTop: 16,
    marginRight: 16,
    marginBottom: 15,
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
  },
})