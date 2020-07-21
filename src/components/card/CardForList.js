//  this Card for Home Screen


import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
const Card = ({ data }) => {
    return (
        <View style={styles.card}>
            <View style={{ padding: 15, width: "100%" }}>
                <Image source={data.item.img} style={{
                    marginVertical: "3%"
                }} />
                <Text style={styles.title}>{data.item.title.toUpperCase()}</Text>
                <Text style={styles.description}>{data.item.description}</Text>
            </View>
            <Image style={styles.leftImage} source={require('../../../assets/images/cardPups.png')} />
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignSelf: "center",
        height: 200,
        width: "80%",
        backgroundColor: "#fff",
        marginVertical: "5%",
        borderRadius: 10,
        shadowColor: '#EEE9E9',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 4,
    },
    title: {
        fontSize: 20,
        color: "#22E0D7",
        marginVertical: "3%",
        fontFamily: "DINNextLTProRegular"
    },
    description: {
        fontSize: 14,
        color: "#313BD0",
        marginVertical: "3%",
        fontFamily: "DINNextLTProRegular"
    },
    leftImage: {
        width: "60%",
        marginLeft: "-50%",
        marginTop: 0,
        resizeMode: "contain"
    }
})
export default Card