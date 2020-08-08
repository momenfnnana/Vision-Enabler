import React from 'react';
import {
    View,
    Text,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Color from '@Assets/Constant';
import styles from './PerceptionReport.style'
import { AntDesign } from '@expo/vector-icons';
const screenWidth = Dimensions.get("window").width;
const data = {
    labels: ["Working", "Diversity Policy", "Employees", "Complaints Handling"],
    datasets: [
        {
            data: [35, 57, 80, 56]
        }
    ]
};
const PerceptionReport = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <AntDesign name="arrowleft" size={24} color={Color.white} />
                </TouchableOpacity>
                <Image source={require('@Assets/images/PersonRightIconWhite.png')} />
            </View>
            <Text style={styles.PerceptionReport}>Perception Report</Text>
            <Text style={styles.Overall}>Overall Inclusive Leadership score : 5 out of 10</Text>
            <Text style={styles.avarageNum}>Average <Text style={styles.number}>5</Text></Text>
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
                <View style={{ height: "90%", justifyContent: "space-between" }}>
                    <View style={styles.descriptionShape}>
                        <Image source={require('@Assets/images/100%.png')} />
                    </View>
                    <View style={styles.descriptionShape}>
                        <Image source={require('@Assets/images/75%.png')} />
                    </View>
                    <View style={styles.descriptionShape}>
                        <Image source={require('@Assets/images/50%.png')} />
                    </View>
                    <View style={styles.descriptionShape}>
                        <Image source={require('@Assets/images/25%.png')} />
                    </View>
                    <View style={styles.descriptionShape}>
                        <Image source={require('@Assets/images/0%.png')} />
                    </View>
                </View>
                <View style={{ marginRight: 65 }}>
                    <BarChart
                        style={{ width: "100%", height: 200 }}
                        data={data}
                        width={screenWidth}
                        height={510}
                        yAxisLabel=""
                        chartConfig={{
                            backgroundColor: Color.primary,
                            backgroundGradientFrom: Color.primary,
                            backgroundGradientTo: Color.primary,
                            decimalPlaces: 1, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PerceptionReport