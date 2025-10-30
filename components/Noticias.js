import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList, Linking } from "react-native";
import { useLanguage } from "./LanguageContext";
import moment from "moment"; 
import 'moment/locale/es';
import dayjs from "dayjs";

// la IP 
const BASE_URL = 'http://192.168.100.2:3001'; 

export default function Noticias() { // 👈 Componente renombrado
  const { t } = useLanguage(); 
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Configuramos moment para usar español
  moment.locale('es');

  // Función para obtener los datos de las noticias
  const fetchNoticias = async () => {
    try {
      // ⚠️ ADVERTENCIA: Debes crear esta ruta en tu servidor
      const response = await fetch(`${BASE_URL}/noticias`); 
      
      if (!response.ok) {
        throw new Error(`Error en la red: ${response.status}`);
      }
      
      const data = await response.json();
      setNoticias(data);
    } catch (err) {
      console.error("Error al obtener noticias:", err);
      setError(t("error_loading_news") || "No se pudieron cargar las noticias.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  // Función para abrir el enlace externo
  const handlePressNoticia = (url) => {
    Linking.openURL(url).catch(err => console.error('No se pudo abrir el enlace:', err));
  };
  
  // Función para renderizar cada item de la noticia
  const renderNoticia = ({ item }) => (
    <TouchableOpacity 
      style={styles.cuadroNoticia}
      onPress={() => handlePressNoticia(item.enlace)} // 👈 Usa el campo 'enlace' de la DB
    >
      <Text style={styles.newsDate}>
        {moment(item.fecha).format('LL')} {/* Formato: 30 de octubre de 2025 */}
      </Text>
      {/* Usa el campo 'titular' de la DB */}
      <Text style={styles.newsTitle}>{item.titular}</Text> 
      {/* Usa el campo 'cuerpo' de la DB */}
      <Text style={styles.newsText} numberOfLines={2}>
        {item.cuerpo}
      </Text>
      <Text style={styles.leerMas}>{t("read_more") || "Leer más..."}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color="#2B6E6E" />
        <Text style={{ marginTop: 10 }}>{t("loading") || "Cargando noticias..."}</Text>
      </View>
    );
  }

  if (error || noticias.length === 0) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text style={styles.errorText}>{error || t("no_news") || "No hay noticias disponibles."}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.headerBox}>
        <Text style={styles.titulo}>{t("news_title") || "Noticias y Eventos"}</Text>
        <Text style={styles.subtitulo}>
          {t("news_subtitle") || "Mantente al día con lo último de Avellaneda"}
        </Text>
      </View>

      {/* Lista de Noticias (Usando FlatList) */}
      <FlatList
        data={noticias}
        renderItem={renderNoticia}
        keyExtractor={item => item.titular + item.fecha} // Usar una key única
        style={styles.newsList}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F2F2",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  centerContent: { justifyContent: "center" },
  headerBox: {
    backgroundColor: "#2B6E6E",
    width: "100%",
    paddingVertical: 40,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  subtitulo: {
    fontSize: 15,
    color: "rgba(255,255,255,0.8)",
    marginTop: 6,
    textAlign: "center",
  },
  newsList: {
    width: "100%",
  },
  cuadroNoticia: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#2B6E6E',
  },
  newsDate: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2B6E6E",
    marginBottom: 4,
  },
  newsText: {
    fontSize: 14,
    color: "#4F8C8C",
  },
  leerMas: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5C8C8C',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});