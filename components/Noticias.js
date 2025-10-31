import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList, Linking, Image } from "react-native";
import { useLanguage } from "./LanguageContext";
import moment from "moment"; 
import 'moment/locale/es';

const BASE_URL = 'http://192.168.100.2:3001'; 

const IMAGES_MAP = {
    'avellaneda.jpg': require('../fotos/avellaneda.jpg'),
    'cilindro.jpg': require('../fotos/cilindro.jpg'),
    'darioymaxi.jpg': require('../fotos/darioymaxi.jpg'),
    'elefanteblanco.jpg': require('../fotos/elefanteblanco.jpg'),
    'independiente.jpg': require('../fotos/independiente.jpg'),
    'infierno.jpg': require('../fotos/infierno.jpg'),
    'teatro.jpg': require('../fotos/teatro.jpg'),
    // Agrega aquí todas las demás imágenes de tu carpeta 'fotos'
};

export default function Noticias() { 
  const { t } = useLanguage(); 
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  moment.locale('es');


const renderNoticia = ({ item }) => {
   
    const imageSource = IMAGES_MAP[item.imagen_url];
    return (
        <TouchableOpacity 
          style={styles.cuadroNoticia}
          onPress={() => handlePressNoticia(item.enlace)} 
        >
          {imageSource && (
              <Image 
                  source={imageSource} 
                  style={styles.newsImage} 
                  resizeMode="cover"
              />
          )}
          
          <View style={styles.textContainer}> 
          </View>
        </TouchableOpacity>
    );
};  

} // Fin del componente Noticias

const styles = StyleSheet.create({
  // ... (Tus estilos existentes) ...

  // 🟢 NUEVO: Estilo para la imagen
  newsImage: {
    width: '100%',
    height: 180, // Altura fija para la imagen
    borderRadius: 12,
    marginBottom: 15,
  },
  cuadroNoticia: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 15, // Ajustamos el padding para el contenedor
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#2B6E6E',
  },
  textContainer: {
    paddingHorizontal: 5, // Un poco de espacio para el texto dentro del cuadro
  },
  newsDate: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  // ... (El resto de tus estilos siguen aquí) ...
});
