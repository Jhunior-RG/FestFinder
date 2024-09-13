import { SessionProvider } from "@/hooks/ctx";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const HomeLayout = () => {
    return (
        <SessionProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="login" options={{ headerShown: false }} />
                <Stack.Screen
                    name="register"
                    options={{ headerShown: false }}
                />
            </Stack>
        </SessionProvider>
    );
};

export default HomeLayout;
