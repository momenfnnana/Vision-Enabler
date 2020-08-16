import React from 'react';
import { View, Image, Text } from 'react-native';
import LastPayment from '@QuestionnaireFakeData/LastPayment'
import SectionTitle from '@Components/SectionTitle/SectionTitle/SectionTitle';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import styles from './PaymentHistory.style'
const PaymentHistory = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: Color.white }}>
            <StackHeader
                goBack={() => navigation.goBack()}
                color={Color.primary}
            />
            <Image style={styles.image} source={require('@Assets/images/MediaHeadCorner.png')} />
            <SectionTitle
                title1="pAYMENT"
                title2="hISTORY"
            />
            <View style={{ marginTop: "10%" }}>
                {
                    LastPayment.map(i => {
                        return (
                            <View key={i.id} style={{ alignSelf: "flex-start", flexDirection: "row", alignItems: "center" }}>
                                <View style={styles.listContainer}>
                                    <Image source={require('@Assets/images/dollar.png')} />
                                </View>
                                <View style={{ width: "80%", flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ marginHorizontal: "5%", color: Color.primary }}>{i.for}</Text>
                                    <Text style={{ marginRight: "3%", color: Color.black + 90 }}>{i.salary}$</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}
export default PaymentHistory;