import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, router, useLocalSearchParams, type Href } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    ImageBackground,
    Text,
    View,
    StyleSheet,
    Image,
    Pressable,
    TextInput,
    ScrollView,
    FlatList,
    SafeAreaView,
} from "react-native";

type Establecimiento = {
    nombre: string;
    direccion: string;
    descripcion: string;
    tipo: string;
    nro_ref: string;
    banner: any;
    logo: any;
};

type Evento = {
    id: number;
    nombre: string;
    fecha: Date;
    hora?: string;
    image: any;
};
type Lugar = {
    id: number;
    nombre: string;
    valoracion: number;
    image: any;
};

type Params = {
    id: string;
};
const Place = () => {
    const [establecimiento, setEstablecimiento] =
        useState<Establecimiento | null>(null);
    const [etiquetas, setEtiquetas] = useState<string[]>([]);
    const [valoracion, setValoracion] = useState<number | null>(null);
    const [proximosEventos, setProximosEventos] = useState<Evento[]>([]);
    const [fotos, setFotos] = useState<any[]>([]);
    const [lugaresParecidos, setLugaresParecidos] = useState<Lugar[]>([]);

    const params = useLocalSearchParams();

    useEffect(() => {
        // id del establecimiento
        const { id } = params;

        // Simulación de llamada a API para el establecimiento
        const establecimiento = {
            nombre: "Alice Park",
            direccion: "Av Melchor Urquidi S/N, Cochabamba",
            descripcion: "",
            banner: require("../../assets/images/alice-park.png"),
            logo: require("../../assets/images/alice-park.png"),
            tipo: "tipo de local",
            nro_ref: "70711360",
        };

        // Simulación de llamada a API para etiquetas
        const etiquetas = [
            "Etiqueta 1",
            "Etiqueta 2",
            "Etiqueta 3",
            "Etiqueta 4",
        ];

        // Simulación de llamada a API para valoraciones
        const valoracion = 9.2;

        // Simulación de llamada a API para próximos eventos
        const proximosEventos = [
            {
                id: 2,
                nombre: "Alice Park-Noche de colores",
                fecha: new Date("2024-09-02"),
                image: require("../../assets/images/alice-park-event-1.png"),
            },
            {
                id: 3,
                nombre: "Alice Park - Neon Party",
                fecha: new Date("2024-09-07"),
                image: require("../../assets/images/alice-park-event-2.png"),
            },
        ];

        // Simulación de llamada a API para fotos
        const fotos = [
            require("../../assets/images/alice-park-1.png"),
            require("../../assets/images/alice-park-2.png"),
        ];

        const lugaresParecidos = [
            {
                id: 10,
                nombre: "Mandarina",
                valoracion: 8,
                image: require("../../assets/images/lugar-1.png"),
            },
            {
                id: 11,
                nombre: "Noma",
                valoracion: 9,
                image: require("../../assets/images/lugar-2.png"),
            },
            {
                id: 12,
                nombre: "Euphoria",
                valoracion: 9,
                image: require("../../assets/images/lugar-3.png"),
            },
            {
                id: 13,
                nombre: "Mamba",
                valoracion: 9,
                image: require("../../assets/images/lugar-4.png"),
            },
        ];

        // Establecer los estados
        setEstablecimiento(establecimiento);
        setEtiquetas(etiquetas);
        setValoracion(valoracion);
        setProximosEventos(proximosEventos);
        setFotos(fotos);
        setLugaresParecidos(lugaresParecidos);
    }, []);

    const handleCalificar = () => {
        alert("enviando calificacion");
    };

    return (
        <ScrollView style={styles.container}>
            {establecimiento && (
                <>
                    <ImageBackground
                        source={establecimiento.banner}
                        style={styles.imageBackground}
                    >
                        <FontAwesome
                            name="arrow-left"
                            color={"white"}
                            size={30}
                        />
                        <FontAwesome name="heart" color={"white"} size={30} />
                    </ImageBackground>
                    <Image source={establecimiento.logo} style={styles.logo} />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <View>
                            <Text>{establecimiento.nombre}</Text>
                            <Text>{establecimiento.tipo}</Text>
                        </View>
                        <Link href={"https://wa.link/9nq0oq"}>
                            <FontAwesome
                                name="whatsapp"
                                color={"green"}
                                size={35}
                            />
                        </Link>
                    </View>
                    <Text>
                        <FontAwesome name="location-arrow" />
                        {establecimiento.direccion}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}
                    >
                        {etiquetas.map((etiqueta) => (
                            <Text key={etiqueta}>{etiqueta}</Text>
                        ))}
                    </View>
                    <Text>Calificacion</Text>
                    <View
                        style={{
                            borderColor: "purple",
                            borderWidth: 2,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <View>
                            <Text>
                                {" "}
                                <FontAwesome name="star" color={"orange"} />
                                {valoracion} / 10
                            </Text>
                            <TextInput placeholder="Añade tus calificaciones y reseñas" />
                        </View>
                        <Pressable onPress={handleCalificar}>
                            <Text>Calificar</Text>
                        </Pressable>
                    </View>
                    <Text>Proximos eventos</Text>
                    <View style={{ flexDirection: "row" }}>
                        {proximosEventos.map((evento) => (
                            <Pressable
                                onPress={() => {
                                    router.navigate(
                                        ("/eventos/" + evento.id) as Href
                                    );
                                }}
                                style={{ flexDirection: "column", flex: 1 }}
                                key={evento.id}
                            >
                                <ImageBackground
                                    source={evento.image}
                                    style={{ height: 200, width: 150 }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: "white",
                                            width: "40%",
                                        }}
                                    >
                                        <Text>
                                            {evento.fecha.toLocaleDateString(
                                                "es-ES",
                                                {
                                                    day: "numeric",
                                                    month: "short",
                                                }
                                            )}
                                        </Text>
                                    </View>
                                </ImageBackground>
                                <Text>{evento.nombre}</Text>
                            </Pressable>
                        ))}
                    </View>
                    <Text>Fotos</Text>
                    <FlatList
                        data={fotos}
                        renderItem={({ item }) => (
                            <Image
                                source={item}
                                style={{
                                    width: "auto",
                                    height: 150,
                                    aspectRatio: "16/9",
                                    margin: 2,
                                }}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text>Lugares parecidos</Text>
                        <Link href={"/"}>
                            Ver Mas <FontAwesome name="arrow-right" />
                        </Link>
                    </View>

                    <FlatList
                        data={lugaresParecidos}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <Pressable
                                onPress={() => {
                                    router.navigate(
                                        ("/places/" + item.id) as Href
                                    );
                                }}
                            >
                                <Image
                                    source={item.image}
                                    style={{ width: 100, height: 100 }}
                                />
                                <Text>{item.nombre}</Text>
                                <Text>
                                    <FontAwesome name="star" color={"orange"} />{" "}
                                    {item.valoracion}/10
                                </Text>
                            </Pressable>
                        )}
                        horizontal
                    />
                </>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        width: "100%",
        height: 200,
        justifyContent: "space-between",
    },
    text: {
        fontSize: 24,
        color: "#fff",
        textAlign: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 10,
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
});

export default Place;
