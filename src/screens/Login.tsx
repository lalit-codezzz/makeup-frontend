import { View, Text, TextInput, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "@/components/Footer";
import paddFromScreenEdges from "../design-tokens/padding-provider";

import * as AuthSession from "expo-auth-session";


export default function Login() {
    return (
        <SafeAreaView style={{ height: "100%", }}>
            <View style={{height: "100%", ...paddFromScreenEdges.pad}}>
                <View>
                    <Pressable style={{ backgroundColor: "#0368f5", alignSelf: "flex-end", borderRadius: 4, paddingTop: 4, paddingBottom: 4, paddingLeft: 12, paddingRight: 12 }}>
                        <Text style={{ color: "#fff", fontWeight: "bold" }}>SKIP</Text>
                    </Pressable>
                </View>
                <View style={{marginTop: 128}}>
                    <View style={{ alignItems: "center" }}>
                        <Image source={require("../../assets/google-logo.png")} style={{ width: 48, height: 48 }} />
                        <Text style={{ padding: 10 }}>Continue with Google</Text>
                        <TextInput placeholder="Email" style={{ borderWidth: 1, borderColor: "#aaa", width: 256, borderRadius: 4, paddingLeft: 8, paddingRight: 8 }} />
                        <Text style={{ paddingTop: 16 }}>Forgot account?</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Pressable onPress={() => {
                            const redirectUri = AuthSession.makeRedirectUri({
                                scheme: "makeup-app",
                                path: "oauthredirect"
                              })
                              console.log("Redirect URI:", redirectUri);
                        }} style={{ backgroundColor: "#0368f5", alignSelf: "center", borderRadius: 4, paddingTop: 8, paddingBottom: 8, paddingLeft: 48, paddingRight: 48 }}>
                            <Text style={{ color: "#fff", fontWeight: "semibold", fontSize: 20 }}>Next</Text>
                        </Pressable>
                    </View>
                </View>
                <Footer />
            </View>
        </SafeAreaView>
    )
}