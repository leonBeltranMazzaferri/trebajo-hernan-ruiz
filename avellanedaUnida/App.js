import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import PrimerComponente from './componentes/PrimerComponente';
import Inicio from './componentes/Inicio';
import TercerComponente from './componentes/TercerComponente';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
    <Tabs.Navigator>   
    <Tabs.Screen name="Bandera" component={Inicio}/>
     <Tabs.Screen name="Inicio" component={PrimerComponente}/>
     <Tabs.Screen name="Mapas" component={TercerComponente}/>
     <Tabs.Screen name="Noticias" component={TercerComponente}/>
    </Tabs.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});