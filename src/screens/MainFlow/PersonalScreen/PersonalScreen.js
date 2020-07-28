import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import styles from './Styles';
const PersonalScreen = ({ navigation }) => {
    const renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={styles.readMore} onPress={handlePress}>
                Read more
            </Text>
        );
    }
    const renderRevealedFooter = (handlePress) => {
        return (
            <Text style={styles.readMore} onPress={handlePress}>
                Show less
            </Text>
        );
    }
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.goBack}
            >
                <Image
                    source={require('@Assets/images/goBack.png')}
                />
            </TouchableOpacity>
            <Image
                style={styles.userPic}
                source={require('@Assets/images/person1.png')}
            />
            <View
                style={styles.userDetailsContainer}
            >
                <Text
                    style={styles.userName}>{'BRAD MEYER'.toUpperCase()}</Text>
                <Text
                    style={styles.userJob}>Partner and Co-founder</Text>
            </View>
            <View
                style={styles.secondaryLine}
            />
            <View
                style={{
                    padding: "7%"
                }}
            >
                <ReadMore
                    numberOfLines={5}
                    renderTruncatedFooter={renderTruncatedFooter}
                    renderRevealedFooter={renderRevealedFooter}
                >
                    <Text
                        style={styles.description}
                    >Brad Meyer is a partner and co-founder of Vision Enabler. He is responsible for designing interventions that create the deep insights.

                        Brad has set-up two other companies - one focused on introducing behavioural technologies for business transformation and one focused on developing and deploying computing technologies for breakthrough knowledge sharing and sensory-rich distance and collaborative learning. His work draws on 30 years of business experience integrated with his Certification as a Master Practitioner and Trainer of Neuro Linguistic Programming.

                        Prior to his entrepreneurial initiatives, Brad worked for EDS in both the United States and the United Kingdom.

Brad graduated from Coleman College, studied at Harvard University and Grinnell College. He is also the author of “Being inclusive in a Diverse World".</Text>
                </ReadMore>
            </View>
        </ScrollView>
    )
}

export default PersonalScreen