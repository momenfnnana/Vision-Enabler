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
    const [isLoading, setIsLoading] = useState(true);
    const [subCircleBackground, setSubCircleBackground] = useState(Color.secondary);
    useEffect(() => {
        (async function () {
            try {
                setIsLoading(true);
                const data = await getMatrix1();
                // console.log("aaa", data.data);
                await setMatrixQuestions(data.data)
                setIsLoading(false);
                if (data.status == true) {
                    alert("get data")
                } else {
                    alert("error with getting data")
                }
            } catch (e) {
                setIsLoading(false);
                alert("We got an problem!");
                console.log(e);
            }
        })();
    }, []);
    const { state } = useContext(AuthContext);
    const [IdColor, setIdColor] = useState({ style: styles.rowNum })
    const [backgroundID, setBackgroundID] = useState({ style: styles.rowNumCol })
    // const [backgroundColor11, setBackgroundColor11] = useState(Color.secondary)
    // const [backgroundColor12, setBackgroundColor12] = useState(Color.secondary)
    // const [backgroundColor13, setBackgroundColor13] = useState(Color.secondary)
    // const [backgroundColor14, setBackgroundColor14] = useState(Color.secondary)
    // const [backgroundColor15, setBackgroundColor15] = useState(Color.secondary)
    // const [backgroundColor16, setBackgroundColor16] = useState(Color.secondary)
    // const [backgroundColor17, setBackgroundColor17] = useState(Color.secondary)
    // const [backgroundColor18, setBackgroundColor18] = useState(Color.secondary)
    // const [backgroundColor21, setBackgroundColor21] = useState(Color.secondary)
    // const [backgroundColor22, setBackgroundColor22] = useState(Color.secondary)
    // const [backgroundColor23, setBackgroundColor23] = useState(Color.secondary)
    // const [backgroundColor24, setBackgroundColor24] = useState(Color.secondary)
    // const [backgroundColor25, setBackgroundColor25] = useState(Color.secondary)
    // const [backgroundColor26, setBackgroundColor26] = useState(Color.secondary)
    // const [backgroundColor27, setBackgroundColor27] = useState(Color.secondary)
    // const [backgroundColor28, setBackgroundColor28] = useState(Color.secondary)
    // const [backgroundColor31, setBackgroundColor31] = useState(Color.secondary)
    // const [backgroundColor32, setBackgroundColor32] = useState(Color.secondary)
    // const [backgroundColor33, setBackgroundColor33] = useState(Color.secondary)
    // const [backgroundColor34, setBackgroundColor34] = useState(Color.secondary)
    // const [backgroundColor35, setBackgroundColor35] = useState(Color.secondary)
    // const [backgroundColor36, setBackgroundColor36] = useState(Color.secondary)
    // const [backgroundColor37, setBackgroundColor37] = useState(Color.secondary)
    // const [backgroundColor38, setBackgroundColor38] = useState(Color.secondary)
    // const [backgroundColor41, setBackgroundColor41] = useState(Color.secondary)
    // const [backgroundColor42, setBackgroundColor42] = useState(Color.secondary)
    // const [backgroundColor43, setBackgroundColor43] = useState(Color.secondary)
    // const [backgroundColor44, setBackgroundColor44] = useState(Color.secondary)
    // const [backgroundColor45, setBackgroundColor45] = useState(Color.secondary)
    // const [backgroundColor46, setBackgroundColor46] = useState(Color.secondary)
    // const [backgroundColor47, setBackgroundColor47] = useState(Color.secondary)
    // const [backgroundColor48, setBackgroundColor48] = useState(Color.secondary)
    // const [backgroundColor51, setBackgroundColor51] = useState(Color.secondary)
    // const [backgroundColor52, setBackgroundColor52] = useState(Color.secondary)
    // const [backgroundColor53, setBackgroundColor53] = useState(Color.secondary)
    // const [backgroundColor54, setBackgroundColor54] = useState(Color.secondary)
    // const [backgroundColor55, setBackgroundColor55] = useState(Color.secondary)
    // const [backgroundColor56, setBackgroundColor56] = useState(Color.secondary)
    // const [backgroundColor57, setBackgroundColor57] = useState(Color.secondary)
    // const [backgroundColor58, setBackgroundColor58] = useState(Color.secondary)
    const [index, setIndex] = useState(0);
    const questionsLength = MatrixQuestions.length;

    const toggleNextScreen = () => {
        // console.log(questionsLength)
        if (index < questionsLength - 1) {
            console.log("index before", index);
            setIndex(index + 1);
            console.log("index after", index);
            setIdColor({ style: styles.rowNum1 })
            setBackgroundID({ style: styles.rowNumCol1 })
        }
        else {
            console.log("iam here");
            navigation.navigate('QuestionnaireA1');
        }
        // if (state.PaymentFlow === 1) {
        //     navigation.navigate('QuestionnaireA1')
        // } else if (state.PaymentFlow === 2) {
        //     navigation.navigate('QuestionnaireA2')
        // } else if (state.PaymentFlow === 3) {
        //     navigation.navigate('QuestionnaireA3')
        // } else if (state.PaymentFlow === 4) {
        //     navigation.navigate('PerceptionReport')
        // } else if (state.PaymentFlow === 5) {
        //     navigation.navigate('PerceptionReport')
        // } else if (state.PaymentFlow === 6) {
        //     navigation.navigate('PerceptionReport')
        // }
    }
    const toggleBackButton = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            navigation.goBack()
        }
    }
    // const FullyData = [
    //     {
    //         id: 1,
    //         rating: ['', '', '', '', '', '', '', '']
    //     },
    //     {
    //         id: 2,
    //         rating: ['', '', '', '', '', '', '', '']
    //     },
    //     {
    //         id: 3,
    //         rating: ['', '', '', '', '', '', '', '']
    //     },
    //     {
    //         id: 4,
    //         rating: ['', '', '', '', '', '', '', '']
    //     },
    //     {
    //         id: 5,
    //         rating: ['', '', '', '', '', '', '', '']
    //     },
    // ]
    // const [MatrixData, setMatrixData] = useState(FullyData);
    // console.log(FullyData[0].rating[0]);
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
    // const toggle1Answer2InQuestion1 = () => {
    //     FullyData[0].rating[1] === null ? (
    //         FullyData[0].rating.push("G"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor11(Color.greate)
    //     ) : (
    //             FullyData[0].rating.splice(1, 1, "G")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor12(Color.greate)
    //         )
    // }
    // const toggle2Answer2InQuestion1 = () => {
    //     FullyData[0].rating[1] === null ? (
    //         FullyData[0].rating.push("A"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor12(Color.average)
    //     ) : (
    //             FullyData[0].rating.splice(1, 1, "A")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor12(Color.average)
    //         )
    // }
    // const toggle3Answer2InQuestion1 = () => {
    //     FullyData[0].rating[1] === null ? (
    //         FullyData[0].rating.push("P"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor12(Color.poor)
    //     ) : (
    //             FullyData[0].rating.splice(1, 1, "P")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor12(Color.poor)
    //         )
    // }
    // const toggle4Answer2InQuestion1 = () => {
    //     FullyData[0].rating[1] === null ? (
    //         FullyData[0].rating.push("VP"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor12(Color.black)
    //     ) : (
    //             FullyData[0].rating.splice(1, 1, "VP")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor12(Color.black)
    //         )
    // }
    // const toggle1Answer3InQuestion1 = () => {
    //     FullyData[0].rating[2] === null ? (
    //         FullyData[0].rating.push("G"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor13(Color.greate)
    //     ) : (
    //             FullyData[0].rating.splice(2, 1, "G")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor13(Color.greate)
    //         )
    // }
    // const toggle2Answer3InQuestion1 = () => {
    //     FullyData[0].rating[2] === null ? (
    //         FullyData[0].rating.push("A"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor13(Color.average)
    //     ) : (
    //             FullyData[0].rating.splice(2, 1, "A")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor13(Color.average)
    //         )
    // }
    // const toggle3Answer3InQuestion1 = () => {
    //     FullyData[0].rating[2] === null ? (
    //         FullyData[0].rating.push("P"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor13(Color.poor)
    //     ) : (
    //             FullyData[0].rating.splice(2, 1, "P")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor13(Color.poor)
    //         )
    // }
    // const toggle4Answer3InQuestion1 = () => {
    //     FullyData[0].rating[2] === null ? (
    //         FullyData[0].rating.push("VP"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor13(Color.black)
    //     ) : (
    //             FullyData[0].rating.splice(2, 1, "VP")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor13(Color.black)
    //         )
    // }
    // const toggle1Answer4InQuestion1 = () => {
    //     FullyData[0].rating[3] === null ? (
    //         FullyData[0].rating.push("G"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor14(Color.greate)
    //     ) : (
    //             FullyData[0].rating.splice(3, 1, "G")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor14(Color.greate)
    //         )
    // }
    // const toggle2Answer4InQuestion1 = () => {
    //     FullyData[0].rating[3] === null ? (
    //         FullyData[0].rating.push("A"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor14(Color.average)
    //     ) : (
    //             FullyData[0].rating.splice(3, 1, "A")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor14(Color.average)
    //         )
    // }
    // const toggle3Answer4InQuestion1 = () => {
    //     FullyData[0].rating[3] === null ? (
    //         FullyData[0].rating.push("P"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor14(Color.poor)
    //     ) : (
    //             FullyData[0].rating.splice(3, 1, "P")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor14(Color.poor)
    //         )
    // }
    // const toggle4Answer4InQuestion1 = () => {
    //     FullyData[0].rating[3] === null ? (
    //         FullyData[0].rating.push("VP"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor14(Color.black)
    //     ) : (
    //             FullyData[0].rating.splice(3, 1, "VP")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor14(Color.black)
    //         )
    // }
    // const toggle1Answer5InQuestion1 = () => {
    //     FullyData[0].rating[4] === null ? (
    //         FullyData[0].rating.push("G"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor15(Color.greate)
    //     ) : (
    //             FullyData[0].rating.splice(4, 1, "G")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor15(Color.greate)
    //         )
    // }
    // const toggle2Answer5InQuestion1 = () => {
    //     FullyData[0].rating[4] === null ? (
    //         FullyData[0].rating.push("A"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor15(Color.average)
    //     ) : (
    //             FullyData[0].rating.splice(4, 1, "A")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor15(Color.average)
    //         )
    // }
    // const toggle3Answer5InQuestion1 = () => {
    //     FullyData[0].rating[4] === null ? (
    //         FullyData[0].rating.push("P"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor15(Color.poor)
    //     ) : (
    //             FullyData[0].rating.splice(4, 1, "P")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor15(Color.poor)
    //         )
    // }
    // const toggle4Answer5InQuestion1 = () => {
    //     FullyData[0].rating[4] === null ? (
    //         FullyData[0].rating.push("VP"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor15(Color.black)
    //     ) : (
    //             FullyData[0].rating.splice(4, 1, "VP")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor15(Color.black)
    //         )
    // }
    // const toggle1Answer6InQuestion1 = () => {
    //     FullyData[0].rating[5] === null ? (
    //         FullyData[0].rating.push("G"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor16(Color.greate)
    //     ) : (
    //             FullyData[0].rating.splice(5, 1, "G")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor16(Color.greate)
    //         )
    // }
    // const toggle2Answer6InQuestion1 = () => {
    //     FullyData[0].rating[5] === null ? (
    //         FullyData[0].rating.push("A"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor16(Color.average)
    //     ) : (
    //             FullyData[0].rating.splice(5, 1, "A")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor16(Color.average)
    //         )
    // }
    // const toggle3Answer6InQuestion1 = () => {
    //     FullyData[0].rating[5] === null ? (
    //         FullyData[0].rating.push("P"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor16(Color.poor)
    //     ) : (
    //             FullyData[0].rating.splice(5, 1, "P")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor16(Color.poor)
    //         )
    // }
    // const toggle4Answer6InQuestion1 = () => {
    //     FullyData[0].rating[5] === null ? (
    //         FullyData[0].rating.push("VP"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor16(Color.black)
    //     ) : (
    //             FullyData[0].rating.splice(5, 1, "VP")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor16(Color.black)
    //         )
    // }
    // const toggle1Answer7InQuestion1 = () => {
    //     FullyData[0].rating[6] === null ? (
    //         FullyData[0].rating.push("G"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor17(Color.greate)
    //     ) : (
    //             FullyData[0].rating.splice(6, 1, "G")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor17(Color.greate)
    //         )
    // }
    // const toggle2Answer7InQuestion1 = () => {
    //     FullyData[0].rating[6] === null ? (
    //         FullyData[0].rating.push("A"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor17(Color.average)
    //     ) : (
    //             FullyData[0].rating.splice(6, 1, "A")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor17(Color.average)
    //         )
    // }
    // const toggle3Answer7InQuestion1 = () => {
    //     FullyData[0].rating[6] === null ? (
    //         FullyData[0].rating.push("P"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor17(Color.average)
    //     ) : (
    //             FullyData[0].rating.splice(6, 1, "P")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor17(Color.average)
    //         )
    // }
    // const toggle4Answer7InQuestion1 = () => {
    //     FullyData[0].rating[6] === null ? (
    //         FullyData[0].rating.push("VP"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor17(Color.black)
    //     ) : (
    //             FullyData[0].rating.splice(6, 1, "VP")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor17(Color.black)
    //         )
    // }
    // const toggle1Answer8InQuestion1 = () => {
    //     FullyData[0].rating[7] === null ? (
    //         FullyData[0].rating.push("G"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor18(Color.greate)
    //     ) : (
    //             FullyData[0].rating.splice(7, 1, "G")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor18(Color.greate)
    //         )
    // }
    // const toggle2Answer8InQuestion1 = () => {
    //     FullyData[0].rating[7] === null ? (
    //         FullyData[0].rating.push("A"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor18(Color.average)
    //     ) : (
    //             FullyData[0].rating.splice(7, 1, "A")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor18(Color.average)
    //         )
    // }
    // const toggle3Answer8InQuestion1 = () => {
    //     FullyData[0].rating[7] === null ? (
    //         FullyData[0].rating.push("P"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor18(Color.poor)
    //     ) : (
    //             FullyData[0].rating.splice(7, 1, "P")
    //             , console.log(FullyData[0].rating),
    //             setBackgroundColor18(Color.poor)
    //         )
    // }
    // const toggle4Answer8InQuestion1 = () => {
    //     FullyData[0].rating[7] === null ? (
    //         FullyData[0].rating.push("VP"),
    //         console.log(FullyData[0].rating),
    //         setBackgroundColor18(Color.black)
    //     ) : (
    //             FullyData[0].rating.splice(7, 1, "VP"),
    //             console.log(FullyData[0].rating),
    //             setBackgroundColor18(Color.black)
    //         )
    // }
    // const toggle1Answer1InQuestion2 = () => {
    //     FullyData[1].rating[0] === null ? (
    //         FullyData[1].rating.push("G"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor21(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "G")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor21(Color.greate)
    //         )
    // }
    // const toggle2Answer1InQuestion2 = () => {
    //     FullyData[1].rating[0] === null ? (
    //         FullyData[1].rating.push("A"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor21(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "A")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor21(Color.average)
    //         )
    // }
    // const toggle3Answer1InQuestion2 = () => {
    //     FullyData[1].rating[0] === null ? (
    //         FullyData[1].rating.push("P"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor21(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "P")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor21(Color.poor)
    //         )
    // }
    // const toggle4Answer1InQuestion2 = () => {
    //     FullyData[1].rating[0] === null ? (
    //         FullyData[1].rating.push("VP"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor21(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "VP"),
    //             console.log(FullyData[1].rating),
    //             setBackgroundColor21(Color.black)
    //         )
    // }
    // const toggle1Answer2InQuestion2 = () => {
    //     FullyData[1].rating[1] === null ? (
    //         FullyData[1].rating.push("G"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor22(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "G"),
    //             console.log(FullyData[1].rating),
    //             setBackgroundColor22(Color.greate)
    //         )
    // }
    // const toggle2Answer2InQuestion2 = () => {
    //     FullyData[1].rating[1] === null ? (
    //         FullyData[1].rating.push("A"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor22(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "A")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor22(Color.average)
    //         )
    // }
    // const toggle3Answer2InQuestion2 = () => {
    //     FullyData[1].rating[1] === null ? (
    //         FullyData[1].rating.push("P"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor22(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "P")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor22(Color.poor)
    //         )
    // }
    // const toggle4Answer2InQuestion2 = () => {
    //     FullyData[1].rating[1] === null ? (
    //         FullyData[1].rating.push("VP"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor22(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "VP")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor22(Color.black)
    //         )
    // }
    // const toggle1Answer3InQuestion2 = () => {
    //     FullyData[1].rating[2] === null ? (
    //         FullyData[1].rating.push("G"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor23(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "G")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor23(Color.greate)
    //         )
    // }
    // const toggle2Answer3InQuestion2 = () => {
    //     FullyData[1].rating[2] === null ? (
    //         FullyData[1].rating.push("A"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor23(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "A")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor23(Color.average)
    //         )
    // }
    // const toggle3Answer3InQuestion2 = () => {
    //     FullyData[1].rating[2] === null ? (
    //         FullyData[1].rating.push("P"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor23(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "P")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor23(Color.poor)
    //         )
    // }
    // const toggle4Answer3InQuestion2 = () => {
    //     FullyData[1].rating[2] === null ? (
    //         FullyData[1].rating.push("VP"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor23(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "VP")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor23(Color.black)
    //         )
    // }
    // const toggle1Answer4InQuestion2 = () => {
    //     FullyData[1].rating[3] === null ? (
    //         FullyData[1].rating.push("G"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor24(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "G")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor24(Color.greate)
    //         )
    // }
    // const toggle2Answer4InQuestion2 = () => {
    //     FullyData[1].rating[3] === null ? (
    //         FullyData[1].rating.push("A"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor24(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "A")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor24(Color.average)
    //         )
    // }
    // const toggle3Answer4InQuestion2 = () => {
    //     FullyData[1].rating[3] === null ? (
    //         FullyData[1].rating.push("P"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor24(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "P")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor24(Color.poor)
    //         )
    // }
    // const toggle4Answer4InQuestion2 = () => {
    //     FullyData[1].rating[3] === null ? (
    //         FullyData[1].rating.push("VP"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor24(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "VP")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor24(Color.black)
    //         )
    // }
    // const toggle1Answer5InQuestion2 = () => {
    //     FullyData[1].rating[4] === null ? (
    //         FullyData[1].rating.push("G"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor25(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(4, 1, "G")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor25(Color.greate)
    //         )
    // }
    // const toggle2Answer5InQuestion2 = () => {
    //     FullyData[1].rating[4] === null ? (
    //         FullyData[1].rating.push("A"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor25(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(4, 1, "A")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor25(Color.average)
    //         )
    // }
    // const toggle3Answer5InQuestion2 = () => {
    //     FullyData[1].rating[4] === null ? (
    //         FullyData[1].rating.push("P"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor25(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(4, 1, "P")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor25(Color.poor)
    //         )
    // }
    // const toggle4Answer5InQuestion2 = () => {
    //     FullyData[1].rating[4] === null ? (
    //         FullyData[1].rating.push("VP"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor25(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(4, 1, "VP")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor25(Color.black)
    //         )
    // }
    // const toggle1Answer6InQuestion2 = () => {
    //     FullyData[1].rating[5] === null ? (
    //         FullyData[1].rating.push("G"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor26(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "G")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor26(Color.greate)
    //         )
    // }
    // const toggle2Answer6InQuestion2 = () => {
    //     FullyData[1].rating[5] === null ? (
    //         FullyData[1].rating.push("A"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor26(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "A")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor26(Color.average)
    //         )
    // }
    // const toggle3Answer6InQuestion2 = () => {
    //     FullyData[1].rating[5] === null ? (
    //         FullyData[1].rating.push("P"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor26(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "P")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor26(Color.poor)
    //         )
    // }
    // const toggle4Answer6InQuestion2 = () => {
    //     FullyData[1].rating[5] === null ? (
    //         FullyData[1].rating.push("VP"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor26(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "VP")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor26(Color.black)
    //         )
    // }
    // const toggle1Answer7InQuestion2 = () => {
    //     FullyData[1].rating[6] === null ? (
    //         FullyData[1].rating.push("G"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor27(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "G")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor27(Color.greate)
    //         )
    // }
    // const toggle2Answer7InQuestion2 = () => {
    //     FullyData[1].rating[6] === null ? (
    //         FullyData[1].rating.push("A"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor27(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "A")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor27(Color.average)
    //         )
    // }
    // const toggle3Answer7InQuestion2 = () => {
    //     FullyData[1].rating[6] === null ? (
    //         FullyData[1].rating.push("P"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor27(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "P")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor27(Color.poor)
    //         )
    // }
    // const toggle4Answer7InQuestion2 = () => {
    //     FullyData[1].rating[6] === null ? (
    //         FullyData[1].rating.push("VP"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor27(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "VP")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor27(Color.black)
    //         )
    // }
    // const toggle1Answer8InQuestion2 = () => {
    //     FullyData[1].rating[7] === null ? (
    //         FullyData[1].rating.push("G"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor28(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "G")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor28(Color.greate)
    //         )
    // }
    // const toggle2Answer8InQuestion2 = () => {
    //     FullyData[1].rating[7] === null ? (
    //         FullyData[1].rating.push("A"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor28(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "A")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor28(Color.average)
    //         )
    // }
    // const toggle3Answer8InQuestion2 = () => {
    //     FullyData[1].rating[7] === null ? (
    //         FullyData[1].rating.push("P"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor28(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "P")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor28(Color.poor)
    //         )
    // }
    // const toggle4Answer8InQuestion2 = () => {
    //     FullyData[1].rating[7] === null ? (
    //         FullyData[1].rating.push("VP"),
    //         console.log(FullyData[1].rating),
    //         setBackgroundColor28(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "VP")
    //             , console.log(FullyData[1].rating),
    //             setBackgroundColor28(Color.black)
    //         )
    // }
    // const toggle1Answer1InQuestion3 = () => {
    //     FullyData[2].rating[0] === null ? (
    //         FullyData[2].rating.push("G"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor31(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "G")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor31(Color.greate)
    //         )
    // }
    // const toggle2Answer1InQuestion3 = () => {
    //     FullyData[2].rating[0] === null ? (
    //         FullyData[2].rating.push("A"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor31(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "A")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor31(Color.average)

    //         )
    // }
    // const toggle3Answer1InQuestion3 = () => {
    //     FullyData[2].rating[0] === null ? (
    //         FullyData[2].rating.push("P"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor31(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "P")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor31(Color.poor)
    //         )
    // }
    // const toggle4Answer1InQuestion3 = () => {
    //     FullyData[2].rating[0] === null ? (
    //         FullyData[2].rating.push("VP"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor31(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "VP")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor31(Color.black)
    //         )
    // }
    // const toggle1Answer2InQuestion3 = () => {
    //     FullyData[2].rating[1] === null ? (
    //         FullyData[2].rating.push("G"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor32(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "G")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor32(Color.greate)
    //         )
    // }
    // const toggle2Answer2InQuestion3 = () => {
    //     FullyData[2].rating[1] === null ? (
    //         FullyData[2].rating.push("A"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor32(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "A")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor32(Color.average)
    //         )
    // }
    // const toggle3Answer2InQuestion3 = () => {
    //     FullyData[2].rating[1] === null ? (
    //         FullyData[2].rating.push("P"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor32(Color.poor)

    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "P")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor32(Color.poor)
    //         )
    // }
    // const toggle4Answer2InQuestion3 = () => {
    //     FullyData[2].rating[1] === null ? (
    //         FullyData[2].rating.push("VP"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor32(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "VP")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor32(Color.black)
    //         )
    // }
    // const toggle1Answer3InQuestion3 = () => {
    //     FullyData[2].rating[2] === null ? (
    //         FullyData[2].rating.push("G"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor33(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "G")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor33(Color.greate)
    //         )
    // }
    // const toggle2Answer3InQuestion3 = () => {
    //     FullyData[2].rating[2] === null ? (
    //         FullyData[2].rating.push("A"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor33(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "A")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor33(Color.average)
    //         )
    // }
    // const toggle3Answer3InQuestion3 = () => {
    //     FullyData[2].rating[2] === null ? (
    //         FullyData[2].rating.push("P"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor33(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "P")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor33(Color.poor)
    //         )
    // }
    // const toggle4Answer3InQuestion3 = () => {
    //     FullyData[2].rating[2] === null ? (
    //         FullyData[2].rating.push("VP"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor33(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "VP")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor33(Color.black)
    //         )
    // }
    // const toggle1Answer4InQuestion3 = () => {
    //     FullyData[2].rating[3] === null ? (
    //         FullyData[2].rating.push("G"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor34(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "G")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor34(Color.greate)
    //         )
    // }
    // const toggle2Answer4InQuestion3 = () => {
    //     FullyData[2].rating[3] === null ? (
    //         FullyData[2].rating.push("A"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor34(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "A")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor34(Color.average)
    //         )
    // }
    // const toggle3Answer4InQuestion3 = () => {
    //     FullyData[2].rating[3] === null ? (
    //         FullyData[2].rating.push("P"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor34(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "P")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor34(Color.poor)
    //         )
    // }
    // const toggle4Answer4InQuestion3 = () => {
    //     FullyData[2].rating[3] === null ? (
    //         FullyData[2].rating.push("VP"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor34(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "VP")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor34(Color.black)
    //         )
    // }
    // const toggle1Answer5InQuestion3 = () => {
    //     FullyData[2].rating[4] === null ? (
    //         FullyData[2].rating.push("G"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor35(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(4, 1, "G")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor35(Color.greate)
    //         )
    // }
    // const toggle2Answer5InQuestion3 = () => {
    //     FullyData[2].rating[4] === null ? (
    //         FullyData[2].rating.push("A"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor35(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(4, 1, "A")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor35(Color.average)
    //         )
    // }
    // const toggle3Answer5InQuestion3 = () => {
    //     FullyData[2].rating[4] === null ? (
    //         FullyData[2].rating.push("P"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor35(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(4, 1, "P")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor35(Color.poor)
    //         )
    // }
    // const toggle4Answer5InQuestion3 = () => {
    //     FullyData[2].rating[4] === null ? (
    //         FullyData[2].rating.push("VP"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor35(Color.black)) : (
    //             FullyData[1].rating.splice(4, 1, "VP")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor35(Color.black)
    //         )
    // }
    // const toggle1Answer6InQuestion3 = () => {
    //     FullyData[2].rating[5] === null ? (
    //         FullyData[2].rating.push("G"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor36(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "G")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor36(Color.greate)
    //         )
    // }
    // const toggle2Answer6InQuestion3 = () => {
    //     FullyData[2].rating[5] === null ? (
    //         FullyData[2].rating.push("A"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor36(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "A")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor36(Color.average)
    //         )
    // }
    // const toggle3Answer6InQuestion3 = () => {
    //     FullyData[2].rating[5] === null ? (
    //         FullyData[2].rating.push("P"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor36(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "P")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor36(Color.poor)
    //         )
    // }
    // const toggle4Answer6InQuestion3 = () => {
    //     FullyData[2].rating[5] === null ? (
    //         FullyData[2].rating.push("VP"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor36(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "VP")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor36(Color.black)
    //         )
    // }
    // const toggle1Answer7InQuestion3 = () => {
    //     FullyData[2].rating[6] === null ? (
    //         FullyData[2].rating.push("G"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor37(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "G")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor37(Color.greate)
    //         )
    // }
    // const toggle2Answer7InQuestion3 = () => {
    //     FullyData[2].rating[6] === null ? (
    //         FullyData[2].rating.push("A"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor37(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "A")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor37(Color.average)
    //         )
    // }
    // const toggle3Answer7InQuestion3 = () => {
    //     FullyData[2].rating[6] === null ? (
    //         FullyData[2].rating.push("P"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor37(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "P")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor37(Color.poor)
    //         )
    // }
    // const toggle4Answer7InQuestion3 = () => {
    //     FullyData[2].rating[6] === null ? (
    //         FullyData[2].rating.push("VP"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor37(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "VP")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor37(Color.black)
    //         )
    // }
    // const toggle1Answer8InQuestion3 = () => {
    //     FullyData[2].rating[7] === null ? (
    //         FullyData[2].rating.push("G"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor38(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "G")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor38(Color.greate)
    //         )
    // }
    // const toggle2Answer8InQuestion3 = () => {
    //     FullyData[2].rating[7] === null ? (
    //         FullyData[2].rating.push("A"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor38(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "A")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor38(Color.average)
    //         )
    // }
    // const toggle3Answer8InQuestion3 = () => {
    //     FullyData[2].rating[7] === null ? (
    //         FullyData[2].rating.push("P"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor38(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "P")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor38(Color.poor)
    //         )
    // }
    // const toggle4Answer8InQuestion3 = () => {
    //     FullyData[2].rating[7] === null ? (
    //         FullyData[2].rating.push("VP"),
    //         console.log(FullyData[2].rating),
    //         setBackgroundColor38(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "VP")
    //             , console.log(FullyData[2].rating),
    //             setBackgroundColor38(Color.black)
    //         )
    // }
    // const toggle1Answer1InQuestion4 = () => {
    //     FullyData[3].rating[0] === null ? (
    //         FullyData[3].rating.push("G"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor41(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "G")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor41(Color.greate)
    //         )
    // }
    // const toggle2Answer1InQuestion4 = () => {
    //     FullyData[3].rating[0] === null ? (
    //         FullyData[3].rating.push("A"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor41(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "A")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor41(Color.average)
    //         )
    // }
    // const toggle3Answer1InQuestion4 = () => {
    //     FullyData[3].rating[0] === null ? (
    //         FullyData[3].rating.push("P"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor41(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "P")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor41(Color.poor)
    //         )
    // }
    // const toggle4Answer1InQuestion4 = () => {
    //     FullyData[3].rating[0] === null ? (
    //         FullyData[3].rating.push("VP"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor41(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "VP")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor41(Color.black)
    //         )
    // }
    // const toggle1Answer2InQuestion4 = () => {
    //     FullyData[3].rating[1] === null ? (
    //         FullyData[3].rating.push("G"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor42(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "G")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor42(Color.greate)
    //         )
    // }
    // const toggle2Answer2InQuestion4 = () => {
    //     FullyData[3].rating[1] === null ? (
    //         FullyData[3].rating.push("A"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor42(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "A")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor42(Color.average)
    //         )
    // }
    // const toggle3Answer2InQuestion4 = () => {
    //     FullyData[3].rating[1] === null ? (
    //         FullyData[3].rating.push("P"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor42(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "P")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor42(Color.poor)
    //         )
    // }
    // const toggle4Answer2InQuestion4 = () => {
    //     FullyData[3].rating[1] === null ? (
    //         FullyData[3].rating.push("VP"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor42(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "VP")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor42(Color.black)
    //         )
    // }
    // const toggle1Answer3InQuestion4 = () => {
    //     FullyData[3].rating[2] === null ? (
    //         FullyData[3].rating.push("G"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor43(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "G")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor43(Color.greate)

    //         )
    // }
    // const toggle2Answer3InQuestion4 = () => {
    //     FullyData[3].rating[2] === null ? (
    //         FullyData[3].rating.push("A"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor43(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "A")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor43(Color.average)
    //         )
    // }
    // const toggle3Answer3InQuestion4 = () => {
    //     FullyData[3].rating[2] === null ? (
    //         FullyData[3].rating.push("P"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor43(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "P")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor43(Color.poor)
    //         )
    // }
    // const toggle4Answer3InQuestion4 = () => {
    //     FullyData[3].rating[2] === null ? (
    //         FullyData[3].rating.push("VP"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor43(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "VP")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor43(Color.black)
    //         )
    // }
    // const toggle1Answer4InQuestion4 = () => {
    //     FullyData[3].rating[3] === null ? (
    //         FullyData[3].rating.push("G"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor44(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "G")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor44(Color.greate)
    //         )
    // }
    // const toggle2Answer4InQuestion4 = () => {
    //     FullyData[3].rating[3] === null ? (
    //         FullyData[3].rating.push("A"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor44(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "A")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor44(Color.average)
    //         )
    // }
    // const toggle3Answer4InQuestion4 = () => {
    //     FullyData[3].rating[3] === null ? (
    //         FullyData[3].rating.push("P"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor44(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "P")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor44(Color.poor)
    //         )
    // }
    // const toggle4Answer4InQuestion4 = () => {
    //     FullyData[3].rating[3] === null ? (
    //         FullyData[3].rating.push("VP"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor44(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "VP")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor44(Color.black)
    //         )
    // }
    // const toggle1Answer5InQuestion4 = () => {
    //     FullyData[3].rating[4] === null ? (
    //         FullyData[3].rating.push("G"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor45(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(4, 1, "G")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor45(Color.greate)
    //         )
    // }
    // const toggle2Answer5InQuestion4 = () => {
    //     FullyData[3].rating[4] === null ? (
    //         FullyData[3].rating.push("A"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor45(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(4, 1, "A")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor45(Color.average)
    //         )
    // }
    // const toggle3Answer5InQuestion4 = () => {
    //     FullyData[3].rating[4] === null ? (
    //         FullyData[3].rating.push("P"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor45(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(4, 1, "P")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor45(Color.poor)
    //         )
    // }
    // const toggle4Answer5InQuestion4 = () => {
    //     FullyData[3].rating[4] === null ? (
    //         FullyData[3].rating.push("VP"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor45(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(4, 1, "VP")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor45(Color.black)
    //         )
    // }
    // const toggle1Answer6InQuestion4 = () => {
    //     FullyData[3].rating[5] === null ? (
    //         FullyData[3].rating.push("G"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor46(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "G")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor46(Color.greate)
    //         )
    // }
    // const toggle2Answer6InQuestion4 = () => {
    //     FullyData[3].rating[5] === null ? (
    //         FullyData[3].rating.push("A"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor46(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "A")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor46(Color.average)
    //         )
    // }
    // const toggle3Answer6InQuestion4 = () => {
    //     FullyData[3].rating[5] === null ? (
    //         FullyData[3].rating.push("P"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor46(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "P")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor46(Color.poor)
    //         )
    // }
    // const toggle4Answer6InQuestion4 = () => {
    //     FullyData[3].rating[5] === null ? (
    //         FullyData[3].rating.push("VP"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor46(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "VP")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor46(Color.black)
    //         )
    // }
    // const toggle1Answer7InQuestion4 = () => {
    //     FullyData[3].rating[6] === null ? (
    //         FullyData[3].rating.push("G"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor47(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "G")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor47(Color.greate)
    //         )
    // }
    // const toggle2Answer7InQuestion4 = () => {
    //     FullyData[3].rating[6] === null ? (
    //         FullyData[3].rating.push("A"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor47(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "A")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor47(Color.average)

    //         )
    // }
    // const toggle3Answer7InQuestion4 = () => {
    //     FullyData[3].rating[6] === null ? (
    //         FullyData[3].rating.push("P"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor47(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "P")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor47(Color.poor)
    //         )
    // }
    // const toggle4Answer7InQuestion4 = () => {
    //     FullyData[3].rating[6] === null ? (
    //         FullyData[3].rating.push("VP"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor47(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "VP")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor47(Color.black)
    //         )
    // }
    // const toggle1Answer8InQuestion4 = () => {
    //     FullyData[3].rating[7] === null ? (
    //         FullyData[3].rating.push("G"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor48(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "G")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor48(Color.greate)
    //         )
    // }
    // const toggle2Answer8InQuestion4 = () => {
    //     FullyData[3].rating[7] === null ? (
    //         FullyData[3].rating.push("A"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor48(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "A")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor48(Color.average)
    //         )
    // }
    // const toggle3Answer8InQuestion4 = () => {
    //     FullyData[3].rating[7] === null ? (
    //         FullyData[3].rating.push("P"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor48(Color.poor)

    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "P")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor48(Color.poor)
    //         )
    // }
    // const toggle4Answer8InQuestion4 = () => {
    //     FullyData[3].rating[7] === null ? (
    //         FullyData[3].rating.push("VP"),
    //         console.log(FullyData[3].rating),
    //         setBackgroundColor48(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "VP")
    //             , console.log(FullyData[3].rating),
    //             setBackgroundColor48(Color.black)
    //         )
    // }
    // const toggle1Answer1InQuestion5 = () => {
    //     FullyData[4].rating[0] === null ? (
    //         FullyData[4].rating.push("G"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor51(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "G")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor51(Color.greate)
    //         )
    // }
    // const toggle2Answer1InQuestion5 = () => {
    //     FullyData[4].rating[0] === null ? (
    //         FullyData[4].rating.push("A"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor51(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "A")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor51(Color.average)
    //         )
    // }
    // const toggle3Answer1InQuestion5 = () => {
    //     FullyData[4].rating[0] === null ? (
    //         FullyData[4].rating.push("P"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor51(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "P")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor51(Color.poor)
    //         )
    // }
    // const toggle4Answer1InQuestion5 = () => {
    //     FullyData[4].rating[0] === null ? (
    //         FullyData[4].rating.push("VP"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor51(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(0, 1, "VP")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor51(Color.black)
    //         )
    // }
    // const toggle1Answer2InQuestion5 = () => {
    //     FullyData[4].rating[1] === null ? (
    //         FullyData[4].rating.push("G"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor52(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "G")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor52(Color.greate)
    //         )
    // }
    // const toggle2Answer2InQuestion5 = () => {
    //     FullyData[4].rating[1] === null ? (
    //         FullyData[4].rating.push("A"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor52(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "A")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor52(Color.average)
    //         )
    // }
    // const toggle3Answer2InQuestion5 = () => {
    //     FullyData[4].rating[1] === null ? (
    //         FullyData[4].rating.push("P"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor52(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "P")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor52(Color.poor)
    //         )
    // }
    // const toggle4Answer2InQuestion5 = () => {
    //     FullyData[4].rating[1] === null ? (
    //         FullyData[4].rating.push("VP"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor52(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(1, 1, "VP")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor52(Color.black)
    //         )
    // }
    // const toggle1Answer3InQuestion5 = () => {
    //     FullyData[4].rating[2] === null ? (
    //         FullyData[4].rating.push("G"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor53(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "G")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor53(Color.greate)
    //         )
    // }
    // const toggle2Answer3InQuestion5 = () => {
    //     FullyData[4].rating[2] === null ? (
    //         FullyData[4].rating.push("A"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor53(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "A")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor53(Color.average)
    //         )
    // }
    // const toggle3Answer3InQuestion5 = () => {
    //     FullyData[4].rating[2] === null ? (
    //         FullyData[4].rating.push("P"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor53(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "P")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor53(Color.poor)
    //         )
    // }
    // const toggle4Answer3InQuestion5 = () => {
    //     FullyData[4].rating[2] === null ? (
    //         FullyData[4].rating.push("VP"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor53(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(2, 1, "VP")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor53(Color.black)
    //         )
    // }
    // const toggle1Answer4InQuestion5 = () => {
    //     FullyData[4].rating[3] === null ? (
    //         FullyData[4].rating.push("G"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor54(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "G")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor54(Color.greate)
    //         )
    // }
    // const toggle2Answer4InQuestion5 = () => {
    //     FullyData[4].rating[3] === null ? (
    //         FullyData[4].rating.push("A"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor54(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "A")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor54(Color.average)
    //         )
    // }
    // const toggle3Answer4InQuestion5 = () => {
    //     FullyData[4].rating[3] === null ? (
    //         FullyData[4].rating.push("P"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor54(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "P")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor54(Color.poor)
    //         )
    // }
    // const toggle4Answer4InQuestion5 = () => {
    //     FullyData[4].rating[3] === null ? (
    //         FullyData[4].rating.push("VP"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor54(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(3, 1, "VP")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor54(Color.black)
    //         )
    // }
    // const toggle1Answer5InQuestion5 = () => {
    //     FullyData[4].rating[4] === null ? (
    //         FullyData[4].rating.push("G"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor55(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(4, 1, "G")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor55(Color.greate)
    //         )
    // }
    // const toggle2Answer5InQuestion5 = () => {
    //     FullyData[4].rating[4] === null ? (
    //         FullyData[4].rating.push("A"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor55(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(4, 1, "A")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor55(Color.average)
    //         )
    // }
    // const toggle3Answer5InQuestion5 = () => {
    //     FullyData[4].rating[4] === null ? (
    //         FullyData[4].rating.push("P"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor55(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(4, 1, "P")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor55(Color.poor)
    //         )
    // }
    // const toggle4Answer5InQuestion5 = () => {
    //     FullyData[4].rating[4] === null ? (
    //         FullyData[4].rating.push("VP"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor55(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(4, 1, "VP")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor55(Color.black)
    //         )
    // }
    // const toggle1Answer6InQuestion5 = () => {
    //     FullyData[4].rating[5] === null ? (
    //         FullyData[4].rating.push("G"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor56(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "G")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor56(Color.greate)
    //         )
    // }
    // const toggle2Answer6InQuestion5 = () => {
    //     FullyData[4].rating[5] === null ? (
    //         FullyData[4].rating.push("A"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor56(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "A")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor56(Color.average)
    //         )
    // }
    // const toggle3Answer6InQuestion5 = () => {
    //     FullyData[4].rating[5] === null ? (
    //         FullyData[4].rating.push("P"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor56(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "P")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor56(Color.poor)
    //         )
    // }
    // const toggle4Answer6InQuestion5 = () => {
    //     FullyData[4].rating[5] === null ? (
    //         FullyData[4].rating.push("VP"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor56(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(5, 1, "VP")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor56(Color.black)
    //         )
    // }
    // const toggle1Answer7InQuestion5 = () => {
    //     FullyData[4].rating[6] === null ? (
    //         FullyData[4].rating.push("G"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor57(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "G")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor57(Color.greate)
    //         )
    // }
    // const toggle2Answer7InQuestion5 = () => {
    //     FullyData[4].rating[6] === null ? (
    //         FullyData[4].rating.push("A"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor57(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "A")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor57(Color.average)
    //         )
    // }
    // const toggle3Answer7InQuestion5 = () => {
    //     FullyData[4].rating[6] === null ? (
    //         FullyData[4].rating.push("P"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor57(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "P")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor57(Color.poor)
    //         )
    // }
    // const toggle4Answer7InQuestion5 = () => {
    //     FullyData[4].rating[6] === null ? (
    //         FullyData[4].rating.push("VP"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor57(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(6, 1, "VP")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor57(Color.black)
    //         )
    // }
    // const toggle1Answer8InQuestion5 = () => {
    //     FullyData[4].rating[7] === null ? (
    //         FullyData[4].rating.push("G"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor58(Color.greate)
    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "G")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor58(Color.greate)
    //         )
    // }
    // const toggle2Answer8InQuestion5 = () => {
    //     FullyData[4].rating[7] === null ? (
    //         FullyData[4].rating.push("A"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor58(Color.average)
    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "A")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor58(Color.average)
    //         )
    // }
    // const toggle3Answer8InQuestion5 = () => {
    //     FullyData[4].rating[7] === null ? (
    //         FullyData[4].rating.push("P"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor58(Color.poor)
    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "P")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor58(Color.poor)
    //         )
    // }
    // const toggle4Answer8InQuestion5 = () => {
    //     FullyData[4].rating[7] === null ? (
    //         FullyData[4].rating.push("VP"),
    //         console.log(FullyData[4].rating),
    //         setBackgroundColor58(Color.black)
    //     ) : (
    //             FullyData[1].rating.splice(7, 1, "VP")
    //             , console.log(FullyData[4].rating),
    //             setBackgroundColor58(Color.black)
    //         )
    // }

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
                                        MatrixQuestions.map((i, index) => {
                                            return (
                                                <Row key={index.toString()} data={i} IDcolor={IdColor.style} backgroundID={backgroundID.style}
                                                />
                                            )
                                        })
                                    }
                                    {/* <View style={{ flexDirection: "row" }}>
                                        <TouchableOpacity onPress={toggleQuestion2} style={questionColor2.questionNumber}>
                                            <Text style={questionColor2.container}>2</Text>
                                        </TouchableOpacity>
                                        <View style={{ flexDirection: "row", marginLeft: 40 }}>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer1InQuestion2}
                                            // circle2={toggle2Answer1InQuestion2}
                                            // circle3={toggle3Answer1InQuestion2}
                                            // circle4={toggle4Answer1InQuestion2}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor21 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer2InQuestion2}
                                            // circle2={toggle2Answer2InQuestion2}
                                            // circle3={toggle3Answer2InQuestion2}
                                            // circle4={toggle4Answer2InQuestion2}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor22 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer3InQuestion2}
                                            // circle2={toggle2Answer3InQuestion2}
                                            // circle3={toggle3Answer3InQuestion2}
                                            // circle4={toggle4Answer3InQuestion2}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor23 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer4InQuestion2}
                                            // circle2={toggle2Answer4InQuestion2}
                                            // circle3={toggle3Answer4InQuestion2}
                                            // circle4={toggle4Answer4InQuestion2}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor24 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer5InQuestion2}
                                            // circle2={toggle2Answer5InQuestion2}
                                            // circle3={toggle3Answer5InQuestion2}
                                            // circle4={toggle4Answer5InQuestion2}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor25 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer6InQuestion2}
                                            // circle2={toggle2Answer6InQuestion2}
                                            // circle3={toggle3Answer6InQuestion2}
                                            // circle4={toggle4Answer6InQuestion2}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor26 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer7InQuestion2}
                                            // circle2={toggle2Answer7InQuestion2}
                                            // circle3={toggle3Answer7InQuestion2}
                                            // circle4={toggle4Answer7InQuestion2}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor27 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer8InQuestion2}
                                            // circle2={toggle2Answer8InQuestion2}
                                            // circle3={toggle3Answer8InQuestion2}
                                            // circle4={toggle4Answer8InQuestion2}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor28 }]} />
                                                </View>
                                            </Tooltip>
                                        </View>
                                    </View> */}
                                    {/* <View style={{ flexDirection: "row" }}>
                                        <TouchableOpacity onPress={toggleQuestion3} style={questionColor3.questionNumber}>
                                            <Text style={questionColor3.container}>3</Text>
                                        </TouchableOpacity>
                                        <View style={{ flexDirection: "row", marginLeft: 40 }}>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer1InQuestion3}
                                            // circle2={toggle2Answer1InQuestion3}
                                            // circle3={toggle3Answer1InQuestion3}
                                            // circle4={toggle4Answer1InQuestion3}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor31 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer2InQuestion3}
                                            // circle2={toggle2Answer2InQuestion3}
                                            // circle3={toggle3Answer2InQuestion3}
                                            // circle4={toggle4Answer2InQuestion3}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor32 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer3InQuestion3}
                                            // circle2={toggle2Answer3InQuestion3}
                                            // circle3={toggle3Answer3InQuestion3}
                                            // circle4={toggle4Answer3InQuestion3}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor33 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer4InQuestion3}
                                            // circle2={toggle2Answer4InQuestion3}
                                            // circle3={toggle3Answer4InQuestion3}
                                            // circle4={toggle4Answer4InQuestion3}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor34 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer5InQuestion3}
                                            // circle2={toggle2Answer5InQuestion3}
                                            // circle3={toggle3Answer5InQuestion3}
                                            // circle4={toggle4Answer5InQuestion3}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor35 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer6InQuestion3}
                                            // circle2={toggle2Answer6InQuestion3}
                                            // circle3={toggle3Answer6InQuestion3}
                                            // circle4={toggle4Answer6InQuestion3}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor36 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer7InQuestion3}
                                            // circle2={toggle2Answer7InQuestion3}
                                            // circle3={toggle3Answer7InQuestion3}
                                            // circle4={toggle4Answer7InQuestion3}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor37 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer8InQuestion3}
                                            // circle2={toggle2Answer8InQuestion3}
                                            // circle3={toggle3Answer8InQuestion3}
                                            // circle4={toggle4Answer8InQuestion3}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor38 }]} />
                                                </View>
                                            </Tooltip>
                                        </View>
                                    </View> */}
                                    {/* <View style={{ flexDirection: "row" }}>
                                        <TouchableOpacity onPress={toggleQuestion4} style={questionColor4.questionNumber}>
                                            <Text style={questionColor4.container}>4</Text>
                                        </TouchableOpacity>
                                        <View style={{ flexDirection: "row", marginLeft: 40 }}>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer1InQuestion4}
                                            // circle2={toggle2Answer1InQuestion4}
                                            // circle3={toggle3Answer1InQuestion4}
                                            // circle4={toggle4Answer1InQuestion4}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor41 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer2InQuestion4}
                                            // circle2={toggle2Answer2InQuestion4}
                                            // circle3={toggle3Answer2InQuestion4}
                                            // circle4={toggle4Answer2InQuestion4}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor42 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer3InQuestion4}
                                            // circle2={toggle2Answer3InQuestion4}
                                            // circle3={toggle3Answer3InQuestion4}
                                            // circle4={toggle4Answer3InQuestion4}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor43 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer4InQuestion4}
                                            // circle2={toggle2Answer4InQuestion4}
                                            // circle3={toggle3Answer4InQuestion4}
                                            // circle4={toggle4Answer4InQuestion4}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor44 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer5InQuestion4}
                                            // circle2={toggle2Answer5InQuestion4}
                                            // circle3={toggle3Answer5InQuestion4}
                                            // circle4={toggle4Answer5InQuestion4}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor45 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer6InQuestion4}
                                            // circle2={toggle2Answer6InQuestion4}
                                            // circle3={toggle3Answer6InQuestion4}
                                            // circle4={toggle4Answer6InQuestion4}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor46 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer7InQuestion4}
                                            // circle2={toggle2Answer7InQuestion4}
                                            // circle3={toggle3Answer7InQuestion4}
                                            // circle4={toggle4Answer7InQuestion4}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor47 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer8InQuestion4}
                                            // circle2={toggle2Answer8InQuestion4}
                                            // circle3={toggle3Answer8InQuestion4}
                                            // circle4={toggle4Answer8InQuestion4}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor48 }]} />
                                                </View>
                                            </Tooltip>
                                        </View>
                                    </View> */}
                                    {/* <View style={{ flexDirection: "row" }}>
                                        <TouchableOpacity onPress={toggleQuestion5} style={questionColor5.questionNumber}>
                                            <Text style={questionColor5.container}>5</Text>
                                        </TouchableOpacity>
                                        <View style={{ flexDirection: "row", marginLeft: 40 }}>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer1InQuestion5}
                                            // circle2={toggle2Answer1InQuestion5}
                                            // circle3={toggle3Answer1InQuestion5}
                                            // circle4={toggle4Answer1InQuestion5}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor51 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer2InQuestion5}
                                            // circle2={toggle2Answer2InQuestion5}
                                            // circle3={toggle3Answer2InQuestion5}
                                            // circle4={toggle4Answer2InQuestion5}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor52 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer3InQuestion5}
                                            // circle2={toggle2Answer3InQuestion5}
                                            // circle3={toggle3Answer3InQuestion5}
                                            // circle4={toggle4Answer3InQuestion5}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor53 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer4InQuestion5}
                                            // circle2={toggle2Answer4InQuestion5}
                                            // circle3={toggle3Answer4InQuestion5}
                                            // circle4={toggle4Answer4InQuestion5}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor54 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer5InQuestion5}
                                            // circle2={toggle2Answer5InQuestion5}
                                            // circle3={toggle3Answer5InQuestion5}
                                            // circle4={toggle4Answer5InQuestion5}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor55 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer6InQuestion5}
                                            // circle2={toggle2Answer6InQuestion5}
                                            // circle3={toggle3Answer6InQuestion5}
                                            // circle4={toggle4Answer6InQuestion5}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor56 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            // circle1={toggle1Answer7InQuestion5}
                                            // circle2={toggle2Answer7InQuestion5}
                                            // circle3={toggle3Answer7InQuestion5}
                                            // circle4={toggle4Answer7InQuestion5}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor57 }]} />
                                                </View>
                                            </Tooltip>
                                            <Tooltip popover={<Pops
                                            //     circle1={toggle1Answer8InQuestion5}
                                            //     circle2={toggle2Answer8InQuestion5}
                                            //     circle3={toggle3Answer8InQuestion5}
                                            //     circle4={toggle4Answer8InQuestion5}
                                            />}>
                                                <View style={styles.circle}>
                                                    <View style={[styles.subCircle, { backgroundColor: backgroundColor58 }]} />
                                                </View>
                                            </Tooltip>
                                        </View>
                                    </View> */}
                                </View>
                            </View>
                        </ScrollView>
                        {/* <Table /> */}
                    </ScrollView>
                    <View style={styles.footerContainer}>
                        <Text style={styles.footerTitle}>{MatrixQuestions[index].question}</Text>
                        <Text style={styles.footerDescription}>{MatrixQuestions[index].hint}</Text>
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