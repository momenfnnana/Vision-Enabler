import React, { useContext } from 'react';
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import Form from '@Components/LoginForm/Login';
import { Context as AuthContext } from '../../../Context/AuthContext';
import styles from './Styles';
const Login = ({ navigation }) => {
    const { login } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <View
                style={{ flex: 3 }}
            >
                <View style={styles.head}>
                    <Image source={require('@Assets/images/quarter-circle-left.png')} style={{ alignSelf: "flex-start" }} resizeMode="cover" />
                    <Image source={require('@Assets/images/blue-logo.png')}
                        resizeMode="cover"
                        style={styles.logo}
                    />
                </View>
                <KeyboardAvoidingView
                    behavior='height'
                    keyboardVerticalOffset={0}
                >
                    <View style={styles.title}>
                        <Text style={styles.title1}>{'Welcome to'.toUpperCase()}</Text>
                        <Text style={styles.title2}>{'Vision Enabler'.toUpperCase()}</Text>
                        <Form
                            Login={login}
                            SignUp={() => navigation.navigate('SignUp')}
                            ForgotPassword={() => navigation.navigate('ResetPassword')}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
            <Image
                style={styles.footerImage}
                source={require('@Assets/images/pups.png')}
            />
        </View>
    )
}
export default Login;