import {
    GoogleSignin,
    GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const LoginGoogle = () => {
    const [userInfo, setUserInfo] = useState(null);
    const getStorageData = async () => {};
    useEffect(() => {
        GoogleSignin.configure({
            webClientId:
                "241797999690-5d7gqo37970apjob9en4so1stfgkqhjm.apps.googleusercontent.com",
        });

        getStorageData();
    }, []);
    const signin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const user = await GoogleSignin.signIn();
            setUserInfo(user);
        } catch (e) {
            console.log(JSON.stringify(e));
        }
    };
    const logout = async () => {
        setUserInfo(null);
        GoogleSignin.revokeAccess();
        GoogleSignin.signOut();
    };
    return (
        <>
            {userInfo && <Text>{JSON.stringify(userInfo?.data.user)}</Text>}

            {userInfo ? (
                <Button title="Logout" onPress={logout} />
            ) : (
                <GoogleSigninButton
                    size={GoogleSigninButton.Size.Standard}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signin}
                />
            )}
        </>
    );
};


export default LoginGoogle;
