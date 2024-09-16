import { StyleSheet } from "react-native";

const colorPrimary = "#402158";

const Styles = StyleSheet.create({
    title: {
        color: "#402158",
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
        borderColor: "#402158",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginBottom: 12,
        width: "80%",
    },
    textDecoration: {
        color: "#402158",
        textAlign: "left",
    },
    button: {
        backgroundColor: "#402158",
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
        marginRight: 50,
    },
    festLogo: {
        width: 200,
        height: 100,
        marginBottom: 10,
    },
    textDecoration2: {
        color: "#7D5683",
        textAlign: "left",
    },
    tabBarStyle: {},
    //profile
    containerProfile: {
        flexDirection: "row",
        gap: 10,
    },
    imageProfile: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    itemProfileContainer: {
        flexDirection: "row",
        padding: 10,
        width: "80%",
        justifyContent: "space-between",
    },

    //header
    headerView: {
        backgroundColor: colorPrimary,
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    headerTitle: {
        fontSize: 15,
        color: "white",
        marginLeft: 20,
    },

    //preview
    banner: {
        width: "80%",
        height: 250,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    imageBanner: { width: "100%", height: 250 },
    imageRoundedContainer: {
        top: "-10%",
        width: 100,
        height: 100,
        backgroundColor: "gray",
        borderWidth: 2,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    imageRounded: { width: 100, height: 100, borderRadius: 50 },
    lineSelected: {
        width: "50%",
        paddingVertical: 5,
        backgroundColor: "purple",
    },
    line: {
        width: "50%",
        paddingVertical: 5,
        backgroundColor: "gray",
    },
    lineContainer: {
        flexDirection: "row",
        width: "80%",
        margin: 10,
    },
    tag: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    addTag: {
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
});

export default Styles;
