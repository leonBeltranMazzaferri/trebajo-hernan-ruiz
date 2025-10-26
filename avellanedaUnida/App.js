import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';

import Inicio from './components/Inicio';
import Noticias from './components/Noticias';
import Mapa from './components/mapa';

const Tabs = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Inicio') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'Mapas') iconName = focused ? 'map' : 'map-outline';
            else if (route.name === 'Noticias') iconName = focused ? 'newspaper' : 'newspaper-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tabs.Screen name="Inicio" component={Inicio} />
        <Tabs.Screen name="Mapas" component={Mapa} />
        <Tabs.Screen name="Noticias" component={Noticias} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
