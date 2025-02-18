import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles'
const SectionDescription = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default SectionDescription