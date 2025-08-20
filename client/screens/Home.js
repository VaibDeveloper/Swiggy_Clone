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
} from "react-native";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";

const ScreenWidth = Dimensions.get("screen").width;
const ScreenHeight = Dimensions.get("screen").height;

// create a component
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
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
                flex: 2,
              }}
            >
              Home
            </Text>
          </View>
          <Text style={{ fontSize: 14 }}>
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
      <View style={styles.TextInput_View}>
        <TextInput
          style={{
            flex: 0.98,
            width: ScreenWidth - 30,
            height: 50,
            alignSelf: "center",
            borderColor: "lightgrey",
            borderWidth: 2,
            borderRadius: 15,
            fontSize: 17,
            marginLeft: 10,
          }}
          placeholder="  Dishes , Restaurants , Groceries - Find it all..."
        ></TextInput>
        <Image
          source={require("../assets/images/search.png")}
          style={{
            position: "absolute",
            right: ScreenWidth - 390,
            height: 30,
            width: 30,
            top: 10,
          }}
        ></Image>
      </View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "600",
          marginHorizontal: 15,
          marginTop: 20,
        }}
      >
        Hello Vaibhav ,
      </Text>
      <View style={styles.grid}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Food")}
        >
          <View
            style={{
              backgroundColor: "white",
              height: 190,
              width: 175,
              borderRadius: 30,
              alignContent: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Text
              style={{
                fontWeight: "800",
                fontSize: 18,
                marginLeft: 10,
                marginBottom: 3,
                marginTop: 20,
              }}
            >
              FOOD DELIVERY
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontVariant: "Regular",
                fontSize: 14,
                marginLeft: 10,
              }}
            >
              FROM RESTAURANTS
            </Text>
            <Text
              style={{
                fontWeight: "800",
                color: "#FF8C00",
                fontSize: 14,
                marginLeft: 10,
                marginBottom: 4,
              }}
            >
              UPTO 60% OFF
            </Text>
            <Image
              source={require("../assets/images/thali.png")}
              style={{
                height: 80,
                width: 120,
                marginHorizontal: 70,
                marginBottom: 15,
                marginTop: 25,
                alignSelf: "center",
              }}
            ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Instamart")}
        >
          <View
            style={{
              backgroundColor: "white",
              height: 190,
              width: 175,
              borderRadius: 30,
              alignContent: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Text
              style={{
                fontWeight: "800",
                fontSize: 18,
                marginLeft: 10,
                marginBottom: 5,
                marginTop: 20,
              }}
            >
              INSTAMART
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontVariant: "Regular",
                fontSize: 14,
                marginLeft: 10,
                marginBottom: 4,
              }}
            >
              INSTANT GROCERY
            </Text>
            <Text
              style={{
                fontWeight: "800",
                color: "#FF8C00",
                fontSize: 14,
                marginLeft: 10,
                marginBottom: 2,
              }}
            >
              UPTO 60% OFF
            </Text>
            <Image
              source={require("../assets/images/fruits.png")}
              style={{
                height: 90,
                width: 120,
                marginHorizontal: 70,
                marginBottom: 15,
                marginTop: 25,
                alignSelf: "center",
              }}
            ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Dineout")}
        >
          <View
            style={{
              backgroundColor: "white",
              height: 190,
              width: 175,
              borderRadius: 30,
              alignContent: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Text
              style={{
                fontWeight: "800",
                fontSize: 18,
                marginLeft: 10,
                marginBottom: 5,
                marginTop: 20,
              }}
            >
              DINEOUT
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontVariant: "Regular",
                fontSize: 14,
                marginLeft: 10,
                marginBottom: 2,
              }}
            >
              EAT OUT, SAVE MORE
            </Text>
            <Text
              style={{
                fontWeight: "800",
                color: "#FF8C00",
                fontSize: 14,
                marginLeft: 10,
              }}
            >
              UPTO 50% OFF
            </Text>
            <Image
              source={require("../assets/images/glass.png")}
              style={{
                height: 100,
                width: 70,
                marginHorizontal: 70,
                marginBottom: 10,
                alignSelf: "center",
              }}
            ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Genie")}
        >
          <View
            style={{
              backgroundColor: "white",
              height: 190,
              width: 175,
              borderRadius: 30,
              alignContent: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Text
              style={{
                fontWeight: "800",
                fontSize: 18,
                marginLeft: 10,
                marginBottom: 5,
                marginTop: 15,
              }}
            >
              GENIE
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontVariant: "Regular",
                fontSize: 14,
                marginLeft: 10,
              }}
            >
              PICK-UP & DROP
            </Text>
            <Image
              source={require("../assets/images/cargo.png")}
              style={{
                height: 100,
                width: 150,
                marginHorizontal: 70,
                marginBottom: 15,
                marginTop: 5,
                alignSelf: "center",
              }}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F6",
  },
  top_row: {
    paddingTop: 50,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "row",
  },
  column: {
    flex: 1,
    flexDirection: "column",
  },
  TextInput_View: {
    flexDirection: "row",
    paddingBottom: 10,
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
export default Home;
