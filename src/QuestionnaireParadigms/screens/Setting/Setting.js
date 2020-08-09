import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import SectionTitle from '@Components/SectionTitle/SectionTitle/SectionTitle';
import Card from './Card';
import styles from './Setting.style';
import SettingData from '@QuestionnaireFakeData/SettingData';
const Setting = () => {
    return (
        <View>
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
                // borderBottomWith={1}
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
                <View style={styles.editProfile}>
                    <Image source={require("@Assets/images/editProfile.png")} />
                </View>
            </View>
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
                style={{
                    marginTop: "8%"
                }}
            />
        </View>
    )
}
export default Setting;