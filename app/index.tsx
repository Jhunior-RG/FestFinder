import { Text, View, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";
import Styles from "../globalStyles/styles";

const Index = () => {
    return (
        <View style={Styles.container}>
            <Link to="/login" style={Styles.linkText}>
                Iniciar sesion
            </Link>
            
            <Link to="/register" style={Styles.linkText}>
                Registrarse
            </Link>
        </View>
    );
};


export default Index;
