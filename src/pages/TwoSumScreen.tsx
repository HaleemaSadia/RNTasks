import React from "react";
import { View, Text, StyleSheet } from "react-native";

 export function twoSum(numbers: number[], target: number): number[] {
        let left = 0;                     // start of array
        let right = numbers.length - 1;  // end of array
        while(left < right) {
            const sum = numbers[left] + numbers[right]
            if(sum == target) {
                return [left, right]
            } if(sum < target){
                left++;
            } else {
                right--;
            }
        }
        return []
    }

const TwoSumScreen = () => {
   
    console.log(twoSum([4, 11, 17, 25], 21));
    console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
    console.log(twoSum([-1, 0], -1));

    return (
        <View style={{ padding: 20 }}>
            <Text style={styles.heading}>Test Cases</Text>
            <Text style={styles.text}>twoSum([4, 11, 17, 25], 21) -- Result: {JSON.stringify(twoSum([4, 11, 17, 25], 21))}</Text>
            <Text style={styles.text}>twoSum([0, 1, 2, 2, 3, 5], 4) -- Result: {JSON.stringify(twoSum([0, 1, 2, 2, 3, 5], 4))}</Text>
            <Text style={styles.text}>twoSum([-1, 0], -1) -- Result: {JSON.stringify(twoSum([-1, 0], -1))}</Text>
            <Text style={styles.note}>Note: Results are also shown in the logs</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    heading:{
        fontSize:18,
        fontWeight:"bold",
        marginVertical:10
    },
    text:{
        fontSize:15,
        marginTop:4
    }, 
    note:{
        fontSize:16,
        fontWeight:"bold",
        marginTop:10
    }
})

export default TwoSumScreen;
