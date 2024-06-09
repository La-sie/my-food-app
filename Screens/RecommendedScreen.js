import FilterScreen from '../components/Recommended';
import FoodListScreen from '../components/FoodList';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Home from './HomeScreen'; 
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';


export default function RecommendedScreen(){
  const navigation = useNavigation();
  const PrevButton = () => {
  navigation.navigate('Home');
  }
  return(
    <View style={styles.container}>
    <StatusBar/>
       <View style={styles.headerContainer}>
       <TouchableOpacity onPress={PrevButton}> 
        <Ionicons name="arrow-back" size={24} color="#03C04A" />
       </TouchableOpacity>
            <Text style={styles.header}>Recommended For You</Text>
           </View>
      <FilterScreen/>
      <FoodListScreen/>
    </View>
  )
}


const styles = StyleSheet.create({
          container:{
          flex: 1,
          paddingTop: 30,
          paddingLeft: 20,
          backgroundColor: '#F5F5F5'
        },
        headerContainer: {
          flexDirection: 'row',
          textAlign: 'center',
          alignItems: 'center',
          marginTop: 10
        },
        header: {
          fontSize: 17,
          fontWeight: 'bold',
          marginLeft: 40
        }
})