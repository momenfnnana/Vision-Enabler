import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const SectionDescription = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "85%",
        marginLeft: "7%",
        marginRight: "7%",
    },
    text: {
        color: "#313BD0",
        fontSize: 14,
        marginTop: "5%",
        fontFamily: "DINNextLTProRegular",
        lineHeight: 18
    }
})
export default SectionDescription