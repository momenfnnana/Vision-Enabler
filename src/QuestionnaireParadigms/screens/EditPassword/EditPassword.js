import React from 'react';
import { View, Image } from 'react-native';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import SectionTitle from '@Components/SectionTitle/SectionTitle/SectionTitle';
import Input from '../../components/Input/Input';
import styles from './EditPassword.style';
import Button from '@ParadigmComponents/button/Button';

const EditPassword = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: Color.white }}>
            <StackHeader
                goBack={() => navigation.goBack()}
                color={Color.primary}
            />
            <Image style={styles.image} source={require('@Assets/images/MediaHeadCorner.png')} />
            <SectionTitle
                title1="Edit"
                title2="Password"
            />
            <View style={{ marginTop: "10%" }}>
                <Input label="current password" placeholder="Enter current password" />
                <Input label="new password" placeholder="Enter new password" />
                <Input label="confirm new password" placeholder="Enter confirm new password" />
            </View>
            <View style={{ width: "80%", alignSelf: "center", marginTop: "5%" }}>
                <Button title="Save" />
            </View>
        </View>
    )
}
export default EditPassword;