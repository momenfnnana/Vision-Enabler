// 
import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    processColor
} from 'react-native';
import Color from '@Assets/Constant';
import styles from './PerceptionReport.style'
import { AntDesign } from '@expo/vector-icons';
import BarChartShape from '../../components/BarChart/BarChart';
import Footer from '@ParadigmComponents/Footer/Footer';
// import { BarChart, Grid } from 'react-native-svg-charts';
// import { Defs, LinearGradient, Stop } from 'react-native-svg';
// import Graph from '@ParadigmComponents/Graph/Graph';
// import { BarChart } from 'react-native-charts-wrapper';
import { Context as AuthContext } from '@Context/AuthContext'
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const PerceptionReport = ({ navigation }) => {
    const { state: { MatrixAnswersArray } } = useContext(AuthContext);
    console.log("MatrixAnswersArray", MatrixAnswersArray);
    
    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 },
        { quarter: 5, earnings: 1000 }
    ];

    const handleSelect = (event) => {
        let entry = event.nativeEvent
        if (entry == null) {
            setState({ ...state, selectedEntry: null })
        } else {
            setState({ ...state, selectedEntry: JSON.stringify(entry) })
        }

        console.log(event.nativeEvent)
    }

    return (
        <View style={{ flex: 1, backgroundColor: Color.primary }}>
            <ScrollView style={styles.container}>
                <SafeAreaView>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color={Color.white} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Image source={require('@Assets/images/PersonRightIconWhite.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.PerceptionReport}>Perception Report</Text>
                    <Text style={styles.Overall}>Overall Inclusive Leadership score : 5 out of 10</Text>
                    <Text style={styles.avarageNum}>Average <Text style={styles.number}>5</Text></Text>
                    <BarChartShape />
                    {/* <BarChart /> */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {/* <BarChart style={{ height: 200 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                            <Grid />
                        </BarChart> */}
                    </ScrollView>
                </SafeAreaView>
            </ScrollView>
            <Footer
                goBack={() => navigation.goBack()}
                next={() => navigation.navigate('InclusionOmeter')}
                backgroundColor1={Color.secondary}
                backgroundColor2={Color.secondary}
                backgroundColor3={Color.secondary}
                backgroundColor4={Color.secondary}
                backgroundColor5={Color.secondary}
                backgroundColor6={Color.primary}
                backgroundColor7={Color.secondary}
                height1={5}
                width1={5}
                height2={5}
                width2={5}
                height3={5}
                width3={5}
                height4={5}
                width4={5}
                height5={5}
                width5={5}
                height6={10}
                width6={10}
                height7={5}
                width7={5}
            />
        </View>
    )
}

export default PerceptionReport;