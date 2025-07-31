import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Mapa() {
  const avellaneda = {
    latitude: -34.6621,
    longitude: -58.3646,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={avellaneda}
        minZoomLevel={12}
        maxZoomLevel={18}
      >
        <Marker
          coordinate={{ latitude: -34.6621, longitude: -58.3646 }}
          title={"¡Estás en Avellaneda!"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
