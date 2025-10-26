import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function AvellanedaHistoria() {
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.headerBox}>
        <Text style={styles.titulo}>Avellaneda Historia</Text>
        <Text style={styles.subtitulo}>
          Descubrí hechos y curiosidades de nuestra ciudad
        </Text>
      </View>

      {/* Noticias */}
      <View style={styles.newsContainer}>
        <TouchableOpacity style={styles.cuadroNoticia}>
          <Text style={styles.newsTitle}>Primeros asentamientos</Text>
          <Text style={styles.newsText}>
            Conocé cómo comenzó el desarrollo urbano de Avellaneda.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cuadroNoticia}>
          <Text style={styles.newsTitle}>Crecimiento industrial</Text>
          <Text style={styles.newsText}>
            El papel de Avellaneda en la historia productiva del país.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cuadroNoticia}>
          <Text style={styles.newsTitle}>Personajes destacados</Text>
          <Text style={styles.newsText}>
            Figuras que marcaron la identidad cultural y deportiva.
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
