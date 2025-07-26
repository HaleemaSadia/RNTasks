import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CalculatorScreen, HomeScreen, NavBarScreen, TwoSumScreen } from "./pages";

export type RootStackParamList = {
  HomeScreen: undefined;
  CalculatorScreen: undefined;
  NavBarScreen: undefined;
  TwoSumScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function AppNavigator() {
    return(
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options = {{ headerTitle:"Home"}} />
            <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} options =  {{ headerTitle:"Calculator"}}/>
            <Stack.Screen name="NavBarScreen" component={NavBarScreen} options = {{headerShown: false}} />
            <Stack.Screen name="TwoSumScreen" component={TwoSumScreen} options = {{ headerTitle:"Two Sum Challenge"}}/>
        </Stack.Navigator>
    )
    
}