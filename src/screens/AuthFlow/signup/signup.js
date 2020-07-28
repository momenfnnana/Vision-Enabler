import React, { useContext } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import Form from '@Components/signupForm/SignupForm';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import { Context as AuthContext } from '../../../Context/AuthContext'
import styles from './Styles'
const SignUp = ({ navigation }) => {
    const { login } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <StackHeader
                color={Color.primary}
                goBack={() => navigation.goBack()}
            />
            <View style={styles.headSection}>
                <Text
                    style={styles.title1}
                >{'Account'.toUpperCase()}</Text>
                <Text
                    style={styles.title2}
                >{'Sign up'.toUpperCase()}</Text>
                <Form SignUp={login} />
                <Image
                    style={styles.footer}
                    source={require('@Assets/images/pups.png')}
                />
            </View>
        </View>
    )
}
export default SignUp