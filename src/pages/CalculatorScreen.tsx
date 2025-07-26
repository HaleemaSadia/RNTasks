import React, { useCallback, useMemo, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native"

interface CalculatorScreenProps {

}

const CalculatorScreen: React.FC<CalculatorScreenProps> = () => {
    const [input1, setInput1] = useState<string>("")
    const [input2, setInput2] = useState<string>("")
    const [sum, setSum] = useState<string>("")

    const calculate = useCallback(() => {
        let sum = (parseInt(input1) + parseInt(input2))
        setSum(String(sum))
    }, [input1, input2])

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Adding Two Numbers</Text>
            <TextInput
                style={styles.input}
                value={input1}
                placeholder="Enter first number"
                onChangeText={text => setInput1(text)}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                value={input2}
                placeholder="Enter second number"
                onChangeText={text => setInput2(text)}
                keyboardType="numeric"
            />
            <Button title="Add Two Numbers" onPress={calculate} />
            <Text style={styles.result}>Total: {sum}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 80,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    input: {
        height: 40,
        borderColor: '#999',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    result: {
        marginTop: 16,
        fontSize: 16,
    },
})

export default CalculatorScreen;