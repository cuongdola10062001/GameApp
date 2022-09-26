import { View, Image, StyleSheet, Text } from "react-native";

import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    console.log(userNumber);
    return (
        <View style={styles.rootContainer}>
            <Title> GameOverScreen</Title>
            <Text style={styles.text}>Number: {userNumber}</Text>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/images/success.png")}
                />
            </View>
            <PrimaryButton onPress={onStartNewGame}>
                Return Play Game
            </PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    text: {
        fontSize: 24,
        fontFamily: "open-sans-bold",
        marginTop: 12,
        color: Colors.primary,
    },
    imageContainer: {
        marginVertical: 12,
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
});
