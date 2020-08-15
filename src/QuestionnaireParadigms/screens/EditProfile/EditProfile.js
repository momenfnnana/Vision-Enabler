import React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import SectionTitle from '@Components/SectionTitle/SectionTitle/SectionTitle';
import styles from './EditProfile.style';
import Input from '../../components/Input/Input';
import Button from '@ParadigmComponents/button/Button';
const EditProfile = () => {
    return (
        <ScrollView>
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
            <Input label="Your name" placeholder="Enter your Name" />
            <Input label="Your Carrier" placeholder="Enter your carrier" />
            <Input label="Your Email" placeholder="Enter your email" />
            <View style={{ width: "80%", alignSelf: "center", marginTop: "5%" }}>
                <Button title="Save" />
            </View>
        </ScrollView>
    )
}
export default EditProfile