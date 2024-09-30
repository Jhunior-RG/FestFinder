import { Button, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import LoginGoogle from "./LoginGoogle";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import Styles from "../globalStyles/styles";

const getLoginData = async () => {
    return await SecureStore.getItem("login");
};

const Login = () => {
    useEffect(() => { }, []);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userData, setUserData] = useState(null);  // Almacena los datos del usuario
    const [imageUri, setImageUri] = useState("");    // Almacena la URI de la imagen

    const handleSubmit = async () => {
        if ([email, password].includes("")) {
            alert("Todos los campos son obligatorios")
            return;
        }
        // Send to the server
        const data = { email, password, g_id: "" }
        const API_URL = process.env.EXPO_PUBLIC_API_URL

        try {
            const response = await fetch(`${API_URL}/api/logear_usuario/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const userData = await response.json();
                setUserData(userData);  // Guarda los datos del usuario

                // Obtener la imagen del usuario
                const imageResponse = await fetch(`${API_URL}/api/imagen/${userData.imagen}/`);
                if (imageResponse.ok) {
                    const imageData = await imageResponse.json();
                    const fullImageUrl = `${API_URL}${imageData.imagen}`;  // URL completa de la imagen
                    setImageUri(fullImageUrl);  // Guarda la URI de la imagen
                } else {
                    alert('Error al cargar la imagen');
                }

                alert('Inicio de sesión exitoso');
            } else {
                alert('Error en el inicio de sesión');
            }
        } catch (error) {
            console.error(error);
            alert('Error de conexión');
        }
    }

    return (
        <>
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="#402158"
                style={Styles.input}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry={true}
                placeholderTextColor="#402158"
                style={Styles.input}
                onChangeText={setPassword}
            />
            <TouchableOpacity
                style={Styles.button}
                onPress={handleSubmit}
            >
                <Text style={Styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            {userData && (
                <>
                    <Text style={Styles.welcomeText}>Bienvenido {userData.nombre}</Text>

                    {/* Renderizar la imagen si está disponible */}
                    {imageUri ? (
                        <Image 
                            source={{ uri: imageUri }} 
                            style={{ width: 100, height: 100, borderRadius: 50 }} 
                        />
                    ) : (
                        <Text>No se encontró imagen</Text>
                    )}
                </>
            )}

            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <Text style={styles.lineText}>Inicia sesión usando</Text>
                <View style={styles.line} />
            </View>
            <LoginGoogle />
        </>
    );
};

const styles = {
    lineContainer: {
        flexDirection: "row" as const,
        alignItems: "center" as const,
        marginVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#402158",
    },
    lineText: {
        marginHorizontal: 10,
        color: "#402158",
        fontWeight: "500" as const,
    },
};

export default Login;
