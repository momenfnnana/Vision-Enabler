import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import { Input } from 'react-native-elements';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import { forgetPassword } from "@Services/AuthServices";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';

import styles from './Styles';
const ResetPassword = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const doLogin = async () => {
        setIsLoading(true);
        try {
            const response = await forgetPassword({
                email: email
            });
            if (response.data.success === true) {
                alert("check your email for new password")
            } else {
                alert("email not found");
            }
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setTimeout(() => {
                alert("error with us");
            }, 300);
        }
    };
    return (
        <>
            {isLoading === true ? <LoadingDialog /> : (
                <View style={styles.container}>
                    <StackHeader
                        color={Color.primary}
                        goBack={() => navigation.goBack()}
                    />
                    <View style={styles.headSection}>
                        <Text style={styles.title1}>{'forgot'.toUpperCase()}</Text>
                        <Text style={styles.title2}>{'your password?'.toUpperCase()}</Text>
                        <View style={{ marginTop: "20%" }}>
                            <Input
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                placeholder="Email"
                            />
                            <TouchableOpacity style={styles.button} onPress={doLogin} >
                                <Text style={styles.SignupText}>Send</Text>
                            </TouchableOpacity>
                        </View>
                        <KeyboardAvoidingView>
                            <Image
                                source={require('@Assets/images/pups.png')}
                                style={styles.imgFooter} />
                        </KeyboardAvoidingView>
                    </View>
                </View>
            )}
        </>
    )
}
export default ResetPassword;