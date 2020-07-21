import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Color from '../../../assets/Constant'
const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/LeftIcon.png')} />
            <Image
                style={styles.logo}
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
        borderBottomColor: `${Color.primary}20`,
        borderBottomWidth: 1
    },
    logo: {
        justifyContent: "center",
        width: "100%",
        resizeMode: "contain",
        marginRight: "5%"
    }
})
export default Header