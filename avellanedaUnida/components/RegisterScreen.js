import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function RegisterScreen({ navigation }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!nombre || !apellido || !telefono || !email || !password) {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }

    try {
      const res = await fetch("http://192.168.0.97:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, apellido, telefono, email, password }),
      });

      const data = await res.json();

      if (data.success) {
        Alert.alert("Éxito", "Usuario registrado");
        navigation.goBack();
      } else {
        Alert.alert("Error", data.message || "No se pudo registrar");
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "No se pudo registrar");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrate</Text>

      <TextInput style={styles.input} placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput style={styles.input} placeholder="Apellido" value={apellido} onChangeText={setApellido} />
      <TextInput style={styles.input} placeholder="Teléfono" value={telefono} onChangeText={setTelefono} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Correo electrónico" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 30 },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: "#2B6E6E" },
  input: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginBottom: 15 },
  button: { backgroundColor: "#2B6E6E", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
});
