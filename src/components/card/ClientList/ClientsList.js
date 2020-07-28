import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles';

const Card = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View
                    style={styles.card}
                >
                    <Image
                        style={styles.Image}
                        source={data.item.img}
                    />
                </View>
            </View>
        </View >
    )
}
export default Card