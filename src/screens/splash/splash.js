import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Color from '@Assets/Constant'
import { View, Text, StyleSheet, Image, Dimensions, AsyncStorage } from "react-native";
import LottieView from 'lottie-react-native';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height
const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(async () => {
      const token = await AsyncStorage.getItem('accessToken');
      console.log("token", token);
      if (token === null) {
        navigation.navigate('Login')
      } else {
        navigation.navigate('Drawer')
      }
    }, 3000);
    // data.play()
  }, []);
  // const resetAnimation = () => {
  //   data.reset();
  //   data.play();
  // };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <LottieView  source={require('../../../assets/moshin/data.json')} loop /> */}
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