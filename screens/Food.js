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
  ScrollView,
  ImageBackground,
} from "react-native";
import { Dimensions } from "react-native";

const ScreenWidth = Dimensions.get("screen").width;
const ScreenHeight = Dimensions.get("screen").height;

// create a component
const Food = ({navigation}) => {
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
          placeholder="   Search, Order, Enjoy, Repeat!"
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        <View
          style={{ width: 4, height: 45, backgroundColor: "#9B25F5" }}
        ></View>
        <Text style={{ textAlign: "left", marginRight: 40, fontSize: 14.5 }}>
          Get 3 Free food deliveries with offer pack.{"\n"}Valid for 30 days
        </Text>
        <Image
          source={require("../assets/images/free.png")}
          style={{ height: 45, width: 45 }}
        ></Image>
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 10,
            marginTop: 15,
            fontWeight: "500",
          }}
        >
          TOP PICKS FOR YOU
        </Text>
        <ScrollView
          horizontal={true}
          style={{ marginHorizontal: 10, height: 260 }}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.card}>
            <ImageBackground
              source={require("../assets/images/kfc.png")}
              resizeMode="stretch"
              borderRadius={30}
            >
              <Text
                style={{
                  fontWeight: "900",
                  color: "white",
                  fontSize: 24,
                  marginLeft: 10,
                  marginTop: 95,
                }}
              >
                50% OFF
              </Text>
              <Text
                style={{
                  fontWeight: "800",
                  color: "white",
                  fontVariant: "Regular",
                  fontSize: 16,
                  marginLeft: 10,
                  marginBottom: 15,
                }}
              >
                UPTO ₹50
              </Text>
            </ImageBackground>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 18,
                marginLeft: 10,
                marginTop: 10,
              }}
            >
              KFC
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Image
                source={require("../assets/images/rating.png")}
                style={{ height: 20, width: 22, marginLeft: 5 }}
              ></Image>
              <Text style={{ fontSize: 15, fontWeight: "400" }}>4.0</Text>
              <Text style={{ fontSize: 15, fontWeight: "400" }}>
                {" "}
                | 29 mins
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "500",
                color: "grey",
                fontSize: 14,
                marginLeft: 10,
                marginTop: 5,
              }}
            >
              Chicken,Pizza,Drinks..
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <ImageBackground
              source={require("../assets/images/burger_club.png")}
              resizeMode="stretch"
              borderRadius={30}
            >
              <Text
                style={{
                  fontWeight: "900",
                  color: "white",
                  fontSize: 24,
                  marginLeft: 10,
                  marginTop: 95,
                }}
              >
                60% OFF
              </Text>
              <Text
                style={{
                  fontWeight: "800",
                  color: "white",
                  fontVariant: "Regular",
                  fontSize: 16,
                  marginLeft: 10,
                  marginBottom: 15,
                }}
              >
                UPTO ₹120
              </Text>
            </ImageBackground>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 18,
                marginLeft: 10,
                marginTop: 10,
              }}
            >
              Burger Club
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Image
                source={require("../assets/images/rating.png")}
                style={{ height: 20, width: 22, marginLeft: 5 }}
              ></Image>
              <Text style={{ fontSize: 15, fontWeight: "400" }}>4.5</Text>
              <Text style={{ fontSize: 15, fontWeight: "400" }}>
                {" "}
                | 32 mins
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "500",
                color: "grey",
                fontSize: 14,
                marginLeft: 10,
                marginTop: 5,
              }}
            >
              Burger,Pasta,Shakes..
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <ImageBackground
              source={require("../assets/images/dominos.png")}
              resizeMode="stretch"
              borderRadius={30}
            >
              <Text
                style={{
                  fontWeight: "900",
                  color: "white",
                  fontSize: 24,
                  marginLeft: 10,
                  marginTop: 95,
                }}
              >
                60% OFF
              </Text>
              <Text
                style={{
                  fontWeight: "800",
                  color: "white",
                  fontVariant: "Regular",
                  fontSize: 16,
                  marginLeft: 10,
                  marginBottom: 15,
                }}
              >
                UPTO ₹80
              </Text>
            </ImageBackground>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 18,
                marginLeft: 10,
                marginTop: 10,
              }}
            >
              Dominos
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Image
                source={require("../assets/images/rating.png")}
                style={{ height: 20, width: 22, marginLeft: 5 }}
              ></Image>
              <Text style={{ fontSize: 15, fontWeight: "400" }}>4.2</Text>
              <Text style={{ fontSize: 15, fontWeight: "400" }}>
                {" "}
                | 23 mins
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "500",
                color: "grey",
                fontSize: 14,
                marginLeft: 10,
                marginTop: 5,
              }}
            >
              Pizza,Pasta,Drinks..
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <ImageBackground
              source={require("../assets/images/bakery.jpg")}
              resizeMode="stretch"
              borderRadius={30}
            >
              <Text
                style={{
                  fontWeight: "900",
                  color: "white",
                  fontSize: 24,
                  marginLeft: 10,
                  marginTop: 95,
                }}
              >
                25% OFF
              </Text>
              <Text
                style={{
                  fontWeight: "800",
                  color: "white",
                  fontVariant: "Regular",
                  fontSize: 16,
                  marginLeft: 10,
                  marginBottom: 15,
                }}
              >
                UPTO ₹50
              </Text>
            </ImageBackground>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 18,
                marginLeft: 10,
                marginTop: 10,
              }}
            >
              Dripping Dose
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Image
                source={require("../assets/images/rating.png")}
                style={{ height: 20, width: 22, marginLeft: 5 }}
              ></Image>
              <Text style={{ fontSize: 15, fontWeight: "400" }}>3.9</Text>
              <Text style={{ fontSize: 15, fontWeight: "400" }}>
                {" "}
                | 18 mins
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "500",
                color: "grey",
                fontSize: 14,
                marginLeft: 10,
                marginTop: 5,
              }}
            >
              Cakes,Pastries,Shakes..
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 10,
            marginTop: 15,
            fontWeight: "500",
            marginBottom: 10,
          }}
        >
          VAIBHAV , WHAT'S ON YOUR MIND?
        </Text>
        <ScrollView
          horizontal={true}
          style={{ marginHorizontal: 10, marginBottom: 25 }}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={{ marginRight: 10 }}>
            <View>
              <Image
                source={require("../assets/images/burger.png")}
                style={{ height: 80, width: 80 }}
              ></Image>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginHorizontal: 15,
                  fontWeight: "400",
                }}
              >
                Burger
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <View>
              <Image
                source={require("../assets/images/pizza.png")}
                style={{ height: 80, width: 80 }}
              ></Image>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginHorizontal: 15,
                  fontWeight: "400",
                }}
              >
                Pizza
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <View>
              <Image
                source={require("../assets/images/coffee.png")}
                style={{ height: 80, width: 80 }}
              ></Image>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginHorizontal: 15,
                  fontWeight: "400",
                }}
              >
                Coffee
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <View>
              <Image
                source={require("../assets/images/salad.png")}
                style={{ height: 70, width: 70, marginBottom: 10 }}
              ></Image>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginHorizontal: 15,
                  fontWeight: "400",
                }}
              >
                Salad
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <View>
              <Image
                source={require("../assets/images/shake.png")}
                style={{ height: 80, width: 80 }}
              ></Image>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginHorizontal: 15,
                  fontWeight: "400",
                }}
              >
                Shakes
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <View>
              <Image
                source={require("../assets/images/north_indian.png")}
                style={{ height: 65, width: 80, marginBottom: 15 }}
              ></Image>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginHorizontal: 0,
                  fontWeight: "400",
                }}
              >
                North Indian
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView
          horizontal={true}
          style={{ marginHorizontal: 10, marginBottom: 90 }}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={{ marginRight: 10 }}>
            <View>
              <Image
                source={require("../assets/images/biryani.png")}
                style={{ height: 80, width: 80 }}
              ></Image>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginHorizontal: 15,
                  fontWeight: "400",
                }}
              >
                Biryani
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <View>
              <Image
                source={require("../assets/images/south_indian.png")}
                style={{ height: 80, width: 80 }}
              ></Image>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginHorizontal: 0,
                  fontWeight: "400",
                }}
              >
                South Indian
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <View>
              <Image
                source={require("../assets/images/cake.png")}
                style={{ height: 80, width: 80 }}
              ></Image>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginHorizontal: 20,
                  fontWeight: "400",
                }}
              >
                Cake
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <View>
              <Image
                source={require("../assets/images/chole_bhature.png")}
                style={{ height: 70, width: 90, marginBottom: 10 }}
              ></Image>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginHorizontal: 0,
                  fontWeight: "400",
                }}
              >
                Chole Bhature
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <View>
              <Image
                source={require("../assets/images/chinese.png")}
                style={{ height: 80, width: 80 }}
              ></Image>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginHorizontal: 15,
                  fontWeight: "400",
                }}
              >
                Chinese
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <View>
              <Image
                source={require("../assets/images/samosa.png")}
                style={{ height: 60, width: 80, marginBottom: 20 }}
              ></Image>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginHorizontal: 10,
                  fontWeight: "400",
                }}
              >
                Samosa
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F6",
    flexDirection: "column",
    justifyContent: "flex-start",
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
    height: 160,
    width: 160,
    borderRadius: 30,
    marginTop: 20,
    marginHorizontal: 5,
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
export default Food;
