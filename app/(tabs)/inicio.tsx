import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, router, type Href } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Image, ImageBackground, Pressable, Text, View } from "react-native";

interface Place {
    id: number;
    name: string;
    score: number;
    views: number;
    uri: any;
}

const inicio = () => {
    const [popularPlaces, setPopularPlaces] = useState<Place[]>([]);
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

        setPopularPlaces(places);
    }, []);
    return (
        <View>
            <Text>inicio</Text>
            
            <Text>Lugares populares</Text>
            {popularPlaces.map((place) => (
                <Link href={( "/places/" + place.id) as Href } key={place.id}>


                    <ImageBackground
                        resizeMode="cover"
                        source={place.uri}
                        style={{ width: 150, height: 200 }}
                    >
                        <View>
                            <Text style={{ color: "white" }}>{place.name}</Text>
                            <Text style={{ color: "white" }}>
                                <FontAwesome name="star" color={"yellow"} />
                                {place.score} / 10
                            </Text>
                        </View>
                    </ImageBackground>
                </Link>
            ))}
        </View>
    );
};

export default inicio;
