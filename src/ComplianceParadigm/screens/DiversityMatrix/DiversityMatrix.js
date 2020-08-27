// 
import React, { useState, useContext, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import HeaderStack from '@ParadigmComponents/header/headerStack/HeaderStack';
import Color from '@Assets/Constant';
import styles from './DiversityMatrix.style';
import Footer from '@ParadigmComponents/Footer/Footer';
// import MatrixQuestions from '@ParadigmFakeData/MatrixQuestions';
import { Tooltip } from 'react-native-elements';
import Pops from './Pops';
import { Context as AuthContext } from '@Context/AuthContext';
import { getMatrix1 } from "@Services/Matrix/Matrix1";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';
import Row from './Row';
const DiversityMatrix = ({ navigation }) => {
    const [MatrixQuestions, setMatrixQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [subCircleBackground, setSubCircleBackground] = useState(Color.secondary);
    // useEffect(() => {
    //     (async function () {
    //         try {
    //             setIsLoading(true);
    //             const data = await getMatrix1();
    //             // console.log("aaa", data.data);
    //             await setMatrixQuestions(data.data);
    //             setIsLoading(false);
    //             if (data.status == true) {
    //                 alert("get data")
    //             } else {
    //                 alert("error with getting data")
    //                 console.log(data.data);
    //             }
    //         } catch (e) {
    //             setIsLoading(false);
    //             alert("We got an problem!");
    //             console.log(e);
    //         }
    //     })();
    // }, []);
    const { state } = useContext(AuthContext);
    const [index, setIndex] = useState(0);
    const questionsLength = MatrixQuestions.length;

    const toggleNextScreen = () => {
        if (index < questionsLength - 1) {
            console.log("index before", index);
            setIndex(index + 1);
            console.log("index after", index);
            // setIdColor({ style: styles.rowNum1 })
            // setBackgroundID({ style: styles.rowNumCol1 })
        }
        else {
            console.log("iam here");
            navigation.navigate('QuestionnaireA1');
        }
    }
    const toggleBackButton = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            navigation.goBack()
        }
    }
    const data = {
        Great: Color.greate,
        Average: Color.average,
        Poor: Color.poor,
        Black: Color.black,
        White: Color.white
    }
    const [color, setColor] = useState(data.White);
    const [questionColor1, setQuestionColor1] = useState({
        container: styles.rowNum,
        questionNumber: styles.rowNumCol
    })
    const [questionColor2, setQuestionColor2] = useState({
        container: styles.rowNum,
        questionNumber: styles.rowNumCol
    })
    const [questionColor3, setQuestionColor3] = useState({
        container: styles.rowNum,
        questionNumber: styles.rowNumCol
    })
    const [questionColor4, setQuestionColor4] = useState({
        container: styles.rowNum,
        questionNumber: styles.rowNumCol
    })
    const [questionColor5, setQuestionColor5] = useState({
        container: styles.rowNum,
        questionNumber: styles.rowNumCol
    })
    const [questionNumber, setQuestionNumber] = useState(0)

    const toggleQuestion1 = () => {
        questionColor1.container === styles.rowNum ? (
            setQuestionColor1({ container: styles.rowNum1, questionNumber: styles.rowNumCol1 }),
            setQuestionColor2({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor3({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor4({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor5({ container: styles.rowNum, questionNumber: styles.rowNumCol })
        ) :
            setQuestionColor1({ container: styles.rowNum, questionNumber: styles.rowNumCol })
    }
    const toggleQuestion2 = () => {
        questionColor2.container === styles.rowNum ? (
            setQuestionNumber(1),
            setQuestionColor1({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor2({ container: styles.rowNum1, questionNumber: styles.rowNumCol1 }),
            setQuestionColor3({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor4({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor5({ container: styles.rowNum, questionNumber: styles.rowNumCol })
        ) :
            setQuestionColor2({ container: styles.rowNum, questionNumber: styles.rowNumCol })
    }
    const toggleQuestion3 = () => {
        questionColor3.container === styles.rowNum ? (
            setQuestionNumber(2),
            setQuestionColor1({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor2({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor3({ container: styles.rowNum1, questionNumber: styles.rowNumCol1 }),
            setQuestionColor4({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor5({ container: styles.rowNum, questionNumber: styles.rowNumCol })
        ) :
            setQuestionColor3({ container: styles.rowNum, questionNumber: styles.rowNumCol })
    }
    const toggleQuestion4 = () => {
        questionColor4.container === styles.rowNum ? (
            setQuestionNumber(3),
            setQuestionColor1({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor2({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor3({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor4({ container: styles.rowNum1, questionNumber: styles.rowNumCol1 }),
            setQuestionColor5({ container: styles.rowNum, questionNumber: styles.rowNumCol })
        ) :
            setQuestionColor4({ container: styles.rowNum, questionNumber: styles.rowNumCol })
    }
    const toggleQuestion5 = () => {
        questionColor5.container === styles.rowNum ? (
            setQuestionNumber(4),
            setQuestionColor1({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor2({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor3({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor4({ container: styles.rowNum, questionNumber: styles.rowNumCol }),
            setQuestionColor5({ container: styles.rowNum1, questionNumber: styles.rowNumCol1 })
        ) :
            setQuestionColor5({ container: styles.rowNum, questionNumber: styles.rowNumCol })
    }
    const toggle1Answer1InQuestion1 = () => {
        setSubCircleBackground(Color.greate)
    }
    const toggle2Answer1InQuestion1 = () => {
        setSubCircleBackground(Color.average)
    }
    const toggle3Answer1InQuestion1 = () => {
        setSubCircleBackground(Color.poor)
    }
    const toggle4Answer1InQuestion1 = () => {
        setSubCircleBackground(Color.black)
    }
    return (
        <>
            {isLoading === true ? <LoadingDialog /> : (
                <View style={[styles.container, { backgroundColor: Color.white }]}>
                    <HeaderStack
                        borderBottomWith={1}
                        color={Color.primary}
                        goBack={() => navigation.goBack()}
                        onPress2={() => navigation.navigate('Profile')}
                    />
                    <ScrollView showsHorizontalScrollIndicator={false}>
                        <Text style={styles.compalianceMatrix}>Compliance Matrix ®</Text>
                        <Text style={styles.awareness}>Awareness & Unconscious Bias</Text>
                        <View style={styles.dotsContainer}>
                            <View style={styles.greatContainer}>
                                <View style={styles.greatDot} />
                                <Text style={styles.greatText}>Great</Text>
                            </View>
                            <View style={styles.avarageContainer}>
                                <View style={styles.avarageDot} />
                                <Text style={styles.avarageText}>Average</Text>
                            </View>
                            <View style={styles.poorContainer}>
                                <View style={styles.poorDot} />
                                <Text style={styles.poorText}>Poor</Text>
                            </View>
                            <View style={styles.poorContainer}>
                                <View style={styles.VerypoorDot} />
                                <Text style={styles.VerypoorText}>Very Poor</Text>
                            </View>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View>
                                <View style={styles.topRow}>
                                    <Image style={styles.Image}
                                        source={require("@Assets/images/tableTitle1.png")}
                                    />
                                    <Image style={styles.Image}
                                        source={require("@Assets/images/tableTitle2.png")}
                                    />
                                    <Image style={styles.Image}
                                        source={require("@Assets/images/tableTitle3.png")}
                                    />
                                    <Image style={styles.Image}
                                        source={require("@Assets/images/tableTitle4.png")}
                                    />
                                    <Image style={styles.Image}
                                        source={require("@Assets/images/tableTitle5.png")}
                                    />
                                    <Image style={styles.Image}
                                        source={require("@Assets/images/tableTitle6.png")}
                                    />
                                    <Image style={styles.Image}
                                        source={require("@Assets/images/tableTitle7.png")}
                                    />
                                    <Image style={styles.Image}
                                        source={require("@Assets/images/tableTitle8.png")}
                                    />
                                </View>
                                <View style={styles.leftColumn}>
                                    {/* {
                                        MatrixQuestions.map((item, index) => {
                                            return (
                                                <Row
                                                    key={index.toString()}
                                                    data={item}
                                                    index={index}
                                                />
                                            )
                                        })
                                    } */}
                                </View>
                            </View>
                        </ScrollView>
                    </ScrollView>
                    <View style={styles.footerContainer}>
                        {/* <Text style={styles.footerTitle}>{MatrixQuestions[index].question}</Text>
                        <Text style={styles.footerDescription}>{MatrixQuestions[index].hint}</Text> */}
                        <View style={{ position: "absolute", bottom: 0, right: 0, left: 0 }}>
                            <Footer
                                goBack={toggleBackButton}
                                next={toggleNextScreen}
                                backgroundColor1={Color.secondary}
                                backgroundColor2={Color.secondary}
                                backgroundColor3={Color.primary}
                                backgroundColor4={Color.secondary}
                                backgroundColor5={Color.secondary}
                                backgroundColor6={Color.secondary}
                                backgroundColor7={Color.secondary}
                                height1={5}
                                width1={5}
                                height2={5}
                                width2={5}
                                height3={10}
                                width3={10}
                                height4={5}
                                width4={5}
                                height5={5}
                                width5={5}
                                height6={5}
                                width6={5}
                                height7={5}
                                width7={5}
                            />
                        </View>
                    </View>
                </View >
            )}
        </>
    )
}
export default DiversityMatrix;