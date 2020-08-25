//  this Card for Home ,ourVision Screens

import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles'
const Card = ({ data }) => {
    console.log("data", data.item);
    return (
        <View style={styles.card}>
            <View style={styles.textWithImage}>
                <Image
                    source={{ uri: 'https://visionenabler.dits.cloud/public/img/' + data.item.icon }}
                    style={styles.img}
                />
                <Text style={styles.title}>{data.item.title.toUpperCase()}</Text>
                <Text style={styles.description}>{data.item.text_content}</Text>
            </View>
            <Image style={styles.leftImage} source={require('@Assets/images/cardPups.png')} />
        </View>
    )
}
export default Card;