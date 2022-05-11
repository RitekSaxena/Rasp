
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';
  import penIcon from "../assets/pen.png";
  import UserIcon from '../assets/UserIcon.png';
import homeIcon from '../assets/homeIcon.png'

const Profile = ({route}) => {


    const userEmail = route.params.userEmail

    const getProfile = ()=>{
        const req = {
        
            email:userEmail

        }

        console.log(req)
        
        

        fetch('https://nameless-dusk-94678.herokuapp.com/getDoctorProfile?'+ new URLSearchParams(req)).then(response => 
          response.json().then(data => ({
              data: data,
              status: response.status
          })
      ).then(res => {
          console.log(res.data)
      }));
        
      }
    
    useEffect(() => {
      getProfile()
    
    },[])
    


    const  {name, contact, email, speciality, hospital, rating, fees} = {name:"Dr. Ayushi",contact: "1234567891", email:"2019eeb1028@iitrpr.ac.in",speciality:"Haddi ki doctor", hospital:"IUC ka ICU", rating:"4", fees:"150"}
    const details = {name, contact, email, speciality, hospital, rating, fees}
    const navigation = useNavigation()
  return (
    <View style={styles.container}>

<TouchableOpacity onPress={() => navigation.navigate("EditProfile",{details})} style={{ position:"absolute",zIndex:1,top:"3%",right:"6%"}} >
      <View   >
      
          <Image style={{ width: 40, height: 40,}} source={penIcon} />
       
        </View>
        </TouchableOpacity>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: `https://api.multiavatar.com/${name}.png`}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.info}><Text style={{color:"black"}} >Speciality :</Text> {speciality}</Text>
              <Text style={styles.description}><Text style={{color:"black"}} >Hospital :</Text>  {hospital}</Text>
              <Text style={styles.description}><Text style={{color:"black"}} >Rating :</Text>  {rating}</Text>
              <Text style={styles.description}><Text style={{color:"black"}} >Fees :</Text>  {fees} <Text style={{color:"grey"}} >Rs./appointment</Text> </Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{color:"#d4d4d4",}} > <Text style={{color:"white"}} >Contact :</Text>  {contact}</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{color:"#d4d4d4",}}> <Text style={{color:"white"}} >Email :</Text>  {email}</Text> 
              </TouchableOpacity>
            </View>
        </View>
        
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
  )
}

export default Profile

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#00BFFF",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:10,
      width:250,
      borderRadius:30,
      
      backgroundColor: "rgb(0, 100,230)",
    },
    bottomNav: {
      position: "absolute",
      bottom: -20,
      width: "100%",
      height: "9%",
      backgroundColor: "#242424",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center"
    },
  });