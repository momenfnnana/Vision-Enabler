import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { Input } from 'react-native-elements';
import styles from './Styles';
const Form = ({ SignUp, ForgotPassword, Login, email, setEmail, password, setPassword }) => {
    return (
        <View style={styles.container}>
            <View style={{width:"90%",alignSelf:"center"}}>
                <Input
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity
                    onPress={ForgotPassword}
                >
                    <Text
                        style={styles.forgetPassword}
                    >Forgot your password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={Login}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.orContainer}>
                    <View
                        style={styles.line}
                    />
                    <Text style={styles.betweenLines}>or</Text>
                    <View
                        style={styles.line}
                    />
                </View>
                <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={SignUp}
                >
                    <Text style={styles.SignupText}>Sign up</Text>
                </TouchableOpacity>
            </View>
            <Image
                style={styles.footerImage}
                source={require('@Assets/images/footerPups.png')}
            />
        </View>
    )
}
export default Form