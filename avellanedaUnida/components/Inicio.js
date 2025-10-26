import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Inicio() {
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.titulo}>MapaAPP</Text>
        <Text style={styles.subtitulo}>Explora y descubre tu entorno</Text>
      </View>

      {/* Contenido principal */}
      <View style={styles.content}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Mapa</Text>
          <Text style={styles.cardText}>
            Encuentra ubicaciones y puntos de interés.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Historia</Text>
          <Text style={styles.cardText}>
            Aprende sobre los lugares que visitas.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.highlight]}>
          <Text style={styles.cardTitle}>Te puede interesar</Text>
          <Text style={styles.cardText}>
            Artículos y recomendaciones personalizadas.
          </Text>
        </TouchableOpacity>
      </View>

      {/* Botón inferior */}
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerText}>Buzón de quejas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F2F2", // fondo claro y elegante
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2B6E6E",
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 16,
    color: "#5C8C8C",
  },
  content: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
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
  highlight: {
    backgroundColor: "#DFF3F3",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2B6E6E",
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: "#4F8C8C",
  },
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
  footerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
