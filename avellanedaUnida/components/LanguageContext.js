// components/LanguageContext.js
import React, { createContext, useContext, useState } from "react";

// Traducciones básicas en español, inglés y portugués
const translations = {
  es: {
    login: "Ingresar",
    register: "Registrarse",
    email: "Correo electrónico",
    password: "Contraseña",
    nombre: "Nombre",
    apellido: "Apellido",
    telefono: "Teléfono",
    success_register: "Usuario registrado correctamente",
    error_register: "No se pudo registrar",
    complete_fields: "Completa todos los campos",
    no_account: "¿No tienes cuenta? Regístrate",
    login_error: "Email o contraseña incorrectos",
     app_name: "avellanedaUnida",
  app_subtitle: "Explora y descubre tu entorno",
  map: "Mapa",
  map_description: "Encuentra ubicaciones y puntos de interés.",
  history: "Historia",
  history_description: "Aprende sobre los lugares que visitas.",
  recommendations: "Te puede interesar",
  recommendations_description: "Artículos y recomendaciones personalizadas.",
  complaint_box: "Buzón de quejas",
   history_title: "Avellaneda Historia",
  history_subtitle: "Descubrí hechos y curiosidades de nuestra ciudad",
  first_settlements: "Primeros asentamientos",
  first_settlements_text: "Conocé cómo comenzó el desarrollo urbano de Avellaneda.",
  industrial_growth: "Crecimiento industrial",
  industrial_growth_text: "El papel de Avellaneda en la historia productiva del país.",
  key_figures: "Personajes destacados",
  key_figures_text: "Figuras que marcaron la identidad cultural y deportiva."
  
  },
  en: {
    login: "Login",
    register: "Register",
    email: "Email",
    password: "Password",
    nombre: "First Name",
    apellido: "Last Name",
    telefono: "Phone",
    success_register: "User registered successfully",
    error_register: "Could not register",
    complete_fields: "Please complete all fields",
    no_account: "Don't have an account? Register",
    login_error: "Email or password incorrect",
     app_name: "avellanedaUnida",
  app_subtitle: "Explore and discover your surroundings",
  map: "Map",
  map_description: "Find locations and points of interest.",
  history: "History",
  history_description: "Learn about the places you visit.",
  recommendations: "You may be interested",
  recommendations_description: "Personalized articles and recommendations.",
  complaint_box: "Complaint Box",
    history_title: "Avellaneda History",
  history_subtitle: "Discover facts and curiosities of our city",
  first_settlements: "First Settlements",
  first_settlements_text: "Learn how the urban development of Avellaneda began.",
  industrial_growth: "Industrial Growth",
  industrial_growth_text: "Avellaneda's role in the country's productive history.",
  key_figures: "Key Figures",
  key_figures_text: "Figures that shaped cultural and sports identity."
  },
  pt: {
    login: "Entrar",
    register: "Registrar-se",
    email: "E-mail",
    password: "Senha",
    nombre: "Nome",
    apellido: "Sobrenome",
    telefono: "Telefone",
    success_register: "Usuário registrado com sucesso",
    error_register: "Não foi possível registrar",
    complete_fields: "Preencha todos os campos",
    no_account: "Não tem conta? Cadastre-se",
    login_error: "E-mail ou senha incorretos",
      app_name: "avellanedaUnida",
  app_subtitle: "Explore e descubra seu entorno",
  map: "Mapa",
  map_description: "Encontre locais e pontos de interesse.",
  history: "História",
  history_description: "Aprenda sobre os lugares que você visita.",
  recommendations: "Pode te interessar",
  recommendations_description: "Artigos e recomendações personalizadas.",
  complaint_box: "Caixa de reclamações",
    history_title: "História de Avellaneda",
  history_subtitle: "Descubra fatos e curiosidades da nossa cidade",
  first_settlements: "Primeiros assentamentos",
  first_settlements_text: "Saiba como começou o desenvolvimento urbano de Avellaneda.",
  industrial_growth: "Crescimento industrial",
  industrial_growth_text: "O papel de Avellaneda na história produtiva do país.",
  key_figures: "Personagens importantes",
  key_figures_text: "Figuras que marcaram a identidade cultural e esportiva.",
  },
};

// Creamos el contexto
const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  // Función de traducción
  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar fácilmente el contexto
export const useLanguage = () => useContext(LanguageContext);
