// 
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Slider } from 'react-native-elements';
import HeaderStack from '../../components/header/headerStack/HeaderStack';
import Color from '@Assets/Constant';
import { ProgressBar } from 'react-native-paper';
import styles from './Questionnaire.style';
import Footer from '@ParadigmComponents/Footer/Footer';
// import QuestionnaireA1Data from '@ParadigmFakeData/QuestionnaireA1';
import { getQuestions } from "@Services/Questionnaier/Questionnaier";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';

const QuestionnaireA1 = ({ navigation }) => {
    const [height, setHeight] = useState("90");
    const [sliderHeight, setSliderHeight] = useState("90");
    const [justifyContent, setJustifyContent] = useState("flex-end");
    const [index, setIndex] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [slideValue, setSlideValue] = useState(0)
    const [QuestionnaireA1Data, setQuestions] = useState([
        {}
    ]);
    const questionsLength = QuestionnaireA1Data.length;
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async function () {
            try {
                setIsLoading(true);
                const Questions = await getQuestions();
                console.log("ahasda", Questions.data);
                setQuestions(Questions.data.Sections);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
                setIsLoading(false);
                alert("We got an problem!");
            }
        })();
    }, []);

    const answers = [
        // {
        //     id: 1,
        //     answersArray: []
        // },
        // {
        //     id: 2,
        //     answersArray: []
        // },
        // {
        //     id: 3,
        //     answersArray: []
        // },
        // {
        //     id: 4,
        //     answersArray: []
        // },
    ]

    const toggleNextScreen = () => {
        let a = {
            id: 1,
            answers: [
                {
                    id: 1,
                    value: 0.5
                }
            ]
        };
        if (index < questionsLength - 1) {
            if (questionIndex < QuestionnaireA1Data[index].questions.length - 1) {
                setQuestionIndex(questionIndex + 1);
            } else {
                setIndex(index + 1);
                setQuestionIndex(0);
            }
        } else if (index == questionsLength - 1) {
            if (questionIndex < QuestionnaireA1Data[index].questions.length - 1) {
                setQuestionIndex(questionIndex + 1);
            } else {
                console.log("iam here");
                navigation.navigate('PerceptionReport');
            }
        }
    }

    const toggleBackScreen = () => {
        if (index > 0) {
            if (questionIndex > 0) {
                setQuestionIndex(questionIndex - 1);
            } else {
                setIndex(index - 1);
                setQuestionIndex(QuestionnaireA1Data[index].questions.length - 1);
            }
        } else if (index == 0) {
            if (questionIndex > 0) {
                setQuestionIndex(questionIndex - 1);
            } else {
                navigation.goBack()
            }
        }
    }

    return (
        <>
            {isLoading === true ? <LoadingDialog /> : (
                <View style={[styles.container, { backgroundColor: Color.white }]}>
                    <HeaderStack
                        color={Color.primary}
                        borderBottomWith={1}
                        goBack={() => navigation.goBack()}
                        onPress2={() => navigation.navigate('Profile')}
                    />
                    <Text style={styles.headerTitle}>{QuestionnaireA1Data[index] ? QuestionnaireA1Data[index].name : ''}</Text>
                    <View style={styles.modalContainer}>
                        <View style={styles.questionsNumber}>
                            <View style={[styles.backgroundLine, { width: "90%" }]} />
                            <View style={QuestionnaireA1Data[index].id === 1 ? styles.questionNumberContainer : styles.secondaryQuestionsContainer} >
                                <Text style={QuestionnaireA1Data[index].id === 1 ? styles.PrimaryquestionNumberStyle : styles.SecondayquestionNumberStyle}>1</Text>
                            </View>
                            <View style={QuestionnaireA1Data[index].id === 2 ? styles.questionNumberContainer : styles.secondaryQuestionsContainer}>
                                <Text style={QuestionnaireA1Data[index].id === 2 ? styles.PrimaryquestionNumberStyle : styles.SecondayquestionNumberStyle}>2</Text>
                            </View>
                            <View style={QuestionnaireA1Data[index].id === 3 ? styles.questionNumberContainer : styles.secondaryQuestionsContainer}>
                                <Text style={QuestionnaireA1Data[index].id === 3 ? styles.PrimaryquestionNumberStyle : styles.SecondayquestionNumberStyle}>3</Text>
                            </View>
                            <View style={QuestionnaireA1Data[index].id === 4 ? styles.questionNumberContainer : styles.secondaryQuestionsContainer}>
                                <Text style={QuestionnaireA1Data[index].id === 4 ? styles.PrimaryquestionNumberStyle : styles.SecondayquestionNumberStyle}>4</Text>
                            </View>
                        </View>
                        <Text style={styles.mainTitle}>{QuestionnaireA1Data[index].title ?? ''}</Text>
                        <View style={styles.progressBarContainer}>
                            <ProgressBar progress={QuestionnaireA1Data[index].id === 1 ? 0.25 : QuestionnaireA1Data[index].id === 2 ? 0.50 : QuestionnaireA1Data[index].id === 3 ? 0.75 : 1} color={Color.secondary} style={{ width: "100%" }} />
                        </View>
                        <View style={[styles.firstModal, { height: `${height}%`, justifyContent: justifyContent }]}>
                            <View style={styles.firstModalContainer}>
                                <View style={styles.Question1Container}>
                                    <Text style={styles.modalQuestionNumber}>Questions {QuestionnaireA1Data[index].id} from {QuestionnaireA1Data[index].id}</Text>
                                </View>
                                <Text style={styles.questionDescription}>{QuestionnaireA1Data[index].title}</Text>
                                <View style={styles.imagesAndSliderContainer}>
                                    <View style={[styles.configuration, { height: `${sliderHeight}%`, }]}>
                                        <View style={styles.imagesContainer}>
                                            <Text style={styles.firstStep}>N/A</Text>
                                            <Image source={require('@Assets/images/0%.png')} />
                                            <Image source={require('@Assets/images/25%.png')} />
                                            <Image source={require('@Assets/images/50%.png')} />
                                            <Image source={require('@Assets/images/75%.png')} />
                                            <Image source={require('@Assets/images/100%.png')} />
                                        </View>
                                        <Slider
                                            style={styles.slider}
                                            minimumValue={0}
                                            maximumValue={5}
                                            minimumTrackTintColor={Color.primary}
                                            maximumTrackTintColor="#00000010"
                                            thumbTintColor="#fff"
                                            thumbProps={{
                                                children: (
                                                    <Image style={{ alignSelf: "center", position: "absolute", top: -10 }} source={require('@Assets/images/thumbImage.png')} />
                                                )
                                            }}
                                            thumbStyle={{}}
                                            value={slideValue}
                                            onValueChange={setSlideValue}
                                            step={1}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.footerContainer}>
                                <Footer
                                    goBack={toggleBackScreen}
                                    next={toggleNextScreen}
                                    backgroundColor1={Color.secondary}
                                    backgroundColor2={Color.secondary}
                                    backgroundColor3={Color.secondary}
                                    backgroundColor4={Color.primary}
                                    backgroundColor5={Color.secondary}
                                    backgroundColor6={Color.secondary}
                                    backgroundColor7={Color.secondary}
                                    height1={5}
                                    width1={5}
                                    height2={5}
                                    width2={5}
                                    height3={5}
                                    width3={5}
                                    height4={10}
                                    width4={10}
                                    height5={5}
                                    width5={5}
                                    height6={5}
                                    width6={5}
                                    height7={5}
                                    width7={5}
                                />
                            </View>
                        </View>
                    </View>
                </View >
            )}
        </>
    )
}
export default QuestionnaireA1;