import React from 'react';
import {
    View,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './Styles';
import Color from '@Assets/Constant';
const StackHeader = ({ color, goBack, borderBottomWith }) => {
    return (
        <SafeAreaView style={[styles.container, { borderBottomColor: `${Color.primary}20`, borderBottomWidth: borderBottomWith }]}>
            <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={goBack}>
                <AntDesign name="arrowleft" size={24} color={color} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default StackHeader;