import Styles from "@/globalStyles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
const register_business = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedBusiness, setSelectedBusiness] = useState("");
    const [rango, setRango] = useState("");

    const dataTypesBusiness = [
        { key: "1", value: "Bar" },
        { key: "2", value: "Club" },
        { key: "3", value: "Discoteca" },
    ];

    const handleNext = () => {
        const dataBusiness = [
            name,
            location,
            phone,
            email,
            selectedBusiness,
            rango,
        ];
        if (dataBusiness.includes("")) {
            console.log("todos los campos son obligatorios");
            //return
        }
        router.push({
            pathname: "/business/preview",
            params: { name, location, email, selectedBusiness, rango },
        });
    };
    return (
        <View>
            <Pressable onPress={router.back} style={{ width: "100%" }}>
                <FontAwesome name="arrow-left" size={25} />
            </Pressable>
            <Text>Registra tu negocio:</Text>
            <TextInput
                placeholder="Nombre de tu negocio"
                keyboardType="default"
                placeholderTextColor="#402158"
                style={Styles.input}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Seleccionar ubicacion"
                keyboardType="default"
                placeholderTextColor="#402158"
                style={Styles.input}
                onChangeText={setLocation}
            />
            <TextInput
                placeholder="Email de tu negocio"
                keyboardType="email-address"
                placeholderTextColor="#402158"
                style={Styles.input}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Telefono de tu negocio"
                keyboardType="phone-pad"
                placeholderTextColor="#402158"
                style={Styles.input}
                onChangeText={setPhone}
            />

            <SelectList
                setSelected={setSelectedBusiness}
                data={dataTypesBusiness}
                save="value"
                searchPlaceholder="buscar"
                placeholder="tipo de negocio"
                boxStyles={Styles.input}
                dropdownStyles={Styles.input}
            />
            <Text>Seleccione su rango de precio</Text>

            <View style={{ flexDirection: "row" }}>
                <Pressable
                    onPress={() => {
                        setRango("Bajo");
                    }}
                    style={{ width: "33%" }}
                >
                    <Text>Bajo</Text>
                    <Text>$$</Text>
                </Pressable>
                <Pressable
                    onPress={() => {
                        setRango("Medio");
                    }}
                    style={{ width: "33%" }}
                >
                    <Text>Medio</Text>
                    <Text>$$$</Text>
                </Pressable>
                <Pressable
                    onPress={() => {
                        setRango("Alto");
                    }}
                    style={{ width: "33%" }}
                >
                    <Text>Alto</Text>
                    <Text>$$$</Text>
                </Pressable>
            </View>

            <Pressable onPress={handleNext} style={Styles.button}>
                <Text style={Styles.buttonText}>Siguiente</Text>
            </Pressable>

            <View style={Styles.lineContainer}>
                <View style={Styles.lineSelected} />
                <View style={Styles.line} />
            </View>
        </View>
    );
};

export default register_business;
