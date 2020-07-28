import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles'
const VisionCard = ({ data }) => {
    return (
        <View key={data.id} style={styles.visionList}>
            <View style={{ padding: 15, width: "100%" }}>
                <Image
                    source={data.img}
                    style={{
                        marginVertical: "3%"
                    }}
                />
                <Text style={styles.visionCardTitle}>{data.title.toUpperCase()}</Text>
                <Text style={styles.visionCardDescription}>{data.description}</Text>
            </View>
            <Image style={styles.leftCornerImage} source={require('@Assets/images/cardPups.png')} />
        </View>
    )
}
export default VisionCard