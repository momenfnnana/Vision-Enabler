import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Color from '@Assets/Constant';
import { AntDesign } from '@expo/vector-icons';
import styles from './Footer.style';

const Footer = () => {
    return (
        <View
            style={styles.contianer}
        >
            <TouchableOpacity
                style={styles.goback}
            >
                <AntDesign name="arrowleft" size={24} color={Color.primary} />
            </TouchableOpacity>
            <View
                style={styles.buttonsContainer}
            >
                <View
                    style={styles.screenButton}
                />
                <View
                    style={styles.screenSelectedButton}
                />
                <View
                    style={styles.screenButton}
                />
                <View
                    style={styles.screenButton}
                />
                <View
                    style={styles.screenButton}
                />
                <View
                    style={styles.screenButton}
                />
                <View
                    style={styles.screenButton}
                />
                <View
                    style={styles.screenButton}
                />
            </View>
            <TouchableOpacity
                style={styles.nextButtonContainer}
            >
                <Text
                    style={styles.next}
                >Next</Text>
            </TouchableOpacity>

        </View>
    )
}
export default Footer