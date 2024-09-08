import { Text, TextInput, TouchableOpacity } from "react-native";
import LoginGoogle from "./LoginGoogle";
import Styles from "../globalStyles/styles";

const Login = () => {
    return (
        <>
            <Text style={Styles.title} >Iniciar Sesion</Text>
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="purple"
                style={Styles.input}
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry={true}
                placeholderTextColor="purple"
                style={Styles.input}
            />
            <TouchableOpacity
                style={Styles.button}
                onPress={() => {
                    console.log("PRUEBA DE QUE FUNCIONA");
                }}
            >
                <Text style={Styles.buttonText}>Iniciar Sesion</Text>
            </TouchableOpacity>
            <Text style = {[Styles.textDecoration, Styles.espaciado]}>Inicia sesion usando</Text>
            <LoginGoogle />

        </>
    );
};



export default Login;
