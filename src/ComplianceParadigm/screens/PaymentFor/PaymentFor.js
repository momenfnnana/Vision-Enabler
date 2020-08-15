// 
import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './PaymentFor.style';
import HeaderStack from '@ParadigmComponents/header/headerStack/HeaderStack';
import Color from '@Assets/Constant';
import Card from './Card';
import QuestionsType from '@ParadigmFakeData/QuestionsType'
import { Context as AuthContext } from '@Context/AuthContext'
const PaymentFor = ({ navigation }) => {
    const { state } = useContext(AuthContext)
    const toggleScreen = () => {
        navigation.navigate('DiversityInvoiceScreen')
    }
    return (
        <View style={{ flex: 1, backgroundColor: Color.white }}>
            <HeaderStack
                borderBottomWith={1}
                color={Color.primary}
                goBack={() => navigation.goBack()}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Choose a payment plan</Text>
                <Text style={styles.description}>Choose what suits you from plans to complete the payment process and enter the survey</Text>
            </View>
            {
                QuestionsType.map(i => {
                    return (
                        <Card key={i.id} data={i} onPress={toggleScreen} />
                    )
                })
            }
        </View>
    )
}
export default PaymentFor;