import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    t1: {
        fontSize: 10,
        textAlign: "center",
        marginTop: 16
    },

    highlight: {
        color: "maroon",
        fontWeight: 900
    }

});

export default function Footer() {
    return (
        <View >
            <Text style={styles.t1}>By continuing, you agree to our <Text style={styles.highlight}>Terms & Conditions</Text> and<Text style={styles.highlight}>{"\n"}Privacy Policy</Text></Text>
        </View>
    )
}