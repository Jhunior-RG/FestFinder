import Login from '@/components/Login'
import React from 'react'
import { Text, View } from 'react-native'
import Styles from "../globalStyles/styles";
import { Link } from "@react-navigation/native";

const login = () => {
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
  )
}

export default login