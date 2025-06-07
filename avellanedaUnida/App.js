import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import PrimerComponente from './componentes/PrimerComponente';
import SegundoComponente from './componentes/SegundoComponente';
import TercerComponente from './componentes/TercerComponente';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
    <Tabs.Navigator>   
    <Tabs.Screen name="Home" component={SegundoComponente}/>
     <Tabs.Screen name="maps" component={PrimerComponente}/>
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