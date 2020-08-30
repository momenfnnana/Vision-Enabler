// 
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderStack from '../../components/header/headerStack/HeaderStack';
import Color from '@Assets/Constant';
import subQuestions from '@ParadigmFakeData/subQuestions';
import styles from './Questions.style';
import CheckBoxs from '../../components/CheckBox/CheckBox';
import { getQuestionnaier2 } from "@Services/Questionnaier/Questionnaier";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';

const Questions = () => {
    const [questions, setQuestions] = useState([{}]);
    const [isLoading, setIsLoading] = useState(true);
    const questionsLength = questions.length;

    useEffect(() => {
        (async function () {
            try {
                isVisible2 === true && setIsVisible2(true);
                setIsLoading(true);
                const data = await getQuestionnaier2();
                console.log("aaa", data.data);
                setQuestions(data.data);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                alert("We got an problem!");
            }
        })();
    }, []);
    return (
        <>
            {isLoading ? <LoadingDialog /> : (
                <View style={styles.container}>
                    <View style={styles.line} />
                    <ScrollView style={{ width: "100%" }}>
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
            )}
        </>
    )
}
export default Questions;