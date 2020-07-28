import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import Color from '@Assets/Constant'
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height
const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View>
        <Image
          style={{ alignSelf: "flex-end" }}
          source={require('@Assets/images/quarter-circle.png')} />
        <Image
          style={styles.logo}
          source={require('@Assets/images/logo.png')} />
        <Image
          style={styles.pups}
          source={require('@Assets/images/pups.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${Color.primary}`,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    alignSelf: "center",
    marginTop: "10%"
  },
  pups: {
    resizeMode: "contain",
    width: width,
    height: height,
    marginBottom: "-80%"
  }
});

export default Splash