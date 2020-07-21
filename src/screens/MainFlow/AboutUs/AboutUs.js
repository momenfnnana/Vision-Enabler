import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native'
import StackHeader from '../../../components/Header/StackHeader'
import Color from '../../../../assets/Constant'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import SectionDescription from '../../../components/SectionTitle/SectionDescription'
import Persons from '../../../fakeData/Persons'
import PersonCard from '../../../components/card/PersonCard'
const AboutUs = () => {
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
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    }
})
export default AboutUs