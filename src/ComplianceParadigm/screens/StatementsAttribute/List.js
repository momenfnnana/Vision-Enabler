// 
import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import StatementAvarageData from '@ParadigmFakeData/StatementAvarage';
import styles from './StatementsAttribute.style';

const List = () => {
    const [collabse, setCollabse] = useState(false);
    const toggle = () => {
    }
    return (
        <ScrollView style={styles.ScrollView}>
            {
                StatementAvarageData.map(i => {
                    return (
                        <TouchableOpacity
                            onPress={toggle.bind(this)}
                            style={styles.cardContainer}
                            key={i.id}>
                            <View style={styles.imgContainer}>
                                <Image source={i.img} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>{i.title}</Text>
                                <Text style={styles.percentage}>{i.percentage}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}
export default List;