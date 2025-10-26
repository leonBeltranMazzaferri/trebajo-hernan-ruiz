import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useLanguage } from "./LanguageContext"; // usamos el contexto

export default function AvellanedaHistoria() {
  const { t } = useLanguage(); // usamos t() para traducir según el idioma seleccionado

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.headerBox}>
        <Text style={styles.titulo}>{t("history_title") || "Avellaneda Historia"}</Text>
        <Text style={styles.subtitulo}>
          {t("history_subtitle") || "Descubrí hechos y curiosidades de nuestra ciudad"}
        </Text>
      </View>

      {/* Noticias */}
      <View style={styles.newsContainer}>
        <TouchableOpacity style={styles.cuadroNoticia}>
          <Text style={styles.newsTitle}>{t("first_settlements") || "Primeros asentamientos"}</Text>
          <Text style={styles.newsText}>
            {t("first_settlements_text") || "Conocé cómo comenzó el desarrollo urbano de Avellaneda."}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cuadroNoticia}>
          <Text style={styles.newsTitle}>{t("industrial_growth") || "Crecimiento industrial"}</Text>
          <Text style={styles.newsText}>
            {t("industrial_growth_text") || "El papel de Avellaneda en la historia productiva del país."}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cuadroNoticia}>
          <Text style={styles.newsTitle}>{t("key_figures") || "Personajes destacados"}</Text>
          <Text style={styles.newsText}>
            {t("key_figures_text") || "Figuras que marcaron la identidad cultural y deportiva."}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F2F2",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
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
  newsContainer: {
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
});
