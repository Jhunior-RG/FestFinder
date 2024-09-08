import { Text, View, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";
import Login from "@/components/Login";
import { StatusBar } from "expo-status-bar";
import Styles from "../globalStyles/styles";

const Index = () => {
    return (
        <View style={Styles.container}>
            <Login />
            <View style={Styles.linkContainer}>
                <Text>No tienes una cuenta? </Text>
                <Link to="/Register" style={Styles.linkText}>
                    Registrarse
                </Link>
            </View>
        </View>
    );
};


export default Index;
