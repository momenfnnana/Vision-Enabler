import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Setting.style';
const Card = ({ img, title, description, backgroundColor, onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.cardContainer}>
                        <Image source={img} />
                    </View>
                    <View style={{ justifyContent: "center", width: "70%" }}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                </View>
                <View style={[styles.line, { backgroundColor: backgroundColor + 50, }]} />
            </TouchableOpacity>
        </View>
    )
}
export default Card;