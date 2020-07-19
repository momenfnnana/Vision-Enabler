import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/screens/splash/splash';
import Login from './src/screens/login/login';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import SignUp from './src/screens/signup/signup';
import ResetPassword from './src/screens/resetPassword/ResetPassword';
import ActiveAccount from './src/screens/activiteAccount/ActiveAccount';
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      'Altissimo_bold': require('./assets/fonts/Altissimo_bold.ttf'),
      'Altissimo': require('./assets/fonts/Altissimo1.ttf')
    });
  };
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  return (
    <View style={styles.container}>
      {/* <Splash /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <ResetPassword /> */}
      <ActiveAccount />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
