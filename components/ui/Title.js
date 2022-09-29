import { Text, StyleSheet, Platform } from "react-native";

import Colors from "../../constants/colors";

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.white,
        textAlign: "center",
        // borderWidth: Platform.OS === "android" ? 2 : 0,(cách 1)
        borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderColor: Colors.white,
        paddingHorizontal: 36,
        paddingVertical: 12,
        fontFamily: "open-sans-bold",
        maxWidth: "80%",
    },
});
