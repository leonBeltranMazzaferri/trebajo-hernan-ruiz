import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

export default function Mapa() {
  const [location, setLocation] = useState(null);

  // Puntos de interés en Avellaneda
  const zonasInteres = [
    {
      title: "Alto Avellaneda",
      coordinate: { latitude: -34.6815, longitude: -58.3645 },
    },
    {
      title: "Plaza La Estación",
      coordinate: { latitude: -34.6612, longitude: -58.3673 },
    },
    {
      title: "Plaza Alsina",
      coordinate: { latitude: -34.6642, longitude: -58.3667 },
    },
  ];

  // Limites de Avellaneda (approx)
  const avellanedaBounds = {
    northEast: { latitude: -34.6470, longitude: -58.3400 },
    southWest: { latitude: -34.6900, longitude: -58.3900 },
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permiso de ubicación denegado");
        return;
      }

      // Ubicación inicial
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);

      // Escuchar ubicación en tiempo real
      Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 5 },
        (loc) => {
          setLocation(loc.coords);
        }
      );
    })();
  }, []);

  if (!location) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE} 
        initialRegion={{
          latitude: -34.6621,
          longitude: -58.3646,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        minZoomLevel={13}
        maxZoomLevel={18}
        onRegionChangeComplete={(region) => {
          // Evita que el usuario salga de Avellaneda
          if (
            region.latitude > avellanedaBounds.northEast.latitude ||
            region.longitude > avellanedaBounds.northEast.longitude ||
            region.latitude < avellanedaBounds.southWest.latitude ||
            region.longitude < avellanedaBounds.southWest.longitude
          ) {
            console.log("Fuera de Avellaneda");
          }
        }}
      >
        {/* Marcador en tiempo real del usuario */}
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="Tu ubicación"
          pinColor="blue"
        />

        {/* Marcadores de interés */}
        {zonasInteres.map((zona, index) => (
          <Marker
            key={index}
            coordinate={zona.coordinate}
            title={zona.title}
            pinColor="red"
          />
        ))}
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
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
