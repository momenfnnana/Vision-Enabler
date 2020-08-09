import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Color from '@Assets/Constant';
import styles from './Profile.style';
import Table from '@ParadigmComponents/Table/Table'
const Profile = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.Profile}>Profile</Text>
                <Image style={styles.setting} source={require("@Assets/images/settings.png")} />
                <Image style={styles.pups} source={require("@Assets/images/profilePups.png")} />
                <Image style={styles.profileImageContainer} source={require("@Assets/images/ProfileImage.png")} />
                <Text style={styles.name}>Brad meyer</Text>
                <Text style={styles.job}>Partner and Co-founder</Text>
            </View>
            <View style={styles.matrixContainer}>
                <Text style={styles.title}>Number of questioners you answered</Text>
                <Text style={styles.qestionaerNumber}>15 questioners</Text>
                <Text style={styles.title}>Compliance Matrix ®</Text>
            </View>
            <Table />
        </ScrollView>
    )
}
export default Profile