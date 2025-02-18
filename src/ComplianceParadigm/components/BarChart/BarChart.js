import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import Color from '@Assets/Constant';
// import { BarChart } from 'react-native-chart-kit';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import styles from './BarChart.style'
import * as scale from 'd3-scale'
import { getStyle } from 'react-native-confirmation-code-field/esm/utils';
const screenWidth = Dimensions.get("window").width;
import { GraphData } from '@Services/BarChart/BarChart';

const xAXIS = ['Working', 'Diversity Policy', 'Employees', 'Complaints Handling']
const data = {
    labels: [
        {
            id: 1,
            label: "Working"
        }, {
            id: 2,
            label: "Diversity Policy"
        }, {
            id: 3,
            label: "Employees"
        }, {
            id: 4,
            label: "Complaints Handling"
        }],
    datasets: [
        {
            value: 32,
            svg: {
                fill: "#FA475F",
            },
        },
        {
            value: 10,
            svg: {
                fill: '#44DD7F',
            },
        },
        {
            value: 40,
            svg: {
                stroke: 'purple',
                fill: '#44DD7F',
            },
        },
        {
            value: 95,
            svg: {
                fill: '#F77700',
            },
        },
    ]
}
var newData = data;

const Gradient = () => (
    <Defs key={'gradient'}>
        <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
            <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
            <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
        </LinearGradient>
    </Defs>
)

const BarChartShape = () => {

    const [ChartData, setChartData] = useState([{}]);
    const [apiData, setApiData] = useState([{}]);
    const [isLoading, setIsLoading] = useState(false);

    const [result, setResult] = useState([]);

    useEffect(() => {
        (async function () {
            try {
                setIsLoading(true);
                const apiData = await GraphData();

                var i = 0;
                for (var key in apiData.data) {
                    if (newData.datasets[i]) {
                        newData.datasets[i++].value = parseInt(key);
                    }
                    console.log("newData.datasets",newData.datasets);
                }

                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                alert("We got an problem!");
                console.log(e);
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.avarageRangesContainer}>
                <View style={styles.avarageRangeContainer1}>
                    <View style={styles.avarageRange1} />
                    <Text style={styles.avarageRangeText1}>From 6 to 10</Text>
                </View>
                <View style={styles.avarageRangeContainer2}>
                    <View style={styles.avarageRange2} />
                    <Text style={styles.avarageRangeText2}>b/w 5 & 6</Text>
                </View>
                <View style={styles.avarageRangeContainer3}>
                    <View style={styles.avarageRange3} />
                    <Text style={styles.avarageRangeText3}>From 0 to 5</Text>
                </View>
            </View>
            <ScrollView horizontal style={styles.chart}>
                <View style={{ height: "50%", marginVertical: 40, justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <View style={styles.descriptionShape}>
                            <Image style={{ width: 30, resizeMode: "contain" }} source={require('@Assets/images/100%.png')} />
                        </View>
                        <Text style={styles.yAxis}>10</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <View style={styles.descriptionShape}>
                            <Image style={{ width: 25, resizeMode: "contain" }} source={require('@Assets/images/75%.png')} />
                        </View>
                        <Text style={styles.yAxis}>7.5</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <View style={styles.descriptionShape}>
                            <Image style={{ width: 25, resizeMode: "contain" }} source={require('@Assets/images/50%.png')} />
                        </View>
                        <Text style={styles.yAxis}>5</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <View style={styles.descriptionShape}>
                            <Image style={{ width: 25, resizeMode: "contain" }} source={require('@Assets/images/25%.png')} />
                        </View>
                        <Text style={styles.yAxis}>2.5</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <View style={styles.descriptionShape}>
                            <Image style={{ width: 25, resizeMode: "contain" }} source={require('@Assets/images/0%.png')} />
                        </View>
                        <Text style={styles.yAxis}>0</Text>
                    </View>
                </View>
                <View style={{ marginRight: 100 }}>
                    <BarChart
                        style={{ height: 470, width: 330 }}
                        data={newData.datasets}
                        // data={data.datasets}
                        gridMin={0}
                        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                        yAccessor={({ item }) => item.value}
                        contentInset={{ top: 30, bottom: 50 }}
                        spacingInner={0.7}
                        animate={true}
                        animationDuration={500}
                        numberOfTicks={5}
                    >
                        <Grid />
                        <Gradient />
                    </BarChart>
                    <XAxis
                        style={{ marginHorizontal: 15, marginLeft: 20 }}
                        data={xAXIS}
                        formatLabel={(value, index) => value}
                        contentInset={{ left: 10, right: 10 }}
                        svg={{ fontSize: 10, fill: Color.white }}
                    />
                    <View style={{ flexDirection: "row", width: 350, justifyContent: "space-between" }}>
                        {
                            newData.labels.map(i => {
                                return (
                                    <Text key={i.id} style={{ marginLeft: "6.5%", color: Color.white, fontSize: 12 }}>{i.title}</Text>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default BarChartShape