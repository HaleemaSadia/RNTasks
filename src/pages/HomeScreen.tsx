import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { RootStackParamList } from "../AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => { navigation.navigate("CalculatorScreen") }} style={styles.button}>
                <Text style={styles.buttonText}>Challenge 1: Calculator</Text>
            </Pressable>
            <Pressable onPress={() => { navigation.navigate("NavBarScreen") }} style={styles.button}>
                <Text style={styles.buttonText}>Challenge 2: NavBar</Text>
            </Pressable>
            <Pressable onPress={() => { navigation.navigate("TwoSumScreen") }} style={styles.button}>
                <Text style={styles.buttonText}>Challenge 3: Two Sum II - Input Array Is Sorted</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    button: {
        backgroundColor: "#2196F3",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginHorizontal: 20,
        marginTop: 20
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16
    }
})
export default HomeScreen