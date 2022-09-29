import { View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;
const deviceHight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primary,
        paddingVertical: deviceWidth < 380 ? 12 : 24,
        paddingHorizontal: 60,
        borderRadius: 8,
        margin: deviceHight < 500 ? 8 : 24,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        color: Colors.primary,
        fontSize: 36,
        fontWeight: "bold",
    },
});
