import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Color from '@Assets/Constant';
import { lerp } from './Scale';
import StatementAvarageData from '@ParadigmFakeData/StatementAvarage';
interface UnderlayProps {
    date: number[];
    data: number[];
    minY: number;
    maxY: number;
    step: number;
}

const Underlay = ({ date, data, minY, maxY, step }: UnderlayProps) => {
    return (
        <View style={StyleSheet.absoluteFill, { flex: 1, marginLeft: 0 }}>
            <View style={{ flex: 1, justifyContent: "space-between", marginLeft: 0 }}>
                {
                    StatementAvarageData.map((t, i) => {
                        return (
                            <View key={t.img} style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={{
                                    marginRight: 30,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <View style={{
                                        backgroundColor: Color.secondary,
                                        padding: 10,
                                        borderRadius: 20,
                                        justifyContent: "center",
                                        height: 60,
                                        width: 60,
                                        alignItems: "center"
                                    }}>
                                        <Image source={t.img} style={{
                                            height: 45,
                                            width: 45,
                                            resizeMode: "contain",
                                        }} />
                                    </View>
                                    <Text style={{ color: Color.white, marginLeft: 10 }}>{t.percentage}</Text>
                                </View>
                                <View style={{ flex: 1, height: 1, backgroundColor: Color.secondary + 50 }} />
                            </View>
                        )
                    })
                }
            </View>
            <View style={{ flexDirection: "row", marginLeft: 20 }}>
                {
                    date.map((data, index) => (
                        <View style={{ width: step }}>
                            <Text key={index} style={{ color: Color.white, textAlign: "center" }}>{data.title}</Text>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default Underlay;