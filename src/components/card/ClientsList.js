import React from 'react';
import { View, Image, StyleSheet } from 'react-native'
import Color from '../../../assets/Constant'

const Card = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box} />
            <View style={styles.card}>
                <Image
                    style={styles.Image}
                    source={data.item.img}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        marginVertical: "4%",
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        height: 110,
        width: 170,
        backgroundColor: `${Color.secondary}70`,
        position: "absolute",
        left: "2%",
        bottom: "-6%"
    },
    card: {
        backgroundColor: "#fff",
        width: 170,
        height: 170,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    Image: {
        height: 70,
        width: 70,
        resizeMode: "contain",
    }
})
export default Card