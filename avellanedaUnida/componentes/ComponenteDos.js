import {StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function ComponenteDos({ presionado, texto = "boton con texto cambiante" }) {
    return (
        <View style={style.contenido}>
            <Text> cuerpo de la aplicacion </Text>

                <TouchableOpacity style={styles.boton}>
                <Text onPress={presionado} style={styles.text}>
                    {texto}
                </Text>
            </TouchableOpacity>

        </View>
    );
}

    const style = StyleSheet.create({
        contenido: {
            flex: 1,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
        },
    })

    const styles = StyleSheet.create({
    boton: {
        padding: 10,
        backgroundColor: 'gray',
        width: 190,
        margin: 50,
    },
    text:{
        color: 'red',
    }
}
)