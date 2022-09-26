import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
    return <Text style={[styles.text_header, style]}>{children}</Text>;
}
export default InstructionText;

const styles = StyleSheet.create({
    text_header: {
        color: Colors.primary,
        fontSize: 24,
        fontFamily: "open-sans-regular",
    },
});
