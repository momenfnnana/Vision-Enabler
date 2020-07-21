import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Form from '../../../components/signupForm/SignupForm'
import StackHeader from '../../../components/Header/StackHeader';
import Color from '../../../../assets/Constant'
const SignUp = () => {
    return (
        <View style={styles.container}>
            <StackHeader color={Color.primary} />
            <View style={styles.headSection}>
                <Text
                    style={styles.title1}
                >{'Account'.toUpperCase()}</Text>
                <Text
                    style={styles.title2}
                >{'Sign up'.toUpperCase()}</Text>
                <Form />
                <Image
                    style={styles.footer}
                    source={require('../../../../assets/images/pups.png')}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
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
    },
    headSection: {
        flex: 1,
        marginLeft: "10%",
        marginTop: "5%"
    },
    footer: {
        resizeMode: "contain",
        marginTop: "20%",
        marginLeft: "-15%"
    }
})
export default SignUp