import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import GoogleIcon from '../assets/Google.png';
import CallIcon from '../assets/Phone.png'
import UserIcon from '../assets/UserIcon.png'
import {OAuth2Client} from 'google-auth-library'
import GoogleLogin from 'react-google-login'

const SignUp = () => {



    const navigation = useNavigation();

    const responseGoogle = response => {
      
      
      console.log(googleuser);

    };

    const handleGoogleSignUp = res=>{
    
      navigation.navigate("UserDetails", {res}) 
  
      
      
      
    }
    const handlePhoneSignUp = ()=>{
        navigation.navigate("Home")
    }
  return (
    <View style={styles.App}>
      
     <View style={styles.container}> 

     <Image source={UserIcon} style={{marginBottom:20}} />
     <GoogleLogin
  clientId="1031278773289-3vo7b3ukk98lnihlugnu51s59didb5nh.apps.googleusercontent.com"
  buttonText="Login with Google"
  onSuccess={handleGoogleSignUp}
  onFailure={responseGoogle}
  cookiePolicy="single_host_origin"
/>
      

      <TouchableOpacity>
      <Text style={styles.smallText}>
        Already a user ? Login.
      </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;


const styles = StyleSheet.create({
    App:{
      flex: 1,
      backgroundColor: '#2a4370',
    
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
      marginTop:30,
      height:'80%',
      width:"92%",
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      
      borderRadius:30,
      alignItems: 'center',
      justifyContent: 'center'
      
    },
  
    signUpButton:{
      padding:3,
      borderWidth:2,
      borderColor:"#fff",
      backgroundColor:"#fff",
      borderRadius:15,
      width:"75%",
      flexDirection:'row',
      alignItems:"center",
      justifyContent:"center",
      marginTop:20,
      marginBottom:20
  
    },
    headingText:{
      fontWeight:"600",
      fontSize:15,
      color:"#2a4370"
    },
    loginLogos:{
      position:'absolute',
      right:10,
      width:22,
      height:22,
    },
    smallText:{
      color:"#fff",
  
    }
  
  });
  
  
