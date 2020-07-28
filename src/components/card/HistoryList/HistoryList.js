import React from 'react';
import { View, Text, Image } from 'react-native';
import Dash from 'react-native-dash';
import OurHistory from '@FakeData/OurHistory';
import Color from '@Assets/Constant';
import styles from './Styles'
const Card = () => {
    return (
        <View>
            {
                OurHistory.map(i => {
                    return (
                        <View
                            key={i.id}
                            style={styles.container}
                        >
                            <View
                                style={styles.bigCircle}
                            >
                                <View
                                    style={styles.smallCircle}
                                >
                                    <Text
                                        style={styles.year}
                                    >{i.year}</Text>
                                </View>
                            </View>
                            <Dash
                                style={styles.dash}
                                dashGap={5}
                                dashLength={15}
                                dashColor={`${Color.secondary}50`} />
                            {
                                i.detail.map(item => {
                                    return (
                                        <View
                                            key={item.id}
                                            style={styles.card}
                                        >
                                            <View style={styles.cardContainer}>
                                                <View
                                                    style={styles.imageContainer}
                                                >
                                                    <Image
                                                        source={item.img}
                                                    />
                                                </View>
                                                <Text
                                                    style={styles.title}
                                                >{item.title}</Text>
                                                <Text
                                                    style={styles.description}
                                                >{item.description}</Text>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    )
                })
            }
        </View>
    )
}
export default Card