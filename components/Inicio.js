import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useLanguage } from "./LanguageContext"; // usamos el contexto

export default function Inicio() {
  const { t } = useLanguage(); // usamos t() para traducir según el idioma seleccionado

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.titulo}>{t("app_name") || "avellanedaUnida"}</Text>
        <Text style={styles.subtitulo}>
          {t("app_subtitle") || "Explora y descubre tu entorno"}
        </Text>
      </View>

      {/* Contenido principal */}
      <View style={styles.content}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>{t("map") || "Mapa"}</Text>
          <Text style={styles.cardText}>
            {t("map_description") || "Encuentra ubicaciones y puntos de interés."}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>{t("history") || "Historia"}</Text>
          <Text style={styles.cardText}>
            {t("history_description") || "Aprende sobre los lugares que visitas."}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.highlight]}>
          <Text style={styles.cardTitle}>{t("recommendations") || "Te puede interesar"}</Text>
          <Text style={styles.cardText}>
            {t("recommendations_description") || "Artículos y recomendaciones personalizadas."}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Botón inferior */}
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerText}>
          {t("complaint_box") || "Buzón de quejas"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F2F2",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: { alignItems: "center" },
  titulo: { fontSize: 32, fontWeight: "bold", color: "#2B6E6E", marginBottom: 6 },
  subtitulo: { fontSize: 16, color: "#5C8C8C" },
  content: { width: "100%", flex: 1, justifyContent: "center" },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  highlight: { backgroundColor: "#DFF3F3" },
  cardTitle: { fontSize: 20, fontWeight: "bold", color: "#2B6E6E", marginBottom: 6 },
  cardText: { fontSize: 14, color: "#4F8C8C" },
  footerButton: {
    backgroundColor: "#2B6E6E",
    width: "100%",
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  footerText: { color: "white", fontSize: 16, fontWeight: "600" },
});
