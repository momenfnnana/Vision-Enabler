import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../../../assets/Constant'
const ApproachCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.text}>We lead with <Text style={styles.textInside}>questions</Text>, not answers.</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>We engage in <Text style={styles.textInside}>dialogue </Text>and <Text style={styles.textInside}>debate </Text>, not coercion.</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>We conduct <Text style={styles.textInside}>analysis </Text>, without blame.</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>We build mechanisms that turn information into <Text style={styles.textInside}>facts </Text>that cannot be ignored.</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>We turn insights into clear points of <Text style={styles.textInside}>action.</Text></Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginLeft: "7%",
        marginRight: "7%",
        marginTop: "5%"
    },
    card: {
        marginVertical: "5%",
        paddingVertical: "5%",
        paddingLeft: "5%",
        paddingRight: "20%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        backgroundColor: "#fff",
        borderLeftColor: `${Color.primary}`,
        borderLeftWidth: 4
    },
    text: {
        color: `${Color.primary}`,
        fontSize: 14,
        fontFamily: "DINNextLTProRegular"
    },
    textInside: {
        color: `${Color.secondary}`,
        fontSize: 14,
        fontFamily: "DINNextLTProRegular"
    }
})
export default ApproachCard