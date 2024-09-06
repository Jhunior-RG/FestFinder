import { Image, StyleSheet, Platform, View, Button, Text } from "react-native";
import { GoogleSignin,GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser"

WebBrowser.maybeCompleteAuthSession()

export default function HomeScreen() {
  const [userInfo, setUserInfo] = useState();

  useEffect(()=> {
    GoogleSignin.configure({
      webClientId: "241797999690-5d7gqo37970apjob9en4so1stfgkqhjm.apps.googleusercontent.com"
    });
  },[])

  const signin = async ()=> {
    try{
      await GoogleSignin.hasPlayServices();
      
      const user = await GoogleSignin.signIn();
      console.log(user)
      setUserInfo(user);

    }catch(e){
      console.log(JSON.stringify(e))
    }
  }
  const logout = async ()=> {
    setUserInfo();
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  }
  return(<View style={styles.container}>
    <Text>LOGIN</Text>
    {
      userInfo && (
        <Text>{JSON.stringify(userInfo?.data.user.name)}</Text>
      )
    }

    {userInfo ? (
      <Button title="Logout" onPress={logout}/>
    ):(
      <GoogleSigninButton size={GoogleSigninButton.Size.Standard} color={GoogleSigninButton.Color.Dark} onPress={signin}/>
    )}
  </View>)
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    }
});
