import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, router, type Href } from "expo-router";
import { useEffect, useState } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
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
            <Text style={{ marginLeft: "2%", fontFamily: 'Poppins-SemiBold', marginTop: 50 }}>Inicio</Text>
            <Text style={{ marginLeft: "2%", fontFamily: 'Poppins-SemiBold', marginTop: 50 }}>Lugares populares</Text>
            <View style={{ marginLeft: "2%" }}>
                {popularPlaces.map((place) => (
                    <Link href={("/places/" + place.id) as Href} key={place.id} style={{ marginLeft: "3%" }}>
                        <ImageBackground
                            resizeMode="cover"
                            source={place.uri}
                            style={{ width: 150, height: 200, borderRadius: 10, overflow: 'hidden' }}
                        >
                            <View style={{
                                flex: 1, 
                                justifyContent: 'flex-end', 
                                alignItems: 'center', 
                                padding: 5, 
                            }}>
                                <Text style={{ color: "white", fontFamily: 'Poppins-Regular', textAlign: 'center' }}>{place.name}</Text>
                                <Text style={{ color: "white", textAlign: 'center' }}>
                                    <FontAwesome name="star" color={"yellow"} />
                                    {place.score} / 10
                                </Text>
                            </View>
                        </ImageBackground>
                    </Link>
                ))}
            </View>

        </View>
    );
};

export default inicio;
