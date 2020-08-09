import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import SectionTitle from '@Components/SectionTitle/SectionTitle/SectionTitle';
import styles from './EditProfile.style';
const EditProfile = () => {
    return (
        <View>
            <StackHeader
                goBack={() => navigation.goBack()}
                color={Color.primary}
            />
            <Image style={styles.image} source={require('@Assets/images/MediaHeadCorner.png')} />
            <SectionTitle
                title1="Edit"
                title2="Profile"
            />
            <Image style={styles.profileImage} source={require('@Assets/images/ProfileImage.png')} />
            <Text style={styles.changePic}>Change Profile Picture</Text>
            <Text style={styles.inputTitle}>Your name</Text>
            <TextInput
                style={{
                    borderColor: Color.secondary,
                    borderWidth: 1,
                    borderRadius: 8,
                    width: "80%",
                    alignSelf: "center",
                    paddingVertical: "3%",
                    paddingLeft: "3%",
                }}
                placeholder="Enter your Name"
            />
        </View>
    )
}
export default EditProfile