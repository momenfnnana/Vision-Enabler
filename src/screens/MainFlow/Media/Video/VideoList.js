import React from 'react';
import { View, Image } from 'react-native';
import Color from '@Assets/Constant';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './Style'
const List = ({ data }) => {
    return (
        <View
            style={styles.container}
        >
            <Image
                style={styles.img}
                source={data.item.img}
            />
            <View
                style={styles.video}
            >
                <FontAwesome5 name="play" size={18} color={Color.white} />
            </View>
        </View>
    )
}

export default List