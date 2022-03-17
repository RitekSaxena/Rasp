import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview'
import React from 'react';


const Blog = () => {
  
  return (
    
      <WebView style={{flex:1,top:50,backgroundColor:'#000000'}} source={{ uri:'https://drive.google.com/file/d/1KBM6ARwgIPZ-IxY60kHKasn7lyM7wSh2/view?usp=sharing'}} />
    
  )
}

export default Blog

const styles = StyleSheet.create({
    App: {
        top: 0,
        flex: 1,
    
        backgroundColor: "#fff",
    
        alignItems: "center",
        justifyContent: "center",
       
      },
})