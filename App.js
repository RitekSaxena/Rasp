import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUp';
import HomeScreen from './screens/Home';
import ArticlesScreen from './screens/Articles';
import TopicWise from './screens/TopicWise';
import Blog from './screens/Blog';
import Maps from './screens/Map';
import UserDetails from './screens/UserDetails';
import ConsultOnline from './screens/ConsultOnline';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import ListDoctors from './screens/ListDoctors';

const Stack = createNativeStackNavigator()

export default function App() {



  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUpScreen}  />
        <Stack.Screen options={{headerShown:false}}  name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}}  name="Articles" component={ArticlesScreen} />
        <Stack.Screen options={{headerShown:false}} name="TopicWise" component={TopicWise}  />
        <Stack.Screen options={{headerShown:false, animation:'none'}} name="Maps" component={Maps}   />
        <Stack.Screen options={{headerShown:false, animation:'none'}} name="Blog" component={Blog}   />
        <Stack.Screen options={{headerShown:false}} name="UserDetails" component={UserDetails}  />
        <Stack.Screen options={{headerShown:false}} name="ConsultOnline" component={ConsultOnline}  />
        <Stack.Screen options={{headerShown:false}} name="Profile" component={Profile}  />
        <Stack.Screen options={{headerShown:false}} name="EditProfile" component={EditProfile}  />
        <Stack.Screen options={{headerShown:false}} name="ListDoctors" component={ListDoctors}  />


      </Stack.Navigator>  
    </NavigationContainer>

    
  );
}
