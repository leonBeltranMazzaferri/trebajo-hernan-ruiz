import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Componentes
import Inicio from "./components/Inicio";
import Mapa from "./components/mapa";
import PrimerComponente from "./components/PrimerComponente";
import TercerComponente from "./components/TercerComponente";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Bandera") {
              iconName = focused ? "flag" : "flag-outline";
            } else if (route.name === "Inicio") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Mapas") {
              iconName = focused ? "map" : "map-outline";
            } else if (route.name === "Noticias") {
              iconName = focused ? "newspaper" : "newspaper-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#ffffff",
            borderTopWidth: 1,
            borderTopColor: "#e0e0e0",
            height: 60,
            paddingBottom: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            marginBottom: 3,
          },
        })}
      >
        <Tabs.Screen name="Inicio" component={Inicio} />
        <Tabs.Screen name="Mapas" component={Mapa} />
        <Tabs.Screen name="Bandera" component={PrimerComponente} />
        <Tabs.Screen name="Noticias" component={TercerComponente} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
