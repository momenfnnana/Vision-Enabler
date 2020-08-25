import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

const List = ({ data }) => {
    return (
        <View
            style={styles.listContainer}
        >
            <View style={styles.DateContainer}>
                <Text style={styles.date}>{data.item.created_date}</Text>
            </View>
            <Text style={styles.description}>{data.item.description}</Text>
        </View>
    )
}
export default List