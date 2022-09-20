import React, { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../../screens/welcome";
import Home from "../../screens/home";
import styled from "styled-components/native";
import { colors } from '../colors';
import Greeting from "../header/greeting";

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.graylight,
                borderBottomWidth: 0,
                shadowColor: "transparent",
                shadowOpacity: 0,
                elevation: 0,
                height: 120,
            },
            headerTintColor: colors.secondary,
        }}
        >
            <Stack.Screen 
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false}}
            />
            <Stack.Screen 
            name="Home"
            component={Home}
            options={{
                headerTitle: (props) => (
                    <Greeting
                    mainText="Hey there!"
                    subText="Welcome back"
                    {...props}
                    />
                )
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
};
export default RootStack;