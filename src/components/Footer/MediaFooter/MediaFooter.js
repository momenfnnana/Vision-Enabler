import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from './Styles';
const Footer = ({ goToInterView }) => {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.SignupText}>Load More</Text>
            </TouchableOpacity>
            <View
                style={styles.mediaCenterCard}
            >
                <Image
                    style={styles.mediaCenterImage}
                    source={require('@Assets/images/ourMediaCenter.png')}
                />
                <View
                    style={styles.mediaCenterTextContainer}
                >
                    <Text
                        style={styles.mediaOur}
                    >{'Request'.toUpperCase()}</Text>
                    <Text
                        style={styles.mediaCenter}
                    >{'Media Interview?'.toUpperCase()}</Text>
                    <TouchableOpacity
                        onPress={goToInterView}
                        style={styles.MediaButton}>
                        <Text style={styles.buttonText}>Apply Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default Footer;