import { View, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

function Card({ children }) {
    return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceHight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: deviceHight < 500 ? 8 : 16,
        backgroundColor: Colors.background_color,
        borderRadius: 8,

        // Bóng đổ cho IOS
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,

        // Bóng đổ cho Android
        elevation: 4,
    },
});
