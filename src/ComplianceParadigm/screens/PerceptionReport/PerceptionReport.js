import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit'
import Color from '@Assets/Constant';

const screenWidth = Dimensions.get("window").width;
const data = {
    labels: ["Working", "Diversity Policy", "Employees", "Complaints Handling"],
    datasets: [
        {
            data: [50, 45, 28, 80]
        }
    ]
};
const PerceptionReport = () => {
    return (
        <View>
            <BarChart
                style={{ width: 200, height: 200 }}
                data={data}
                width={screenWidth}
                height={300}
                yAxisLabel=""
                chartConfig={{
                    backgroundColor: Color.primary,
                    backgroundGradientFrom: Color.primary,
                    backgroundGradientTo: Color.primary,
                    decimalPlaces: 1, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    // formatYLabel
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                verticalLabelRotation={0}

            />
        </View>
    )
}
export default PerceptionReport