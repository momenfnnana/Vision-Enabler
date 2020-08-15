import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Tab, Tabs } from 'native-base';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import SectionTitle from '@Components/SectionTitle/SectionTitle/SectionTitle';
import SectionDescription from '@Components/SectionTitle/SectionDescription/SectionDescription';
import Photos from './Photo/Photos';
import Videos from './Video/Videos';
import Links from './Links/Links';
import styles from './Styles';
const Media = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <StackHeader
                goBack={() => navigation.goBack()}
                color={Color.primary}
            />
            <Image style={styles.image} source={require('@Assets/images/MediaHeadCorner.png')} />
            <SectionTitle
                title1="Our"
                title2="Media Center"
            />
            <SectionDescription
                text="Vision Enabler is a diversity-consulting firm, and a leading advisor on diversity-powered performance."
            />
            <Tabs
                tabBarActiveTextColor={Color.primary}
                tabBarUnderlineStyle={{
                    backgroundColor: Color.secondary,
                    width: "1%",
                    marginLeft: "11.3%",
                }}
                style={{
                    marginTop: "8%",
                }}
            >
                <Tab
                    activeTabStyle={{
                        backgroundColor: Color.white
                    }}
                    heading="Photos"
                    textStyle={{ color: Color.secondary }}
                    tabStyle={{ backgroundColor: Color.white }}
                >
                    <Photos goToInterView={() => navigation.navigate('InterviewForm')} />
                </Tab>
                <Tab
                    activeTabStyle={{
                        backgroundColor: Color.white
                    }}
                    heading="Videos"
                    tabStyle={{ backgroundColor: Color.white }}
                >
                    <Videos goToInterView={() => navigation.navigate('InterviewForm')} />
                </Tab>
                <Tab
                    activeTabStyle={{
                        backgroundColor: Color.white
                    }}
                    heading="Links"
                    tabStyle={{ backgroundColor: Color.white }}
                >
                    <Links goToInterView={() => navigation.navigate('InterviewForm')} />
                </Tab>
            </Tabs>
        </ScrollView >
    )
}
export default Media