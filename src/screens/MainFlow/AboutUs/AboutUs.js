import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import SectionTitle from '@Components/SectionTitle/SectionTitle/SectionTitle';
import SectionDescription from '@Components/SectionTitle/SectionDescription/SectionDescription';
import PersonCard from '@Components/card/PersonCard/PersonCard';
import Card from '@Components/card/HistoryList/HistoryList';
import ReadMore from 'react-native-read-more-text';
import styles from './Styles';

const AboutUs = ({ navigation }) => {
    const renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={styles.handleReadMore} onPress={handlePress}>
                Read more
            </Text>
        );
    }
    const renderRevealedFooter = (handlePress) => {
        return (
            <Text style={styles.handleReadLess} onPress={handlePress}>
                Show less
            </Text>
        );
    }
    return (
        <View style={styles.container}>
            <StackHeader
                goBack={() => navigation.goBack()}
                color={Color.primary}
                borderBottomWith={1}
            />
            <ScrollView>
                <View style={styles.headSection}>
                    <View style={styles.titleContainer}>
                        <View style={styles.sectionTitleContainer}>
                            <SectionTitle title1="Who" title2="We are" />
                        </View>
                    </View>
                    <View style={styles.headImageContainer}>
                        <Image
                            style={styles.who}
                            source={require('@Assets/images/who.png')}
                        />
                        <Image
                            style={styles.underWho}
                            source={require('@Assets/images/underWho.png')}
                        />
                    </View>
                </View>
                <SectionDescription
                    text="At Vision Enabler we believe that diversity should be at the core of every forward thinking company’s management strategy. We see diversity as a source of improved performance that offers a decisive competitive advantage in a fast-moving, socially and culturally complex world."
                />
                <PersonCard
                    openPersonalScreen={() =>
                        navigation.navigate('PersonalScreen')}
                />
                <View style={{ backgroundColor: "#F9FAFE" }}>
                    <SectionTitle
                        title1="OUR"
                        title2="History"
                    />
                    <SectionDescription
                        text="The values of Vision Enabler reflect the values of diversity"
                    />
                    <Card />
                </View>
                <View style={styles.ourAwards}>
                    <Text style={styles.our}>{'our'.toUpperCase()}</Text>
                    <Text style={styles.awards}>{'AWARDs'.toUpperCase()}</Text>
                </View>
                <View style={styles.FranceCard}>
                    <Text style={styles.cardTitle}>FRANCE-MAGHREB AWARD</Text>
                    <Text style={styles.cardsubTitle}>Cultural Diversity</Text>
                    <View style={styles.readMoreView}>
                        <ReadMore
                            numberOfLines={3}
                            renderTruncatedFooter={renderTruncatedFooter}
                            renderRevealedFooter={renderRevealedFooter}
                        >
                            <Text style={styles.readMoreText}>In February 2007 Vision Enabler won the prestigious France-Maghreb award for cultural diversity (business category).
                            The project, Recruiting Visible Minorities, involved eight global French organisations: Axa, BNP Paribas, Danone, Gas de France, L’Oréal, Schneider Electric, Société Générale and Total. The results of our work were presented to the United Nations.
                            The France-Maghreb Convention was set up in 2003 to facilitate business and social cooperation between France and North Africa. Previous recipients include Peugeot, L’Oréal and Veolia.</Text>
                        </ReadMore>
                    </View>
                    <Image
                        style={styles.cardImage}
                        source={require('@Assets/images/Awards.png')}
                    />
                </View>
                <View style={styles.mediaCenterCard}>
                    <Image
                        style={styles.mediaCenterImage}
                        source={require('@Assets/images/ourMediaCenter.png')}
                    />
                    <View style={styles.mediaCenterTextContainer}>
                        <Text style={styles.mediaOur}>{'our'.toUpperCase()}</Text>
                        <Text style={styles.mediaCenter}>{'media center'.toUpperCase()}</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Media')}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default AboutUs;