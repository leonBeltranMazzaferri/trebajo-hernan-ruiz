import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function FotosImportantes() {
  const historiaAvellaneda = {
    titulo: "Historia del Municipio de Avellaneda",
    texto:
      "Avellaneda, ubicada en la provincia de Buenos Aires, es una de las ciudades más importantes del conurbano bonaerense. Su origen se remonta al siglo XIX, cuando la región formaba parte de extensas estancias dedicadas a la agricultura y la ganadería. La zona comenzó a poblarse de manera significativa con la llegada de inmigrantes europeos, principalmente italianos y españoles, quienes contribuyeron al desarrollo industrial y comercial de la región.La ciudad se formó oficialmente como partido en 1852 bajo el nombre de “Barracas al Sud”. En 1904, en honor al presidente argentino Nicolás Avellaneda, se cambió su denominación a Avellaneda. Durante finales del siglo XIX y principios del XX, Avellaneda se consolidó como un importante centro industrial, con fábricas textiles, metalúrgicas y talleres ferroviarios. La presencia del puerto y su cercanía con la ciudad de Buenos Aires favorecieron su crecimiento económico y poblacional.Avellaneda también es conocida por su tradición deportiva. Es la cuna de clubes de fútbol emblemáticos como Independiente y Racing Club, que han dejado una huella profunda en la historia del deporte argentino. Además, la ciudad cuenta con una rica vida cultural, con teatros, centros culturales y espacios dedicados a la preservación de su patrimonio histórico.Hoy en día, Avellaneda combina su pasado industrial con un desarrollo urbano moderno. Sus barrios reflejan la diversidad de sus habitantes y su historia, mientras que su economía sigue vinculada tanto a la industria como al comercio y los servicios. La ciudad es un ejemplo de cómo el crecimiento migratorio, la industria y la cultura se entrelazan para formar la identidad de un lugar.",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Avellaneda_Buenos_Aires_-_Panor%C3%A1mica.jpg/1024px-Avellaneda_Buenos_Aires_-_Panor%C3%A1mica.jpg",
  };

  const fotos = [
    {
      id: "cilindro-construccion",
      titulo: "Construcción del Estadio Presidente Perón (El Cilindro)",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/El_Cilindro_de_Avellaneda.jpg/1024px-El_Cilindro_de_Avellaneda.jpg",
      descripcion:
        "Obras (1948–1950) e inauguración el 3 de septiembre de 1950: el Cilindro cambió la fisonomía urbana de Avellaneda y se transformó en emblema cultural y deportivo para generaciones de hinchas de Racing.",
      detalle:
        "La estructura, de diseño cilíndrico que le dio su apodo, fue construida sobre el terreno del antiguo estadio. Desde su inauguración fue escenario de títulos, recitales y grandes reuniones sociales que marcaron la identidad del barrio.",
    },
    {
      id: "cilindro-obra-historica",
      titulo: "Momentos históricos en el Cilindro",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Estadio_Presidente_Per%C3%B3n_-_Racing_Club_%28vista_a%C3%A9rea%29.jpg/1024px-Estadio_Presidente_Per%C3%B3n_-_Racing_Club_%28vista_a%C3%A9rea%29.jpg",
      descripcion:
        "No sólo fútbol: conciertos, actos y celebraciones populares han convertido al estadio en un punto de encuentro clave de Avellaneda.",
      detalle:
        "Renovaciones a lo largo de las décadas permitieron conservar su carácter monumental. El Cilindro vivió campeonatos memorables (1950, 1951, 1958, entre otros) y múltiples actos que lo consolidaron como ícono local.",
    },
    {
      id: "estacion-dario-maxi",
      titulo: "La estación y el recuerdo de Darío y Maxi",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kosteki_y_Santill%C3%A1n_mural_en_Avellaneda.jpg/1024px-Kosteki_y_Santill%C3%A1n_mural_en_Avellaneda.jpg",
      descripcion:
        "26 de junio de 2002: hechos que remecieron al conurbano y dejaron huella en la memoria colectiva local.",
      detalle:
        "Maximiliano Kosteki y Darío Santillán fueron asesinados durante movilizaciones en 2002; su memoria permanece en murales y homenajes. En 2013 la estación fue formalmente renombrada en su honor, un símbolo de reparación y recuerdo en Avellaneda.",
    },
  ];

  // Estado para controlar qué detalle se muestra
  const [expandedId, setExpandedId] = useState(null);

  const toggleDetalle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Historia de Avellaneda</Text>
      <Text style={styles.subHeader}>
        Imágenes icónicas y las historias que marcaron la identidad de la ciudad.
      </Text>

      {/* Historia del Municipio */}
      <View style={styles.historyCard}>
        <Image
          source={{ uri: historiaAvellaneda.imagen }}
          style={styles.historyImage}
        />
        <Text style={styles.historyTitle}>{historiaAvellaneda.titulo}</Text>
        <Text style={styles.historyText}>{historiaAvellaneda.texto}</Text>
      </View>

      {/* Galería de Fotos */}
      {fotos.map((foto) => (
        <View key={foto.id} style={styles.card}>
          <Image source={{ uri: foto.imagen }} style={styles.image} />
          <Text style={styles.title}>{foto.titulo}</Text>
          <Text style={styles.caption}>{foto.descripcion}</Text>

          {/* Mostrar detalle expandido */}
          {expandedId === foto.id && (
            <Text style={styles.detalleText}>{foto.detalle}</Text>
          )}

          <TouchableOpacity
            onPress={() => toggleDetalle(foto.id)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              {expandedId === foto.id ? "Leer menos" : "Leer más"}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.footerNote}>
        profe,leon me maltrata,este es un pedido de auxilio
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F8F8",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1E5555",
    textAlign: "center",
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 14,
    color: "#3C7373",
    textAlign: "center",
    marginBottom: 20,
  },
  historyCard: {
    backgroundColor: "#DFF3F3",
    borderRadius: 16,
    padding: 14,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  historyImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 10,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E5555",
    marginBottom: 6,
  },
  historyText: {
    fontSize: 14,
    color: "#355E5E",
    textAlign: "justify",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 14,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E5555",
    marginBottom: 6,
  },
  caption: {
    fontSize: 14,
    color: "#4F8C8C",
    marginBottom: 10,
  },
  detalleText: {
    fontSize: 14,
    color: "#2B6E6E",
    marginBottom: 10,
    textAlign: "justify",
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#2B6E6E",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  footerNote: {
    fontSize: 12,
    color: "#5C8C8C",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
  },
});
