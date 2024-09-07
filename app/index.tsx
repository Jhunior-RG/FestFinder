import Login from "@/components/Login";
import { StatusBar } from "expo-status-bar";
import {  StyleSheet, Text, View } from "react-native";
import { Link } from "@react-navigation/native";

const index = () => {
    return (
        <View style={styles.container}>
            <Text >Index</Text>
            <Login />
            <Link to={"/Register"}>Registrar</Link>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})


export default index;
