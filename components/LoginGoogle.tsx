import {
    GoogleSignin,
    GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import React, { useEffect, useState } from "react";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useSession } from "@/hooks/ctx";
import { router } from "expo-router";
import Styles from "../globalStyles/styles";

WebBrowser.maybeCompleteAuthSession();

const LoginGoogle = () => {
    const { signIn } = useSession();

    const signinGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const user = await GoogleSignin.signIn();

            if (user.data) {
                signIn(user);
                router.replace("/");
            }
        } catch (e) {
            console.log(JSON.stringify(e));
        }
    };

    return (
        <>
            <Pressable style={Styles.buttonGoogle} onPress={signinGoogle}>
                <Image
                    source={require("../assets/images/googleIcon.png")}
                    style={Styles.tinylogo}
                />
                <Text style={Styles.buttonTextGoogle}>Iniciar Con Google</Text>
            </Pressable>
        </>
    );
};

export default LoginGoogle;
