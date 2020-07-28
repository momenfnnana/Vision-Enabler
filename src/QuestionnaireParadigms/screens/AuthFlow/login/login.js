import React, { useContext } from 'react';
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import Form from '@Components/LoginForm/Login';
import { Context as AuthContext } from '@Context/AuthContext';
import styles from './login.style';
import Color from '@Assets/Constant';

const QuestionnaireLogin = ({ navigation }) => {
    const { login } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <View
                style={{ flex: 3 }}
            >
                <KeyboardAvoidingView
                    behavior='height'
                    keyboardVerticalOffset={0}
                >
                    <View style={styles.title}>
                        <Text style={styles.title1}>{'Welcome to'.toUpperCase()}</Text>
                        <Text style={styles.title2}>{'Vision Enabler'.toUpperCase()}</Text>
                        <Text
                            style={{
                                color: `${Color.black}90`,
                                marginVertical: "10%",
                                paddingHorizontal: "3%"
                            }}
                        >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
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
export default QuestionnaireLogin;