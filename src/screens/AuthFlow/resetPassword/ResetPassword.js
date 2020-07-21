import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Input } from 'react-native-elements';
import StackHeader from '../../../components/Header/StackHeader';
import Color from '../../../../assets/Constant';
const ResetPassword = () => {
    const [email, setEmail] = useState('')
    return (
        <View style={styles.container}>
            <StackHeader color={Color.primary} />
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
    },
    headSection: {
        flex: 1,
        marginLeft: "10%",
        marginTop: "5%",
        marginRight: "10%"
    },
    title1: {
        color: `${Color.secondary}`,
        fontSize: 16,
        fontFamily: "Altissimo_bold",
        alignSelf: "flex-start"
    },
    title2: {
        color: `${Color.primary}`,
        fontSize: 30,
        fontFamily: "Altissimo",
        fontWeight: "bold",
        alignSelf: "flex-start"
    }
})
export default ResetPassword