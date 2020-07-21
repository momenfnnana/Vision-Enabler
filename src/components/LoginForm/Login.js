import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements';
import Color from '../../../assets/Constant'

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={{ marginTop: "10%" }}>
            <Input
                style={styles.email}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            />
            <Input
                style={styles.password}
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity>
                <Text style={styles.forgetPassword}>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <View
                    style={styles.line}
                />
                <Text style={styles.betweenLines}>or</Text>
                <View
                    style={styles.line}
                />
            </View>
            <TouchableOpacity style={styles.signUpButton}>
                <Text style={styles.SignupText}>Sign up</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        backgroundColor: `${Color.primary}`,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12
    },
    buttonText: {
        color: `${Color.white}`,
        fontSize: 16
    },
    forgetPassword: {
        color: `${Color.primary}`,
        textAlign: "right",
        paddingTop: 0,
        paddingBottom: 20
    },
    signUpButton: {
        borderRadius: 50,
        backgroundColor: `${Color.white}`,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        borderColor: `${Color.primary}30`,
        borderWidth: 1,
        marginTop: 20
    },
    SignupText: {
        color: "#313BD0",
        fontSize: 16
    },
    line: {
        borderTopColor: `${Color.primary}30`,
        borderTopWidth: 1,
        marginTop: 10,
        width: "45%"
    },
    betweenLines: {
        color: `${Color.primary}`,
        fontSize: 14,
        alignSelf: "flex-end",
        marginHorizontal: 7
    }
})
export default Form