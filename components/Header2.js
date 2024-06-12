import {View, StyleSheet, Text} from 'react-native';
import Logo from './Logo';


export default function Header2(){
  return(
    <View style={styles.container}>
      <View style={styles.logotxt}>
       <Logo/>
       <Text style={{marginLeft: 15, fontWeight: 'bold', fontSize: 19}}> Orders </Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#fff'
  },
  logotxt:{
    flexDirection: 'row',
    alignItems: 'center', 
    marginTop: 5, 
    marginLeft: 15,
  }
})
