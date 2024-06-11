import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../Screens/OnboardingScreen';
import Splashscreen from '../Screens/Splash'; 
import Tabs from './Bottomtabs';
import SpecialOfferScreen from '../Screens/SpecialOfferScreen';
import RecommendedScreen from '../Screens/RecommendedScreen';
import OrdersScreen from '../Screens/Orders';
import Message from '../Screens/Message';
import EWallet from '../Screens/EWallet';
import Transaction from '../Screens/Transaction';

const Stack = createNativeStackNavigator();


export default function Navigate(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName = 'Splash'>
      <Stack.Screen name="Splash"  options={{headerShown: false}} component={Splashscreen} />
      <Stack.Screen name="OnboardingScreen"  options={{headerShown: false}} component={OnboardingScreen} />
      <Stack.Screen name="Home"  options={{headerShown: false}} component={Tabs} />
      <Stack.Screen name="SpecialOfferScreen" options={{headerShown: false}} component={SpecialOfferScreen}/>
      <Stack.Screen name="RecommendedScreen" options={{headerShown: false}} component={RecommendedScreen}/>
      <Stack.Screen name="Orders" options={{headerShown: false}} component={OrdersScreen}/>
      <Stack.Screen name="Message" options={{headerShown: false}} component={Message}/>
      <Stack.Screen name="Ewallet" options={{headerShown: false}} component={EWallet}/>
      <Stack.Screen name="Transaction" options={{headerShown: false}} component={Transaction}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}
