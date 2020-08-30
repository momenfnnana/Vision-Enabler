// 
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Easing, Slider, ScrollView } from 'react-native';
import HeaderStack from '../../components/header/headerStack/HeaderStack';
import Color from '@Assets/Constant';
import { ProgressBar } from 'react-native-paper';
import subQuestions from '@ParadigmFakeData/subQuestions';
import styles from './Questionnaire.style';
import Footer from '@ParadigmComponents/Footer/Footer';
import SwipeUpDown from 'react-native-swipe-up-down';
import { getQuestionnaier2 } from "@Services/Questionnaier/Questionnaier";
import Questions from '../Questions/Questions';
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';
import CheckBoxs from '../../components/CheckBox/CheckBox';

const QuestionnaireA2 = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [subquestionIndex, setSubquestionIndex] = useState(0);
    const [isVisible2, setIsVisible2] = useState(true);
    const [height, setHeight] = useState("100");
    const [sliderHeight, setSliderHeight] = useState("80");
    const [swiperHeight, setSwiperHeight] = useState("65");
    const [marginBottom, setMarginBottom] = useState("20");
    const [paddingLeft, setPaddingLeft] = useState("8");
    const [justifyContent, setJustifyContent] = useState("flex-end");
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
            if (questionIndex < questions[index].questions_2.length - 1) {
                setQuestionIndex(questionIndex + 1);
                // if (questionIndex < questions[index].questions_2[questionIndex].questions2_sub - 1) {
                //     setSubquestionIndex(subquestionIndex + 1)
                // }
            } else {
                setIndex(index + 1);
                setQuestionIndex(0);
            }
        } else if (index == questionsLength - 1) {
            if (questionIndex < questions[index].questions_2.length - 1) {
                setQuestionIndex(questionIndex + 1);
            } else {
                setIsVisible2(false)
                navigation.navigate("PerceptionReport")
            }
        }
    }

    const toggleBackScreen = () => {
        if (index > 0) {
            if (questionIndex > 0) {
                setQuestionIndex(questionIndex - 1);
            } else {
                setIndex(index - 1);
                setQuestionIndex(questionIndex - 1);
            }
        } else if (index == 0) {
            if (questionIndex > 0) {
                setQuestionIndex(questionIndex - 1);
            } else {
                setIsVisible2(false)
                navigation.goBack()
            }
        }
    }

    const ItemMini = () => <View>
        <Text style={styles.itemMiniTitle}>Vision</Text>
        <Text style={styles.itemMiniDescription}>Foreseen & desired by leaders who are</Text>
    </View>

    const ItemFull = () => <View style={styles.container2}>
        <View style={styles.line2} />
        <ScrollView style={{ width: "100%" }}>
            <View style={styles.questionsScroll2}>
                {
                    questions[index].questions_2[questionIndex].questions2_sub.map(i => {
                        return (
                            <View key={i.id} style={{ marginTop: "5%" }}>
                                <Text style={styles.title2}>{i[0] ? 'Vision' : i[1] ? 'Enablers' : 'tools'}</Text>
                                <View style={styles.questionContainer2}>
                                    <CheckBoxs />
                                    <Text style={styles.questionsContainer2}>{i.title}</Text>
                                </View>
                                {/* {i.questions.map(item => {
                                        return (
                                        )
                                    })} */}
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    </View >
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
                    <Text style={styles.headerTitle}>{questions[index].name}</Text>
                    <View style={styles.modalContainer}>
                        <View style={styles.questionsNumber}>
                            <View style={styles.backgroundLine} />
                            <View style={questions[index].id === 34 ? styles.questionNumberContainer : styles.secondaryQuestionsContainer}><Text style={questions[index].id === 34 ? styles.PrimaryquestionNumberStyle : styles.SecondayquestionNumberStyle}>1</Text></View>
                            <View style={questions[index].id === 36 ? styles.questionNumberContainer : styles.secondaryQuestionsContainer}><Text style={questions[index].id === 36 ? styles.PrimaryquestionNumberStyle : styles.SecondayquestionNumberStyle}>2</Text></View>
                        </View>
                        <Text style={styles.mainTitle}>{}</Text>
                        <View style={styles.progressBarContainer}>
                            <ProgressBar progress={0.25} color={Color.secondary} style={{ width: "100%" }} />
                        </View>
                        <View
                            style={[styles.firstModal, {
                                height: `${height}%`,
                                justifyContent: justifyContent
                            }]}
                        >
                            <View style={styles.firstModalContainer}>
                                <View style={styles.Question1Container}>
                                    <Text style={styles.modalQuestionNumber}>Questions 1</Text>
                                </View>
                                <Text style={styles.questionTitle}>{questions[index].questions_2[questionIndex].questions2_sub[0].title}</Text>
                                <Text style={styles.questionDescription}>{questions[index].questions_2[questionIndex].questions2_sub[0].stitle}</Text>
                                <SwipeUpDown
                                    itemMini={<ItemMini />}
                                    itemFull={<ItemFull />}
                                    onShowMini={() => {
                                        setHeight("100")
                                        setJustifyContent("flex-end")
                                        setSliderHeight("85")
                                        setMarginBottom("50")
                                    }}
                                    onShowFull={() => {
                                        setHeight("100")
                                        setJustifyContent("flex-start")
                                        setSliderHeight("37")
                                        setPaddingLeft("2")
                                    }}
                                    swipeHeight={500}
                                    onMoveDown={() => console.log('down')}
                                    onMoveUp={() => { }}
                                    disablePressToShow={false}
                                    style={[styles.subQuestionsContainer, {
                                        height: `${swiperHeight}%`,
                                        paddingLeft: `${paddingLeft}%`,
                                    }]}
                                    swipeHeight={600}
                                    animation={Easing.linear}
                                />
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
                                            maximumTrackTintColor="#00000080"
                                            thumbTintColor="#fff"
                                            thumbImage={require('@Assets/images/thumbImage.png')}
                                            value={0.25}
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
export default QuestionnaireA2;