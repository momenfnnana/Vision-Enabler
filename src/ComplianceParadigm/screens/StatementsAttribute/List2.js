import React from 'react';
import { View, Text, Image } from 'react-native';
import StatementAvarageData from '@ParadigmFakeData/StatementAvarage';
import Color from '@Assets/Constant';
import styles from './StatementsAttribute.style'
const List = () => {
    return (
        <View>
            {StatementAvarageData.map(i => {
                return (
                    <View
                        style={styles.cardContainer2}
                        key={i.id}>
                        <View
                            style={styles.card2PercentageWithImage}
                        >
                            <View
                                style={styles.imgContainer}
                            >
                                <Image source={i.img} />
                            </View>
                            <Text
                                style={styles.percentage2}
                            >{i.percentage}</Text>
                        </View>
                        <Text
                            style={styles.description}
                        >{i.description}</Text>
                    </View>
                )
            })}
        </View>
    )
}
export default List;