import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderStack from '@ParadigmComponents/header/header/Header';
import Color from '@Assets/Constant';
import styles from './ChooseQuestionnaire.style';
import Questions from '@QuestionnaireFakeData/Questions';
import Card from './Card';
import { Context as AuthContext } from '@Context/AuthContext';

const ChooseQuestionnaire = ({ navigation }) => {
    const toggleFlow = () => {
        navigation.navigate('Welcome')
    }

    return (
        <ScrollView style={{ backgroundColor: Color.white }}>
            <HeaderStack
                borderBottomWith={1}
                color={Color.primary}
                onPress={() => navigation.openDrawer()}
                onPress2={() => navigation.navigate('Profile')}
            />
            <View style={{ marginTop: "10%" }}>
                <Text style={styles.welcome}>{'Welcome to '.toUpperCase()}</Text>
                <Text style={styles.visionEnabler}>{'Vision Enabler'.toUpperCase()}</Text>
            </View>
            <Text style={styles.textDescription}>Please score the following statements based on your own experience, personal views & belief, completion of the survey only takes around 15 minutes.</Text>
            <Text style={styles.chooseA}>
                Choose a
                <Text style={styles.questionnaire}> Questionnaire</Text>
            </Text>
            {
                Questions.map(data => {
                    return (
                        <Card
                            key={data.id}
                            data={data}
                            onPress={toggleFlow}
                        />
                    )
                })
            }
        </ScrollView>
    )
}
export default ChooseQuestionnaire;