import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './HeaderStack.style';
const HeaderStack = ({ borderBottomWith, goBack, color, backgroundColor, onPress2 }) => {
    return (
        <View
            style={[
                styles.container,
                {
                    borderBottomWidth: borderBottomWith,
                    backgroundColor: backgroundColor,
                }
            ]}>
            <TouchableOpacity onPress={goBack}>
                <AntDesign name="arrowleft" size={24} color={color} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress2}>
                <Image source={require('@Assets/images/PersonRightIcon.png')} />
            </TouchableOpacity>
        </View>
    )
}
export default HeaderStack