import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NativeBaseProvider, Box , Input, Stack, Button} from "native-base";
import { useNavigation } from '@react-navigation/native';


const EditProfile = ({route}) => {

  const details = route.params.details
  const navigation = useNavigation();
 
  const [name, setName] = useState(details.name)
  const [contact, setContact] = useState(details.contact)

  const [speciality, setSpeciality] = useState(details.speciality)
  const [hospital, setHospital] = useState(details.hospital)
  const [fees, setFees] = useState(details.fees)
const email = details.email
  const submitEdits = ()=>{
    navigation.navigate('Profile',{email})
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
        ]} >
            Edit your details
        </Text>
    <Stack space={4} w="85%" maxW="400px">
  
      <Input onChangeText={(e)=>setName(e)} value={name}  variant="outline" placeholder="state1" />
      <Input onChangeText={(e)=>setContact(e)} value={contact}  variant="outline" placeholder="state2" />
      <Input onChangeText={(e)=>setSpeciality(e)} value={speciality}  variant="outline" placeholder="state4" />
      <Input onChangeText={(e)=>setHospital(e)} value={hospital}  variant="outline" placeholder="state5" />
      <Input onChangeText={(e)=>setFees(e)} value={fees}  variant="outline" placeholder="state5" />

      <Button onPress={submitEdits} colorScheme="lightBlue">
  Submit
</Button>
      
    </Stack>
    </View>
    </NativeBaseProvider>

  )
}

export default EditProfile

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