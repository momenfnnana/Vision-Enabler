import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Login from './src/screens/AuthFlow/login/login';
import SignUp from './src/screens/AuthFlow/signup/signup';
import ActiveAccount from './src/screens/AuthFlow/activiteAccount/ActiveAccount';
import ResetPassword from './src/screens/AuthFlow/resetPassword/ResetPassword';
import Splash from './src/screens/splash/splash'
import Home from './src/screens/MainFlow/Home/Home';
import Header from './src/components/Header/Header';
import OurVision from './src/screens/MainFlow/OurVision/OurVision';
import Diversity from './src/screens/MainFlow/Diversity/Diversity';
import Help from './src/screens/MainFlow/Help/Help';
import Clients from './src/screens/MainFlow/Clients/Clients';
import AboutUs from './src/screens/MainFlow/AboutUs/AboutUs';
import PersonalScreen from './src/screens/MainFlow/PersonalScreen/PersonalScreen';
import Contact from './src/screens/MainFlow/Contact/Contact';
import ContactForm from './src/screens/MainFlow/Contact/ContactForm';
import Media from './src/screens/MainFlow/Media/Media';
import UploadCV from './src/screens/MainFlow/UploadCV/UploadCV';
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      'Altissimo_bold': require('./assets/fonts/Altissimo_bold.ttf'),
      'Altissimo': require('./assets/fonts/Altissimo.ttf'),
      'AbdoMasterNormal': require('./assets/fonts/AbdoMasterNormal.ttf'),
      'DINNextLTProRegular': require('./assets/fonts/DINNextLTPro-Regular.ttf')
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
      {/* <ActiveAccount /> */}
      {/* <Home /> */}
      {/* <Header /> */}
      {/* <OurVision /> */}
      {/* <Diversity /> */}
      {/* <Help /> */}
      {/* <Clients /> */}
      {/* <AboutUs /> */}
      {/* <PersonalScreen /> */}
      {/* <Contact /> */}
      {/* <ContactForm /> */}
      <Media />
      {/* <UploadCV /> */}
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
