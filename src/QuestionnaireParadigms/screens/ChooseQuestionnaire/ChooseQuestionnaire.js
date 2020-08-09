import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderStack from '@ParadigmComponents/header/header/Header';
import Color from '@Assets/Constant';
import styles from './ChooseQuestionnaire.style';
import Questions from '@QuestionnaireFakeData/Questions';
import Card from './Card';
const ChooseQuestionnaire = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: Color.white }}>
            <HeaderStack borderBottomWith={1} color={Color.primary} onPress={() => navigation.openDrawer()} />
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
                            onPress={() => navigation.navigate('Welcome')}
                        />
                    )
                })
            }
        </ScrollView>
    )
}
export default ChooseQuestionnaire;