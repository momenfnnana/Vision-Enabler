import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Color from '@Assets/Constant';
import { AntDesign } from '@expo/vector-icons';
import styles from './Footer.style';

const Footer = ({
    goBack,
    next,
    backgroundColor1,
    backgroundColor2,
    backgroundColor3,
    backgroundColor4,
    backgroundColor5,
    backgroundColor6,
    backgroundColor7,
    backgroundColor8,
    height1,
    height2,
    height3,
    height4,
    height5,
    height6,
    height7,
    height8,
    width1,
    width2,
    width3,
    width4,
    width5,
    width6,
    width7,
    width8,
}) => {
    return (
        <View style={styles.contianer}>
            <TouchableOpacity style={styles.goback} onPress={goBack}>
                <AntDesign name="arrowleft" size={24} color={Color.primary} />
            </TouchableOpacity>
            <View style={styles.buttonsContainer}>
                <View style={[styles.screenButton, { backgroundColor: backgroundColor1, height: height1, width: width1 }]} />
                <View style={[styles.screenButton, { backgroundColor: backgroundColor2, height: height2, width: width2 }]} />
                <View style={[styles.screenButton, { backgroundColor: backgroundColor3, height: height3, width: width3 }]} />
                <View style={[styles.screenButton, { backgroundColor: backgroundColor4, height: height4, width: width4 }]} />
                <View style={[styles.screenButton, { backgroundColor: backgroundColor5, height: height5, width: width5 }]} />
                <View style={[styles.screenButton, { backgroundColor: backgroundColor6, height: height6, width: width6 }]} />
                <View style={[styles.screenButton, { backgroundColor: backgroundColor7, height: height7, width: width7 }]} />
                <View style={[styles.screenButton, { backgroundColor: backgroundColor8, height: height8, width: width8 }]} />
            </View>
            <TouchableOpacity style={styles.nextButtonContainer} onPress={next}>
                <Text style={styles.next}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Footer