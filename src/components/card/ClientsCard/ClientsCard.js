import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles';
const ClientCard = ({ data }) => {
    return (
        <View
            style={styles.clientList}
            key={data.id}
        >
            <View
                style={styles.clientListImagesContainer}
                source={require('@Assets/images/roundedTringle.png')} >
                <Image style={styles.logo} source={data.img} />
                <Image style={styles.halfQuarter} source={require('@Assets/images/HalfQurater.png')} />
            </View>
            <View style={styles.text}>
                <Text style={styles.clientListTitles}>{data.title.toUpperCase()}</Text>
                <Text style={styles.subTitle}>{data.subTitle}</Text>
            </View>
        </View>
    )
}
export default ClientCard