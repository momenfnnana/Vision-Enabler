import React from 'react';
import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Color from '@Assets/Constant';
import styles from './Profile.style';
import Table from '@ParadigmComponents/Table/Table'
const Profile = () => {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground style={{ width: "100%", marginTop: "-10%" }} source={require('@Assets/images/ContactFormHeader.png')}>
                <TouchableOpacity style={{ position: "absolute", right: "5%", top: "20%" }}>
                    <Image source={require('@Assets/images/settingsWhite.png')} />
                </TouchableOpacity>
                <Text style={styles.screenTitle}>Profile</Text>
                <Image style={styles.ProfileImage} source={require('@Assets/images/ProfileImage.png')} />
                <Text style={styles.personalName}>Brad Meyer</Text>
                <Text style={styles.job}>Partner and Co-founder</Text>
            </ImageBackground>
            <View style={styles.firstCardContainer}>
                <Text style={styles.firstCard}>Number of questionnaire you answered</Text>
                <Text style={styles.number}>15</Text>
            </View>
            <TouchableOpacity style={styles.firstCardContainer}>
                <Text style={styles.firstCard}>A questionnaire Result Files</Text>
                <Image source={require('@Assets/images/download.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.firstCardContainer}>
                <Text style={styles.firstCard}>The Matrix result PDF File</Text>
                <Image source={require('@Assets/images/download.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.firstCardContainer}>
                <Text style={styles.firstCard}>Payments History File</Text>
                <Image source={require('@Assets/images/download.png')} />
            </TouchableOpacity>
        </ScrollView>
    )
}
export default Profile;