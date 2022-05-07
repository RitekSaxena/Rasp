import { StyleSheet, Text, View,Dimensions  } from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location'




const Map = () => {

  const [location, setLocation] = useState({"timestamp":1648710403853,"mocked":false,"coords":{"altitude":110.9000015258789,"heading":64.64930725097656,"altitudeAccuracy":49.510414123535156,"latitude":28.031021,"speed":0.008121713064610958,"longitude":79.1307143,"accuracy":13.493000030517578}});

  useEffect(()=>{
    
      (async ()=>{
      let {status} = await Location.requestForegroundPermissionsAsync();
      if(status!=='granted'){
        alert("permission denied");
        return
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      alert(JSON.stringify(location))
      

    })()
  },[])

 
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      
      initialRegion={ {
        latitude: location.coords.latitude,
      longitude:location.coords.longitude,
      latitudeDelta: 1,
      longitudeDelta: 1
      }}

      >

<Marker

coordinate={{
  latitude: location.coords.latitude,
      longitude:location.coords.longitude,
    }
}


>

</Marker>
      </MapView>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
          flex:1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
})

