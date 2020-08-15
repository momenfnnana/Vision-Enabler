// 
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Easing, Slider, ScrollView } from 'react-native';
import HeaderStack from '../../components/header/headerStack/HeaderStack';
import Color from '@Assets/Constant';
import { ProgressBar } from 'react-native-paper';
// import Modal from 'react-native-modal';
import subQuestions from '@ParadigmFakeData/subQuestions';
import styles from './Questionnaire.style';
import Footer from '@ParadigmComponents/Footer/Footer';
import SwipeUpDown from 'react-native-swipe-up-down';
import Questions from '@ComplianceParadigmScreens/Questions/Questions'
const Questionnaire = ({ navigation }) => {
    const [isVisible2, setIsVisible2] = useState(true)
    const [height, setHeight] = useState("100")
    const [sliderHeight, setSliderHeight] = useState("80")
    const [swiperHeight, setSwiperHeight] = useState("65")
    const [marginBottom, setMarginBottom] = useState("20")
    const [paddingLeft, setPaddingLeft] = useState("8")
    const [justifyContent, setJustifyContent] = useState("flex-end")
    useEffect(() => {
        isVisible2 === true && setIsVisible2(true)
    }, []);
    const ItemMini = () => <View>
        <Text style={styles.itemMiniTitle}>Vision</Text>
        <Text style={styles.itemMiniDescription}>Foreseen & desired by leaders who are</Text>
    </View>
    const ItemFull = () => <Questions />
    return (
        <View style={[styles.container, { backgroundColor: Color.white }]}>
            <HeaderStack
                color={Color.primary}
                borderBottomWith={1}
                goBack={() => navigation.goBack()}
            />
            <Text style={styles.headerTitle}>Working Environment</Text>
            <View style={styles.modalContainer}>
                <View style={styles.questionsNumber}>
                    <View style={styles.backgroundLine} />
                    <TouchableOpacity
                        onPress={() => setIsVisible2(true)}
                        style={styles.questionNumberContainer}
                    >
                        <View><Text style={styles.questionNumberStyle}>1</Text></View>
                    </TouchableOpacity>
                    <View style={styles.secondaryQuestionsContainer}><Text>2</Text></View>
                    <View style={styles.secondaryQuestionsContainer}><Text>3</Text></View>
                    <View style={styles.secondaryQuestionsContainer} ><Text>4</Text></View>
                </View>
                <Text style={styles.mainTitle}>
                    Do you personally believe that your working environment is?
                </Text>
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
                        <Text style={styles.questionTitle}>Supportive and harmonious</Text>
                        <Text style={styles.questionDescription}>Supportive and harmonious (with respect to diversity, promoting equality of opportunity to all people)?</Text>
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
                            goBack={() => {
                                setIsVisible2(false)
                                navigation.goBack()
                            }}
                            next={() => {
                                setIsVisible2(false)
                                navigation.navigate("PerceptionReport")
                            }}
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
    )
}
export default Questionnaire;