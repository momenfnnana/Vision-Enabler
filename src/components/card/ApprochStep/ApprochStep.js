import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles'
const ApprochStep = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>{'step 1'.toUpperCase()}</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Define your strategy using benchmarking</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{'step 2'.toUpperCase()}</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Execute your action plan using training</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{'step 3'.toUpperCase()}</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Deliver change by measuring the impact of your diversity programme</Text>
                </View>
            </View>
        </>
    )
}
export default ApprochStep