import { useSession } from "@/hooks/ctx";
import { Image, Pressable, Text, View } from "react-native";
import Styles from "../../globalStyles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ItemProfile from "@/components/ItemProfile";
import Header from "@/components/Header";
import { router } from "expo-router";

const profile = () => {
    const { session, signOut } = useSession();
    const { name, photo, email } = session.data.user;

    return (
        <View>
            <Header title="Mi perfil" />
            <View style={Styles.containerProfile}>
                <Image source={{ uri: photo }} style={Styles.imageProfile} />
                <View
                    style={{
                        alignContent: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text>{name}</Text>
                    <Text>{email}</Text>
                </View>
            </View>
            <Text>Perfil</Text>
            <ItemProfile
                onPress={() => {}}
                color="#7D5683"
                text="Informacion personal"
                icon="user-o"
            />
            <ItemProfile
                onPress={() => {}}
                color="#7D5683"
                text="Lugares favoritos"
                icon="heart-o"
            />
            <ItemProfile
                onPress={() => {}}
                color="#7D5683"
                text="Historial"
                icon="clock-o"
            />
            <Text>Configuracion</Text>
            <ItemProfile onPress={() => {}} text="Notificaciones" />
            <ItemProfile
                onPress={() => {
                    router.navigate("/business/register_business");
                }}
                text="Registrar mi local"
            />
            <ItemProfile
                onPress={() => {
                    signOut();
                }}
                text="Cerrar sesion"
            />
        </View>
    );
};

export default profile;
