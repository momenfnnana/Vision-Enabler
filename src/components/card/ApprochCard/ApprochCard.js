import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';
const ApproachCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.text}>We lead with <Text style={styles.textInside}>questions</Text>, not answers.</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>We engage in <Text style={styles.textInside}>dialogue </Text>and <Text style={styles.textInside}>debate </Text>, not coercion.</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>We conduct <Text style={styles.textInside}>analysis </Text>, without blame.</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>We build mechanisms that turn information into <Text style={styles.textInside}>facts </Text>that cannot be ignored.</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>We turn insights into clear points of <Text style={styles.textInside}>action.</Text></Text>
            </View>
        </View>
    )
}
export default ApproachCard