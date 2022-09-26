import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(false);

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
    function gameOverHandler() {
        setGameIsOver(true);
    }
    if (userNumber) {
        screen = (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
        );
    }
    if (gameIsOver && userNumber) {
        screen = <GameOverScreen />;
    }

    return (
        <LinearGradient
            colors={[Colors.background_color, Colors.primary]}
            style={styles.rootScreen}>
            <ImageBackground
                source={require("./assets/images/Thanh-avt.jpg")}
                resizeMode='repeat'
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}>
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
});
