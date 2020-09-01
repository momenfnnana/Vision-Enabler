// 
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Slider } from 'react-native-elements';
import HeaderStack from '../../components/header/headerStack/HeaderStack';
import Color from '@Assets/Constant';
import { ProgressBar } from 'react-native-paper';
import styles from './Questionnaire.style';
import Footer from '@ParadigmComponents/Footer/Footer';
// import QuestionnaireA1Data from '@ParadigmFakeData/QuestionnaireA1';
import { getQuestions, postQuestionnaierAnswers } from "@Services/Questionnaier/Questionnaier";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';
import { Context as AuthContext } from '@Context/AuthContext';
import Pups from './Pups';
const QuestionnaireA1 = ({ navigation }) => {

    const { state: { QuestionsAnswersArray }, QuestionsAnswers, ResetQuestionsAnswers } = useContext(AuthContext);
    console.log("QuestionsAnswersArray", QuestionsAnswersArray);
    const [height, setHeight] = useState("90");
    const [sliderHeight, setSliderHeight] = useState("90");
    const [justifyContent, setJustifyContent] = useState("flex-end");
    const [index, setIndex] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [slideValue, setSlideValue] = useState(0)
    const [QuestionnaireA1Data, setQuestions] = useState([{}]);
    const questionsLength = QuestionnaireA1Data.length;
    const [isLoading, setIsLoading] = useState(false);
    // console.log("questionsLength", questionsLength);
    useEffect(() => {
        (async function () {
            ResetQuestionsAnswers()
            try {
                setIsLoading(true);
                const Questions = await getQuestions();
                console.log("data", Questions.data.Sections);
                setQuestions(Questions.data.Sections);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
                setIsLoading(false);
                alert("We got an problem!");
            }
        })();
    }, []);

    let _data = QuestionsAnswersArray;

    const toggleNextScreen = () => {

        if (index < questionsLength - 1) {

            _data[index].answers[0].value = slideValue;
            QuestionsAnswers({
                id: index + 1,
                answers: _data[index].answers,
                sectionIndex: index
            });

            setIndex(index + 1);
            setQuestionIndex(0);
            // setSlideValue(0)
        } else if (index == questionsLength - 1) {
            console.log("iam here");
            sendData()
            postQuestionnaierAnswers(_data)
            navigation.navigate('PerceptionReport');
        }
    }

    const sendData = async () => {
        setIsLoading(true);
        try {
            const response = await postQuestionnaierAnswers(_data);
            if (response.status == true) {
                alert("Saved");
            } else {
                alert("go back to fill all answers please");
            }
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setTimeout(() => {
                alert("fuck");
            }, 300);
        }
    };

    const toggleBackScreen = () => {
        if (index > 0) {
            setIndex(index - 1);
            setSlideValue(0)
        } else if (index == 0) {
            navigation.goBack()
        }
    }

    const selectQuestion = index => setIndex(index);

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
                            {
                                QuestionnaireA1Data.map((i, myindex) => {
                                    return (
                                        <Pups
                                            key={myindex.toString()}
                                            data={i}
                                            index={myindex}
                                            isActive={myindex === index}
                                            onPress={() => selectQuestion(myindex)}
                                        />
                                    )
                                })
                            }
                        </View>
                        <Text style={styles.mainTitle}>{QuestionnaireA1Data[index].title ? QuestionnaireA1Data[index].title : ""}</Text>
                        <View style={styles.progressBarContainer}>
                            <ProgressBar progress={QuestionnaireA1Data[index].id === 5 ? 0.125 : QuestionnaireA1Data[index].id === 6 ? 0.25 : QuestionnaireA1Data[index].id === 7 ? 0.375 : QuestionnaireA1Data[index].id === 30 ? 0.5 : QuestionnaireA1Data[index].id === 31 ? 0.625 : QuestionnaireA1Data[index].id === 32 ? 0.75 : QuestionnaireA1Data[index].id === 33 ? 0.875 : QuestionnaireA1Data[index].id === 37 && 1} color={Color.secondary} style={{ width: "100%" }} />
                        </View>
                        <View style={[styles.firstModal, { height: `${height}%`, justifyContent: justifyContent }]}>
                            <View style={styles.firstModalContainer}>
                                <View style={styles.Question1Container}>
                                    <Text style={styles.modalQuestionNumber}>Questions {questionIndex + 1} from {index + 1}</Text>
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