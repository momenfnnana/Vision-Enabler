import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, ImageBackground, Image, FlatList } from 'react-native';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import styles from './Style';
import Items from './Items';
import { getVisionAndValues } from "@Services/MainFlow/HomeScreen";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';

const OurVision = ({ navigation }) => {
    const [vision, setVision] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async function () {
            try {
                const VisionAndValues = await getVisionAndValues();
                setVision(VisionAndValues.data);
                console.log(vision);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                alert("We got an problem!");
            }
        })();
    }, []);
    return (
        <ScrollView style={styles.container}>
            <ImageBackground style={styles.ImageBackground} source={require('@Assets/images/OurVisionBackground.png')}>
                <StackHeader
                    goBack={() => navigation.goBack()}
                    color={Color.white}
                />
                <View style={styles.ImageBackgroundContent}>
                    <Text style={styles.title1Image}>{'our'.toUpperCase()}</Text>
                    <Text style={styles.title2Image}>{'VISION'.toUpperCase()}</Text>
                    <Text style={styles.descriptionImage}>At Vision Enabler we believe that diversity should be at the core of every forward thinking company’s management strategy. We see diversity as a source of improved performance that offers a decisive competitive advantage in a fast-moving, socially and culturally complex world.</Text>
                    <Text style={styles.descriptionImage}>Embedding diversity into your decision-making processes will enable you to benefit from unique insights. Our performance-driven approach to diversity allows you to address business risks as well as develop a more inclusive and dynamic business environment.</Text>
                </View>
                <Image
                    style={styles.Vision}
                    source={require('@Assets/images/Vision.png')}
                />
            </ImageBackground>
            <View style={styles.newSection}>
                <Text style={styles.title1}>{'our'.toUpperCase()}</Text>
                <Text style={styles.title2}>{'values'.toUpperCase()}</Text>
                <Text style={styles.description}>The values of Vision Enabler reflect the values of diversity.</Text>
            </View>
            <Items data={vision} />
        </ScrollView>
    )
}
export default OurVision