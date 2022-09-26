import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";

import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min) + min);

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        //direction =>"lower or greater "

        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don;t lie!", "You know that this is wrong....", [
                { text: "Sorry!", style: "cancel" },
            ]);
        }

        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );

        console.log(minBoundary, maxBoundary);

        setCurrentGuess(newRndNumber);
    }
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Text>Higher or lower?</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, "lower")}>
                            -
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, "greater")}>
                            +
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                <Text>LOG ROUNDS</Text>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.white,
        textAlign: "center",
        borderWidth: 2,
        borderColor: Colors.white,
        padding: 12,
    },
    buttonContainer: {
        flexDirection: "row",
    },
});
