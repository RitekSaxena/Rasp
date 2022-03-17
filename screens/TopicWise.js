import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import UserIcon from "../assets/UserIcon.png";
import homeIcon from "../assets/homeIcon.png";


import { useNavigation } from "@react-navigation/core";


const TopicWise = ({ route }) => {

  const navigation = useNavigation();
  const [articles, setArticles] = useState([
    {
      title: "Article-1",
      author: "Maharaj",
    },
    {
      title: "Article-2" ,
      author: "Senapati",
    },
    {
      title: "Article-3",
      author: "Sipahi",
    },
  ]);

  return (
    <View style={styles.App}>
      <Text
        style={[
          styles.headingText,
          {
            position: "absolute",
            top: "7%",
            color: "#5c5c5c",
            fontSize: 18,
            textAlign: "center",
          },
        ]}
      >
        {route.params.t}

      </Text>
     
      <View style={styles.ArticleMain}>



        {articles.map((a, i) => {
          return (
            <TouchableOpacity key={i} style={[styles.articleTab]} onPress={()=> navigation.navigate("Blog")}>
              <Text style={[styles.tabText]}>{a.title}</Text>
              <Image
                style={{
                  width: 40,
                  
                  height: 40,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 50,
                  position: "absolute",
                  left: 10,
                  top: 10,
                }}
                source={{ uri: `https://api.multiavatar.com/${a.author}.png` }}
              />
              <Text
                style={[
                  styles.tabText,
                  { alignSelf: "flex-end", marginTop: "auto" },
                ]}
              >
                ~{a.author}
              </Text>
            </TouchableOpacity>
          );
        })}

        
      </View>

      <View style={styles.bottomNav}>

        
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image style={{ width: 40, height: 40 }} source={homeIcon} />
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
          <Image style={{ width: 40, height: 40 }} source={UserIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopicWise;

const styles = StyleSheet.create({
  App: {
    top: 0,
    flex: 1,

    backgroundColor: "#fff",

    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
  },
  headingText: {
    fontWeight: "600",
    fontSize: 15,
    color: "#2a4370",
  },

  ArticleMain: {
    position: "absolute",
    top: "14%",
    height: "70%",
    width: "96%",

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    overflow: "scroll",
  },

  tabText: {
    color: "#000000",
    fontSize: 18,
    textAlign: "center",
  },

  articleTab: {
    width: "94%",
    height: "26%",
    backgroundColor: "#fffdf7",
    margin: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "9%",
    backgroundColor: "#242424",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
