import {StyleSheet, View, Text , TouchableOpacity } from "react-native";

export default function SegundoComponente(presionado, texto = "0") {
    return (
        <>

        <View style={styless.container}>
        <Text></Text>
        </View>
        
        <View style={style.contenido}>
            
        <TouchableOpacity style={styles.boton}>
        <Text onPress={presionado} style={styles.text}>
    
        </Text>
        </TouchableOpacity>

        </View>

        <View style={styless.container}>
        <Text></Text>
        </View>    


        </>

    );
}

    const style = StyleSheet.create({
        contenido: {
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
        },
    })

    const styles = StyleSheet.create({
        boton: {
            padding: 10,
            backgroundColor: 'yellow',
            width: 90,
            height: 90,
            borderRadius:100,
    },

    
})
    const styless = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'skyblue',
            alignItems: 'center',
            justifyContent: 'center',
    },
  });