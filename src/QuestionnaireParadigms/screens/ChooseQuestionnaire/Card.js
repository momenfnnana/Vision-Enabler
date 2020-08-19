import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './ChooseQuestionnaire.style';
import Color from '@Assets/Constant';
import { Context as AuthContext } from '@Context/AuthContext';

const Card = ({ data, onPress }) => {
    const { setQuestionFlow, setPyamentFlow } = useContext(AuthContext)

    const [click, setClick] = useState("flex");
    const [backGroundColor, setBackGroundColor] = useState(Color.primary);
    const setQuestionType = () => {
        setQuestionFlow(data.id);
        setPyamentFlow(data.id)
    }
    const SelectItem = () => {
        click === "flex" ? (
            setQuestionType(),
            setClick("none"),
            setBackGroundColor(Color.secondary),
            onPress()
        ) : (
                setClick("flex"),
                setBackGroundColor(Color.primary)
            )
    }
    return (
        <TouchableOpacity
            key={data.id}
            style={[styles.container, { backgroundColor: backGroundColor }]}
            onPress={SelectItem}
        >
            <View style={{ display: click, height: 10 }}>
                <Image style={styles.pupsCorner} source={require('@Assets/images/pupsCorner.png')} />
            </View>
            <Text style={styles.cardData}>{data.text}</Text>
        </TouchableOpacity>
    )
}
export default Card;