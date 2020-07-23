import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Container, Tab, Tabs, Header } from 'native-base'
import StackHeader from '../../../components/Header/StackHeader'
import Color from '../../../../assets/Constant'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import SectionDescription from '../../../components/SectionTitle/SectionDescription'
import Photos from './Photos'
import Videos from './Videos'
const Media = () => {
    return (
        <View style={styles.container}>
            <StackHeader color={Color.primary} />
            <Image style={styles.image} source={require('../../../../assets/images/MediaHeadCorner.png')} />
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
                    tabStyle={{ backgroundColor: "#fff" }}
                >
                    <Photos />
                </Tab>
                <Tab
                    activeTabStyle={{
                        backgroundColor: Color.white
                    }}
                    heading="Videos"
                    tabStyle={{ backgroundColor: "#fff" }}
                >
                    <Videos />
                </Tab>
                <Tab
                    activeTabStyle={{
                        backgroundColor: Color.white
                    }}
                    heading="Links"
                    tabStyle={{ backgroundColor: "#fff" }}
                >
                    <Text>tab3 here</Text>
                </Tab>
            </Tabs>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    image: {
        position: "absolute",
        top: 0,
        right: 0,
        resizeMode: "contain"
    }
})
export default Media