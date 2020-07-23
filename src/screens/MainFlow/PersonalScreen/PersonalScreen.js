import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Color from '../../../../assets/Constant';
import ReadMore from 'react-native-read-more-text';

const PersonalScreen = () => {
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
        <ScrollView style={styles.container}>
            <Image
                style={{
                    position: "absolute",
                    top: "6%",
                    left: "4%",
                    zIndex: 1
                }}
                source={require('../../../../assets/images/goBack.png')}
            />
            <Image
                style={{
                    width: "100%",
                    height: 600,
                    resizeMode: "cover",
                    backgroundColor: "#000"
                }}
                source={require('../../../../assets/images/person1.png')}
            />
            <View
                style={{
                    backgroundColor: `${Color.primary}`,
                    paddingVertical: "7%",
                    width: "93%",
                    alignSelf: "flex-end",
                    paddingHorizontal: "5%",
                    marginTop: "-26.8%"
                }}
            >
                <Text
                    style={{
                        color: `${Color.white}`,
                        fontSize: 30,
                        fontFamily: "Altissimo",
                        fontWeight: "bold"
                    }}>{'BRAD MEYER'.toUpperCase()}</Text>
                <Text
                    style={{
                        color: `${Color.white}`,
                        fontSize: 13,
                        fontFamily: "Altissimo"
                    }}>Partner and Co-founder</Text>
            </View>
            <View
                style={{
                    backgroundColor: Color.secondary,
                    height: 16,
                    width: "86%",
                    alignSelf: "center"
                }}
            />
            <View
                style={{
                    padding: "7%"
                }}
            >
                <ReadMore
                    numberOfLines={5}
                    renderTruncatedFooter={renderTruncatedFooter}
                    renderRevealedFooter={renderRevealedFooter}
                >
                    <Text
                        style={{
                            color: `${Color.primary}`,
                            fontSize: 14,
                            lineHeight: 20
                        }}
                    >Brad Meyer is a partner and co-founder of Vision Enabler. He is responsible for designing interventions that create the deep insights.

                        Brad has set-up two other companies - one focused on introducing behavioural technologies for business transformation and one focused on developing and deploying computing technologies for breakthrough knowledge sharing and sensory-rich distance and collaborative learning. His work draws on 30 years of business experience integrated with his Certification as a Master Practitioner and Trainer of Neuro Linguistic Programming.

                        Prior to his entrepreneurial initiatives, Brad worked for EDS in both the United States and the United Kingdom.

Brad graduated from Coleman College, studied at Harvard University and Grinnell College. He is also the author of “Being inclusive in a Diverse World".</Text>
                </ReadMore>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    }
})
export default PersonalScreen