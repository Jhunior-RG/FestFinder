import Styles from "@/globalStyles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View, Image, StyleSheet } from "react-native";
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
        <View style={Styles.container}>
            <Pressable
                onPress={router.back}
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 10,
                    marginTop: 30,
                    zIndex: 1,
                }}

            ><FontAwesome name="arrow-left" size={25} /></Pressable>
            <Image
                source={require("../../assets/images/festLogo.png")}
                style={Styles.festLogo}
            />
            <Text style={[Styles.subtitle, { marginLeft: 30, alignSelf: 'flex-start' }]}>
                Registra tu negocio:
            </Text>

            <TextInput
                placeholder="Nombre del negocio"
                keyboardType="default"
                placeholderTextColor="#402158"
                style={Styles.input}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Email del negocio"
                keyboardType="email-address"
                placeholderTextColor="#402158"
                style={Styles.input}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Telefono del negocio"
                keyboardType="phone-pad"
                placeholderTextColor="#402158"
                style={Styles.input}
                onChangeText={setPhone}
            />
            <Pressable
                onPress={() => {
                    console.log("Seleccionar ubicación");
                }}
                style={Styles.input}
            >
                <Text style={{ color: "#402158", paddingTop: 2, paddingBottom: 2 }}>
                    {location ? location : "Seleccionar ubicación"}
                </Text>
            </Pressable>
            <SelectList
                setSelected={setSelectedBusiness}
                data={dataTypesBusiness}
                save="value"
                searchPlaceholder="Buscar"
                placeholder="Tipo de negocio"
                boxStyles={Styles.input}
                dropdownStyles={Styles.inputDropDown}
            />
            <Text style={[Styles.textDecoration2, { marginBottom: 10, marginLeft: 30, alignSelf: 'flex-start' }]}>
                Rango de precios del local:
            </Text>
            <View style={{ flexDirection: "row" }}>
                <Pressable
                    onPress={() => {
                        setRango("Bajo");
                    }}
                    style={styles.button}
                >
                    <Text style={styles.text}>Bajo</Text>
                    <Text style={styles.text}>$$</Text>
                </Pressable>
                <Pressable
                    onPress={() => {
                        setRango("Medio");
                    }}
                    style={styles.button}
                >
                    <Text style={styles.text}>Medio</Text>
                    <Text style={styles.text}>$$$</Text>
                </Pressable>
                <Pressable
                    onPress={() => {
                        setRango("Alto");
                    }}
                    style={styles.button}
                >
                    <Text style={styles.text}>Alto</Text>
                    <Text style={styles.text}>$$$</Text>
                </Pressable>
            </View>

            <Pressable onPress={handleNext} style={Styles.button}>
                <Text style={Styles.buttonText}>Siguiente</Text>
            </Pressable>

            <View style={[{ justifyContent: 'flex-end' }]}>
                <View style={[Styles.lineContainer, { marginBottom: 30, flexDirection: 'row', justifyContent: 'center', gap: 10 }]}>
                    <View style={[Styles.lineSelected, { borderRadius: 10 }]} />
                    <View style={[Styles.line, { borderRadius: 10 }]} />
                </View>
            </View>

        </View>
    );
};

export default register_business;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: "25%",
        borderColor: "#7d5683",
        borderWidth: 2,
        backgroundColor: "#fef5ff",
        borderRadius: 10,
        padding: 3,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    text: {
        color: "#7d5683",
        fontSize: 16,
    },
});