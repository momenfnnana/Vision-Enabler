import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderStack from '../../components/header/headerStack/HeaderStack';
import Color from '@Assets/Constant';
import subQuestions from '@ParadigmFakeData/subQuestions';
import styles from './Questions.style';
import CheckBoxs from '../../components/CheckBox/CheckBox';

const Questions = () => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View>
            <HeaderStack
                color={Color.primary}
                borderBottomWith={1}
            />
            <Text
                style={styles.headerTitle}
            >Working Environment</Text>
            <View style={{ backgroundColor: `${Color.black}05`, marginTop: "2%", borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View style={styles.line} />
                <ScrollView>
                    <View style={styles.questionsScroll}>
                        {
                            subQuestions.map(i => {
                                return (
                                    <View key={i.id} style={{ marginTop: "5%" }}>
                                        <Text style={styles.title}>{i.title}</Text>
                                        <Text style={styles.subTitle}>{i.subTitle}</Text>
                                        <View style={styles.questionsContainer}>
                                            {i.questions.map(item => {
                                                return (
                                                    <View key={item.id} style={styles.questionContainer}>
                                                        <CheckBoxs />
                                                        <Text style={styles.qustions}>{item.question}</Text>
                                                    </View>
                                                )
                                            })}
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default Questions