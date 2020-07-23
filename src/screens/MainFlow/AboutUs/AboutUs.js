import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import StackHeader from '../../../components/Header/StackHeader'
import Color from '../../../../assets/Constant'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import SectionDescription from '../../../components/SectionTitle/SectionDescription'
import PersonCard from '../../../components/card/PersonCard'
import Card from '../../../components/card/HistoryList'
import ReadMore from 'react-native-read-more-text';
const AboutUs = () => {
    const renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ color: Color.secondary, marginTop: 5, fontWeight: "bold" }} onPress={handlePress}>
                Read more
            </Text>
        );
    }
    const renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{ color: Color.secondary, marginTop: 5, fontWeight: "bold" }} onPress={handlePress}>
                Show less
            </Text>
        );
    }
    return (
        <View style={styles.container}>
            <StackHeader color={Color.primary} />
            <ScrollView>
                <View style={{ width: "100%", marginTop: "15%", flexDirection: "row", marginBottom: "3%" }}>
                    <View style={{ width: "60%", justifyContent: "flex-end" }}>
                        <View style={{ marginLeft: "3%" }}>
                            <SectionTitle
                                title1="Who"
                                title2="We are"
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: "-18%" }}>
                        <Image
                            style={{
                                marginLeft: "-29%"
                            }}
                            source={require('../../../../assets/images/who.png')}
                        />
                        <Image
                            style={{
                                marginTop: "-21%",
                                zIndex: -1
                            }}
                            source={require('../../../../assets/images/underWho.png')}
                        />
                    </View>
                </View>
                <SectionDescription
                    text="At Vision Enabler we believe that diversity should be at the core of every forward thinking company’s management strategy. We see diversity as a source of improved performance that offers a decisive competitive advantage in a fast-moving, socially and culturally complex world."
                />
                <PersonCard />
                <View style={{ backgroundColor: "#F9FAFE" }}>
                    <SectionTitle
                        title1="OUR"
                        title2="History"
                    />
                    <SectionDescription
                        text="The values of Vision Enabler reflect the values of diversity"
                    />
                    <Card />
                </View>
                <View style={{
                    backgroundColor: `${Color.white}`,
                    marginLeft: "7%",
                    paddingVertical: "8%"
                }}>
                    <Text style={{
                        fontFamily: "DINNextLTProRegular",
                        fontSize: 16,
                        color: `${Color.secondary}`
                    }}>{'our'.toUpperCase()}</Text>
                    <Text style={{
                        fontFamily: "Altissimo_bold",
                        fontWeight: "bold",
                        fontSize: 30,
                        color: `${Color.primary}`
                    }}>{'AWARDs'.toUpperCase()}</Text>
                </View>
                <View
                    style={{
                        backgroundColor: `${Color.white}`,
                        shadowColor: `${Color.black}`,
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 4.65,
                        elevation: 4,
                        alignSelf: "center",
                        borderRadius: 20,
                        width: "90%",
                        marginBottom: "10%"
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Altissimo_bold",
                            fontWeight: "bold",
                            fontSize: 20,
                            color: `${Color.primary}`,
                            marginHorizontal: "8%",
                            paddingTop: "8%"
                        }}
                    >FRANCE-MAGHREB AWARD</Text>
                    <Text
                        style={{
                            fontFamily: "Altissimo_bold",
                            fontSize: 14,
                            color: `${Color.secondary}`,
                            marginHorizontal: "8%",
                            marginVertical: "2%"
                        }}
                    >Cultural Diversity</Text>
                    <View
                        style={{
                            marginTop: "7%",
                            marginHorizontal: "8%"
                        }}>
                        <ReadMore
                            numberOfLines={3}
                            renderTruncatedFooter={renderTruncatedFooter}
                            renderRevealedFooter={renderRevealedFooter}
                        >
                            <Text
                                style={{
                                    color: `${Color.primary}`,
                                    fontSize: 14,
                                }}
                            >In February 2007 Vision Enabler won the prestigious France-Maghreb award for cultural diversity (business category).
                                The project, Recruiting Visible Minorities, involved eight global French organisations: Axa, BNP Paribas, Danone, Gas de France, L’Oréal, Schneider Electric, Société Générale and Total. The results of our work were presented to the United Nations.
                            The France-Maghreb Convention was set up in 2003 to facilitate business and social cooperation between France and North Africa. Previous recipients include Peugeot, L’Oréal and Veolia.</Text>
                        </ReadMore>
                    </View>
                    <Image
                        style={{
                            resizeMode: "cover",
                            width: "100%",
                            borderRadius: 20
                        }}
                        source={require('../../../../assets/images/Awards.png')}
                    />
                </View>
                <View
                    style={{
                        width: "100%",
                        borderRadius: 20
                    }}
                >
                    <Image
                        style={{
                            width: "90%",
                            height: 200,
                            alignSelf: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            resizeMode: "cover",
                            borderRadius: 20,
                        }}
                        source={require('../../../../assets/images/ourMediaCenter.png')}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            left: "13%",
                            top: "13%",
                            right: 0
                        }}
                    >
                        <Text
                            style={{
                                color: `${Color.white}`,
                                fontSize: 16,
                                fontWeight: "bold"
                            }}
                        >{'our'.toUpperCase()}</Text>
                        <Text
                            style={{
                                color: `${Color.primary}`,
                                fontSize: 30,
                                fontWeight: "bold"
                            }}
                        >{'media center'.toUpperCase()}</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Log in</Text>
                        </TouchableOpacity>
                    </View>
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
    button: {
        borderRadius: 50,
        backgroundColor: `${Color.primary}`,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        width: "80%",
        marginLeft: "3%",
        alignSelf: "flex-start",
        marginTop: "5%"
    },
    buttonText: {
        color: `${Color.white}`,
        fontSize: 16
    },
})
export default AboutUs