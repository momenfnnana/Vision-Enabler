import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../../../assets/Constant'
const SectionTitle = ({ title1, title2 }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title1}>{title1}</Text>
            <Text style={styles.title2}>{title2}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: "7%",
        width: "80%",
        marginLeft: "7%"
    },
    title1: {
        color: `${Color.secondary}`,
        fontSize: 18,
        fontFamily: "DINNextLTProRegular",
        alignSelf: "flex-start",
        textTransform: "uppercase"
    },
    title2: {
        color: `${Color.primary}`,
        fontSize: 30,
        fontFamily: "DINNextLTProRegular",
        fontWeight: "bold",
        alignSelf: "flex-start",
        textTransform: "uppercase"
    }
})
export default SectionTitle