import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Form from '../../../components/signupForm/SignupForm'
import Footer from '../../../components/loginFooter/Footer'

const SignUp = () => {
    return (
        <View style={styles.container}>
            <View style={{
                alignItems: "flex-start",
                height: "10%",
                justifyContent: "flex-end",
                paddingHorizontal: "5%"
            }}>
                <AntDesign name="arrowleft" size={24} color="#313BD0" />
            </View>
            <View style={{
                flex: 1,
                marginLeft: "10%",
                marginTop: "5%"
            }}>
                <Text style={{ color: "#22E0D7", fontSize: 16, fontFamily: "Altissimo_bold", alignSelf: "flex-start" }}>{'Account'.toUpperCase()}</Text>
                <Text style={{ color: "#313BD0", fontSize: 30, fontFamily: "Altissimo", fontWeight: "bold", alignSelf: "flex-start" }}>{'Sign up'.toUpperCase()}</Text>
                <Form />
                <Image source={require('../../../../assets/images/pups.png')} resizeMode="cover" style={{ marginTop: "20%", marginLeft: "-15%" }} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    }
})
export default SignUp