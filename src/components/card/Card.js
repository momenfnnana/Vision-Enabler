import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
const Card = () => {
    return (
        <View style={styles.container}>
            <View style={{ width: "60%", paddingLeft: "15%", paddingVertical: "5%" }}>
                <Text style={{ color: "#313BD0", fontSize: 20 }}>
                    {'We '.toUpperCase()}
                    <Text style={{ color: "#22E0D7" }}>
                        {'provide '.toUpperCase()}
                    </Text>
                    {'new '.toUpperCase()}
                    <Text style={{ color: "#22E0D7" }}>
                        {'solutions '.toUpperCase()}
                    </Text>
                    {'To increase '.toUpperCase()}
                    <Text style={{ color: "#22E0D7" }}>
                        {'performance '.toUpperCase()}
                    </Text>
                    {'Through '.toUpperCase()}
                    <Text style={{ color: "#22E0D7" }}>
                        {'diversity '.toUpperCase()}
                    </Text>
                    {'At a '.toUpperCase()}
                    <Text style={{ color: "#22E0D7" }}>
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
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: '#EEE9E9',
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
        width: "50%",
        height: "100%",
        marginBottom: "1%",
        marginRight: "8%"
    }
})
export default Card