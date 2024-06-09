import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/HomeScreen';
import Orders from '../Screens/Orders';
import Message from '../Screens/Message';
import EWallet from '../Screens/EWallet'


const Tab = createBottomTabNavigator();

const Tabs = () =>{
  return(
      <Tab.Navigator
      tabBarOptions={{
        showLabel: true,
        style:{
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: 'yellow',
          borderRadius: 15,
          height: 80
        }
      }}>
        <Tab.Screen name="Home" options={{headerShown: false}} component={Home}/>
        <Tab.Screen name="Orders" options={{headerShown: false}} component={Orders}/>
        <Tab.Screen name="Message" options={{headerShown: false}} component={Message}/>
        <Tab.Screen name="Ewallet" options={{headerShown: false}} component={EWallet}/>
        <Tab.Screen name="Profile" options={{headerShown: false}} component={Home}/>
      </Tab.Navigator>
  );
}

export default Tabs;