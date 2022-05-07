import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React, { useState } from 'react'
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps'
import { NativeBaseProvider , VStack,Heading, Icon, MaterialIcons} from 'native-base'

const ConsultOnline = () => {

    const [doctors, setDoctors] = useState(['Dr. A', 'Dr. B', 'Dr. C'])
    const [docInput, setDocInput] = useState('')

  return (
      <NativeBaseProvider>
    <View style={styles.UserDetails}>
      <Text style={styles.headingText}>ConsultOnline</Text>
      <TextInput
        placeholder="Try searching doctors online"
        style={styles.input}
        onChangeText={(e) => setDocInput(e)}
        value={docInput}
      />


      
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
})