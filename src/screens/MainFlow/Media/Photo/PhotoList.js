import React from 'react';
import { View, Image } from 'react-native';
import styles from './Styles';
const List = ({ data }) => {
    return (
        <View
            style={styles.container}>
            <Image
                style={styles.img}
                source={{ uri:'https://visionenabler.dits.cloud/public/img/media/'+data.item.photo}}
            />
        </View>
    )
}
export default List;