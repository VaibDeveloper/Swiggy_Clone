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
const Dineout = ({ navigation }) => {
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
      <View>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 10,
            marginTop: 15,
            fontWeight: "500",
          }}
        >
          TOP RESTAURANTS NEAR YOU
        </Text>
        <ScrollView
          horizontal={true}
          style={{ marginHorizontal: 10, height: 300 }}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.card}>
            <ImageBackground
              source={require("../assets/images/restro1.jpg")}
              resizeMode="stretch"
              borderRadius={30}
            >
              <Text
                style={{
                  fontWeight: "900",
                  color: "white",
                  fontSize: 22,
                  marginLeft: 10,
                  marginTop: 140,
                }}
              >
                FLAT 10% OFF
              </Text>
              <Text
                style={{
                  fontWeight: "800",
                  color: "white",
                  fontVariant: "Regular",
                  fontSize: 14,
                  marginLeft: 10,
                  marginBottom: 15,
                }}
              >
                + ₹150 off with bank offers
              </Text>
            </ImageBackground>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 18,
                  marginLeft: 10,
                  marginTop: 10,
                }}
              >
                Talli Station
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginTop: 13,
                  marginHorizontal: 82,
                }}
              >
                <Image
                  source={require("../assets/images/rating.png")}
                  style={{ height: 20, width: 20, marginLeft: 60 }}
                ></Image>
                <Text style={{ fontSize: 15, fontWeight: "400" }}> 4.1</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "500",
                  color: "grey",
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: 3,
                }}
              >
                Rajendra Bhawan, Rajendra Place
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  color: "grey",
                  fontSize: 12,
                  marginLeft: 45,
                  marginTop: 4,
                }}
              >
                1.5 km
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "300",
                  color: "grey",
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: 0,
                }}
              >
                Italian, North Indian
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  color: "grey",
                  fontSize: 12,
                  marginLeft: 93,
                  marginTop: 0,
                }}
              >
                ₹1500 for two
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <ImageBackground
              source={require("../assets/images/restro2.jpg")}
              resizeMode="stretch"
              borderRadius={30}
            >
              <Text
                style={{
                  fontWeight: "900",
                  color: "white",
                  fontSize: 22,
                  marginLeft: 10,
                  marginTop: 140,
                }}
              >
                FLAT 25% OFF
              </Text>
              <Text
                style={{
                  fontWeight: "800",
                  color: "white",
                  fontVariant: "Regular",
                  fontSize: 14,
                  marginLeft: 10,
                  marginBottom: 15,
                }}
              >
                + ₹100 off with bank offers
              </Text>
            </ImageBackground>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 18,
                  marginLeft: 10,
                  marginTop: 10,
                }}
              >
                Dasaprakash
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginTop: 13,
                  marginHorizontal: 73,
                }}
              >
                <Image
                  source={require("../assets/images/rating.png")}
                  style={{ height: 20, width: 20, marginLeft: 60 }}
                ></Image>
                <Text style={{ fontSize: 15, fontWeight: "400" }}> 4.2</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "500",
                  color: "grey",
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: 3,
                }}
              >
                Connaught Place
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  color: "grey",
                  fontSize: 12,
                  marginLeft: 144,
                  marginTop: 4,
                }}
              >
                2.1 km
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "300",
                  color: "grey",
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: 0,
                }}
              >
                North Indian, South Indian
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  color: "grey",
                  fontSize: 12,
                  marginLeft: 55,
                  marginTop: 0,
                }}
              >
                ₹1800 for two
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <ImageBackground
              source={require("../assets/images/restro3.jpg")}
              resizeMode="stretch"
              borderRadius={30}
            >
              <Text
                style={{
                  fontWeight: "900",
                  color: "white",
                  fontSize: 22,
                  marginLeft: 10,
                  marginTop: 140,
                }}
              >
                FLAT 20% OFF
              </Text>
              <Text
                style={{
                  fontWeight: "800",
                  color: "white",
                  fontVariant: "Regular",
                  fontSize: 14,
                  marginLeft: 10,
                  marginBottom: 15,
                }}
              >
                + ₹180 off with bank offers
              </Text>
            </ImageBackground>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 18,
                  marginLeft: 10,
                  marginTop: 10,
                }}
              >
                Barbeque Nation
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginTop: 13,
                  marginHorizontal: 41,
                }}
              >
                <Image
                  source={require("../assets/images/rating.png")}
                  style={{ height: 20, width: 20, marginLeft: 60 }}
                ></Image>
                <Text style={{ fontSize: 15, fontWeight: "400" }}> 4.0</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "500",
                  color: "grey",
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: 3,
                }}
              >
                Rajouri Garden
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  color: "grey",
                  fontSize: 12,
                  marginLeft: 155,
                  marginTop: 4,
                }}
              >
                3.5 km
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "300",
                  color: "grey",
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: 0,
                }}
              >
                North Indian
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  color: "grey",
                  fontSize: 12,
                  marginLeft: 134,
                  marginTop: 0,
                }}
              >
                ₹1600 for two
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <ImageBackground
              source={require("../assets/images/restro4.jpg")}
              resizeMode="stretch"
              borderRadius={30}
            >
              <Text
                style={{
                  fontWeight: "900",
                  color: "white",
                  fontSize: 22,
                  marginLeft: 10,
                  marginTop: 140,
                }}
              >
                FLAT 15% OFF
              </Text>
              <Text
                style={{
                  fontWeight: "800",
                  color: "white",
                  fontVariant: "Regular",
                  fontSize: 14,
                  marginLeft: 10,
                  marginBottom: 15,
                }}
              >
                + ₹120 off with bank offers
              </Text>
            </ImageBackground>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 18,
                  marginLeft: 10,
                  marginTop: 10,
                }}
              >
                Wok In The Clouds
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginTop: 13,
                  marginHorizontal: 25,
                }}
              >
                <Image
                  source={require("../assets/images/rating.png")}
                  style={{ height: 20, width: 20, marginLeft: 60 }}
                ></Image>
                <Text style={{ fontSize: 15, fontWeight: "400" }}> 4.3</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "500",
                  color: "grey",
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: 3,
                }}
              >
                Punjabi Bagh
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  color: "grey",
                  fontSize: 12,
                  marginLeft: 165,
                  marginTop: 4,
                }}
              >
                3.8 km
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "300",
                  color: "grey",
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: 0,
                }}
              >
                Chinese, Thai
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  color: "grey",
                  fontSize: 12,
                  marginLeft: 128,
                  marginTop: 0,
                }}
              >
                ₹2200 for two
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 10,
            marginTop: 25,
            fontWeight: "500",
            marginBottom: 10,
          }}
        >
          WHAT'S ON YOUR MIND?
        </Text>
        <ScrollView
          horizontal={true}
          style={{ marginHorizontal: 10, marginBottom: 25 }}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.card2}>
            <ImageBackground
              source={require("../assets/images/pic1.jpg")}
              resizeMode="stretch"
              borderRadius={30}
            >
              <View style={{ height: 185 }}></View>
            </ImageBackground>
            <Text
              style={{
                fontWeight: "500",
                color: "black",
                fontSize: 18,
                marginTop: 10,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Match Screenings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2}>
            <ImageBackground
              source={require("../assets/images/pic2.jpg")}
              resizeMode="stretch"
              borderRadius={30}
            >
              <View style={{ height: 185 }}></View>
            </ImageBackground>
            <Text
              style={{
                fontWeight: "500",
                color: "black",
                fontSize: 18,
                marginTop: 10,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Top Rated
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2}>
            <ImageBackground
              source={require("../assets/images/pic3.jpg")}
              resizeMode="stretch"
              borderRadius={30}
            >
              <View style={{ height: 185 }}></View>
            </ImageBackground>
            <Text
              style={{
                fontWeight: "500",
                color: "black",
                fontSize: 18,
                marginTop: 10,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Oktoberfest
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2}>
            <ImageBackground
              source={require("../assets/images/pic4.jpg")}
              resizeMode="stretch"
              borderRadius={30}
            >
              <View style={{ height: 185 }}></View>
            </ImageBackground>
            <Text
              style={{
                fontWeight: "500",
                color: "black",
                fontSize: 18,
                marginTop: 10,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Midnight Club
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2}>
            <ImageBackground
              source={require("../assets/images/pic5.jpg")}
              resizeMode="stretch"
              borderRadius={30}
            >
              <View style={{ height: 185 }}></View>
            </ImageBackground>
            <Text
              style={{
                fontWeight: "500",
                color: "black",
                fontSize: 18,
                marginTop: 10,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Unique Dining
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2}>
            <ImageBackground
              source={require("../assets/images/pic6.jpg")}
              resizeMode="stretch"
              borderRadius={30}
            >
              <View style={{ height: 185 }}></View>
            </ImageBackground>
            <Text
              style={{
                fontWeight: "500",
                color: "black",
                fontSize: 18,
                marginTop: 10,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Buffets
            </Text>
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
    height: 200,
    width: 310,
    borderRadius: 30,
    marginTop: 20,
    marginHorizontal: 5,
  },
  card2: {
    backgroundColor: "white",
    elevation: 8,
    height: 180,
    width: 165,
    borderRadius: 30,
    marginTop: 20,
    marginHorizontal: 5,
    marginBottom:95
  },
});

//make this component available to the app
export default Dineout;
