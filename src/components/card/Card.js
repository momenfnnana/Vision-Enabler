// first Card in Home Screen


import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Color from '../../../assets/Constant'
const Card = () => {
    return (
        <View style={styles.container}>
            <View style={{ width: "80%", paddingLeft: "29%", paddingVertical: "5%" }}>
                <Text style={{ color: `${Color.primary}`, fontSize: 20 }}>
                    {'We '.toUpperCase()}
                    <Text style={{ color: `${Color.secondary}` }}>
                        {'provide '.toUpperCase()}
                    </Text>
                    {'new '.toUpperCase()}
                    <Text style={{ color: `${Color.secondary}` }}>
                        {'solutions '.toUpperCase()}
                    </Text>
                    {'To increase '.toUpperCase()}
                    <Text style={{ color: `${Color.secondary}` }}>
                        {'performance '.toUpperCase()}
                    </Text>
                    {'Through '.toUpperCase()}
                    <Text style={{ color: `${Color.secondary}` }}>
                        {'diversity '.toUpperCase()}
                    </Text>
                    {'At a '.toUpperCase()}
                    <Text style={{ color: `${Color.secondary}` }}>
                        {'global scale '.toUpperCase()}
                    </Text>
                </Text>
            </View>
            <Image style={styles.Image} source={require('../../../assets/images/cardCorner.png')} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "90%",
        marginTop: "10%",
        backgroundColor: `${Color.white}`,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: `${Color.secondary}`,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 10,
        borderRadius: 15,
        alignSelf: "center"
    },
    Image: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        resizeMode: "contain",
        width: "45%",
        height: "100%",
        marginBottom: "1%",
        marginRight: "25%"
    }
})
export default Card