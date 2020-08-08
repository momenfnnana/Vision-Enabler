import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, CheckBox, Slider, ScrollView } from 'react-native';
import HeaderStack from '../../components/header/headerStack/HeaderStack';
import Color from '@Assets/Constant';
import { ProgressBar } from 'react-native-paper';
import Modal from 'react-native-modal';
import subQuestions from '@ParadigmFakeData/subQuestions';
import styles from './Questionnaire.style';

const Questionnaire = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [isVisible2, setIsVisible2] = useState(false)
    const [isVisible3, setIsVisible3] = useState(false)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    console.log(subQuestions);
    useEffect(() => {
        setTimeout(() => {
            setIsVisible2(true)
        }, 200);
        setTimeout(() => {
            setIsVisible3(true)
        }, 400);
    }, [])
    return (
        <View
            style={styles.container}
        >
            <HeaderStack
                color={Color.primary}
                borderBottomWith={1}
            />
            <Text
                style={styles.headerTitle}
            >Working Environment</Text>
            <Modal
                isVisible={isVisible}
                backdropColor="transparent"
                style={styles.parentModal}
                onSwipeComplete={() => setIsVisible(false)}
            >
                <View
                    style={styles.modalContainer}
                >
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
                            justifyContent: "flex-end"
                        }}
                    >
                        <Modal
                            isVisible={isVisible2}
                            backdropColor="transparent"
                            style={{
                                marginBottom: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                left: 0,
                                height: "100%",
                                justifyContent: "flex-end"
                            }}
                        >
                            <View
                                style={
                                    {
                                        height: "65%",
                                        backgroundColor: Color.primary,
                                        borderTopRightRadius: 50,
                                        borderTopLeftRadius: 50,
                                        zIndex: 1000
                                    }
                                }
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
                                {/* <Modal
                                    isVisible={isVisible2}
                                    backdropColor="transparent"
                                    style={{
                                        marginBottom: 0,
                                        marginLeft: 0,
                                        marginRight: 0,
                                        position: "absolute",
                                        bottom: 0,
                                        right: 0,
                                        left: 0,
                                        height: "100%",
                                        justifyContent: "flex-end"
                                    }}
                                    swipeDirection="up"
                                >

                                </Modal> */}
                                <Modal
                                    backdropColor="transparent"
                                    style={{
                                        marginTop: "75%",
                                        marginRight: 0,
                                        marginLeft: 0,
                                    }}
                                    isVisible={isVisible3}
                                    swipeDirection="up"
                                >
                                    <ScrollView
                                        style={
                                            {
                                                position: "absolute",
                                                top: "35%",
                                                right: 0,
                                                left: 0,
                                                backgroundColor: Color.white,
                                                borderTopRightRadius: 50,
                                                borderTopLeftRadius: 50,
                                            }
                                        }
                                    >
                                        {
                                            subQuestions.map(i => {
                                                return (
                                                    <View
                                                        style={{
                                                            marginTop: "8%"
                                                        }}
                                                        key={i.id}
                                                    >
                                                        <Text
                                                            style={{
                                                                color: Color.primary,
                                                                fontSize: 16,
                                                                marginLeft: "8%"
                                                            }}
                                                        >{i.questionType}</Text>
                                                        {
                                                            i.questions.map(items => {
                                                                return (
                                                                    <View
                                                                        key={items.id}
                                                                        style={{
                                                                            flexDirection: "row",
                                                                            width: "80%",
                                                                            alignSelf: "center",
                                                                            marginTop: "5%",
                                                                            shadowColor: "#000",
                                                                            shadowOffset: {
                                                                                width: 0,
                                                                                height: 4,
                                                                            },
                                                                            shadowOpacity: 0.30,
                                                                            shadowRadius: 4.65,
                                                                            elevation: 4,
                                                                            backgroundColor: "#fff",
                                                                        }}
                                                                    >
                                                                        <CheckBox
                                                                            disabled={false}
                                                                            value={toggleCheckBox}
                                                                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                                                        />
                                                                        <Text>{items.question}</Text>
                                                                    </View>
                                                                )
                                                            })
                                                        }
                                                    </View>
                                                )
                                            })
                                        }
                                    </ScrollView>
                                    <View
                                        style={{
                                            height: "50%",
                                            backgroundColor: Color.secondary,
                                            position: "absolute",
                                            bottom: 0,
                                            right: 0,
                                            left: 0,
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
                                            <Image
                                                source={require('@Assets/images/0%.png')}
                                            />
                                            <Image
                                                source={require('@Assets/images/25%.png')}
                                            />
                                            <Image
                                                source={require('@Assets/images/50%.png')}
                                            />
                                            <Image
                                                source={require('@Assets/images/75%.png')}
                                            />
                                            <Image
                                                source={require('@Assets/images/100%.png')}
                                            />
                                        </View>
                                        <Slider
                                            style={{
                                                width: "90%",
                                                height: 40,
                                                alignSelf: "center",
                                                marginTop: "3%",
                                            }}
                                            minimumValue={0}
                                            maximumValue={1}
                                            minimumTrackTintColor={Color.primary}
                                            maximumTrackTintColor="#00000080"
                                            thumbTintColor="#fff"
                                            thumbImage={require('@Assets/images/thumbImage.png')}
                                            value={0.25}
                                        />
                                    </View>
                                </Modal>
                            </View>
                        </Modal>
                    </View>
                </View>
            </Modal>
        </View >
    )
}
export default Questionnaire;