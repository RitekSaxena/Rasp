import { StyleSheet, Text, View ,TextInput,Image,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps'
import { NativeBaseProvider , VStack,Heading, Icon, MaterialIcons, Button} from 'native-base'
import UserIcon from '../assets/UserIcon.png';
import homeIcon from '../assets/homeIcon.png'
import { useNavigation } from '@react-navigation/native';
const ConsultOnline = ({route}) => {

    const [doctors, setDoctors] = useState(['Dr. A', 'Dr. B', 'Dr. C'])
    const [docInput, setDocInput] = useState('')
    const userEmail = route.params.userEmail
    const navigation = useNavigation()

    const searchDoctor = ()=>{

      const req = {
        
        name: docInput

    }

    console.log(req)
    
    

    fetch('https://nameless-dusk-94678.herokuapp.com/getSearch?'+ new URLSearchParams(req)).then(response => 
      response.json().then(data => ({
          data: data,
          status: response.status
      })
  ).then(res => {
      console.log(res.data)
      const passdownJson = {
        data:res.data,
        userEmail:userEmail
      }
      
      const passdown = toString(passdownJson)
      setTimeout(() => {
        navigation.navigate("ListDoctors",{passdown})
        
      }, 4000);
      
  }));


    }

  return (
      <NativeBaseProvider>
    <View style={styles.UserDetails}>
      
      <TextInput
        placeholder="Try searching doctors online"
        style={styles.input}
        onChangeText={(e) => setDocInput(e)}
        value={docInput}
      />

<Button style={{marginTop:-10}} onPress={searchDoctor} colorScheme="lightBlue">
  search
</Button>

<View style={styles.bottomNav}>
<TouchableOpacity onPress={()=>navigation.navigate('Home', {userEmail})}>
        <Image
          style={{width:40,height:40,}}
            source={homeIcon}
          />
          </TouchableOpacity>
        <TouchableOpacity>
        <View style={{
          width: 56,
          height:56,
          backgroundColor:"rgba(255,255,255,0.9)",
          borderWidth:1,
          borderRadius:50,
          justifyContent:"center",
          alignItems:"center",
          padding:5,
          
          
        }}>
          <Text style={{textAlign:"center",fontSize:11,fontWeight:"bold"}} >appoint now</Text> 

        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Profile",{userEmail})}>
        <Image
          style={{width:40,height:40}}
          source={UserIcon}
        />
        </TouchableOpacity >
      </View>


      
    </View>
    </NativeBaseProvider>
  )
}

export default ConsultOnline

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
  input: {
    backgroundColor: "white",
    height: 40,
    width: "80%",
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000000",
    position: "absolute",
    top: "25%",
    shadowColor: "#000000",
    paddingLeft: 20,
    shadowOpacity: 0,
    shadowRadius: 4.5,
    elevation: 7,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "9%",
    backgroundColor: "#242424",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"
  },
})