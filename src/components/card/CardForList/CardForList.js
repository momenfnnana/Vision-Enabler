//  this Card for Home ,ourVision Screens

import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles'
const Card = ({ data }) => {
    return (
        <View style={styles.card}>
            <View style={styles.textWithImage}>
                <Image
                    source={data.item.img}
                    style={styles.img} />
                <Text style={styles.title}>{data.item.title.toUpperCase()}</Text>
                <Text style={styles.description}>{data.item.description}</Text>
            </View>
            <Image style={styles.leftImage} source={require('@Assets/images/cardPups.png')} />
        </View>
    )
}
export default Card