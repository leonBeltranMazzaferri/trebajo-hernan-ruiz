import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";

import Inicio from "./components/Inicio";
import Noticias from "./components/Noticias";
import Mapa from "./components/mapa";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";

// Contexto de idioma
import { LanguageProvider } from "./components/LanguageContext";

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

// Navegación inferior
function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Inicio") iconName = focused ? "home" : "home-outline";
          else if (route.name === "Mapas") iconName = focused ? "map" : "map-outline";
          else if (route.name === "Noticias") iconName = focused ? "newspaper" : "newspaper-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Inicio" component={Inicio} />
      <Tabs.Screen name="Mapas" component={Mapa} />
      <Tabs.Screen name="Noticias" component={Noticias} />
    </Tabs.Navigator>
  );
}

// App principal
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LanguageProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isLoggedIn ? (
            <>
              <Stack.Screen name="Login">
                {(props) => (
                  <LoginScreen
                    {...props}
                    onLoginSuccess={() => setIsLoggedIn(true)}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          ) : (
            <Stack.Screen name="Main" component={TabsNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageProvider>
  );
}

registerRootComponent(App);
export default App;
