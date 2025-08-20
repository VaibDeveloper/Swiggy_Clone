import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Food from "../screens/Food";
import Instamart from "../screens/Instamart";
import Dineout from "../screens/Dineout";
import Genie from "../screens/Genie";
import Profile from "../screens/Profile";
import { View, Text, StyleSheet, Image } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 10,
    height: 60,
    background: "#fff",
  },
};

function MyTab() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Image
                  source={
                    focused
                      ? require("../assets/images/swiggy2.png")
                      : require("../assets/images/swiggy1.png")
                  }
                  style={{ height: 30, width: 30 }}
                />
                <Text style={{ fontSize: 12, color: "black" }}>Swiggy</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Food"
        component={Food}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Image
                  source={
                    focused
                      ? require("../assets/images/food_2.png")
                      : require("../assets/images/food_1.png")
                  }
                  style={{ height: 30, width: 30 }}
                />
                <Text style={{ fontSize: 12, color: "black" }}>Food</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Instamart"
        component={Instamart}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Image
                  source={
                    focused
                      ? require("../assets/images/basket_2.png")
                      : require("../assets/images/basket_1.png")
                  }
                  style={{ height: 30, width: 30 }}
                />
                <Text style={{ fontSize: 12, color: "black" }}>Instamart</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Dineout"
        component={Dineout}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Image
                  source={
                    focused
                      ? require("../assets/images/dineout_2.png")
                      : require("../assets/images/dineout_1.png")
                  }
                  style={{ height: 30, width: 30 }}
                />
                <Text style={{ fontSize: 12, color: "black" }}>Dineout</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Genie"
        component={Genie}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Image
                  source={
                    focused
                      ? require("../assets/images/genie_2.png")
                      : require("../assets/images/genie_1.png")
                  }
                  style={{ height: 30, width: 30 }}
                />
                <Text style={{ fontSize: 12, color: "black" }}>Genie</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTab;
