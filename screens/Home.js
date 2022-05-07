import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import HamBurger from "../assets/Hamburger.png";
import Location from "../assets/Location.png";
import UserIcon from '../assets/UserIcon.png';
import homeIcon from '../assets/homeIcon.png'
import { useNavigation } from '@react-navigation/core';


const Home = () => {

  const navigation = useNavigation();


  const [user, setUser] = useState({
    firstname : "Ritek",
    lastname:" Saxena",
    dob : "01-01-2003",
    contact : "+91-7668003886",
    address:"Budaun, U.P. 243601, India",
    currentDevice : "Galaxy's A22"
  })
  const [locationInput, setLocationInput] = useState("");
  const [location, setLocation] = useState("Dwarka sec-8, Delhi NCR")

  return (
    <View style={styles.App}>
      <View style={[styles.navBar]}>
        <Image
          style={(styles.loginLogos, { position: "absolute", left: "7%" })}
          source={HamBurger}
        />

        <Text style={[styles.headingText]}>{location}</Text>

        <Image
          style={[styles.loginLogos, { position: "absolute", right: "10%" }]}
          source={Location}
        />
      </View>
      <Text
        style={[
          styles.headingText,
          { position: "absolute", top: "15%", color: "#5c5c5c", fontSize: 18 ,textAlign:"center"},
        ]}
      >
        Hi {user.firstname}
        {'\n'+'\n'}
        Find your desired Doctor right now!
      </Text>

      <TextInput
        placeholder="Try searching doctor, or diseases"
        style={styles.input}
        onChangeText={(e) => setLocationInput(e)}
        value={locationInput}
      />

      <View style={styles.homeMain}>

        <TouchableOpacity onPress={()=> navigation.navigate("ConsultOnline")} style={styles.homeTab}><Text style={[styles.tabText]}>Consult a doctor online </Text>
</TouchableOpacity>

        <TouchableOpacity style={[styles.homeTab,{backgroundColor:"#6ba5cf"}]}><Text style={[styles.tabText]}>Book an {'\n'}appointment</Text></TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate("Articles")} style={[styles.homeTab,{backgroundColor:"#6ba5cf"}]}><Text style={[styles.tabText]}>Articles </Text></TouchableOpacity>

        <TouchableOpacity style={styles.homeTab}><Text style={[styles.tabText]}>Hospital nearby</Text></TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity>
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
        <TouchableOpacity>
        <Image
          style={{width:40,height:40}}
          source={UserIcon}
        />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  App: {
    top: 0,
    flex: 1,
    backgroundColor: "#fff",

    alignItems: "center",
    justifyContent: "center",
  },

  navBar: {
    width: "100%",
    height: "5%",
    display: "flex",
    position: "absolute",
    top: "7%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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

  signUpButton: {
    padding: 3,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderRadius: 15,
    width: "75%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  headingText: {
    fontWeight: "600",
    fontSize: 15,
    color: "#2a4370",
  },
  loginLogos: {
    width: 22,
  },
  homeMain: {
    position: "absolute",
    top: "36%",
    height: "50%",
    width: "96%",
  
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"center",
    justifyContent:"center",
    paddingTop:20
  },
  homeTab: {
    width: "40%",
    height: "40%",
    backgroundColor: "#154273",
    margin:10,
    borderRadius:10,
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:20,
    

  },
  tabText:{
      color:"#ffffff",
      fontSize:18,
      textAlign:"center",

      
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
});
