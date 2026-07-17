import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
    return (
        <SafeAreaProvider style={{borderWidth: 4, borderColor: "green"}}>

            {/* <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="/" />
            </Stack> */}

            <Stack screenOptions={{headerShown: false}} />

        </SafeAreaProvider>
    );
}