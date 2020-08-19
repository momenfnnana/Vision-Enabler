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
import styles2 from './StatementsAttribute2.style';

const List = ({ i }) => {
    const [collabse, setCollabse] = useState(styles);
    const toggle = () => {
        collabse === styles ? setCollabse(styles2) : setCollabse(styles)
    }
    return (
        <ScrollView style={collabse.ScrollView}>
            <TouchableOpacity
                onPress={toggle}
                style={collabse.cardContainer}
                key={i.id}>
                <View style={{ flexDirection: "row" }}>
                    <View style={collabse.imgContainer}>
                        <Image source={i.img} />
                    </View>
                    <View style={collabse.textContainer}>
                        <Text style={collabse.title}>{i.title}</Text>
                        <Text style={collabse.percentage}>{i.percentage}</Text>
                    </View>
                </View>
                <Text style={collabse.description}>{i.description}</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
export default List;