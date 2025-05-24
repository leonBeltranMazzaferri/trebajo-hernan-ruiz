import { StyleSheet, Text, View } from 'react-native';
export default function TercerComponente() {
    return(
        <View style={style.contenido} >
        <Text>menu en la parte de abajo</Text>
        </View>
       
    );
}

    const style = StyleSheet.create({
        contenido: {
            flex: 0.2,
            backgroundColor: 'gray',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
        },
    })