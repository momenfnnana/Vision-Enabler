import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { Input } from 'react-native-elements';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import styles from './ResetPassword.style';
const QuestionnaireResetPassword = ({ navigation }) => {
    const [email, setEmail] = useState('')
    return (
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
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('QuestionnaireActiveAccount')}
                    >
                        <Text style={styles.SignupText}>Send</Text>
                    </TouchableOpacity>
                </View>
                <Image
                    source={require('@Assets/images/pups.png')}
                    style={styles.imgFooter} />
            </View>
        </View>
    )
}
export default QuestionnaireResetPassword