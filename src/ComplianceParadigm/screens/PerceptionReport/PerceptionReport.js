// 
import React, { useState } from 'react';
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
// import BarChartShape from '../../components/BarChart/BarChart';
import Footer from '@ParadigmComponents/Footer/Footer';
// import { BarChart, Grid } from 'react-native-svg-charts';
// import { Defs, LinearGradient, Stop } from 'react-native-svg';
// import Graph from '@ParadigmComponents/Graph/Graph';
import { BarChart } from 'react-native-charts-wrapper';

const PerceptionReport = ({ navigation }) => {
    const [state, setState] = useState({
        legend: {
            enabled: true,
            textSize: 14,
            form: 'SQUARE',
            formSize: 14,
            xEntrySpace: 10,
            yEntrySpace: 5,
            formToTextSpace: 5,
            wordWrapEnabled: true,
            maxSizePercent: 0.5
        },
        data: {
            dataSets: [{
                values: [{ y: 100 }, { y: 105 }, { y: 102 }, { y: 110 }, { y: 114 }, { y: 109 }, { y: 105 }, { y: 99 }, { y: 95 }],
                label: 'Bar dataSet',
                config: {
                    color: processColor('teal'),
                    barShadowColor: processColor('lightgrey'),
                    highlightAlpha: 90,
                    highlightColor: processColor('red'),
                }
            }],

            config: {
                barWidth: 0.7,
            }
        },
        highlights: [{ x: 3 }, { x: 6 }],
        xAxis: {
            valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            granularityEnabled: true,
            granularity: 1,
        }
    })
    // const data = [
    //     {
    //         id: 1,
    //         value: 32,
    //         color: Color.lowRate,
    //         title: "Working Environment"
    //     },
    //     {
    //         id: 2,
    //         value: 10,
    //         color: Color.midRate,
    //         title: "Diversity Policy"
    //     },
    //     {
    //         id: 3,
    //         value: 40,
    //         color: Color.highRate,
    //         title: "Employees"
    //     },
    //     {
    //         id: 4,
    //         value: 95,
    //         color: Color.highRate,
    //         title: "Complaints Handling"
    //     }
    // ]
    // const Gradient = () => (
    //     <Defs key={'gradient'}>
    //         <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
    //             <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
    //             <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
    //         </LinearGradient>
    //     </Defs>
    // )

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
                    {/* <BarChartShape /> */}
                    {/* <BarChart /> */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <BarChart
                            style={styles.chart}
                            data={state.data}
                            xAxis={state.xAxis}
                            animation={{ durationX: 2000 }}
                            legend={state.legend}
                            gridBackgroundColor={processColor('#ffffff')}
                            visibleRange={{ x: { min: 5, max: 5 } }}
                            drawBarShadow={false}
                            drawValueAboveBar={true}
                            drawHighlightArrow={true}
                            onSelect={handleSelect.bind(this)}
                            highlights={state.highlights}
                            onChange={(event) => console.log(event.nativeEvent)}
                        />
                        {/* <View style={{marginLeft:20}}>
                            <Graph data={data} />
                        </View> */}
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