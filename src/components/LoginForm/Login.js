import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements';
const { width, height } = Dimensions.get("screen")

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
                    style={{
                        borderTopColor: '#E3E4F6',
                        borderTopWidth: 1,
                        marginTop: 10,
                        width: "47%"
                    }}
                />
                <Text style={{ color: "#313BD0", fontSize: 14, alignSelf: "flex-end" }}>or</Text>
                <View
                    style={{
                        borderTopColor: '#E3E4F6',
                        borderTopWidth: 1,
                        marginTop: 10,
                        width: "47%"
                    }}
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
        backgroundColor: "#313BD0",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12
    },
    buttonText: {
        color: "#fff",
        fontSize: 16
    },
    forgetPassword: {
        color: "#313BD0",
        textAlign: "right",
        paddingTop: 0,
        paddingBottom: 20
    },
    signUpButton: {
        borderRadius: 50,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        borderColor: "#22E0D7",
        borderWidth: 1,
        marginTop: 20
    },
    SignupText: {
        color: "#313BD0",
        fontSize: 16
    }
})
export default Form