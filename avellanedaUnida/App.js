import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Button, View, Text, Alert} from 'react-native';
import ComponenteUno from './componentes/ComponenteUno';
import ComponenteDos from './componentes/ComponenteDos';
import ComponenteTres from './componentes/ComponenteTres';
export default function App() {
  return (
    <>
    <ComponenteUno/>
    <ComponenteDos/>
    <ComponenteTres/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
});