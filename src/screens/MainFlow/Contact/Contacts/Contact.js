import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import SectionTitle from '@Components/SectionTitle/SectionTitle/SectionTitle';
import SectionDescription from '@Components/SectionTitle/SectionDescription/SectionDescription';
import Card from '@Components/card/ContactList/Contactlist';
import ContactData from '@FakeData/Contact';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles';
const Contact = ({ navigation }) => {
    return (
        <View
            style={styles.fullScreen}
        >
            <StackHeader
                goBack={() => navigation.goBack()}
                color={Color.primary}
                borderBottomWith={1}
            />
            <ScrollView
                style={styles.container}
            >
                <View
                    style={styles.headSection}
                >
                    <SectionTitle
                        title1="Say hi"
                        title2="Don’t be shy"
                    />
                    <SectionDescription
                        text="At Vision Enabler we believe that diversity should be at the core of every forward thinking company’s management strategy."
                    />
                </View>
                <View
                    style={styles.loopCardContainer}
                >
                    {
                        ContactData.map(i => {
                            return (
                                <Card data={i} />
                            )
                        })
                    }
                </View>
                <View
                    style={{ marginBottom: "20%" }}
                >
                    <View style={styles.bottomCard}>
                        <View
                            style={styles.whiteContainer}>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <Text
                                style={styles.titleBottomCard}>Our teams are here to <Text
                                    style={styles.help}>help</Text></Text>
                            <Text
                                style={styles.desciption}>Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ContactForm')}
                            style={styles.button}>
                            <Text
                                style={styles.textButton}>Drop us a Line</Text>
                        </TouchableOpacity>
                        <Image
                            style={styles.bottomLeftImage}
                            source={require('@Assets/images/cornerQuarterCircle.png')} />
                        <Image
                            style={styles.topRightImage}
                            source={require('@Assets/images/pupsCorner.png')} />
                    </View>
                    <View style={styles.bottomCard}>
                        <View
                            style={styles.whiteContainer}>
                            <Ionicons name="md-person" size={30} color={Color.secondary} />
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <Text
                                style={styles.titleBottomCard}>Upload <Text
                                    style={{
                                        color: Color.secondary
                                    }}>CV</Text></Text>
                            <Text
                                style={styles.desciption}>if you interested in our work upload your CV file and we will contact you later</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('UploadCV')}
                            style={styles.button}>
                            <Text
                                style={styles.textButton}>Upload CV</Text>
                        </TouchableOpacity>
                        <Image
                            style={styles.bottomLeftImage}
                            source={require('@Assets/images/cornerQuarterCircle.png')} />
                        <Image
                            style={styles.topRightImage}
                            source={require('@Assets/images/pupsCorner.png')} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default Contact