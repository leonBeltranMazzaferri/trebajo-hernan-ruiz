import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';      
      export default function AvellanedaHistoria() {
  return (
    <View style={styles.container}>
      
      {/* Encabezado de noticia */}
      <View style={styles.headerBox}>
        <Text style={styles.titulo}>AVELLANEDA HISTORIA</Text>
      </View>

      {/* Tres cajas verticales centradas */}
      <TouchableOpacity style={styles.cuadroNoticia}>
        <Text style={styles.texto}>Noticia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cuadroNoticia}>
        <Text style={styles.texto}>Noticia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cuadroNoticia}>
        <Text style={styles.texto}>Noticia</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F8C8C",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  headerBox: {
    backgroundColor: "#003366", 
    width: "10%",
    padding: 80,
    borderRadius: 30,
    marginTop: 70,
    marginBottom: 30,
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  cuadroNoticia: {
    width: "100%",
    backgroundColor: "#6CA6A6",
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

       
   