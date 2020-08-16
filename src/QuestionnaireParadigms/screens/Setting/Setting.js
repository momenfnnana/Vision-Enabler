import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import SectionTitle from '@Components/SectionTitle/SectionTitle/SectionTitle';
import Card from './Card';
import styles from './Setting.style';
import SettingData from '@QuestionnaireFakeData/SettingData';
const Setting = ({ navigation }) => {
    const toggleEditProfile = () => {
        navigation.navigate('EditProfile')
    }
    const toggleEditPassword = () => {
        navigation.navigate('EditPassword')
    }
    return (
        <ScrollView style={{ backgroundColor: Color.white }}>
            <View style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,
                elevation: 4,
                backgroundColor: Color.white,
                zIndex: -1
            }}>
                <StackHeader
                    goBack={() => navigation.goBack()}
                    color={Color.primary}
                />
                <Image style={styles.image} source={require('@Assets/images/MediaHeadCorner.png')} />
                <SectionTitle
                    title1="App"
                    title2="Setting"
                />
                <View style={styles.personalInformation}>
                    <Image style={styles.profileImage} source={require("@Assets/images/ProfileImage.png")} />
                    <View style={styles.text}>
                        <Text style={styles.name}>Brad meyer</Text>
                        <Text style={styles.job}>Partner and Co-founder</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={styles.editProfile}>
                    <Image source={require("@Assets/images/editProfile.png")} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ marginTop: "8%" }} onPress={toggleEditProfile}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.cardContainer}>
                        <Image source={require('@Assets/images/editProfile.png')} />
                    </View>
                    <View style={{ justifyContent: "center", width: "70%" }}>
                        <Text style={styles.title}>Edit Personal Information</Text>
                        <Text style={styles.description}>update your name, personal image, email and bio</Text>
                    </View>
                </View>
                <View style={[styles.line, { backgroundColor: Color.secondary + 50, }]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleEditPassword}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.cardContainer}>
                        <Image source={require('@Assets/images/lock.png')} />
                    </View>
                    <View style={{ justifyContent: "center", width: "70%" }}>
                        <Text style={styles.title}>Edit Password</Text>
                        <Text style={styles.description}>update your account password</Text>
                    </View>
                </View>
                <View style={[styles.line, { backgroundColor: Color.secondary + 50, }]} />
            </TouchableOpacity>
            <FlatList
                data={SettingData}
                keyExtractor={i => i.id.toString()}
                renderItem={item => {
                    return (
                        <Card
                            img={item.item.img}
                            title={item.item.title}
                            description={item.item.description}
                            backgroundColor={item.item.backgroundColor}
                        />
                    )
                }}
            />
        </ScrollView>
    )
}
export default Setting;