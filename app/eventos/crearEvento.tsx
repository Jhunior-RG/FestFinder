import Notch from "@/components/Notch";
import {
    Button,
    Image,
    ImageBackground,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Styles from "@/globalStyles/styles";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Header from "@/components/Header";

const CrearEvento = () => {
    const [nombre, setNombre] = useState("");
    const [imagenEvento, setImagenEvento] = useState(null);
    const pickImage = async (setImage: any, aspect: [number, number]) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: aspect,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    const [date, setDate] = useState(new Date(1598051730000));

    return (
        <View>
            <Header title="Crear nuevo evento" />

            <ImageBackground
                source={imagenEvento ? { uri: imagenEvento } : undefined}
                style={{
                    backgroundColor: "gray",
                    height: 200,
                    width: 150,
                    position: "relative",
                }}
            >
                <Pressable
                    style={{
                        position: "absolute",
                        top: "auto",
                        left: "auto",
                        bottom: 5,
                        right: 5,
                    }}
                    onPress={() => {
                        pickImage(setImagenEvento, [3, 4]);
                    }}
                >
                    <FontAwesome name="camera" size={30} />
                </Pressable>
            </ImageBackground>
            <Text>Nombre de evento</Text>
            <TextInput
                placeholder="Nombre"
                onChangeText={(e) => setNombre(e)}
            />
            <Text>Fecha</Text>

 
        </View>
    );
};

export default CrearEvento;
