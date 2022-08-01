/* import * as React from 'react';
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function ComplainMap() {
  return (
    <View style={styles.container}>
        <Text>salem</Text>
    <MapView provider={PROVIDER_GOOGLE}
    style={{flex:1}}
    initialRegion={{
        latitude:37.78825,
        longitude:-122.4324,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421,
    }}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
}); */