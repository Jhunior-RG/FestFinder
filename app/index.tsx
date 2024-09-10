import { Button, Pressable, Text, View, Image } from "react-native";
import Styles from "../globalStyles/styles";
import { useSession } from "@/hooks/ctx";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

const Index = () => {
    const { session, signOut } = useSession();

    return (
        <View style={Styles.container}>
            <Image
                source={require("../assets/images/festLogo.png")}
                style={estiloLogo.festLogo}
            />
            <Text style={Styles.title}>Bienvenido a Fest Finder</Text>

            {session?.data ? (
                <>
                    <Text>{JSON.stringify(session.data.user)}</Text>

                    <Pressable style={Styles.button} onPress={() => signOut()}>
                        <Text style={Styles.buttonText}>Cerrar Session</Text>
                    </Pressable>
                </>
            ) : (
                <>
                    <Pressable
                        style={Styles.button}
                        onPress={() => router.replace("/login")}
                    >
                        <Text style={Styles.buttonText}>Iniciar sesion</Text>
                    </Pressable>
                    <Pressable
                        style={Styles.button}
                        onPress={() => router.replace("/register")}
                    >
                        <Text style={Styles.buttonText}>Registrarse</Text>
                    </Pressable>
                </>
            )}
        </View>
    );
};

const estiloLogo = StyleSheet.create({
    festLogo: {
        width: 300,
        height: 200,
        resizeMode: "contain",
    },
});

export default Index;
