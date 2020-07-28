// first Card in Home Screen

import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Styles';
const Card = () => {
    return (
        <View style={styles.container}>
            <View style={styles.TextContainer}>
                <Text style={styles.PrimaryText}>
                    {'We '.toUpperCase()}
                    <Text style={styles.SecondaryText}>
                        {'provide '.toUpperCase()}
                    </Text>
                    {'new '.toUpperCase()}
                    <Text style={styles.SecondaryText}>
                        {'solutions '.toUpperCase()}
                    </Text>
                    {'To increase '.toUpperCase()}
                    <Text style={styles.SecondaryText}>
                        {'performance '.toUpperCase()}
                    </Text>
                    {'Through '.toUpperCase()}
                    <Text style={styles.SecondaryText}>
                        {'diversity '.toUpperCase()}
                    </Text>
                    {'At a '.toUpperCase()}
                    <Text style={styles.SecondaryText}>
                        {'global scale '.toUpperCase()}
                    </Text>
                </Text>
            </View>
            <Image
                style={styles.Image}
                source={require('@Assets/images/cardCorner.png')} />
        </View>
    )
}

export default Card