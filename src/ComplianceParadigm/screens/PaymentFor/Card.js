import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './PaymentFor.style';
import Color from '@Assets/Constant';
import QuestionsType from '@ParadigmFakeData/QuestionsType';
import { Context as AuthContext } from '@Context/AuthContext';
const Card = ({ data, onPress }) => {
    const { setPyamentFlow } = useContext(AuthContext)
    const [click, setClick] = useState("flex");
    const [backGroundColor, setBackGroundColor] = useState(Color.primary);
    const SelectItem = () => {
        click === "flex" ? setClick("none") : setClick("flex")
        backGroundColor === Color.primary ? (
            setPyamentFlow(data.id),
            setBackGroundColor(Color.secondary),
            onPress()
        ) : setBackGroundColor(Color.primary)
        // backGroundColor === Color.primary && setQuestionFlow(data.id);
    }
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: backGroundColor }]}
            onPress={SelectItem}
        >
            <View style={{ display: click, height: 10 }}>
                <Image style={styles.pupsCorner}
                    source={require('@Assets/images/pupsCorner.png')}
                />
            </View>
            <Text style={styles.cardData}>{data.title}</Text>
        </TouchableOpacity>
    )
}
export default Card;