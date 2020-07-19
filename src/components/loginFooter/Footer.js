import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

const Footer = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/images/pups.png")} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: "-120%",
        zIndex: -1,
        left: "-20%"
    }
})
export default Footer