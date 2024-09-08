import { Button, Text, TextInput, TouchableOpacity } from "react-native";
import LoginGoogle from "./LoginGoogle";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import Styles from "../globalStyles/styles";

const getLoginData = async () => {
    return await SecureStore.getItem("login");
};

const Login = () => {
    useEffect(() => {}, []);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {
        if([email, password].includes("")){
            alert("Todos los campos son obligatorios")
            return;
        }
        // Send to the server
        const data = {email,password}
        try {
            const response = await fetch('http://localhost(remplazar con tu ip de momento):3000/logear_usuario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const userData = await response.json();
                console.log('Usuario logeado:', userData);
                alert('Inicio de sesion exitoso');
            } else {
                alert('Error en el inicio de sesion');
            }
        } catch (error) {
            console.error(error);
            alert('Error de conexión');
        }
    }

    return (
        <>
            <Text style={Styles.title}>Iniciar Sesion</Text>
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="purple"
                style={Styles.input}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry={true}
                placeholderTextColor="purple"
                style={Styles.input}
                onChangeText={setPassword}
            />
            <TouchableOpacity
                style={Styles.button}
                onPress={handleSubmit}
            >
                <Text style={Styles.buttonText}>Iniciar Sesion</Text>
            </TouchableOpacity>
            <Text style={[Styles.textDecoration, Styles.espaciado]}>
                Inicia sesion usando
            </Text>
            <LoginGoogle />
        </>
    );
};

export default Login;
