import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Header from '../../../components/Header/Header';
import Card from '../../../components/card/Card';
import { AntDesign } from '@expo/vector-icons';
import VisionData from '../../../fakeData/FakeData';
import ClientData from '../../../fakeData/ClientData';
import Color from '../../../../assets/Constant'
const Home = (props) => {
    console.log("ClientData", ClientData);
    return (
        <View>
            <Header />
            <ScrollView style={styles.container}>
                <Card />
                <View style={styles.headSection}>
                    <Text style={{ color: `${Color.secondary}`, fontSize: 16, fontFamily: "Altissimo_bold", alignSelf: "flex-start" }}>{'WHAT IS'.toUpperCase()}</Text>
                    <Text style={{ color: `${Color.primary}`, fontSize: 30, fontFamily: "Altissimo", fontWeight: "bold", alignSelf: "flex-start" }}>{'DIVERSITY'.toUpperCase()}</Text>
                    <Text style={{ color: `${Color.primary}`, fontSize: 14, marginTop: "7%" }}>Simply defined, diversity is the state of being diverse or different.</Text>
                </View>
                <Image source={require('../../../../assets/images/Diversity.png')} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>More</Text>
                    <AntDesign name="arrowright" size={24} color="#fff" style={styles.arrow} />
                </TouchableOpacity>
                <View style={{
                    marginTop: "12%",
                    width: "80%",
                    marginLeft: "7%"
                }}>
                    <Text style={{ color: "#22E0D7", fontSize: 16, fontFamily: "Altissimo_bold", alignSelf: "flex-start" }}>{'OUR'.toUpperCase()}</Text>
                    <Text style={{ color: "#313BD0", fontSize: 30, fontFamily: "Altissimo", fontWeight: "bold", alignSelf: "flex-start" }}>{'VISION and VALUES'.toUpperCase()}</Text>
                    <Text style={{ color: "#313BD0", fontSize: 14, marginTop: "7%" }}>At Vision Enabler we believe that diversity should be at the core of every forward thinking company’s management strategy.</Text>
                </View>
                <ScrollView horizontal>
                    {
                        VisionData.map(data => {
                            return (
                                <View key={data.id} style={{
                                    flexDirection: "row",
                                    marginVertical: "5%",
                                    marginHorizontal: 20,
                                    backgroundColor: "#fff",
                                    shadowColor: '#EEE9E9',
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 0.39,
                                    shadowRadius: 8.30,
                                    elevation: 13,
                                    borderRadius: 15,
                                    width: 280
                                }}>
                                    <View style={{ padding: 15, width: "100%" }}>
                                        <Image source={data.img} style={{
                                            marginVertical: "3%"
                                        }} />
                                        <Text style={{ fontSize: 20, color: "#22E0D7", marginVertical: "3%" }}>{data.title.toUpperCase()}</Text>
                                        <Text style={{ fontSize: 14, color: "#313BD0", marginVertical: "3%" }}>{data.description}</Text>
                                    </View>
                                    <Image style={{ width: "60%", marginLeft: -155, marginTop: 0, resizeMode: "contain" }} source={require('../../../../assets/images/cardPups.png')} />
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>More</Text>
                    <AntDesign name="arrowright" size={24} color="#fff" style={styles.arrow} />
                </TouchableOpacity>
                <View style={{
                    marginTop: "12%",
                    width: "80%",
                    marginLeft: "7%"
                }}>
                    <Text style={{ color: "#22E0D7", fontSize: 16, fontFamily: "Altissimo_bold", alignSelf: "flex-start" }}>{'our'.toUpperCase()}</Text>
                    <Text style={{ color: "#313BD0", fontSize: 30, fontFamily: "Altissimo", fontWeight: "bold", alignSelf: "flex-start" }}>{'clients'.toUpperCase()}</Text>
                    <Text style={{ color: "#313BD0", fontSize: 14, marginTop: "7%" }}>At Vision Enabler we believe that diversity should be at the core of every forward thinking company’s management strategy.</Text>
                </View>
                <ScrollView horizontal style={{ marginLeft: "0%" }}>
                    {
                        ClientData.map(i => {
                            return (
                                <View style={{ flexDirection: 'row', marginVertical: 50, marginHorizontal: 0 }} key={i.id}>
                                    <View
                                        style={{
                                            sshadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 1,
                                            },
                                            shadowOpacity: 0.18,
                                            shadowRadius: 1.00,
                                            elevation: 4,
                                            backgroundColor: '#fff',
                                            position: 'relative',
                                            marginHorizontal: 30,
                                            alignItems: "center",
                                            justifyContent: 'center',
                                            height: 100,
                                            width: 100,
                                            borderRadius: 50,
                                        }}
                                        source={require('../../../../assets/images/roundedTringle.png')} >
                                        <Image style={{ resizeMode: "contain", width: 50, height: 50 }} source={i.img} />
                                        <Image style={{ position: "absolute", left: -10, bottom: -10 }} source={require('../../../../assets/images/HalfQurater.png')} />
                                    </View>
                                    <View style={{ justifyContent: "center", marginLeft: 7 }}>
                                        <Text style={{ fontSize: 20, color: "#313BD0", fontFamily: "Altissimo_bold", fontWeight: "bold" }}>{i.title.toUpperCase()}</Text>
                                        <Text style={{ fontSize: 14, color: "#22E0D7", fontFamily: "Altissimo" }}>{i.subTitle}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <TouchableOpacity style={[styles.button, { marginBottom: "5%" }]}>
                    <Text style={styles.buttonText}>More</Text>
                    <AntDesign name="arrowright" size={24} color="#fff" style={styles.arrow} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        borderRadius: 50,
        backgroundColor: "#313BD0",
        paddingVertical: 12,
        width: "80%",
        alignSelf: "center",
        marginTop: "10%"
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        width: "90%",
        textAlign: "center",
        marginLeft: "3%"
    },
    arrow: {
        alignSelf: "flex-end",
        marginLeft: "-5%"
    },
    headSection: {
        marginTop: "12%",
        width: "80%",
        marginLeft: "7%"
    }
})
export default Home