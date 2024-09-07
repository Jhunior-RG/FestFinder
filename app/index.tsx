import Login from "@/components/Login";
import { StatusBar } from "expo-status-bar";
import {  StyleSheet, Text, View } from "react-native";
import { Link } from "@react-navigation/native";
import Styles from "../globalStyles/styles"

const index = () => {
    return (
        <View style={Styles.container}>
            <Text style = {Styles.title} >Index</Text>
            <Login />
            <Link to={"/Register"}>Registrar</Link>
            <StatusBar style="auto" />
        </View>
    );
};



export default index;
