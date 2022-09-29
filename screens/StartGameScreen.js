import {
    View,
    TextInput,
    StyleSheet,
    Alert,
    Dimensions,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");

    const { width, height } = useWindowDimensions();

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    };

    const resetInputHandler = () => {
        setEnteredNumber("");
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid number", "Number has to be between 0 and 99", [
                {
                    text: "Okay",
                    style: "destructive",
                    onPress: resetInputHandler,
                },
            ]);

            return;
        }

        onPickNumber(chosenNumber);
    };

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View style={styles.wrapper}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a number</InstructionText>
                        <TextInput
                            style={styles.numberInput}
                            maxLength={2}
                            keyboardType='number-pad'
                            autoCapitalize='none'
                            autoCorrect={false}
                            value={enteredNumber}
                            onChangeText={numberInputHandler}
                        />
                        <View style={styles.buttonWrapper}>
                            <View style={styles.buttonSizeFlex}>
                                <PrimaryButton onPress={resetInputHandler}>
                                    Reset
                                </PrimaryButton>
                            </View>
                            <View style={styles.buttonSizeFlex}>
                                <PrimaryButton onPress={confirmInputHandler}>
                                    Confirmm
                                </PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

const deviceHight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        marginHorizontal: 24,
        marginTop: deviceHight < 500 ? 50 : 100,
        alignItems: "center",
    },
    numberInput: {
        width: 50,
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        color: Colors.primary,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonWrapper: {
        width: "100%",
        flexDirection: "row",
    },
    buttonSizeFlex: {
        flex: 1,
    },
});
