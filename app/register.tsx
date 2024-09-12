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
                placeholderTextColor="#402158"
                style={Styles.input}
                onChangeText={(e: string) => setName(e)}
            />
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="#402158"
                style={Styles.input}
                onChangeText={(e: string) => setEmail(e)}
            />
            <TextInput
                placeholder="Telefono"
                placeholderTextColor="#402158"
                style={Styles.input}
                onChangeText={(e: string) => setTelephone(e)}
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry={true}
                placeholderTextColor="#402158"
                style={Styles.input}
                onChangeText={(e: string) => setPassword(e)}
            />
            <TextInput
                placeholder="Confirmación de contraseña"
                secureTextEntry={true}
                placeholderTextColor="#402158"
                style={Styles.input}
                onChangeText={(e: string) => setConfirmPassword(e)}
            />
            <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
                <Text style={Styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <Text style={styles.lineText}>Registrarse usando</Text>
                <View style={styles.line} />
            </View>
            <LoginGoogle />

            <View style={Styles.linkContainer}>
                <Text>Ya tienes una cuenta? </Text>
                <Link to="/login" style={Styles.textDecoration2}>
                    Iniciar sesion
                </Link>
            </View>
        </View>
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

export default Register;
