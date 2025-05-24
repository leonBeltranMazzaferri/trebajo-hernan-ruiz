import { StyleSheet, Text, View } from 'react-native';
export default function ComponenteUno () {
    return(
        
        <View style={styles.container}>
        <Text>titulo</Text>
        </View>

    );
  
  
}

const styles = StyleSheet.create({
    container: {
      flex: 0.9,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });