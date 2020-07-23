import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import Persons from '../../fakeData/Persons';
import Color from '../../../assets/Constant'
const PersonCard = () => {
    return (
        <ScrollView
            style={{ marginTop: "5%", marginLeft: "5%" }}
            horizontal
        >
            {
                Persons.map(i => {
                    return (
                        <View
                            style={styles.container}
                            key={i.id}
                        >
                            <View
                                style={styles.backgroundCard}
                            />
                            <ImageBackground
                                style={styles.backgroundImage}
                                source={i.img}
                            >
                                <View
                                    style={styles.details}
                                >
                                    <Text
                                        style={styles.name}
                                    >{i.name}</Text>
                                    <Text
                                        style={styles.job}
                                    >{i.Job}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 18,
        marginVertical: "5%",
        position: "relative"
    },
    backgroundCard: {
        width: 220,
        height: 157,
        backgroundColor: `${Color.secondary}`,
        position: "absolute",
        left: "-5%",
        bottom: "-4%"
    },
    backgroundImage: {
        width: 220,
        height: 353,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 16
    },
    details: {
        width: 200,
        height: 77,
        backgroundColor: `${Color.primary}`,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        right: 0,
        shadowColor: `${Color.black}`,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 16
    },
    name: {
        color: `${Color.white}`,
        fontSize: 22,
        fontWeight: "bold",
        fontFamily: "Altissimo_bold"
    },
    job: {
        color: `${Color.white}`,
        fontSize: 14,
        fontFamily: "DINNextLTProRegular"
    }
})
export default PersonCard