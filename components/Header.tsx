import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Text, View } from "react-native";
import Styles from "../globalStyles/styles";

interface Header {
    title: string;
}

const Header: React.FC<Header> = ({ title }) => {
    return (
        <View style={Styles.headerView}>
            <FontAwesome name="arrow-left" size={20} color={"white"} />
            <Text style={Styles.headerTitle}>{title}</Text>
        </View>
    );
};

export default Header;
