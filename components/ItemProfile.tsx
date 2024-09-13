import Styles from "@/globalStyles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, Text, type GestureResponderEvent } from "react-native";

interface ItemProfileProps {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
    color?: string;
    icon?: keyof typeof FontAwesome.glyphMap;
}
const ItemProfile: React.FC<ItemProfileProps> = ({
    onPress,
    color = "#00000000",
    text,
    icon = "arrow-right",
}) => {
    return (
        <Pressable onPress={onPress} style={Styles.itemProfileContainer}>
            <FontAwesome size={20} name={icon} color={color} />
            <Text>{text}</Text>

            <Text style={{ fontWeight: "bold" }}>{">"}</Text>
        </Pressable>
    );
};

export default ItemProfile;
