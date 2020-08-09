import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './Header.style'
const HeaderStack = ({ onPress, borderBottomWith }) => {
    return (
        <View
            style={[styles.container, { borderBottomWidth: borderBottomWith }]}>
            <TouchableOpacity onPress={onPress}>
                <Image
                    source={require('@Assets/images/LeftIcon.png')}
                />
            </TouchableOpacity>
            <Image
                source={require('@Assets/images/PersonRightIcon.png')}
            />
        </View>
    )
}
export default HeaderStack;