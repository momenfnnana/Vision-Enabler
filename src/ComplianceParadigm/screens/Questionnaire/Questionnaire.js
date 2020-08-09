import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, CheckBox, Slider, ScrollView } from 'react-native';
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
    const [isVisible, setIsVisible] = useState(true)
    const [isVisible2, setIsVisible2] = useState(true)
    const [isVisible3, setIsVisible3] = useState(false)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [height, setHeight] = useState("100")
    const [sliderHeight, setSliderHeight] = useState("80")
    const [swiperHeight, setSwiperHeight] = useState("65")
    const [justifyContent, setJustifyContent] = useState("flex-end")
    useEffect(() => {
        isVisible2 === true && setIsVisible2(true)
    }, []);
    const ItemMini = () => {
        return (
            <View>
                <Text style={{ fontSize: 16, color: Color.primary }}>Vision</Text>
                <Text style={{ fontSize: 14, color: `${Color.black}95` }}>Foreseen & desired by leaders who are</Text>
            </View>
        )
    }
    const ItemFull = () => {
        return (
            <View>
                <Questions />
            </View>
            // <ScrollView
            //     style={
            //         {
            //             position: "absolute",
            //             top: 0,
            //             right: 0,
            //             left: 0,
            //             backgroundColor: Color.white,
            //             borderTopRightRadius: 50,
            //             borderTopLeftRadius: 50,
            //         }
            //     }
            // >
            //     {
            //         subQuestions.map(i => {
            //             return (
            //                 <View
            //                     style={styles.questionsScroll}
            //                     key={i.id}
            //                 >
            //                     <Text
            //                         style={styles.title}
            //                     >{i.title}</Text>
            //                     <Text style={styles.subTitle}>{i.subTitle}</Text>
            //                     {
            //                         i.questions.map(items => {
            //                             return (
            //                                 <View
            //                                     key={items.id}
            //                                     style={{
            //                                         flexDirection: "row",
            //                                         width: "80%",
            //                                         alignSelf: "center",
            //                                         marginTop: "5%",
            //                                         shadowColor: "#000",
            //                                         shadowOffset: {
            //                                             width: 0,
            //                                             height: 4,
            //                                         },
            //                                         shadowOpacity: 0.30,
            //                                         shadowRadius: 4.65,
            //                                         elevation: 4,
            //                                         backgroundColor: "#fff",
            //                                     }}
            //                                 >
            //                                     <CheckBox
            //                                         disabled={false}
            //                                         value={toggleCheckBox}
            //                                         onValueChange={(newValue) => setToggleCheckBox(newValue)}
            //                                     />
            //                                     <Text>{items.question}</Text>
            //                                 </View>
            //                             )
            //                         })
            //                     }
            //                 </View>
            //             )
            //         })
            //     }
            // </ScrollView>
        )
    }
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
                <Text
                    style={{
                        fontSize: 20,
                        fontFamily: "Altissimo",
                        color: Color.primary,
                        marginTop: "5%",
                        marginLeft: "5%",
                        width: "80%"
                    }}
                >Do you personally believe that your working environment is?</Text>
                <View
                    style={{
                        width: "90%",
                        alignSelf: "center",
                        marginTop: "10%"
                    }}
                >
                    <ProgressBar progress={0.25} color={Color.secondary} style={{ width: "100%" }} />
                </View>
                <View
                    style={{
                        flex: 1,
                        marginTop: "5%",
                        marginBottom: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        left: 0,
                        height: `${height}%`,
                        justifyContent: justifyContent
                    }}
                >
                    <View
                        style={{
                            height: "70%",
                            backgroundColor: Color.primary,
                            borderTopRightRadius: 50,
                            borderTopLeftRadius: 50,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: Color.white,
                                width: "25%",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingVertical: "3%",
                                borderRadius: 10,
                                marginLeft: "8%",
                                marginTop: "8%",
                            }}
                        >
                            <Text
                                style={{
                                    color: Color.primary,
                                    fontSize: 12,
                                    textTransform: "uppercase"
                                }}
                            >
                                Questions 1
                                </Text>
                        </View>
                        <Text
                            style={{
                                color: Color.white,
                                fontSize: 16,
                                marginTop: "5%",
                                marginLeft: "8%",
                            }}
                        >Supportive and harmonious</Text>
                        <Text
                            style={{
                                fontSize: 16,
                                color: Color.white,
                                marginLeft: "8%",
                                marginTop: "2%"
                            }}
                        >Supportive and harmonious (with respect to diversity, promoting equality of opportunity to all people)?</Text>
                        <SwipeUpDown
                            itemMini={<ItemMini />} // Pass props component when collapsed
                            itemFull={<ItemFull />} // Pass props component when show full
                            onShowMini={() => {
                                setHeight("100")
                                setJustifyContent("flex-end")
                                setSliderHeight("85")
                            }}
                            onShowFull={() => {
                                setHeight("100")
                                setJustifyContent("flex-start")
                                setSliderHeight("37")
                            }}
                            swipeHeight={500}
                            onMoveDown={() => console.log('down')}
                            onMoveUp={() => { }}
                            disablePressToShow={false} // Press item mini to show full
                            style={{ backgroundColor: Color.white, height: `${swiperHeight}%`, borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingLeft: "8%", paddingTop: "4%" }} // style for swipe
                        />
                        <View
                            style={{
                                height: "100%",
                                justifyContent: "flex-end"
                            }}
                        >
                            <View
                                style={{
                                    height: `${sliderHeight}%`,
                                    backgroundColor: Color.secondary,
                                    borderTopRightRadius: 50,
                                    borderTopLeftRadius: 50,
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-around",
                                        alignItems: "flex-end",
                                        marginTop: "4%",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            color: Color.white,
                                            fontFamily: "Altissimo"
                                        }}
                                    >N/A</Text>
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
                    <View style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        left: 0,
                        borderTopRightRadius: 50,
                        borderTopLeftRadius: 50
                    }}>
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