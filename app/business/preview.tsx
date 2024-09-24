import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Styles from "@/globalStyles/styles";

const preview = () => {
    const [image2, setimage2] = useState(null);
    const [imageBanner, setImageBanner] = useState(null);
    const [tags, setTags] = useState<string[] | []>([]);
    const [tag, setTag] = useState<string>("");

    const pickImage = async (setImage: any, aspect: [number, number]) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: aspect,
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
        <View style={[{flex:1, width: "100%",alignItems: "center" ,justifyContent: "space-between"}]}>
            <View style={{ width: "100%",alignItems: "center"}}>
            <Pressable
                onPress={router.back}
                style={{
                    left: "-40%",
                    marginTop: 30,
                    zIndex: 1,
                }}
            >
                <FontAwesome name="arrow-left" size={25} />
            </Pressable>
                
            <Text
                style={[
                    Styles.subtitle,
                    { marginLeft: 30, alignSelf: "flex-start",marginTop: 10 },
                ]}
            >
                Vista previa
            </Text>
            <Pressable
                onPress={() => {
                    pickImage(setImageBanner, [4, 3]);
                }}
                style={Styles.banner}
            >
                {imageBanner ? (
                    <Image
                        source={{ uri: imageBanner }}
                        style={Styles.imageBanner}
                    />
                ) : (
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <FontAwesome name="plus" style={{ marginRight: 10 }} />
                        <Text>Agregar banner</Text>
                    </View>
                )}
            </Pressable>

            <Pressable
                style={[
                    Styles.imageRoundedContainer,
                    {
                        left: "-30%"
                    },
                ]}
                onPress={() => {
                    pickImage(setimage2, [1, 1]);
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

            <View style={[Styles.input, Styles.tag]}>
                <TextInput
                    value={tag}
                    onChangeText={setTag}
                    placeholder="Etiquetas"
                    style={[{ color: "#402158",  width: "80%" }]}
                />
                <Pressable onPress={addTag} style={Styles.addTag}>
                    <FontAwesome color={"white"} name="plus" />
                </Pressable>
            </View>

            <Pressable onPress={handleSubmit} style={Styles.button}>
                <Text style={Styles.buttonText}>Registrar negocio</Text>
            </Pressable>


            </View>
            <View>
                <View
                    style={[
                        Styles.lineContainer,
                        {
                            marginBottom: 30,
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: 10,
                        },
                    ]}
                >
                    <View style={[Styles.line, { borderRadius: 10 }]} />
                    <View style={[Styles.lineSelected, { borderRadius: 10 }]} />
                </View>
            </View>
        </View>
    );
};

export default preview;
