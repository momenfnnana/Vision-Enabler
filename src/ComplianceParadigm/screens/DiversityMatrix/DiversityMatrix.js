// 
import React, { useState, useContext, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native';
import HeaderStack from '@ParadigmComponents/header/headerStack/HeaderStack';
import Color from '@Assets/Constant';
import styles from './DiversityMatrix.style';
import Footer from '@ParadigmComponents/Footer/Footer';
import { Context as AuthContext } from '@Context/AuthContext';
import { getMatrix } from "@Services/Matrix/Matrix";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';
import Row from './Row';
import { postMatrixAnswers1 } from '@Services/Matrix/Matrix';
const DiversityMatrix = ({ navigation }) => {
   
    const { ResetMatrixAnswers, state: { PaymentFlow, MatrixAnswersArray } } = useContext(AuthContext);
   
    const [matrixQuestions, setMatrixQuestions] = useState([
        {
            question: "",
            hint: ""
        }
    ]);

    const [isLoading, setIsLoading] = useState(false);
    const [subCircleBackground, setSubCircleBackground] = useState(Color.secondary);
    
    useEffect(() => {
        (async function () {
            ResetMatrixAnswers();
            try {
                setIsLoading(true);
                const data = await getMatrix();
                // console.log("aaa", data.data);
                setIsLoading(false);
                if (data.status == true) {
                    setMatrixQuestions(data.data);
                    // alert("get data")
                } else {
                    alert("error with getting data")
                    console.log(data);
                }
            } catch (e) {
                setIsLoading(false);
                alert("We got an problem!");
                console.log(e);
            }
        })();
    }, []);

    const [index, setIndex] = useState(0);
    const questionsLength = matrixQuestions.length;

    const sendData = async () => {
        setIsLoading(true);
        try {
            const response = await postMatrixAnswers1(MatrixAnswersArray);
            if (response.status == true) {
                console.log(response);
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

    const toggleNextScreen = () => {
        if (index < questionsLength - 1) {
            setIndex(index + 1);
            console.log("index", index);
        }
        else {
            console.log("iam here");
            PaymentFlow === 1 ? (
                navigation.navigate('QuestionnaireA1'),
                sendData()
            ) :
                PaymentFlow === 2 ? navigation.navigate('QuestionnaireA2') :
                    PaymentFlow === 3 ? navigation.navigate('QuestionnaireA3') :
                        PaymentFlow === 4 ? navigation.navigate('QuestionnaireA4') :
                            PaymentFlow === 5 ? navigation.navigate('QuestionnaireA5') :
                                PaymentFlow === 6 && navigation.navigate('QuestionnaireA6')
        }
    }

    const selectQuestion = index => setIndex(index);

    const toggleBackButton = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            navigation.goBack()
        }
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
                                    {
                                        matrixQuestions.map((item, qIndex) => {
                                            return (
                                                <Row
                                                    onPress={() => selectQuestion(qIndex)}
                                                    key={qIndex.toString()}
                                                    data={item}
                                                    qIndex={qIndex}
                                                    isActive={qIndex === index}
                                                />
                                            )
                                        })
                                    }
                                </View>
                            </View>
                        </ScrollView>
                    </ScrollView>
                    <View style={styles.footerContainer}>
                        <Text style={styles.footerTitle}>{matrixQuestions[index].question}</Text>
                        <Text style={styles.footerDescription}>{matrixQuestions[index].hint}</Text>
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