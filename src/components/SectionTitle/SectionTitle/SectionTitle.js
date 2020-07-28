import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles'
const SectionTitle = ({ title1, title2 }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title1}>{title1}</Text>
            <Text style={styles.title2}>{title2}</Text>
        </View>
    )
}
export default SectionTitle