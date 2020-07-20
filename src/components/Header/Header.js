import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/LeftIcon.png')} />
            <Image
                style={{ justifyContent: "center", width: "100%", resizeMode: "contain", marginRight: "5%" }}
                source={require('../../../assets/images/AppLogo.png')} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: "7%",
        height: 80,
        alignItems: "center",
        borderBottomColor: "#313BD020",
        borderBottomWidth: 1
    }
})
export default Header