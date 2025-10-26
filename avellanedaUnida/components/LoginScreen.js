import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function LoginScreen({ onLoginSuccess, navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }

    try {
      const res = await fetch("http://192.168.0.97:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        onLoginSuccess(); // Login correcto
      } else {
        Alert.alert("Error", "Email o contraseña incorrectos");
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "No se pudo iniciar sesión");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MapaAPP 📍</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={{ marginTop: 20 }}
      >
        <Text style={{ textAlign: "center", color: "#2B6E6E", fontWeight: "bold" }}>
          ¿No tienes cuenta? Registrate
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 30 },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: "#2B6E6E" },
  input: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginBottom: 20 },
  button: { backgroundColor: "#2B6E6E", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
});
