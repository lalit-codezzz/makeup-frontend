import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import Footer from "@/components/Footer";

export default function Login () {
    return(
        <SafeAreaView>
            <TouchableOpacity>
                <Text>SKIP</Text>
            </TouchableOpacity>
            <Text>Enter your 10-digit phone number</Text>
            <TextInput placeholder="Mobile Number" />
            <TouchableOpacity>
                <Text>Continue</Text>
            </TouchableOpacity>
            <Footer />
        </SafeAreaView>
    )
}