import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    t1: {
        fontSize: 12,
        textAlign: "center",
        marginTop: 16
    },

    highlight: {
        color: "#0368f5",
        fontWeight: 900
    }

});

export default function Footer() {
    return (
        <View style={{marginTop: 32}}>
            <Text style={styles.t1}>By continuing, you agree to our <Text style={styles.highlight}>Terms & Conditions</Text> and<Text style={styles.highlight}>{"\n"}Privacy Policy</Text></Text>
        </View>
    )
}