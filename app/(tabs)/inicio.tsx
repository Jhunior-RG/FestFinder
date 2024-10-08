import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, router, type Href } from "expo-router";
import Styles from "@/globalStyles/styles";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
    FlatList,
    ImageBackground,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

interface Place {
    id: number;
    name: string;
    score: number;
    views: number;
    uri: any;
}

const inicio = () => {
    const [popularPlaces, setPopularPlaces] = useState<Place[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [openSearch, setOpenSearch] = useState(false);
    const [search, setSearch] = useState("");
    useEffect(() => {
        const places = [
            {
                id: 1,
                name: "AlicePark",
                score: 10,
                views: 540,
                uri: require("../../assets/images/alice-park.png"),
            },
        ];
        const newTags = ["Fiestas", "Conciertos", "Fiestas +21", "Bailes"];
        setPopularPlaces(places);
        setTags(newTags);
    }, []);

    const handleSubmitSearch = () => {
        console.log("buscando " + search);
        setOpenSearch(false);
    };
    
    const searchPress = ()=> {
        if(openSearch) {
            handleSubmitSearch()
        }
        setOpenSearch(!openSearch)
    }

    return (
        <View>
            {/* Notch*/}
            <View
                style={{ backgroundColor: "#402158", paddingVertical: 20 }}
            ></View>
            <View
                style={{
                    backgroundColor: "#402158",
                    paddingVertical: 15,
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    borderRadius: 5,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    bottom:5,
                }}
            >
                <FontAwesome style = {{marginLeft:"7%"}}name="bell" size={23} color={"white"} />
                {openSearch ? (
                    <TextInput
                        placeholder="Buscar"
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                        placeholderTextColor={"gray"}
                        autoFocus
                        onSubmitEditing={handleSubmitSearch}
                    />
                ) : (
                    <Pressable
                        style={{ flexDirection: "row" }}
                        onPress={() => console.log("cambiando de ciudad")}
                    >
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ color: "white" }}>Ciudad</Text>
                            <Text style={{ color: "white" }}>Cochabamba</Text>
                        </View>
                        <FontAwesome name="sort-down" size={23} color="white" />
                    </Pressable>
                )}

                <Pressable onPress={searchPress}>
                    <FontAwesome name="search" size={23} color={"white"} style={{marginRight:"7%"}} />
                </Pressable>
            </View>

            <Text style={styles.textoTitulo}>Categorias</Text>
            <FlatList
                data={tags}
                style = {styles.slider}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => {}}
                        style={{
                            alignItems: "center",
                            marginHorizontal: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Poppins-Regular",
                                textAlign: "center",
                                borderRadius: 20,
                                borderWidth: 2,
                                borderColor: "#956ca3",
                                color: "#956ca3",
                                paddingHorizontal: 10,
                                paddingVertical: 4,  
                                lineHeight: 24,      
                            }}
                        >
                            {item}
                        </Text>
                    </Pressable>
                )}
                horizontal
            />

            <Text
                style={[styles.textoTitulo, {marginTop: "5%"}]}
            >
                Eventos populares
            </Text>
            <Text
                style={[styles.textoTitulo,{marginTop:"5%"}]}
            >
                Lugares populares
            </Text>
            <View style={{ marginLeft: "2%", marginTop:"3%" }}>
                {popularPlaces.map((place) => (
                    <Link
                        href={("/places/" + place.id) as Href}
                        key={place.id}
                        style={{ marginLeft: "3%" }}
                    >
                        <ImageBackground
                            resizeMode="cover"
                            source={place.uri}
                            style={{
                                width: 150,
                                height: 200,
                                borderRadius: 10,
                                overflow: "hidden",
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    padding: 5,
                                }}
                            >
                                <Text
                                    style={{
                                        color: "white",
                                        fontFamily: "Poppins-Regular",
                                        textAlign: "center",
                                    }}
                                >
                                    {place.name}
                                </Text>
                                <Text
                                    style={{
                                        color: "white",
                                        textAlign: "center",
                                    }}
                                >
                                    <FontAwesome name="star" color={"yellow"} />
                                    {place.score} / 10
                                </Text>
                            </View>
                        </ImageBackground>
                    </Link>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textoTitulo: {
        fontWeight: "bold" as "bold",
        fontSize: 18,
        marginLeft: "3%",
    },
    slider:{
        marginLeft: "5%",
        marginTop: "3%",
    },
})

export default inicio;
