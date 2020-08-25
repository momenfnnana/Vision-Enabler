import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles';

const Card = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.card}>
                    <Image
                        style={styles.Image}
                        source={{ uri: 'https://visionenabler.dits.cloud/public/img/clients/' + data.item.logo }}
                    />
                </View>
            </View>
        </View >
    )
}
export default Card;