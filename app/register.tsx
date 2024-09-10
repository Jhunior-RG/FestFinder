import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import Styles from "../globalStyles/styles";
import { Link } from "@react-navigation/native";
import { useState } from "react";
import LoginGoogle from "@/components/LoginGoogle";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [telephone, setTelephone] = useState("");

    const handleSubmit = async () => {
        if ([name, email, password, confirmPassword, telephone].includes("")) {
            alert("Todos los campos son obligatorios");
            return null;
        }
        if (password !== confirmPassword) {
            alert("password is not correct");
            return null;
        }
        // send to the server
        const data = { name, email, telephone, password, confirmPassword };

        const API_URL = process.env.EXPO_PUBLIC_API_URL;
        console.log("API_URL:", API_URL);

        try {
            const response = await fetch(API_URL + "/registrar_usuario", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const userData = await response.json();
                console.log("Usuario registrado:", userData);
                alert("Registro exitoso");
            } else {
                alert("Error al registrar");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={Styles.container}>
            <Image
                source={require("../assets/images/festLogo.png")}
                style={Styles.festLogo}
            />
            <TextInput
                placeholder="Nombre"
                placeholderTextColor="purple"
                style={Styles.input}
                onChangeText={(e: string) => setName(e)}
            />
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="purple"
                style={Styles.input}
                onChangeText={(e: string) => setEmail(e)}
            />
            <TextInput
                placeholder="Telefono"
                placeholderTextColor="purple"
                style={Styles.input}
                onChangeText={(e: string) => setTelephone(e)}
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry={true}
                placeholderTextColor="purple"
                style={Styles.input}
                onChangeText={(e: string) => setPassword(e)}
            />
            <TextInput
                placeholder="Confirmación de contraseña"
                secureTextEntry={true}
                placeholderTextColor="purple"
                style={Styles.input}
                onChangeText={(e: string) => setConfirmPassword(e)}
            />
            <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
                <Text style={Styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
            <Text style={[Styles.textDecoration, Styles.espaciado]}>
                Registrate usando
            </Text>
            <LoginGoogle />

            <View style={Styles.linkContainer}>
                <Text>Ya tienes una cuenta? </Text>
                <Link to="/login" style={Styles.linkText}>
                    Iniciar sesion
                </Link>
            </View>
        </View>
    );
};

export default Register;
