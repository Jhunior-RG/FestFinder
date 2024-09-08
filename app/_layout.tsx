import { SessionProvider } from "@/hooks/ctx"
import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"


const HomeLayout = () => {
  return (
    <SessionProvider>
        <Slot/>
        <StatusBar style="auto" />
    </SessionProvider>
  )
}
const styles = StyleSheet.create({
    themeBlack: {
        backgroundColor: '#333',
        color: '#fff'
    }
})

export default HomeLayout