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
import DateTimePicker, {
    DateTimePickerAndroid,
    type DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

const CrearEvento = () => {
    const [nombre, setNombre] = useState("");
    const [imagenEvento, setImagenEvento] =
        useState<ImagePicker.ImagePickerAsset>();
    const [horaInicio, setHoraInicio] = useState<Date>(new Date());
    const [horaFin, setHoraFin] = useState<Date>(new Date());
    const [descripcion, setDescripcion] = useState("");
    const [precioInicial, setPrecioInicial] = useState('0');
    const [precioFinal, setPrecioFinal] = useState('0');
    const [ubicacion, setUbicacion] = useState('');
    const [error, setError] = useState("");

    const pickImage = async (setImage: any, aspect: [number, number]) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: aspect,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0]);
        }
    };

    const onChange = (selectedDate: Date, mode: String) => {
        if (mode === "horaInicio") {
            setHoraInicio(selectedDate);
        } else if (mode === "horaFin") {
            setHoraFin(selectedDate);
        }
    };

    const showMode = (currentMode: "date" | "time", modeToSet: String) => {
        DateTimePickerAndroid.open({
            value: modeToSet === "horaInicio" ? horaInicio : horaFin,
            onChange: (event, selectedDate: Date | undefined) =>
                selectedDate !== undefined &&
                onChange(selectedDate, modeToSet as String),
            mode: currentMode,
            is24Hour: true,
        });
    };

    const handleSubmit = () => {
        if (imagenEvento === undefined) {
            setError("Seleccione una imagen");
            return;
        }
        const formData = new FormData();
        formData.append("file", {
            uri: imagenEvento?.uri,
            type: imagenEvento?.mimeType,
            name: imagenEvento?.fileName,
        } as any);
        formData.append("nombre", nombre);
        formData.append(
            "fecha",
            horaInicio.getDate().toLocaleString() +
                "/" +
                horaInicio.getMonth() +
                "/" +
                horaInicio.getFullYear()
        );
        formData.append(
            "horaInicio",
            horaInicio.getHours() + ":" + horaInicio.getMinutes()
        );
        formData.append(
            "horaFin",
            horaFin.getHours() + ":" + horaFin.getMinutes()
        );

        formData.append("descripcion", descripcion);
        formData.append("precioInicial", precioInicial);
        formData.append("precioFinal", precioFinal);
        formData.append("ubicacion", ubicacion);

        //enviar al servidor
    };
    return (
        <View>
            <Header title="Crear nuevo evento" />

            <ImageBackground
                source={imagenEvento ? { uri: imagenEvento.uri } : undefined}
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
            <View style={{ flexDirection: "row" }}>
                <View>
                    <Text>Fecha</Text>
                    <Pressable onPress={() => showMode("date", "horaInicio")}>
                        <Text>
                            {horaInicio.getDate().toLocaleString() +
                                "/" +
                                horaInicio.getMonth() +
                                "/" +
                                horaInicio.getFullYear()}
                        </Text>
                    </Pressable>
                </View>
                <View>
                    <Text>Hora</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Pressable
                            onPress={() => showMode("time", "horaInicio")}
                        >
                            <Text>
                                {horaInicio.getHours() +
                                    ":" +
                                    horaInicio.getMinutes()}
                            </Text>
                        </Pressable>
                        <Text>-</Text>

                        <Pressable onPress={() => showMode("time", "horaFin")}>
                            <Text>
                                {horaFin.getHours() +
                                    ":" +
                                    horaFin.getMinutes()}
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <Text>Rango de Precio</Text>
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    onChangeText={(e) => setPrecioInicial(e)}
                    keyboardType="number-pad"
                    placeholder="00"
                />
                <Text>-</Text>
                <TextInput
                    onChangeText={(e) => setPrecioFinal(e)}
                    keyboardType="number-pad"
                    placeholder="00"
                />
            </View>
            <Text>Descripcion</Text>
            <TextInput
                multiline={true}
                onChangeText={(e) => setDescripcion(e)}
                placeholder="Describe tu eventos"
            />
            <Text>Ubicacion</Text>
            <TextInput
                onChangeText={(e) => setUbicacion(e)}
                placeholder="Av Melchor Urquidi S/N, Cochabamba"
            />
            <Pressable>
                <Text>Ubicacion Predeterminada</Text>
            </Pressable>
            <Text>Se pondra la ubicacion fijada del local</Text>
            <Pressable>
                <Text>Agregar ubicacion nueva</Text>
            </Pressable>
            {error && <Text style={{ color: "red" }}>{error}</Text>}

            <Pressable onPress={handleSubmit}>
                <Text>Crear nuevo evento</Text>
            </Pressable>
        </View>
    );
};

export default CrearEvento;
