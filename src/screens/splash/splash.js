import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height
const Splash = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Signup')
  //   }, 3000);
  // }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View>
        <Image source={require('../../../assets/images/quarter-circle.png')} style={{ alignSelf: "flex-end" }} />
        <Image source={require('../../../assets/images/logo.png')} style={{ alignSelf: "center", marginTop: "10%" }} />
        <Image source={require('../../../assets/images/pups.png')} style={{ resizeMode: "contain", width: width, height: height, marginBottom: "-80%" }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313BD0",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Splash
