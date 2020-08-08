import React, { useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    TextInput,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import Color from '@Assets/Constant';
import HeaderStack from '@ParadigmComponents/header/headerStack/HeaderStack'
import styles from './InclusionOmeter.style'
import RNSpeedometer from 'react-native-speedometer';
import InclusionOmeterData from '@ParadigmFakeData/InclusionOmeter.Data'

const InclusionOmeter = () => {
    console.log(InclusionOmeterData);
    const [val, setVal] = useState(0);
    const onChange = (input) => {
        setVal(input);
    }
    return (
        <View>
            <HeaderStack
                color={Color.primary}
                borderBottomWith={1}
                backgroundColor={Color.white}
            />
            <Text style={styles.title}>Inclusion <Text style={styles.completeTitle}>ometer</Text></Text>
            <RNSpeedometer
                labelNoteStyle={{
                    display: "none"
                }}
                value={60}
                size={200}
                wrapperStyle={{ marginTop: "25%" }}
                labelStyle={{ display: "none" }}
                labels={[
                    {
                        name: 'Too Slow',
                        labelColor: '#FA475F',
                        activeBarColor: '#FA475F',
                    },
                    {
                        name: 'Very Slow',
                        labelColor: '#FF7058',
                        activeBarColor: '#FF7058',
                    },
                    {
                        name: 'Slow',
                        labelColor: '#FABE10',
                        activeBarColor: '#FABE10',
                    },
                    {
                        name: 'Normal',
                        labelColor: '#44DD7F',
                        activeBarColor: '#44DD7F',
                    },
                    {
                        name: 'Fast',
                        labelColor: '#2B7D03',
                        activeBarColor: '#2B7D03',
                    },
                ]}
                innerCircleStyle={{
                    backgroundColor: "#f7f7f7"
                }}
                easeDuration={500}
            />
            <ScrollView horizontal style={{ height: "20%", marginTop: "20%" }}>
                {
                    InclusionOmeterData.map(i => {
                        return (
                            <View key={i.id} style={[styles.View, { backgroundColor: i.backgroundColor }]}>
                                <View style={styles.head}>
                                    <Text style={styles.headTitle}>{i.title}</Text>
                                    <Text style={styles.headRange}>{i.from}% - {i.to}%</Text>
                                </View>
                                <View style={styles.line} />
                                <View style={styles.descriptionContainer}>
                                    <Text style={styles.description}>{i.description}</Text>
                                    <Text style={styles.description}>{i.completeDescription}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
export default InclusionOmeter