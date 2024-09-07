import Login from "@/components/Login";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {  StyleSheet, Text, View } from "react-native";
import { Link } from "@react-navigation/native";

const index = () => {
    return (
        <View className="flex-1 items-center justify-center ">
            <Text >Index</Text>
            <Login />
            <Link to={"/Register"}>Registrar</Link>
            <StatusBar style="auto" />
        </View>
    );
};


export default index;
