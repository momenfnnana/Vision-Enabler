import React from 'react';
import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Color from '@Assets/Constant';
import styles from './Profile.style';
import Table from '@ParadigmComponents/Table/Table';
import { AntDesign } from '@expo/vector-icons';
import LastPayment from '@QuestionnaireFakeData/LastPayment'
const Profile = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground style={{ width: "100%", marginTop: "-10%" }} source={require('@Assets/images/ContactFormHeader.png')}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: "absolute", top: "20%", left: "5%" }}>
                    <AntDesign name="arrowleft" size={24} color={Color.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')} style={{ position: "absolute", right: "5%", top: "20%" }}>
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
            <View style={styles.forthCardContainer}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", }}>
                    <View>
                        <Text style={styles.firstCard}>Payments History</Text>
                        <Text style={styles.lastPayment}>Last 3 payment transactions</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PaymentHistory')}>
                        <Text style={styles.SeeAll}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: "8%" }}>
                    {
                        LastPayment.map(i => {
                            return (
                                <View key={i.id} style={{ width: "100%", alignSelf: "flex-start", flexDirection: "row", alignItems: "center" }}>
                                    <View style={styles.listContainer}>
                                        <Image source={require('@Assets/images/dollar.png')} />
                                    </View>
                                    <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={{ marginHorizontal: "5%", color: Color.primary }}>{i.for}</Text>
                                        <Text style={{ marginRight: "3%", color: Color.black + 90 }}>{i.salary}$</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView >
    )
}
export default Profile;