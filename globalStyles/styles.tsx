import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    title: {
        color: "purple",
        fontWeight: "500",
        fontSize: 26,
        marginBottom: 15,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        borderColor: "purple",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginBottom: 12,
        width: "80%",
    },
    textDecoration: {
        color: "purple",
        textAlign: "left",
    },
    button: {
        backgroundColor: "purple",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        width: "80%",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
    linkContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    linkText: {
        color: "purple",
        fontWeight: "400",
    },
    espaciado: {
        marginTop: 30,
        marginBottom: 2,
    },
    buttonGoogle: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        width: "80%",
        borderWidth: 2,
        borderColor: "red",
        flexDirection: "row",
    },
    buttonTextGoogle: {
        color: "red",
        fontSize: 16,
        fontWeight: "500",
    },
    tinylogo: {
        width: 25,
        height: 25,
        marginRight: 60,
    },
    festLogo: {
        width: 200,
        height: 100,
        marginBottom: 10,
    },
});

export default estilos;
