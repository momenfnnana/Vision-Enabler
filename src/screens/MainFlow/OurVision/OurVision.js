import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import StackHeader from '../../../components/Header/StackHeader';
import VisionData from '../../../fakeData/FakeData';
import Card from '../../../components/card/CardForList';
const OurVision = () => {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground style={styles.ImageBackground} source={require('../../../../assets/images/OurVisionBackground.png')}>
                <StackHeader color="#fff" />
                <View style={styles.ImageBackgroundContent}>
                    <Text style={styles.title1Image}>{'our'.toUpperCase()}</Text>
                    <Text style={styles.title2Image}>{'VISION'.toUpperCase()}</Text>
                    <Text style={styles.descriptionImage}>At Vision Enabler we believe that diversity should be at the core of every forward thinking company’s management strategy. We see diversity as a source of improved performance that offers a decisive competitive advantage in a fast-moving, socially and culturally complex world.</Text>
                    <Text style={styles.descriptionImage}>Embedding diversity into your decision-making processes will enable you to benefit from unique insights. Our performance-driven approach to diversity allows you to address business risks as well as develop a more inclusive and dynamic business environment.</Text>
                </View>
                <Image
                    style={{ position: "absolute", bottom: "-12%", justifyContent: "center", width: "100%" }}
                    source={require('../../../../assets/images/Vision.png')} />
            </ImageBackground>
            <View style={styles.newSection}>
                <Text style={styles.title1}>{'our'.toUpperCase()}</Text>
                <Text style={styles.title2}>{'values'.toUpperCase()}</Text>
                <Text style={styles.description}>The values of Vision Enabler reflect the values of diversity.</Text>
            </View>
            <FlatList
                data={VisionData}
                keyExtractor={(i) => i.id.toString()}
                renderItem={(item) => <Card data={item} />}
            />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    ImageBackground: {
        width: "100%",
        height: 500
    },
    ImageBackgroundContent: {
        marginTop: "2%",
        width: "90%",
        marginLeft: "7%"
    },
    title1Image: {
        color: "#22E0D7",
        fontSize: 16,
        fontFamily: "Altissimo_bold",
        alignSelf: "flex-start"
    },
    title2Image: {
        color: "#fff",
        fontSize: 30,
        fontFamily: "Altissimo",
        fontWeight: "bold",
        alignSelf: "flex-start"
    },
    descriptionImage: {
        color: "#fff",
        fontSize: 14,
        marginTop: "7%",
        fontFamily: "DINNextLTProRegular"
    },
    newSection: {
        marginTop: "18%",
        width: "80%",
        marginLeft: "7%"
    },
    title1: {
        color: "#22E0D7",
        fontSize: 16,
        fontFamily: "Altissimo_bold",
        alignSelf: "flex-start"
    },
    title2: {
        color: "#313BD0",
        fontSize: 30,
        fontFamily: "Altissimo",
        fontWeight: "bold",
        alignSelf: "flex-start"
    },
    description: {
        color: "#313BD0",
        fontSize: 14,
        marginTop: "7%",
        fontFamily: "DINNextLTProRegular"
    }
})
export default OurVision