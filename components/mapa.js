import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

// URL de tu backend (¡REEMPLAZA con tu IP y Puerto reales!)
const BASE_URL = 'http://192.168.100.2:3001'; 

const mapStyle = [
  {
    "featureType": "poi",
    "stylers": [
      { "visibility": "off" }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      { "visibility": "off" }
    ]
  }
];

export default function Mapa() {
  const [location, setLocation] = useState(null);
  // ESTADO NUEVO para guardar los eventos que llegan del backend
  const [eventosTemporales, setEventosTemporales] = useState([]); 

  // Array de zonas con MÁS puntos de interés (nuevos temas: administracion, educacion)
  const zonasInteres = [
    // --- PUNTOS ORIGINALES (Manteniendo temas existentes) ---
    {
      title: "Alto Avellaneda",
      coordinate: { latitude: -34.67535192170136, longitude: -58.36713333919409 },
      theme: "shopping", 
    },
    {
      title: "Plaza Alsina",
      coordinate: { latitude: -34.66271209618463, longitude: -58.365220089497896 },
      theme: "plaza",
    },
    {
      title: "Estadio Libertadores de América",
      coordinate: { latitude: -34.67019105735817, longitude: -58.37106194862821 },
      theme: "estadio",
    },
    {
      title:"estadio presidente peron",
      coordinate: { latitude: -34.667495357341544, longitude: -58.36859787036977 },
      theme: "estadio",
    },
    {
      title: "Teatro Roma",
      coordinate: { latitude: -34.662102675509615, longitude: -58.363238368157354 },
      theme: "cultura",
    },
    {
      title: "Hospital Presidente Perón",
      coordinate: { latitude: -34.6645, longitude: -58.3718 },
      theme: "hospital", 
    },
    {
      title: "Puente Colgante Nicolás Avellaneda",
      coordinate: { latitude: -34.6366, longitude: -58.3582 },
      theme: "landmark",
    },
    {
      title: "Parque Domínico",
      coordinate: { latitude: -34.6853, longitude: -58.3495 },
      theme: "plaza", 
    },
  
    {
      title: "Centro municipal de artes",
      coordinate: { latitude: -34.66335, longitude: -58.3654 },
      theme: "administracion", 
    },
    {
      title: "Juzgado de Paz de Avellaneda",
      coordinate: { latitude: -34.6599, longitude: -58.3661 },
      theme: "administracion", 
    },
    {
      title: "Comisaría 1ra de Avellaneda",
      coordinate: { latitude: -34.6611, longitude: -58.3671 },
      theme: "administracion", 
    },

    {
      title: "Universidad Nacional de Avellaneda (UNDAV)",
      coordinate: { latitude: -34.6548, longitude: -58.3675 },
      theme: "educacion", 
    },
    {
      title: "Escuela Técnica N° 6 (Ex-Industrial)",
      coordinate: { latitude: -34.6655, longitude: -58.3644 },
      theme: "educacion", 
    },
    {
      title: "Instituto Superior de Formación Docente N° 4",
      coordinate: { latitude: -34.6635, longitude: -58.3588 },
      theme: "educacion", 
    },

    // Salud y Hospitales Adicionales
    {
      title: "Clínica Sudamericana",
      coordinate: { latitude: -34.6601, longitude: -58.3591 },
      theme: "hospital",
    },

    // Transporte y Estaciones
    {
      title: "Estación de Tren Avellaneda",
      coordinate: { latitude: -34.662176372071144, longitude: -58.37608053568415 },
      theme: "landmark", // Usamos Landmark o se podría crear 'transporte'
    },

    // Otros Puntos de Interés
    {
      title: "Cine Monumental Avellaneda",
      coordinate: { latitude: -34.6615, longitude: -58.3649 },
      theme: "cultura",
    },
    {
      title: "Edificio Histórico de la Aduana",
      coordinate: { latitude: -34.6341, longitude: -58.3585 },
      theme: "landmark",
    },
  ];

  // (Tu avellanedaBounds y useEffect se mantienen igual)
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
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
      Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 5 },
        (loc) => {
          setLocation(loc.coords);
        }
      );
    })();
  }, []);


 
  // INICIO DEL CÓDIGO NUEVO (LÓGICA DE POLLING)


  useEffect(() => {
    // Función para obtener datos
    const fetchEventos = async () => {
        try {
            const response = await fetch(`${BASE_URL}/eventos-activos`);
            if (!response.ok) {
                // Si el servidor responde con un error 404, 500, etc.
                throw new Error('La red o el servidor no respondió correctamente');
            }
            const data = await response.json();
            // Actualizar el estado con los nuevos eventos (viene de la BD)
            setEventosTemporales(data); 
            
        } catch (error) {
            console.error("Error al obtener eventos temporales:", error);
            
            setEventosTemporales([]); 
        }
    };

    // 1. Llamar la función inmediatamente al inicio
    fetchEventos(); 

    // 2. Configurar el Polling (Consulta cada 90 segundos = 90000 ms)
    const intervalId = setInterval(fetchEventos, 90000); 

    // 3. Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId); 
  }, []); // El array vacío [] asegura que solo se configure una vez

 
  // FIN DEL CÓDIGO NUEVO (LÓGICA DE POLLING)
  


  if (!location) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // --- FUNCIÓN ACTUALIZADA (Nuevos Temas) ---
  const getMarkerStyle = (theme) => {
    switch (theme) {
      case "plaza":
        return styles.markerPlaza;
      case "estadio":
        return styles.markerEstadio;
      case "cultura":
        return styles.markerCultura;
      case "shopping":
        return styles.markerShopping;
      case "hospital":
        return styles.markerHospital;
      case "restaurante":
        return styles.markerRestaurante;
      case "landmark":
        return styles.markerLandmark;
      case "administracion": 
        return styles.markerAdministracion;
      case "educacion":
        return styles.markerEducacion;
      default:
        return styles.markerBase;
    }
  };

  // --- FUNCIÓN ACTUALIZADA (Nuevos Iconos) ---
  const getMarkerIcon = (theme) => {
    switch (theme) {
      case "plaza":
        return "🌳"; 
      case "estadio":
        return "🏟️"; 
      case "cultura":
        return "🎭"; 
      case "shopping":
        return "🛍️";
      case "hospital":
        return "🏥";
      case "restaurante":
        return "🍴";
      case "landmark":
        return "🌉";
      case "administracion":
        return "🏛️"; 
      case "educacion":
        return "🎓";
      default:
        return "📍";
    }
  };


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle} 
        showsPointsOfInterest={false} 
        initialRegion={{
          latitude: -34.6621,
          longitude: -58.3646,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        minZoomLevel={13}
        maxZoomLevel={18}
        onRegionChangeComplete={(region) => {
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
        >
          <View style={styles.userMarker} />
        </Marker>

        {/* Marcadores de interés (Renderiza todos los puntos ESTÁTICOS) */}
        {zonasInteres.map((zona, index) => (
          <Marker
            key={'static-' + index} // Clave única para estáticos
            coordinate={zona.coordinate}
            title={zona.title}
          >
            <View style={[styles.markerBase, getMarkerStyle(zona.theme)]}>
              <Text style={styles.markerText}>{getMarkerIcon(zona.theme)}</Text>
            </View>
          </Marker>
        ))}

          {eventosTemporales.map((evento, index) => (
          <Marker
            key={'dynamic-' + index} // Clave única para dinámicos
            // Los datos de latitud/longitud vienen como strings de la BD, hay que parsearlos
            coordinate={{ latitude: parseFloat(evento.latitud), longitude: parseFloat(evento.longitud) }}
            title={evento.titulo}
          >
            {/* Usamos las mismas funciones de estilo para mantener la consistencia */}
            <View style={[styles.markerBase, getMarkerStyle(evento.tema)]}>
              <Text style={styles.markerText}>{getMarkerIcon(evento.tema)}</Text>
            </View>
          </Marker>
        ))}
       

      </MapView>
    </View>
  );
}

// --- STYLESHEET ACTUALIZADO ---
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
  userMarker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "rgba(0, 122, 255, 0.8)", 
    borderColor: "white",
    borderWidth: 3,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  markerBase: {
    width: 36,
    height: 36,
    borderRadius: 18, 
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 8,
  },
  markerText: {
    fontSize: 16,
  },
  // --- Estilos por tema (Originales) ---
  markerPlaza: {
    backgroundColor: "#4CAF50", 
  },
  markerEstadio: {
    backgroundColor: "#E91E63", 
  },
  markerCultura: {
    backgroundColor: "#9C27B0", 
  },
  markerShopping: {
    backgroundColor: "#FF9800",
  },
  markerHospital: {
    backgroundColor: "#2196F3", 
  },
  markerRestaurante: {
    backgroundColor: "#795548",
  },
  markerLandmark: {
    backgroundColor: "#607D8B",
  },
  markerAdministracion: {
    backgroundColor: "#00BCD4",
  },
  markerEducacion: {
    backgroundColor: "#FFC107",
  },
});