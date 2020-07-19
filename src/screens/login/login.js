import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import Form from '../../components/LoginForm/Login'
import Footer from '../../components/loginFooter/Footer'
const { width, height } = Dimensions.get("screen")

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Image source={require('../../../assets/images/quarter-circle-left.png')} style={{ alignSelf: "flex-start" }} resizeMode="cover" />
                <Image source={require('../../../assets/images/blue-logo.png')} resizeMode="cover" style={styles.logo} />
            </View>
            <KeyboardAvoidingView
                behavior='height'
                keyboardVerticalOffset={0}
            >
                <View style={styles.title}>
                    <Text style={{ color: "#22E0D7", fontSize: 16, fontFamily: "Altissimo_bold", alignSelf: "flex-start" }}>{'Welcome to'.toUpperCase()}</Text>
                    <Text style={{ color: "#313BD0", fontSize: 30, fontFamily: "Altissimo", fontWeight: "bold", alignSelf: "flex-start" }}>{'Vision Enabler'.toUpperCase()}</Text>
                    <Form />
                    <Footer />
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        width: width
    },
    head: {
        flex: 1,
        alignItems: "flex-end"
    },
    title: {
        marginLeft: "12%",
        paddingRight: "12%",
        marginBottom: "40%"
    },
    logo: {
        position: "absolute",
        top: height / 10,
        left: "5%"
    },
    // email: {
    //     width: width / 1.5
    // },
    // password: {
    //     width: "20%"
    // }
})
export default Login;