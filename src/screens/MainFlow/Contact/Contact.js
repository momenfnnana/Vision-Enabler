import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import StackHeader from '../../../components/Header/StackHeader'
import Color from '../../../../assets/Constant'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import SectionDescription from '../../../components/SectionTitle/SectionDescription'
import ContactData from '../../../fakeData/Contact'
import { Ionicons } from '@expo/vector-icons';
const Contact = () => {
    return (
        <View>
            <StackHeader
                color={Color.primary}
            />
            <ScrollView
                style={styles.container}
            >
                <View
                    style={{
                        paddingHorizontal: "5%"
                    }}
                >
                    <SectionTitle
                        title1="Say hi"
                        title2="Don’t be shy"
                    />
                    <SectionDescription
                        text="At Vision Enabler we believe that diversity should be at the core of every forward thinking company’s management strategy."
                    />
                </View>
                <View
                    style={{
                        marginTop: "12%"
                    }}
                >
                    {
                        ContactData.map(i => {
                            return (
                                <View
                                    style={styles.cardContainer}
                                    key={i.id}
                                >
                                    <Image
                                        style={styles.imgCard}
                                        source={i.img}
                                    />
                                    <Text
                                        style={styles.title}
                                    >{i.title}</Text>
                                    <Text
                                        style={styles.text1}
                                    >{i.desciption1}</Text>
                                    <Text
                                        style={styles.text2}
                                    >{i.desciption2}</Text>
                                    <Text
                                        style={styles.text3}
                                    >{i.desciption3}</Text>
                                </View>
                            )
                        })
                    }
                </View>
                <View style={styles.bottomCard}>
                    <View
                        style={styles.whiteContainer}>

                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text
                            style={styles.titleBottomCard}>Our teams are here to <Text
                                style={{
                                    color: Color.secondary
                                }}>help</Text></Text>
                        <Text
                            style={styles.desciption}>Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.button}>
                        <Text
                            style={styles.textButton}>Drop us a Line</Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.bottomLeftImage}
                        source={require('../../../../assets/images/cornerQuarterCircle.png')} />
                    <Image
                        style={styles.topRightImage}
                        source={require('../../../../assets/images/pupsCorner.png')} />
                </View>
                <View style={styles.bottomCard}>
                    <View
                        style={styles.whiteContainer}>
                        <Ionicons name="md-person" size={30} color={Color.secondary} />
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text
                            style={styles.titleBottomCard}>Upload <Text
                                style={{
                                    color: Color.secondary
                                }}>CV</Text></Text>
                        <Text
                            style={styles.desciption}>if you interested in our work upload your CV file and we will contact you later</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.button}>
                        <Text
                            style={styles.textButton}>Upload CV</Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.bottomLeftImage}
                        source={require('../../../../assets/images/cornerQuarterCircle.png')} />
                    <Image
                        style={styles.topRightImage}
                        source={require('../../../../assets/images/pupsCorner.png')} />
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    cardContainer: {
        width: "80%",
        alignSelf: "center",
        backgroundColor: Color.white,
        shadowColor: Color.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        borderRadius: 20,
        marginVertical: "4%"
    },
    imgCard: {
        alignSelf: "center",
        marginTop: "9%"
    },
    title: {
        textAlign: "center",
        color: Color.primary,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: "2%",
        marginTop: "9%"
    },
    text1: {
        textAlign: "center",
        color: Color.primary
    },
    text2: {
        textAlign: "center",
        color: Color.primary,
        marginVertical: "2%"
    },
    text3: {
        textAlign: "center",
        color: Color.primary,
        marginBottom: "9%"
    },
    bottomCard: {
        marginBottom: "4    %",
        position: "relative",
        borderRadius: 20,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#313BD0',
        paddingVertical: 40,
        paddingHorizontal: 10,
        marginTop: 20
    },
    whiteContainer: {
        borderRadius: 7,
        height: 40,
        width: 60,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    },
    titleBottomCard: {
        textTransform: 'uppercase',
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    desciption: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        fontFamily: "DINNextLTProRegular"
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: Color.secondary,
        width: '80%',
        height: 50,
        marginTop: 45
    },
    textButton: {
        color: '#fff',
        fontSize: 16
    },
    bottomLeftImage: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: -1
    },
    topRightImage: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: -1,
        borderTopRightRadius: 20
    }
})
export default Contact