import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles';
const ClientCard = ({ data }) => {
    return (
        <View style={styles.clientList} key={data.id}>
            <View
                style={styles.clientListImagesContainer}
                source={require('@Assets/images/roundedTringle.png')} >
                <Image style={styles.logo} source={{ uri: 'https://visionenabler.dits.cloud/public/img/clients/' + data.logo }} />
                <Image style={styles.halfQuarter} source={require('@Assets/images/HalfQurater.png')} />
            </View>
            <View style={styles.text}>
                <Text style={styles.clientListTitles}>{data.name}</Text>
                <Text style={styles.subTitle}>{data.description}</Text>
            </View>
        </View>
    )
}
export default ClientCard;