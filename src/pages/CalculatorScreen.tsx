import React, { useCallback, useMemo, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native"

const CalculatorScreen: React.FC = () => {
    const [input1, setInput1] = useState<string>("")
    const [input2, setInput2] = useState<string>("")
    const [sum, setSum] = useState<string>("")
    const [isError, setIsError] = useState<boolean>(false)

    const calculate = useCallback(() => {
        if (input1 !== '' && input2 !== '') {
            let sum = (parseInt(input1) + parseInt(input2))
            setSum(String(sum))
            setIsError(false)
        } else {
            setSum("")
            setIsError(true)
        }
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
            {isError ?
                <Text style={styles.error}>Please enter first and second number to calculate.</Text> : null
            }
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
    error: {
        marginTop: 16,
        fontSize: 14,
        color: "red"
    }
})

export default CalculatorScreen;