import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Profile from "../screens/Profile";
import MyTab from "./Index";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyTab"
        component={MyTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
