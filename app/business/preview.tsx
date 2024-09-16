import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Styles from "@/globalStyles/styles";

const preview = () => {
    const [image2, setimage2] = useState(null);
    const [imageBanner, setImageBanner] = useState(null);
    const [tags, setTags] = useState<string[] | []>([]);
    const [tag, setTag] = useState<string>("");
    //const dataForm = useLocalSearchParams();

    const pickImage = async (setImage: any) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        //console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    const addTag = () => {
        if (!tag) {
            return;
        }
        setTag("");
        setTags([...tags, tag]);
    };
    const removeTag = (tag: string) => {
        const newTags = tags.filter((t) => t !== tag);
        setTags(newTags);
    };

    const handleSubmit = () => {
        // Enviar todos los datos al backend
    };
    return (
        <View style={{ marginTop: "10%" }}>
            <Pressable onPress={router.back} style={{ width: "100%" }}>
                <FontAwesome name="arrow-left" size={25} />
            </Pressable>
            <Text>Vista previa</Text>
            <Pressable
                onPress={() => {
                    pickImage(setImageBanner);
                }}
                style={Styles.banner}
            >
                {imageBanner ? (
                    <Image
                        source={{ uri: imageBanner }}
                        style={Styles.imageBanner}
                    />
                ) : (
                    <Text>
                        <FontAwesome name="plus" />
                        Agregar banner
                    </Text>
                )}
            </Pressable>

            <Pressable
                style={Styles.imageRoundedContainer}
                onPress={() => {
                    pickImage(setimage2);
                }}
            >
                {image2 ? (
                    <Image
                        source={{ uri: image2 }}
                        style={Styles.imageRounded}
                    />
                ) : (
                    <FontAwesome name="camera" size={30} />
                )}
            </Pressable>

            {tags &&
                tags.map((tag) => (
                    <View
                        style={[
                            Styles.input,
                            {
                                flexDirection: "row",
                                justifyContent: "space-between",
                            },
                        ]}
                    >
                        <Text>{tag}</Text>
                        <Pressable
                            onPress={() => {
                                removeTag(tag);
                            }}
                        >
                            <FontAwesome name="minus" />
                        </Pressable>
                    </View>
                ))}

            <View
                style={[
                    Styles.input,
                    Styles.tag
                ]}
            >
                <TextInput
                    value={tag}
                    onChangeText={setTag}
                    placeholder="Etiquetas"
                    style={{ width: "auto" }}
                />
                <Pressable
                    onPress={addTag}
                    style={Styles.addTag}
                >
                    <FontAwesome color={"white"} name="plus" />
                </Pressable>
            </View>

            <Pressable onPress={handleSubmit} style={Styles.button}>
                <Text style={Styles.buttonText}>Registrar negocio</Text>
            </Pressable>

            <View style={Styles.lineContainer}>
                <View style={Styles.line} />
                <View style={Styles.lineSelected} />
            </View>
        </View>
    );
};

export default preview;
