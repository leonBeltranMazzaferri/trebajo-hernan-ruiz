import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Inicio() {
  return (
    <View style={styles.container}>
      
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.titulo}>MapaAPP 📍</Text>
      </View>

      {/* Botones principales */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.cuadro}>
          <Text style={styles.texto}>Mapa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cuadro}>
          <Text style={styles.texto}>Historia</Text>
        </TouchableOpacity>
      </View>

      {/* Cuadro central */}
      <TouchableOpacity style={styles.cuadroGrande}>
        <Text style={styles.texto}>TE PUEDE INTERESAR</Text>
      </TouchableOpacity>

      {/* Botón inferior */}
      <TouchableOpacity style={styles.cuadroAncho}>
        <Text style={styles.texto}>Buzón de quejas/ redes sociales</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F8C8C", // color de fondo como en la imagen
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  cuadro: {
    flex: 1,
    backgroundColor: "#6CA6A6",
    margin: 5,
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cuadroGrande: {
    width: "100%",
    backgroundColor: "#6CA6A6",
    height: 120,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  cuadroAncho: {
    width: "100%",
    backgroundColor: "#6CA6A6",
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});