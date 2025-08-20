//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";

const ScreenWidth = Dimensions.get("screen").width;
const ScreenHeight = Dimensions.get("screen").height;

// create a component
const Genie = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/images/bg.jpeg")}
          resizeMode="stretch"
          borderBottomRightRadius={25}
          borderBottomLeftRadius={25}
        >
          <View style={styles.top_row}>
            <View style={styles.column}>
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Image source={require("../assets/images/home3.png")}></Image>
                <Text
                  style={{
                    fontWeight: 600,
                    fontSize: 20,
                    paddingHorizontal: 5,
                    paddingTop: 2,
                    position: "absolute",
                    left: 32,
                  }}
                >
                  Home
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  position: "absolute",
                  left: 0,
                  top: 32,
                }}
              >
                39/C Block , Second Floor , Shiv Chowk , Above Sa....
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                source={require("../assets/images/user.png")}
                style={{ width: 40, height: 40, paddingHorizontal: 10 }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: ScreenWidth - 20,
              backgroundColor: "grey",
              height: 2,
              alignSelf: "center",
              marginTop: 60,
            }}
          ></View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 32,
                fontWeight: "900",
                marginHorizontal: 20,
                marginTop: 20,
                marginRight: 170,
                color: "#7538D7",
              }}
            >
              genie
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  marginHorizontal: 15,
                  marginTop: 25,
                  color: "#7538D7",
                }}
              >
                Delivering from
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "800",
                  marginHorizontal: 15,
                  color: "#7538D7",
                }}
              >
                7 am - 4 am
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              alignContent: "center",
              alignSelf: "center",
              marginBottom: 60,
            }}
          >
            <Text
              style={{
                fontSize: 26,
                fontWeight: "700",
                marginHorizontal: 0,
                color: "#7538D7",
                alignSelf: "flex-start",
                textAlign: "left",
                marginTop: 50,
                marginLeft: 50,
              }}
            >
              Pick up or drop off {"\n"}anything instantly.
            </Text>
            <Image
              source={require("../assets/images/delivery.png")}
              style={{ height: 170, width: 200, marginBottom: 0 }}
            ></Image>
          </View>
        </ImageBackground>
        <View
          style={{
            height: 165,
            width: ScreenWidth - 50,
            borderRadius: 25,
            borderColor: "grey",
            borderWidth: 1,
            alignSelf: "center",
            marginTop: 40,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              marginHorizontal: 15,
              marginTop: 10,
            }}
          >
            Pick up or send anything
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              marginHorizontal: 15,
              marginTop: 5,
              marginBottom:18,
            }}
          >
            Sit back , relax and let Geniew do the rest.
          </Text>
          <TouchableOpacity>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: "#FC8019",
                height: 60,
                width: ScreenWidth - 90,
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  color: "white",
                  fontWeight: "800",
                  marginHorizontal: 15,
                  paddingVertical: "4.25%",
                }}
              >
                Set Pickup & Drop Location
              </Text>
              <Image
                style={{ height: 35, width: 35, marginTop: 10 }}
                source={require("../assets/images/arrow.png")}
              ></Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F6",
    //justifyContent: "space-evenly",
  },
  top_row: {
    marginTop: 50,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: "row",
  },
  column: {
    flex: 1,
    flexDirection: "column",
  },
  TextInput_View: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    marginTop: 10,
  },
  card: {
    backgroundColor: "white",
    elevation: 8,
    height: 190,
    width: 175,
    borderRadius: 30,
    marginTop: 75,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginHorizontal: 2,
    flex: 14,
  },
});

//make this component available to the app
export default Genie;
