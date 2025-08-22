import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Inicio from './componentes/Inicio';
import TercerComponente from './componentes/TercerComponente';
import mapa from './componentes/mapa';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tabs.Navigator
      screenOptions={({ route })  => ({
        tabBarIcon: ({focused , color , size}) => {
          let iconName;
          if (route.name === 'Bandera') {
                      iconName = focused ? 'flag' :
                      'flag-outline';}
          else if (route.name === 'Inicio') {
                      iconName = focused ? 'home' : 
                      'home-outline';}
          else if (route.name === 'Mapas') {
                     iconName = focused ? 'map' : 
                     'map-outline';}
          else if (route.name === 'Noticias') {
                     iconName = focused ? 'newspaper' : 
                     'newspaper-outline';}           
                  
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        
      })}
       >
        <Tabs.Screen name="Inicio" component={Inicio}/>
        <Tabs.Screen name="Mapas" component={mapa}/>
        <Tabs.Screen name="Noticias" component={TercerComponente}/>

      </Tabs.Navigator>
    </NavigationContainer>
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