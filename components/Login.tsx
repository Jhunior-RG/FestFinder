import { Button, Text, TextInput,TouchableOpacity } from "react-native";
import LoginGoogle from "./LoginGoogle";
import * as SecureStore from "expo-secure-store"
import { useEffect, useState } from "react";
import Styles from "../globalStyles/styles";

const getLoginData = async () =>{
    return await SecureStore.getItem("login")
}

const Login = () => {
    const [dataStorage, setDataStorage] = useState("")
    
    const saveLoginData = async (data:string) => {
        setDataStorage(data)
        await SecureStore.setItemAsync("login", data)
        console.log("Saved")
    }
    const removeLoginData = async () =>{
        setDataStorage("")  
        await SecureStore.deleteItemAsync("login")
        console.log("Removed")
    }
    useEffect(()=>{
        getLoginData().then(data => setDataStorage(data))
    },[])
    
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
