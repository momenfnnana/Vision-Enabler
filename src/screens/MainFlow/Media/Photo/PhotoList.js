import React from 'react';
import { View, Image } from 'react-native';
import styles from './Styles';
const List = ({ data }) => {
    return (
        <View
            style={styles.container}>
            <Image
                style={styles.img}
                source={data.item.img}
            />
        </View>
    )
}
export default List