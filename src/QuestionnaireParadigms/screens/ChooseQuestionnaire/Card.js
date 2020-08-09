import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './ChooseQuestionnaire.style';
import Color from '@Assets/Constant';

const Card = ({ data, onPress }) => {
    const [click, setClick] = useState("flex");
    const [backGroundColor, setBackGroundColor] = useState(Color.primary);
    const SelectItem = () => {
        click === "flex" ? setClick("none") : setClick("flex")
        backGroundColor === Color.primary ? (
            setBackGroundColor(Color.secondary)
        ) : setBackGroundColor(Color.primary)
        backGroundColor === Color.primary && onPress();
    }
    return (
        <TouchableOpacity
            key={data.id}
            style={[styles.container, { backgroundColor: backGroundColor }]}
            onPress={SelectItem}
        >
            <View
                style={{ display: click }}
            >
                <Image
                    style={styles.pupsCorner}
                    source={require('@Assets/images/pupsCorner.png')}
                />
            </View>
            <Text
                style={styles.cardData}
            >{data.text}</Text>
        </TouchableOpacity>
    )
}
export default Card;