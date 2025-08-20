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
const Instamart = ({navigation}) => {
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
          <Text style={{ fontSize: 14, marginBottom: 10 }}>
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
          placeholder="   Groceries, Fruits, Electronics..."
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
          justifyContent: "flex-start",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            fontSize: 24,
            fontWeight: "900",
            color: "#720D83",
            marginHorizontal: ScreenWidth - 390,
            marginRight: ScreenWidth - 240,
          }}
        >
          Instamart
        </Text>
        <View style={{ flexDirection: "columns" }}>
          <Text
            style={{
              textAlign: "left",
              fontSize: 18,
              fontWeight: "900",
              color: "#720D83",
              marginLeft: 7,
            }}
          >
            Delivery In
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../assets/images/thunder.png")}
            ></Image>
            <Text
              style={{
                textAlign: "left",
                marginRight: 40,
                fontSize: 18,
                fontWeight: "900",
                color: "#720D83",
              }}
            >
              10 Mins
            </Text>
          </View>
        </View>
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
          Vaibhav , Quick Picks for you
        </Text>
        <ScrollView
          horizontal={true}
          style={{
            marginHorizontal: 10,
            height: 250,
            marginBottom: 0,
            marginTop: 10,
          }}
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <View
              style={{
                width: 30,
                height: 30,
                position: "absolute",
                backgroundColor: "white",
                borderRadius: 10,
                left: 100,
                top: 10,
                zIndex: 1,
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/images/plus.png")}
                style={{
                  alignSelf: "center",
                  width: 20,
                  height: 20,
                  marginTop: 5,
                }}
              ></Image>
            </View>
            <TouchableOpacity style={styles.card}>
              <View>
                <Image
                  source={require("../assets/images/snickers.png")}
                  style={{ height: 110, width: 110, alignSelf: "center" }}
                ></Image>

                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "left",
                    marginHorizontal: 15,
                    fontWeight: "400",
                    marginTop: 25,
                  }}
                >
                  Snickers Peanut Bar
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: "left",
                    marginHorizontal: 15,
                    color: "grey",
                    fontWeight: "300",
                  }}
                >
                  80g
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 14,
                      textAlign: "left",
                      marginLeft: 12,
                      color: "black",
                      fontWeight: "500",
                    }}
                  >
                    ₹50
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      textAlign: "left",
                      color: "grey",
                      fontWeight: "300",
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  >
                    ̶₹̶8̶0̶
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                width: 30,
                height: 30,
                position: "absolute",
                backgroundColor: "white",
                borderRadius: 10,
                left: 100,
                top: 10,
                zIndex: 1,
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/images/plus.png")}
                style={{
                  alignSelf: "center",
                  width: 20,
                  height: 20,
                  marginTop: 5,
                }}
              ></Image>
            </View>
            <TouchableOpacity style={styles.card}>
              <View>
                <Image
                  source={require("../assets/images/lays.png")}
                  style={{ height: 110, width: 110, alignSelf: "center" }}
                ></Image>

                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "left",
                    marginHorizontal: 15,
                    fontWeight: "400",
                    marginTop: 25,
                  }}
                >
                  Lays Hot Chilli
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: "left",
                    marginHorizontal: 15,
                    color: "grey",
                    fontWeight: "300",
                  }}
                >
                  80g
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 14,
                      textAlign: "left",
                      marginLeft: 12,
                      color: "black",
                      fontWeight: "500",
                    }}
                  >
                    ₹30
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      textAlign: "left",
                      color: "grey",
                      fontWeight: "300",
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  >
                    ̶₹̶5̶0̶
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                width: 30,
                height: 30,
                position: "absolute",
                backgroundColor: "white",
                borderRadius: 10,
                left: 100,
                top: 10,
                zIndex: 1,
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/images/plus.png")}
                style={{
                  alignSelf: "center",
                  width: 20,
                  height: 20,
                  marginTop: 5,
                }}
              ></Image>
            </View>
            <TouchableOpacity style={styles.card}>
              <View>
                <Image
                  source={require("../assets/images/coolberg.png")}
                  style={{
                    height: 110,
                    width: 110,
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                ></Image>

                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "left",
                    marginHorizontal: 15,
                    fontWeight: "400",
                    marginTop: 25,
                  }}
                >
                  Coolberg Peach Beer
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: "left",
                    marginHorizontal: 15,
                    color: "grey",
                    fontWeight: "300",
                  }}
                >
                  300ml
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 14,
                      textAlign: "left",
                      marginLeft: 12,
                      color: "black",
                      fontWeight: "500",
                    }}
                  >
                    ₹80
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      textAlign: "left",
                      color: "grey",
                      fontWeight: "300",
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  >
                    ̶₹̶1̶2̶0̶
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                width: 30,
                height: 30,
                position: "absolute",
                backgroundColor: "white",
                borderRadius: 10,
                left: 100,
                top: 10,
                zIndex: 1,
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/images/plus.png")}
                style={{
                  alignSelf: "center",
                  width: 20,
                  height: 20,
                  marginTop: 5,
                }}
              ></Image>
            </View>
            <TouchableOpacity style={styles.card}>
              <View>
                <Image
                  source={require("../assets/images/munch.png")}
                  style={{
                    height: 90,
                    width: 110,
                    alignSelf: "center",
                    marginTop: 10,
                    marginBottom: 15,
                  }}
                ></Image>

                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "left",
                    marginHorizontal: 15,
                    fontWeight: "400",
                    marginTop: 25,
                  }}
                >
                  Munch Chocolate
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: "left",
                    marginHorizontal: 15,
                    color: "grey",
                    fontWeight: "300",
                  }}
                >
                  40g
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 14,
                      textAlign: "left",
                      marginLeft: 12,
                      color: "black",
                      fontWeight: "500",
                    }}
                  >
                    ₹30
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      textAlign: "left",
                      color: "grey",
                      fontWeight: "300",
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  >
                    ̶₹̶5̶0̶
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ScrollView
          horizontal={true}
          style={{ marginHorizontal: 10, marginBottom: 100, height: 250 }}
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <View
              style={{
                width: 30,
                height: 30,
                position: "absolute",
                backgroundColor: "white",
                borderRadius: 10,
                left: 100,
                top: 10,
                zIndex: 1,
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/images/plus.png")}
                style={{
                  alignSelf: "center",
                  width: 20,
                  height: 20,
                  marginTop: 5,
                }}
              ></Image>
            </View>
            <TouchableOpacity style={styles.card}>
              <View>
                <Image
                  source={require("../assets/images/mountain_dew.png")}
                  style={{
                    height: 110,
                    width: 110,
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                ></Image>

                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "left",
                    marginHorizontal: 15,
                    fontWeight: "400",
                    marginTop: 25,
                  }}
                >
                  Mountain Dew
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: "left",
                    marginHorizontal: 15,
                    color: "grey",
                    fontWeight: "300",
                  }}
                >
                  300ml
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 14,
                      textAlign: "left",
                      marginLeft: 12,
                      color: "black",
                      fontWeight: "500",
                    }}
                  >
                    ₹25
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      textAlign: "left",
                      color: "grey",
                      fontWeight: "300",
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  >
                    ̶₹̶5̶0̶
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                width: 30,
                height: 30,
                position: "absolute",
                backgroundColor: "white",
                borderRadius: 10,
                left: 100,
                top: 10,
                zIndex: 1,
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/images/plus.png")}
                style={{
                  alignSelf: "center",
                  width: 20,
                  height: 20,
                  marginTop: 5,
                }}
              ></Image>
            </View>
            <TouchableOpacity style={styles.card}>
              <View>
                <Image
                  source={require("../assets/images/colgate.png")}
                  style={{
                    height: 110,
                    width: 110,
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                ></Image>

                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "left",
                    marginHorizontal: 15,
                    fontWeight: "400",
                    marginTop: 25,
                  }}
                >
                  Colgate Toothpaste
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: "left",
                    marginHorizontal: 15,
                    color: "grey",
                    fontWeight: "300",
                  }}
                >
                  200ml
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 14,
                      textAlign: "left",
                      marginLeft: 12,
                      color: "black",
                      fontWeight: "500",
                    }}
                  >
                    ₹90
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      textAlign: "left",
                      color: "grey",
                      fontWeight: "300",
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  >
                    ̶₹̶1̶2̶0̶
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                width: 30,
                height: 30,
                position: "absolute",
                backgroundColor: "white",
                borderRadius: 10,
                left: 100,
                top: 10,
                zIndex: 1,
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/images/plus.png")}
                style={{
                  alignSelf: "center",
                  width: 20,
                  height: 20,
                  marginTop: 5,
                }}
              ></Image>
            </View>
            <TouchableOpacity style={styles.card}>
              <View>
                <Image
                  source={require("../assets/images/maggi.png")}
                  style={{
                    height: 110,
                    width: 110,
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                ></Image>

                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "left",
                    marginHorizontal: 15,
                    fontWeight: "400",
                    marginTop: 25,
                  }}
                >
                  Maggi Noodles
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: "left",
                    marginHorizontal: 15,
                    color: "grey",
                    fontWeight: "300",
                  }}
                >
                  60g
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 14,
                      textAlign: "left",
                      marginLeft: 12,
                      color: "black",
                      fontWeight: "500",
                    }}
                  >
                    ₹15
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      textAlign: "left",
                      color: "grey",
                      fontWeight: "300",
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  >
                    ̶ ̶₹̶2̶0̶
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                width: 30,
                height: 30,
                position: "absolute",
                backgroundColor: "white",
                borderRadius: 10,
                left: 100,
                top: 10,
                zIndex: 1,
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/images/plus.png")}
                style={{
                  alignSelf: "center",
                  width: 20,
                  height: 20,
                  marginTop: 5,
                }}
              ></Image>
            </View>
            <TouchableOpacity style={styles.card}>
              <View>
                <Image
                  source={require("../assets/images/biscuits.png")}
                  style={{
                    height: 110,
                    width: 110,
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                ></Image>

                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "left",
                    marginHorizontal: 15,
                    fontWeight: "400",
                    marginTop: 25,
                  }}
                >
                  KrackJack Biscuits
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: "left",
                    marginHorizontal: 15,
                    color: "grey",
                    fontWeight: "300",
                  }}
                >
                  150gm
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 14,
                      textAlign: "left",
                      marginLeft: 12,
                      color: "black",
                      fontWeight: "500",
                    }}
                  >
                    ₹60
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      textAlign: "left",
                      color: "grey",
                      fontWeight: "300",
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  >
                    ̶₹̶8̶0̶
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
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
    backgroundColor: "lightgrey",
    elevation: 3,
    height: 120,
    width: 120,
    borderRadius: 30,
    marginTop: 20,
    marginHorizontal: 5,
  },
});

//make this component available to the app
export default Instamart;
