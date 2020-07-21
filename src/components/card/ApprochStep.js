import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../../../assets/Constant'
const ApprochStep = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>{'step 1'.toUpperCase()}</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Define your strategy using benchmarking</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{'step 2'.toUpperCase()}</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Execute your action plan using training</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{'step 3'.toUpperCase()}</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Deliver change by measuring the impact of your diversity programme</Text>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        marginLeft: "7%",
        marginRight: "7%",
        marginTop: "5%"
    },
    title: {
        color: `${Color.white}`,
        backgroundColor: `${Color.primary}`,
        paddingLeft: "3%",
        paddingVertical: "3%",
        width: "18%",
        fontSize: 14,
        fontFamily: "DINNextLTProRegular"
    },
    textContainer: {
        backgroundColor: `${Color.white}`,
        padding: "7%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
    },
    text: {
        color: `${Color.primary}`,
        fontFamily: "DINNextLTProRegular"
    }
})
export default ApprochStep