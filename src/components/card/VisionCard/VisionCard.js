import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles'
const VisionCard = ({ data }) => {
    return (
        <View key={data.id} style={styles.visionList}>
            <View style={{ padding: 15, width: "100%" }}>
                <Image
                    source={{ uri: 'https://visionenabler.dits.cloud/public/img/' + data.icon }}
                    style={{ marginVertical: "3%", width: 100, height: 70, resizeMode: "contain" }}
                />
                <Text style={styles.visionCardTitle}>{data.title}</Text>
                <Text style={styles.visionCardDescription}>{data.text_content}</Text>
            </View>
            <Image style={styles.leftCornerImage} source={require('@Assets/images/cardPups.png')} />
        </View>
    )
}
export default VisionCard;