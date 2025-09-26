import React, { useEffect, useState, useRef } from "react"; 
import { StyleSheet, View, ActivityIndicator } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

export default function Mapa() {
  const [location, setLocation] = useState(null);
  const mapRef = useRef(null);

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

  // Limites de Avellaneda (aprox rectángulo)
  const avellanedaBounds = {
    northEast: { latitude: -34.6470, longitude: -58.3400 },
    southWest: { latitude: -34.6900, longitude: -58.3900 },
  };

  // Región inicial
  const initialRegion = {
    latitude: -34.6621,
    longitude: -58.3646,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  // Verifica si está dentro de Avellaneda
  const isInsideBounds = (lat, lng) => {
    return (
      lat <= avellanedaBounds.northEast.latitude &&
      lat >= avellanedaBounds.southWest.latitude &&
      lng <= avellanedaBounds.northEast.longitude &&
      lng >= avellanedaBounds.southWest.longitude
    );
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
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        minZoomLevel={13}
        maxZoomLevel={18}
        onRegionChangeComplete={(region) => {
          // Si el usuario intenta salirse de Avellaneda → recentrar
          if (!isInsideBounds(region.latitude, region.longitude)) {
            console.log("Fuera de Avellaneda → Recentrando...");
            mapRef.current?.animateToRegion(initialRegion, 500);
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
