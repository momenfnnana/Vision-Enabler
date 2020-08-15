import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Color from '@Assets/Constant';
import { Context as AuthContext } from '@Context/AuthContext';
import styles from './ChooseCompany.style';
const Card = ({ data }) => {
    const [backgroundColor, setBackgroundColor] = useState(Color.white);
    const { login } = useContext(AuthContext);
    const toggleColor = () => {
        backgroundColor === Color.white ? (
            setBackgroundColor(Color.primary)
            // login()
        )
            : setBackgroundColor(Color.white)
    }
    return (
        <TouchableOpacity
            onPress={toggleColor}
            key={data.id}
            style={[styles.card, { backgroundColor: backgroundColor }]}>
            <View style={styles.imageContainer}>
                <Image style={styles.cardImage} source={data.img} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.subTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default Card;