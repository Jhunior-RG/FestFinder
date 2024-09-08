import { Button, Pressable, Text, View } from "react-native";
import { Link } from "@react-navigation/native";
import Styles from "../globalStyles/styles";
import { useSession } from "@/hooks/ctx";
import { router } from "expo-router";

const Index = () => {
    const { session, signOut } = useSession();



    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Bienvenido a Fest Finder</Text>

            {session?.data ? (
                <>
                    <Text>{JSON.stringify(session.data.user)}</Text>

                    <Pressable style={Styles.button} onPress={()=> signOut()}>
                        <Text style={Styles.buttonText}>Cerrar Session</Text>
                    </Pressable>
                </>
            ) : (
                <>  
                    <Pressable style={Styles.button} onPress={()=> router.replace("/login")}>
                        <Text style={Styles.buttonText}>Iniciar sesion</Text>
                    </Pressable>
                    <Pressable style={Styles.button} onPress={()=> router.replace("/register")}>
                        <Text style={Styles.buttonText}>Resgistrarse</Text>
                    </Pressable>

                </>
            )}
        </View>
    );
};

export default Index;
