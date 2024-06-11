import {View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {StatusBar} from 'expo-status-bar';
import {useNavigation} from '@react-navigation/native';



export default function Transaction(){
  const navigation = useNavigation();
  const PrevButton = () => {
  navigation.navigate('EWallet');
  }
  const historyData = [
    {
      id: '1',
      image: require('../assets/Images/vegetablenoodles.jpg'),
      name: 'Big Garden Salad',
      price: '$ 20.00',
      date: 'Dec 16, 2024 | 4 : 42 PM',
      topUp: 'Top Up'
    },
    {
      id: '2',
      image: require('../assets/Images/vegetablenoodles.jpg'),
      name: 'Big Garden Salad',
      price: '$ 20.00',
      date: 'Dec 16, 2024 | 4 : 42 PM',
      topUp: 'Top Up'
    },
    {
      id: '3',
      image: require('../assets/Images/vegetablenoodles.jpg'),
      name: 'Big Garden Salad',
      price: '$ 20.00',
      date: 'Dec 16, 2024 | 4 : 42 PM',
      topUp: 'Orders'
    },
    {
      id: '4',
      image: require('../assets/Images/vegetablenoodles.jpg'),
      name: 'Big Garden Salad',
      price: '$ 20.00',
      date: 'Dec 16, 2024 | 4 : 42 PM',
      topUp: 'Top Up'
    },
    {
      id: '5',
      image: require('../assets/Images/vegetablenoodles.jpg'),
      name: 'Big Garden Salad',
      price: '$ 20.00',
      date: 'Dec 16, 2024 | 4 : 42 PM',
      topUp: 'Top Up'
    },
    {
      id: '6',
      image: require('../assets/Images/vegetablenoodles.jpg'),
      name: 'Big Garden Salad',
      price: '$ 20.00',
      date: 'Dec 16, 2024 | 4 : 42 PM',
      topUp: 'Orders'
    },
    {
      id: '7',
      image: require('../assets/Images/vegetablenoodles.jpg'),
      name: 'Big Garden Salad',
      price: '$ 20.00',
      date: 'Dec 16, 2024 | 4 : 42 PM',
      topUp: 'Orders'
    },
  ]
  const renderItem = ({item}) =>(
    <View style={styles.historyCard}>
      <Image source={item.image} style={styles.img}/>
      <View>
        <View style={styles.namePrice}>
          <Text style={{marginRight: 35, fontSize: 15, fontWeight: 700}}>{item.name}</Text>
          <Text style={{fontSize: 15, fontWeight: 700}}>{item.price}</Text>
        </View>

        <View style={styles.dateTime}>
        <Text style={{marginRight: 35, fontSize: 12, fontWeight: 400, color: 'gray'}}> {item.date}</Text>
        <Text style={{fontSize: 12, fontWeight: 400, color: 'gray'}}> {item.topUp}</Text>
        </View>
     </View> 
    
    </View>
  )
  return(
    <View style={styles.container}>
    <StatusBar/>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, marginBottom: 10}}>
       <TouchableOpacity onPress={PrevButton}> 
        <Ionicons name="arrow-back" size={24} color="#03C04A" />
       </TouchableOpacity>
          <Text style={{fontWeight: 700, fontSize: 17}}>Transaction History</Text>
          <Ionicons name="search-sharp" size={24} color="black" />
      </View>

      <ScrollView>
      
      <FlatList
       data={historyData}
       keyExtractor={item => item.id}
       renderItem={renderItem}
       contentContainerStyle={styles.listContainer}
      />
      </ScrollView>
    
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F5F5F5'
  },
  historyCard:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    marginBottom: 6,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  }, 
  img:{
    marginRight: 10,
    borderRadius: 60,
    height: 70,
    width: 70
  },
  namePrice:{
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row', 
    marginBottom: 8
  },
  dateTime:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
});
