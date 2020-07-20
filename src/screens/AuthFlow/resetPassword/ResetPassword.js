import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Input } from 'react-native-elements'

const ResetPassword = () => {
    const [email, setEmail] = useState('')
    return (
        <View style={styles.container}>
            <View style={{
                alignItems: "flex-start",
                height: "10%",
                justifyContent: "flex-end",
                paddingHorizontal: "5%"
            }}>
                <AntDesign name="arrowleft" size={24} color="#313BD0" />
            </View>
            <View style={{
                flex: 1,
                marginLeft: "10%",
                marginTop: "5%",
                marginRight: "10%"
            }}>
                <Text style={{ color: "#22E0D7", fontSize: 16, fontFamily: "Altissimo_bold", alignSelf: "flex-start" }}>{'forgot'.toUpperCase()}</Text>
                <Text style={{ color: "#313BD0", fontSize: 30, fontFamily: "Altissimo", fontWeight: "bold", alignSelf: "flex-start" }}>{'your password?'.toUpperCase()}</Text>
                <View style={{ marginTop: "20%" }}>
                    <Input
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholder="Email"
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.SignupText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                <Image source={require('../../../../assets/images/pups.png')} resizeMode="cover" style={{ marginTop: "80%", marginLeft: "-18%" }} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    button: {
        borderRadius: 50,
        backgroundColor: "#313BD0",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        marginVertical: 22
    },
    SignupText: {
        color: "#fff",
        fontSize: 16
    }
})
export default ResetPassword