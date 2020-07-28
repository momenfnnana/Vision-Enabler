import React from 'react';
import { View, Text } from 'react-native';
import HeaderStack from '@ParadigmComponents/header/header/Header';
import Color from '@Assets/Constant';
import styles from './ChooseQuestionnaire.style';
import Questions from '@QuestionnaireFakeData/Questions'
const ChooseQuestionnaire = () => {
    console.log(Questions);
    return (
        <View>
            <HeaderStack borderBottomWith={1} color={Color.primary} />
            <View
                style={{ marginTop: "10%" }}
            >
                <Text
                    style={styles.welcome}
                >{'Welcome to '.toUpperCase()}</Text>
                <Text
                    style={styles.visionEnabler}
                >{'Vision Enabler'.toUpperCase()}</Text>
            </View>
            <Text
                style={{
                    textAlign: 'center',
                    width: "90%",
                    alignSelf: 'center',
                    marginTop: "5%",
                    color: `${Color.black}80`,
                    lineHeight: 20
                }}
            >Please score the following statements based on your own experience, personal views & belief, completion of the survey only takes around 15 minutes.</Text>
        </View>
    )
}
export default ChooseQuestionnaire