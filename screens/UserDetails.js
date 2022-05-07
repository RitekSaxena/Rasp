import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NativeBaseProvider, Box , Input, Stack, Button} from "native-base";
import { useNavigation } from '@react-navigation/core';
import * as Location from 'expo-location'

const UserDetails = ({route}) => {

  const [location, setLocation] = useState({"timestamp":1648710403853,"mocked":false,"coords":{"altitude":110.9000015258789,"heading":64.64930725097656,"altitudeAccuracy":49.510414123535156,"latitude":28.031021,"speed":0.008121713064610958,"longitude":79.1307143,"accuracy":13.493000030517578}});


  const navigation = useNavigation()

  const [firstname, setstate1] = useState("")
  const [lastname, setstate2] = useState("")
  const [contact, setstate3] = useState("")
  const [city, setstate4] = useState("")
  const [state, setstate5] = useState("")
  const email = route.params.res.Lu.Bv
  const model = 0;
  const gps = location

  useEffect(()=>{
      
    
      (async ()=>{
      let {status} = await Location.requestForegroundPermissionsAsync();
      if(status!=='granted'){
        alert("permission denied");
        return
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      
      
      

    })()
  },[])



  const submitUserInfo = ()=>{
    const req = {
      user:{
        firstname:firstname,
        lastname:lastname,
        contact:contact,
        city:city,
        state:state,
      email :email,
      model:model,
      gps: JSON.stringify(gps)

      
      }
      
      
    }
    console.log(req)
    fetch('https://nameless-dusk-94678.herokuapp.com/profileGoogle',{
      method:"POST",
      
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(req)
    })
    .then(res=>{
      console.log(res)
    })
    navigation.navigate("Home")
  }



  return (
    <NativeBaseProvider>
    <View style={styles.UserDetails}>
      <Text style={[
          styles.headingText,
          {
            position: "absolute",
            top: "7%",
            color: "#5c5c5c",
            fontSize: 18,
            textAlign: "center",
          },
        ]} >Please provide the required details for signing Up </Text>
    <Stack space={4} w="85%" maxW="400px">
  
      <Input onChangeText={(e)=>setstate1(e)} value={firstname}  variant="outline" placeholder="state1" />
      <Input onChangeText={(e)=>setstate2(e)} value={lastname}  variant="outline" placeholder="state2" />
      <Input onChangeText={(e)=>setstate3(e)} value={contact}  variant="outline" placeholder="state3" />
      <Input onChangeText={(e)=>setstate4(e)} value={city}  variant="outline" placeholder="state4" />
      <Input onChangeText={(e)=>setstate5(e)} value={state}  variant="outline" placeholder="state5" />

      <Button onPress={submitUserInfo} colorScheme="lightBlue">
  Submit
</Button>


      
    </Stack>
    </View>
    </NativeBaseProvider>

  )
}

export default UserDetails

const styles = StyleSheet.create({
  UserDetails:{
    flex:1,
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:"#ffffff"
  },
  headingText: {
    fontWeight: "600",
    fontSize: 15,
    color: "#2a4370",
  },
})