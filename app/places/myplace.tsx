import Notch from "@/components/Notch";
import Styles from "@/globalStyles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, type Href } from "expo-router";
import moment from "moment";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import {
    FlatList,
    Image,
    ImageBackground,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypes";

interface Horario {
    desde: string;
    hasta: string;
}
interface HorarioAtencion {
    dia: number;
    horario: Horario | null;
}
const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
];
type Evento = {
    id: number;
    nombre: string;
    fecha: Date;
    hora?: string;
    image: any;
    agregarEvento?: boolean;
};

const MyPlace = () => {
    const [portada, setPortada] = useState();
    const [imagenes, setImagenes] = useState();
    const [imagenLocal, setImagenLocal] = useState();
    const [nombre, setNombre] = useState<String>();
    const [tipo, setTipo] = useState<String>();
    const [direccion, setDireccion] = useState<String>();
    const [establecimientoAbierto, setEstablecimientoAbierto] = useState(false);
    const [valoracion, setValoracion] = useState<Double>();
    const [horarioAtencion, setHorarioAtencion] = useState<HorarioAtencion[]>(
        []
    );
    const [etiquetas, setEtiquetas] = useState<String[]>([]);
    const [horarioOpened, setHorarioOpened] = useState(false);
    const [eventos, setEventos] = useState<Evento[]>([]);
    const [fotos, setFotos] = useState<any[]>([]);

    useEffect(() => {
        const eventos = [
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
        const fotos = [
            require("../../assets/images/alice-park-1.png"),
            require("../../assets/images/alice-park-2.png"),
        ];
        const horarioAtencion = [
            {
                dia: 0,
                horario: {
                    desde: "09:00",
                    hasta: "01:00",
                },
            },
            {
                dia: 1,
                horario: null,
            },
            {
                dia: 2,
                horario: null,
            },
            {
                dia: 3,
                horario: null,
            },
            {
                dia: 4,
                horario: null,
            },
            {
                dia: 5,
                horario: {
                    desde: "19:00",
                    hasta: "01:00",
                },
            },
            {
                dia: 6,
                horario: {
                    desde: "19:00",
                    hasta: "01:00",
                },
            },
        ];

        const etiquetas = [
            "Etiqueta 1",
            "Etiqueta 2",
            "Etiqueta 3",
            "Etiqueta 4",
        ];
        const valoracion = 9.2;

        const isOpenToday = () => {
            const today = getDay(new Date());
            const atencionToday = horarioAtencion.filter(
                (horario) => horario.dia === today
            )[0];
            const horarioToday = atencionToday.horario;

            if (!horarioToday) return false;

            const desde = moment(horarioToday.desde, "HH:mm");
            const hasta = moment(horarioToday.hasta, "HH:mm");
            const current = moment();

            if (hasta.isBefore(desde)) {
                // Verificar si está entre 'desde' y medianoche o entre medianoche y 'hasta'
                return (
                    current.isBetween(desde, moment("23:59:59", "HH:mm")) ||
                    current.isBetween(moment("00:00", "HH:mm"), hasta)
                );
            }

            // Si no cruza medianoche, comprobar de forma estándar
            return current.isBetween(desde, hasta);
        };
        setEstablecimientoAbierto(isOpenToday());
        setEventos(eventos);
        setPortada(require("../../assets/images/alice-park.png"));
        setImagenLocal(require("../../assets/images/alice-park.png"));
        setNombre("Alice Park");
        setTipo("Tipo de local");
        setDireccion("Av Melchor Urquidi S/N, Cochabamba");
        setValoracion(valoracion);
        setEtiquetas(etiquetas);
        setHorarioAtencion(horarioAtencion);
        setFotos(fotos);
    }, []);

    const guardarImagen = (imagen:ImagePicker.ImagePickerAsset)=>{
        //guardar en el servidor
        const formData = new FormData();
        formData.append("image", {
            uri: imagen.uri,
            type: imagen.type,
            name: "image.jpg",
        }as any);
        //llamar al api para guardar la imagen

        console.log('guardando imagen en el servidor')
    }

    const getDay = (date: Date) => {
        const day = date.getDay();
        return day === 0 ? 6 : day - 1;
    };

    const pickImage = async (setImage: any, aspect: [number, number]) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: aspect,
            quality: 1,
        });

        if (!result.canceled) {
            guardarImagen(result.assets[0]);
            setImage(result.assets[0]);
        }
    };
    const handleFoto = ()=> {
        pickImage((foto:ImagePicker.ImagePickerAsset)=>{
            setFotos([foto,...fotos])
        }, [16, 9]);
    }

    return (
        <View>
            <Notch />
            <ScrollView>
                <ImageBackground
                    source={portada}
                    style={[Styles.imageBanner, { position: "relative" }]}
                >
                    <Pressable onPress={router.back}>
                        <FontAwesome
                            name="arrow-left"
                            color={"white"}
                            size={30}
                            style={{
                                position: "absolute",
                                top: 10,
                                left: 10,
                            }}
                        />
                    </Pressable>
                    <Pressable
                        style={{
                            right: 0,
                            bottom: 0,
                            top: "auto",
                            left: "auto",
                            backgroundColor: "purple",
                            position: "absolute",
                            flexDirection: "row",
                        }}
                    >
                        <FontAwesome name="camera" color={"white"} size={20} />
                        <Text style={{ color: "white" }}>Cambiar Portada</Text>
                    </Pressable>
                </ImageBackground>
                <Image
                    source={imagenLocal}
                    style={[
                        styles.redondoImg,
                        styles.contenedorIMG,
                        {
                            left: "2%",
                        },
                    ]}
                />
                <Pressable style={[styles.changeImage, { top: -70 }]}>
                    <FontAwesome name="camera" color={"white"} size={20} />
                </Pressable>
                <View style={{ top: -70 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <View style={{}}>
                            <Text
                                style={[
                                    { fontFamily: "Poppins-Bold" },
                                    { left: "10%" },
                                    styles.nombreLocal,
                                ]}
                            >
                                {nombre}
                            </Text>
                            <Text
                                style={[
                                    { fontFamily: "Poppins-Regular" },
                                    { left: "10%" },
                                    styles.tipoLocal,
                                ]}
                            >
                                {tipo}
                            </Text>
                        </View>
                        <View style={{}}>
                            <Pressable style={{ backgroundColor: "purple" }}>
                                <Text style={{ color: "white" }}>
                                    Editar Local
                                </Text>
                            </Pressable>
                        </View>
                    </View>

                    <View>
                        <Text
                            style={
                                establecimientoAbierto
                                    ? { color: "green" }
                                    : { color: "red" }
                            }
                        >
                            <FontAwesome
                                name="circle"
                                color={establecimientoAbierto ? "green" : "red"}
                                size={15}
                            />
                            {establecimientoAbierto ? "Abierto" : "Cerrado"}
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Pressable
                                onPress={() => {
                                    setHorarioOpened(!horarioOpened);
                                }}
                            >
                                <Text>
                                    Ver horario y dias de atencion
                                    <FontAwesome
                                        name="chevron-down"
                                        size={15}
                                    />
                                </Text>
                            </Pressable>
                            <Pressable>
                                <Text>Editar horario</Text>
                            </Pressable>
                        </View>

                        {horarioOpened && (
                            <View>
                                {horarioAtencion.map((horarioDia, index) => (
                                    <View
                                        key={index}
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Text>{days[horarioDia.dia]}</Text>
                                        <Text>
                                            {horarioDia.horario
                                                ? horarioDia.horario.desde +
                                                  " / " +
                                                  horarioDia.horario.hasta
                                                : "Cerrado"}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        )}

                        <Text
                            style={[
                                { fontFamily: "Poppins-Regular" },
                                { marginLeft: 10, fontSize: 14 },
                            ]}
                        >
                            <FontAwesome
                                name="location-arrow"
                                style={{ marginRight: 10 }}
                            />
                            {direccion}
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-around",
                            }}
                        >
                            <Pressable
                                style={{
                                    backgroundColor: "rgba(235, 182, 255, 0.5)",
                                    borderRadius: 10,
                                    paddingHorizontal: 8,
                                    marginTop: "3%",
                                }}
                            >
                                <FontAwesome name="plus" color={"white"} />
                            </Pressable>
                            {etiquetas.map((etiqueta, index) => (
                                <Text
                                    key={index}
                                    style={[
                                        {
                                            fontFamily: "Poppins-Regular",
                                            marginTop: "3%",
                                        },
                                        {
                                            backgroundColor:
                                                "rgba(235, 182, 255, 0.5)",
                                            borderRadius: 10,
                                            paddingHorizontal: 8,
                                        },
                                    ]}
                                >
                                    {etiqueta}
                                </Text>
                            ))}
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text
                                style={[
                                    { fontFamily: "Poppins-Regular" },
                                    {
                                        color: "#402158",
                                        marginLeft: "3%",
                                    },
                                ]}
                            >
                                Calificación
                            </Text>

                            <View>
                                <Text
                                    style={{
                                        fontFamily: "Poppins-SemiBold",
                                    }}
                                >
                                    {" "}
                                    <FontAwesome
                                        name="star"
                                        color={"orange"}
                                    />{" "}
                                    {valoracion} / 10
                                </Text>
                            </View>

                            <Pressable>
                                <Text>Ver calificaciones</Text>
                            </Pressable>
                        </View>
                    </View>
                    <Text>Eventos</Text>

                    <FlatList
                        style={{ marginLeft: "3%" }}
                        data={[
                            null,
                            ...eventos,
                        ]}
                        renderItem={({ item }) => {
                            if (item === null) {
                                return (
                                    <Pressable
                                        onPress={() =>
                                            router.navigate(
                                                "/eventos/crearEvento" as Href
                                            )
                                        }
                                        style={[
                                            {
                                                flexDirection: "column",
                                                flex: 1,
                                                borderRadius: 150,
                                                marginTop: "2%",
                                                height: 200,
                                                width: 150,
                                                alignItems: "center",
                                                justifyContent: "center",
                                            },
                                        ]}
                                    >
                                        <FontAwesome name="plus" size={50} />
                                    </Pressable>
                                );
                            } else {
                                return (
                                    <Pressable
                                        onPress={() => {
                                            router.navigate(
                                                ("/eventos/" + item.id) as Href
                                            );
                                        }}
                                        style={{
                                            flexDirection: "column",
                                            flex: 1,
                                            borderRadius: 150,
                                            marginTop: "2%",
                                        }}
                                        key={item.id}
                                    >
                                        <ImageBackground
                                            source={item.image}
                                            style={{
                                                height: 200,
                                                width: 150,
                                                borderRadius: 150,
                                                alignItems: "flex-end",
                                            }}
                                        >
                                            <View
                                                style={{
                                                    backgroundColor: "white",
                                                    width: "35%",
                                                    alignItems: "center",
                                                    padding: 3,
                                                    borderRadius: 10,
                                                    marginTop: 5,
                                                    marginRight: 5,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontSize: 24,
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {item.fecha.getDate()}
                                                </Text>
                                                <Text style={{ fontSize: 12 }}>
                                                    {item.fecha.toLocaleString(
                                                        "es-ES",
                                                        { month: "short" }
                                                    )}
                                                </Text>
                                            </View>
                                        </ImageBackground>
                                        <Text
                                            style={{
                                                fontFamily: "Poppins-Regular",
                                            }}
                                        >
                                            {item.nombre}
                                        </Text>
                                    </Pressable>
                                );
                            }
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                    />
                    <Text>Fotos</Text>
                    <FlatList
                        style={{ marginLeft: "3%" }}
                        data={[null, ...fotos]}
                        renderItem={({ item }) => {
                            if (item === null) {
                                return (
                                    <Pressable
                                        onPress={handleFoto}
                                        style={{
                                            flexDirection: "column",
                                            flex: 1,
                                            borderRadius: 10,
                                            marginTop: "2%",
                                            height: 150,
                                            aspectRatio: "16/9",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: "gray",
                                        }}
                                    >
                                        <FontAwesome name="plus" />
                                    </Pressable>
                                );
                            } else {
                                return (
                                    <Image
                                        source={item}
                                        style={{
                                            width: "auto",
                                            height: 150,
                                            aspectRatio: "16/9",
                                            margin: 3,
                                            borderRadius: 10,
                                        }}
                                    />
                                );
                            }
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                    />
                </View>
            </ScrollView>
        </View>
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
    changeImage: {
        backgroundColor: "purple",
        padding: 10,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    contenedorIMG: {
        top: -70,
    },
    redondoImg: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    nombreLocal: {
        fontSize: 24,
    },
    tipoLocal: {
        backgroundColor: "#e0dede",
        borderRadius: 30,
        paddingHorizontal: 5,
        textAlign: "center",
    },
    localInfo: {
        top: "-20%",
    },
    localData: {
        marginTop: "-18%",
    },
});

export default MyPlace;
