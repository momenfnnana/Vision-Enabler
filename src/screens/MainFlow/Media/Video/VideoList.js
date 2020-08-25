import React, { useCallback } from 'react';
import { View, Image, TouchableOpacity, Linking } from 'react-native';
import Color from '@Assets/Constant';
import { FontAwesome5 } from '@expo/vector-icons';
import { Thumbnail } from 'native-base';
import styles from './Style';
const List = ({ data }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(data.item.video_url)}>
            <Image style={styles.img} source={{ uri: data.item.thumbnail_url }} />
            <View style={styles.video}>
                <FontAwesome5 name="play" size={18} color={Color.white} />
            </View>
        </TouchableOpacity>
    )
}

export default List;