import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles';
const Card = ({ data }) => {
    return (
        <View
            style={styles.cardContainer}
            key={data.id}
        >
            <Image
                style={styles.imgCard}
                source={data.img}
            />
            <Text
                style={styles.title}
            >{data.title}</Text>
            <Text
                style={styles.text1}
            >{data.desciption1}</Text>
            <Text
                style={styles.text2}
            >{data.desciption2}</Text>
            <Text
                style={styles.text3}
            >{data.desciption3}</Text>
        </View>
    )
}
export default Card