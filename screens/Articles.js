import { StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView
  } from 'react-native'
import React from 'react'
import UserIcon from '../assets/UserIcon.png';
import homeIcon from '../assets/homeIcon.png'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useState } from 'react';


const Articles = ({route}) => {

    const [topicInput, setTopicInput]= useState("")
    const [topics, setTopics] = useState([
      "Skin Care","Women Health", "Eye Care","Dental Care","Recent News","Recent Development"
    ])
    const navigation = useNavigation();
    const userEmail = route.params.userEmail
  return (
    <View style={styles.App}>
     
      <Text
        style={[
          styles.headingText,
          { position: "absolute", top: "7%", color: "#5c5c5c", fontSize: 18 ,textAlign:"center"},
        ]}
      >
       
       Articles
      </Text>
      <TextInput
        placeholder="Search for a topic..."
        style={styles.input}
        onChangeText={(e) => setTopicInput(e)}
        value={topicInput}
      />

      <View style={styles.ArticleMain}>

          {
            topics.map((t, i )=>{
              return(
                <TouchableOpacity onPress={()=>navigation.navigate("TopicWise",{t})} key={i} style={[styles.articleTab,{backgroundColor: (i==1 || i==2 || i==5)? "#154273":"#6ba5cf"}]}><Text style={[styles.tabText]}>{t}</Text></TouchableOpacity>
              )
            })
          }

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
          <TouchableOpacity>
          <Image
            style={{width:40,height:40}}
            source={UserIcon}
          />
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Articles;

const styles = StyleSheet.create({
    App:{
        top: 0,
    flex: 1,
    
    backgroundColor: "#fff",

    alignItems: "center",
    justifyContent: "center",
    overflow:"scroll"
    },

    ArticleMain:{
      position: "absolute",
    top: "18%",
    height: "70%",
    width: "96%",
    
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"center",
    justifyContent:"center",
    paddingTop:20,
    overflow:"scroll"
    },

    tabText:{
      color:"#ffffff",
      fontSize:18,
      textAlign:"center",

      
  },

    articleTab:{
      width: "40%",
    height: "30%",
    backgroundColor: "#154273",
    margin:10,
    borderRadius:10,
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:20,
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
      input: {
        backgroundColor: "white",
        height: 40,
        width: "80%",
        margin: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000000",
        position: "absolute",
        top: "10%",
        shadowColor: "#000000",
        paddingLeft: 20,
        shadowOpacity: 0,
        shadowRadius: 4.5,
        elevation: 7,
      },
      headingText: {
        fontWeight: "600",
        fontSize: 15,
        color: "#2a4370",
      },
})