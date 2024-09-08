import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Styles from "../globalStyles/styles";
import { Link } from "@react-navigation/native";
import { useState } from "react";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [telephone, setTelephone] = useState("");

    const handleSubmit = () => {
        if( [name,email,password,confirmPassword,telephone].includes("")){
            alert("Todos los campos son obligatorios");
            return null;
        }
        if (password !== confirmPassword) {
            alert("password is not correct");
            return null;
        }
        // send to the server
        const data = { name, email, telephone, password, confirmPassword };
        console.log(data);
    };

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Registrarse</Text>
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
