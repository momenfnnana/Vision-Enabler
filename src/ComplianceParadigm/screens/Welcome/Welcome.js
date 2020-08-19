// 
import React from 'react';
import { View, Image, Text } from 'react-native';
import HeaderStack from '@ParadigmComponents/header/header/Header';
import Color from '@Assets/Constant';
import Button from '@ParadigmComponents/button/Button';
import styles from './Welcome.style';
const Welcome = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: Color.white }}>
            <HeaderStack
                borderBottomWith={1}
                color={Color.primary}
                onPress={() => navigation.openDrawer()}
                onPress2={() => navigation.navigate('Profile')}
            />
            <Image
                style={styles.iconImage}
                source={require('@Assets/images/LogoWelcomeScreen.png')}
            />
            <View style={styles.textContainer}>
                <Text style={styles.welcome}>{'Welcome to '.toUpperCase()}</Text>
                <Text style={styles.visionEnabler}>{'Vision Enabler'.toUpperCase()}</Text>
                <Text style={styles.description}>Please score the following statements based on your own experience, personal views & belief, completion of the survey only takes around 15 minutes.</Text>
                <Button title="Get Started" onPress={() => navigation.navigate("StatementsAttribute")} />
            </View>
        </View>
    )
}
export default Welcome;