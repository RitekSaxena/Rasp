import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListDoctors = ({route}) => {
    console.log( route)
  return (
    <View style={styles.App}>
      <Text>{route} hi</Text>
    </View>
  )
}

export default ListDoctors

const styles = StyleSheet.create({

    App: {
        top: 0,
        flex: 1,
        backgroundColor: "#fff",
    
        alignItems: "center",
        justifyContent: "center",
      },
})