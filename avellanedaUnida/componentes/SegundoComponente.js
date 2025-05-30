import {StyleSheet, View, Text , TouchableOpacity } from "react-native";

export default function SegundoComponente(presionado, texto = "8======D") {
    return (
        
        <View style={style.contenido}>
            
        <TouchableOpacity style={styles.boton}>
        <Text onPress={presionado} style={styles.text}>
        {texto}
        {texto}
        {texto}
        {texto}
        </Text>
        </TouchableOpacity>

        </View>


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
}

)