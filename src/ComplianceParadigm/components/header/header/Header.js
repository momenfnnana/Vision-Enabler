import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './Header.style'
const HeaderStack = ({ onPress, borderBottomWith, onPress2 }) => {
    return (
        <View
            style={[styles.container, { borderBottomWidth: borderBottomWith }]}>
            <TouchableOpacity onPress={onPress}>
                <Image
                    source={require('@Assets/images/LeftIcon.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress2}>
                <Image
                    source={require('@Assets/images/PersonRightIcon.png')}
                />
            </TouchableOpacity>
        </View>
    )
}
export default HeaderStack;