import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
import HeaderStack from '@ParadigmComponents/header/header/Header';
import Color from '@Assets/Constant';
import styles from './ChooseQuestionnaire.style';
import Questions from '@QuestionnaireFakeData/Questions';

const ChooseQuestionnaire = () => {
    const [click, setClick] = useState("flex");
    const [backGroundColor, setBackGroundColor] = useState(Color.primary);
    const SelectItem = () => {
        click === "flex" ? setClick("none") : setClick("flex")
        backGroundColor === Color.primary ? setBackGroundColor(Color.secondary) : setBackGroundColor(Color.primary)
    }
    return (
        <ScrollView>
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
                style={styles.textDescription}
            >Please score the following statements based on your own experience, personal views & belief, completion of the survey only takes around 15 minutes.</Text>
            <Text
                style={styles.chooseA}
            >
                Choose a
                <Text
                    style={styles.questionnaire}
                > Questionnaire</Text>
            </Text>
            {
                Questions.map(data => {
                    return (
                        <TouchableOpacity
                            key={data.id}
                            style={[styles.container, { backgroundColor: backGroundColor }]}
                            onPress={SelectItem}
                        >
                            <View
                                style={{ display: click }}
                            >
                                <Image
                                    style={styles.pupsCorner}
                                    source={require('@Assets/images/pupsCorner.png')}
                                />
                            </View>
                            <Text
                                style={styles.cardData}
                            >{data.text}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}
export default ChooseQuestionnaire