import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
import StatementAvarageData from '@ParadigmFakeData/StatementAvarage';
import styles from './StatementsAttribute.style';
const List = () => {
    return (
        <ScrollView
            style={styles.ScrollView}
        >
            {
                StatementAvarageData.map(i => {
                    return (
                        <View
                            style={styles.cardContainer}
                            key={i.id}>
                            <View
                                style={styles.imgContainer}
                            >
                                <Image source={i.img} />
                            </View>
                            <View
                                style={styles.textContainer}
                            >
                                <Text
                                    style={styles.title}
                                >{i.title}</Text>
                                <Text
                                    style={styles.percentage}
                                >{i.percentage}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
export default List