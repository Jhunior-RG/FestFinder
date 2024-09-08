import { Button, Text, TextInput } from "react-native";
import LoginGoogle from "./LoginGoogle";
import * as SecureStore from "expo-secure-store"
import { useEffect, useState } from "react";

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
            {dataStorage && (<Text>{dataStorage}</Text>)}
            <Button title="Save Storage" onPress={()=> saveLoginData("HOLA MUNDO")}/>
            <Button title="Remove Storage" onPress={()=>{removeLoginData()}}/>

            <Text >e-mail</Text>
            <TextInput
                
                placeholder="example@example"
            />
            <Text>Password</Text>
            <TextInput
                placeholder="your password"
                secureTextEntry={true}
            />
            <LoginGoogle />
            
        </>
    );
};

export default Login;
