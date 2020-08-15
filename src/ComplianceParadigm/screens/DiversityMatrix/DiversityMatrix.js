import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import HeaderStack from '@ParadigmComponents/header/headerStack/HeaderStack';
// import Table from '@ParadigmComponents/Table/Table';
import Color from '@Assets/Constant';
import styles from './DiversityMatrix.style';
import Footer from '@ParadigmComponents/Footer/Footer';
import MatrixQuestions from '@ParadigmFakeData/MatrixQuestions';
import { Tooltip } from 'react-native-elements';
import Pops from './Pops';
import { Context as AuthContext } from '@Context/AuthContext';
const DiversityMatrix = ({ navigation }) => {
    const { state } = useContext(AuthContext);
    const toggleNextScreen = () => {
        if (state.setPyamentFlow === 1) {
            navigation.navigate('PerceptionReport')
        } else if (state.setPyamentFlow === 2) {
            navigation.navigate('Questionnaire')
        } else {
            navigation.navigate('Questionnaire')
        }
    }

    const FullyData = [
        {
            id: 1,
            rating: ['', '', '', '', '', '', '', '']
        },
        {
            id: 2,
            rating: ['', '', '', '', '', '', '', '']
        },
        {
            id: 3,
            rating: ['', '', '', '', '', '', '', '']
        },
        {
            id: 4,
            rating: ['', '', '', '', '', '', '', '']
        },
        {
            id: 5,
            rating: ['', '', '', '', '', '', '', '']
        },
    ]
    const [MatrixData, setMatrixData] = useState(FullyData);
    console.log(FullyData[0].rating[0]);
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
            setQuestionNumber(0),
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
        FullyData[0].rating[0] === null ? (FullyData[0].rating.push("G"), console.log(FullyData[0].rating[0])) : (
            FullyData[0].rating.splice(0, 1, "G")
            , console.log(FullyData[0].rating[0])
        )
    }
    const toggle2Answer1InQuestion1 = () => {
        FullyData[0].rating[0] === null ? (FullyData[0].rating.push("A"), console.log(FullyData[0].rating[0])) : (
            FullyData[0].rating.splice(0, 1, "A")
            , console.log(FullyData[0].rating[0])
        )
    }
    const toggle3Answer1InQuestion1 = () => {
        FullyData[0].rating[0] === null ? (FullyData[0].rating.push("P"), console.log(FullyData[0].rating[0])) : (
            FullyData[0].rating.splice(0, 1, "P")
            , console.log(FullyData[0].rating[0])
        )
    }
    const toggle4Answer1InQuestion1 = () => {
        FullyData[0].rating[0] === null ? (FullyData[0].rating.push("VP"), console.log(FullyData[0].rating[0])) : (
            FullyData[0].rating.splice(0, 1, "VP")
            , console.log(FullyData[0].rating[0])
        )
    }
    const toggle1Answer2InQuestion1 = () => {
        FullyData[0].rating[1] === null ? (FullyData[0].rating.push("G"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(1, 1, "G")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle2Answer2InQuestion1 = () => {
        FullyData[0].rating[1] === null ? (FullyData[0].rating.push("A"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(1, 1, "A")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle3Answer2InQuestion1 = () => {
        FullyData[0].rating[1] === null ? (FullyData[0].rating.push("P"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(1, 1, "P")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle4Answer2InQuestion1 = () => {
        FullyData[0].rating[1] === null ? (FullyData[0].rating.push("VP"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(1, 1, "VP")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle1Answer3InQuestion1 = () => {
        FullyData[0].rating[2] === null ? (FullyData[0].rating.push("G"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(2, 1, "G")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle2Answer3InQuestion1 = () => {
        FullyData[0].rating[2] === null ? (FullyData[0].rating.push("A"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(2, 1, "A")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle3Answer3InQuestion1 = () => {
        FullyData[0].rating[2] === null ? (FullyData[0].rating.push("P"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(2, 1, "P")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle4Answer3InQuestion1 = () => {
        FullyData[0].rating[2] === null ? (FullyData[0].rating.push("VP"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(2, 1, "VP")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle1Answer4InQuestion1 = () => {
        FullyData[0].rating[3] === null ? (FullyData[0].rating.push("G"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(3, 1, "G")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle2Answer4InQuestion1 = () => {
        FullyData[0].rating[3] === null ? (FullyData[0].rating.push("A"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(3, 1, "A")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle3Answer4InQuestion1 = () => {
        FullyData[0].rating[3] === null ? (FullyData[0].rating.push("P"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(3, 1, "P")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle4Answer4InQuestion1 = () => {
        FullyData[0].rating[3] === null ? (FullyData[0].rating.push("VP"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(3, 1, "VP")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle1Answer5InQuestion1 = () => {
        FullyData[0].rating[4] === null ? (FullyData[0].rating.push("G"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(4, 1, "G")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle2Answer5InQuestion1 = () => {
        FullyData[0].rating[4] === null ? (FullyData[0].rating.push("A"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(4, 1, "A")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle3Answer5InQuestion1 = () => {
        FullyData[0].rating[4] === null ? (FullyData[0].rating.push("P"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(4, 1, "P")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle4Answer5InQuestion1 = () => {
        FullyData[0].rating[4] === null ? (FullyData[0].rating.push("VP"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(4, 1, "VP")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle1Answer6InQuestion1 = () => {
        FullyData[0].rating[5] === null ? (FullyData[0].rating.push("G"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(5, 1, "G")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle2Answer6InQuestion1 = () => {
        FullyData[0].rating[5] === null ? (FullyData[0].rating.push("A"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(5, 1, "A")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle3Answer6InQuestion1 = () => {
        FullyData[0].rating[5] === null ? (FullyData[0].rating.push("P"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(5, 1, "P")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle4Answer6InQuestion1 = () => {
        FullyData[0].rating[5] === null ? (FullyData[0].rating.push("VP"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(5, 1, "VP")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle1Answer7InQuestion1 = () => {
        FullyData[0].rating[6] === null ? (FullyData[0].rating.push("G"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(6, 1, "G")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle2Answer7InQuestion1 = () => {
        FullyData[0].rating[6] === null ? (FullyData[0].rating.push("A"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(6, 1, "A")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle3Answer7InQuestion1 = () => {
        FullyData[0].rating[6] === null ? (FullyData[0].rating.push("P"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(6, 1, "P")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle4Answer7InQuestion1 = () => {
        FullyData[0].rating[6] === null ? (FullyData[0].rating.push("VP"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(6, 1, "VP")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle1Answer8InQuestion1 = () => {
        FullyData[0].rating[7] === null ? (FullyData[0].rating.push("G"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(7, 1, "G")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle2Answer8InQuestion1 = () => {
        FullyData[0].rating[7] === null ? (FullyData[0].rating.push("A"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(7, 1, "A")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle3Answer8InQuestion1 = () => {
        FullyData[0].rating[7] === null ? (FullyData[0].rating.push("P"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(7, 1, "P")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle4Answer8InQuestion1 = () => {
        FullyData[0].rating[7] === null ? (FullyData[0].rating.push("VP"), console.log(FullyData[0].rating)) : (
            FullyData[0].rating.splice(7, 1, "VP")
            , console.log(FullyData[0].rating)
        )
    }
    const toggle1Answer1InQuestion2 = () => {
        FullyData[1].rating[0] === null ? (FullyData[1].rating.push("G"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(0, 1, "G")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle2Answer1InQuestion2 = () => {
        FullyData[1].rating[0] === null ? (FullyData[1].rating.push("A"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(0, 1, "A")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle3Answer1InQuestion2 = () => {
        FullyData[1].rating[0] === null ? (FullyData[1].rating.push("P"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(0, 1, "P")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle4Answer1InQuestion2 = () => {
        FullyData[1].rating[0] === null ? (FullyData[1].rating.push("VP"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(0, 1, "VP")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle1Answer2InQuestion2 = () => {
        FullyData[1].rating[1] === null ? (FullyData[1].rating.push("G"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(1, 1, "G")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle2Answer2InQuestion2 = () => {
        FullyData[1].rating[1] === null ? (FullyData[1].rating.push("A"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(1, 1, "A")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle3Answer2InQuestion2 = () => {
        FullyData[1].rating[1] === null ? (FullyData[1].rating.push("P"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(1, 1, "P")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle4Answer2InQuestion2 = () => {
        FullyData[1].rating[1] === null ? (FullyData[1].rating.push("VP"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(1, 1, "VP")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle1Answer3InQuestion2 = () => {
        FullyData[1].rating[2] === null ? (FullyData[1].rating.push("G"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(2, 1, "G")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle2Answer3InQuestion2 = () => {
        FullyData[1].rating[2] === null ? (FullyData[1].rating.push("A"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(2, 1, "A")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle3Answer3InQuestion2 = () => {
        FullyData[1].rating[2] === null ? (FullyData[1].rating.push("P"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(2, 1, "P")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle4Answer3InQuestion2 = () => {
        FullyData[1].rating[2] === null ? (FullyData[1].rating.push("VP"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(2, 1, "VP")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle1Answer4InQuestion2 = () => {
        FullyData[1].rating[3] === null ? (FullyData[1].rating.push("G"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(3, 1, "G")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle2Answer4InQuestion2 = () => {
        FullyData[1].rating[3] === null ? (FullyData[1].rating.push("A"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(3, 1, "A")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle3Answer4InQuestion2 = () => {
        FullyData[1].rating[3] === null ? (FullyData[1].rating.push("P"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(3, 1, "P")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle4Answer4InQuestion2 = () => {
        FullyData[1].rating[3] === null ? (FullyData[1].rating.push("VP"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(3, 1, "VP")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle1Answer5InQuestion2 = () => {
        FullyData[1].rating[4] === null ? (FullyData[1].rating.push("G"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(4, 1, "G")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle2Answer5InQuestion2 = () => {
        FullyData[1].rating[4] === null ? (FullyData[1].rating.push("A"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(4, 1, "A")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle3Answer5InQuestion2 = () => {
        FullyData[1].rating[4] === null ? (FullyData[1].rating.push("P"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(4, 1, "P")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle4Answer5InQuestion2 = () => {
        FullyData[1].rating[4] === null ? (FullyData[1].rating.push("VP"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(4, 1, "VP")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle1Answer6InQuestion2 = () => {
        FullyData[1].rating[5] === null ? (FullyData[1].rating.push("G"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(5, 1, "G")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle2Answer6InQuestion2 = () => {
        FullyData[1].rating[5] === null ? (FullyData[1].rating.push("A"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(5, 1, "A")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle3Answer6InQuestion2 = () => {
        FullyData[1].rating[5] === null ? (FullyData[1].rating.push("P"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(5, 1, "P")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle4Answer6InQuestion2 = () => {
        FullyData[1].rating[5] === null ? (FullyData[1].rating.push("VP"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(5, 1, "VP")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle1Answer7InQuestion2 = () => {
        FullyData[1].rating[6] === null ? (FullyData[1].rating.push("G"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(6, 1, "G")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle2Answer7InQuestion2 = () => {
        FullyData[1].rating[6] === null ? (FullyData[1].rating.push("A"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(6, 1, "A")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle3Answer7InQuestion2 = () => {
        FullyData[1].rating[6] === null ? (FullyData[1].rating.push("P"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(6, 1, "P")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle4Answer7InQuestion2 = () => {
        FullyData[1].rating[6] === null ? (FullyData[1].rating.push("VP"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(6, 1, "VP")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle1Answer8InQuestion2 = () => {
        FullyData[1].rating[7] === null ? (FullyData[1].rating.push("G"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(7, 1, "G")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle2Answer8InQuestion2 = () => {
        FullyData[1].rating[7] === null ? (FullyData[1].rating.push("A"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(7, 1, "A")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle3Answer8InQuestion2 = () => {
        FullyData[1].rating[7] === null ? (FullyData[1].rating.push("P"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(7, 1, "P")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle4Answer8InQuestion2 = () => {
        FullyData[1].rating[7] === null ? (FullyData[1].rating.push("VP"), console.log(FullyData[1].rating)) : (
            FullyData[1].rating.splice(7, 1, "VP")
            , console.log(FullyData[1].rating)
        )
    }
    const toggle1Answer1InQuestion3 = () => {
        FullyData[2].rating[0] === null ? (FullyData[2].rating.push("G"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(0, 1, "G")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle2Answer1InQuestion3 = () => {
        FullyData[2].rating[0] === null ? (FullyData[2].rating.push("A"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(0, 1, "A")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle3Answer1InQuestion3 = () => {
        FullyData[2].rating[0] === null ? (FullyData[2].rating.push("P"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(0, 1, "P")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle4Answer1InQuestion3 = () => {
        FullyData[2].rating[0] === null ? (FullyData[2].rating.push("VP"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(0, 1, "VP")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle1Answer2InQuestion3 = () => {
        FullyData[2].rating[1] === null ? (FullyData[2].rating.push("G"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(1, 1, "G")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle2Answer2InQuestion3 = () => {
        FullyData[2].rating[1] === null ? (FullyData[2].rating.push("A"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(1, 1, "A")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle3Answer2InQuestion3 = () => {
        FullyData[2].rating[1] === null ? (FullyData[2].rating.push("P"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(1, 1, "P")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle4Answer2InQuestion3 = () => {
        FullyData[2].rating[1] === null ? (FullyData[2].rating.push("VP"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(1, 1, "VP")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle1Answer3InQuestion3 = () => {
        FullyData[2].rating[2] === null ? (FullyData[2].rating.push("G"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(2, 1, "G")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle2Answer3InQuestion3 = () => {
        FullyData[2].rating[2] === null ? (FullyData[2].rating.push("A"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(2, 1, "A")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle3Answer3InQuestion3 = () => {
        FullyData[2].rating[2] === null ? (FullyData[2].rating.push("P"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(2, 1, "P")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle4Answer3InQuestion3 = () => {
        FullyData[2].rating[2] === null ? (FullyData[2].rating.push("VP"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(2, 1, "VP")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle1Answer4InQuestion3 = () => {
        FullyData[2].rating[3] === null ? (FullyData[2].rating.push("G"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(3, 1, "G")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle2Answer4InQuestion3 = () => {
        FullyData[2].rating[3] === null ? (FullyData[2].rating.push("A"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(3, 1, "A")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle3Answer4InQuestion3 = () => {
        FullyData[2].rating[3] === null ? (FullyData[2].rating.push("P"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(3, 1, "P")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle4Answer4InQuestion3 = () => {
        FullyData[2].rating[3] === null ? (FullyData[2].rating.push("VP"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(3, 1, "VP")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle1Answer5InQuestion3 = () => {
        FullyData[2].rating[4] === null ? (FullyData[2].rating.push("G"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(4, 1, "G")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle2Answer5InQuestion3 = () => {
        FullyData[2].rating[4] === null ? (FullyData[2].rating.push("A"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(4, 1, "A")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle3Answer5InQuestion3 = () => {
        FullyData[2].rating[4] === null ? (FullyData[2].rating.push("P"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(4, 1, "P")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle4Answer5InQuestion3 = () => {
        FullyData[2].rating[4] === null ? (FullyData[2].rating.push("VP"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(4, 1, "VP")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle1Answer6InQuestion3 = () => {
        FullyData[2].rating[5] === null ? (FullyData[2].rating.push("G"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(5, 1, "G")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle2Answer6InQuestion3 = () => {
        FullyData[2].rating[5] === null ? (FullyData[2].rating.push("A"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(5, 1, "A")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle3Answer6InQuestion3 = () => {
        FullyData[2].rating[5] === null ? (FullyData[2].rating.push("P"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(5, 1, "P")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle4Answer6InQuestion3 = () => {
        FullyData[2].rating[5] === null ? (FullyData[2].rating.push("VP"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(5, 1, "VP")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle1Answer7InQuestion3 = () => {
        FullyData[2].rating[6] === null ? (FullyData[2].rating.push("G"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(6, 1, "G")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle2Answer7InQuestion3 = () => {
        FullyData[2].rating[6] === null ? (FullyData[2].rating.push("A"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(6, 1, "A")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle3Answer7InQuestion3 = () => {
        FullyData[2].rating[6] === null ? (FullyData[2].rating.push("P"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(6, 1, "P")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle4Answer7InQuestion3 = () => {
        FullyData[2].rating[6] === null ? (FullyData[2].rating.push("VP"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(6, 1, "VP")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle1Answer8InQuestion3 = () => {
        FullyData[2].rating[7] === null ? (FullyData[2].rating.push("G"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(7, 1, "G")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle2Answer8InQuestion3 = () => {
        FullyData[2].rating[7] === null ? (FullyData[2].rating.push("A"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(7, 1, "A")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle3Answer8InQuestion3 = () => {
        FullyData[2].rating[7] === null ? (FullyData[2].rating.push("P"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(7, 1, "P")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle4Answer8InQuestion3 = () => {
        FullyData[2].rating[7] === null ? (FullyData[2].rating.push("VP"), console.log(FullyData[2].rating)) : (
            FullyData[1].rating.splice(7, 1, "VP")
            , console.log(FullyData[2].rating)
        )
    }
    const toggle1Answer1InQuestion4 = () => {
        FullyData[3].rating[0] === null ? (FullyData[3].rating.push("G"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(0, 1, "G")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle2Answer1InQuestion4 = () => {
        FullyData[3].rating[0] === null ? (FullyData[3].rating.push("A"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(0, 1, "A")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle3Answer1InQuestion4 = () => {
        FullyData[3].rating[0] === null ? (FullyData[3].rating.push("P"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(0, 1, "P")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle4Answer1InQuestion4 = () => {
        FullyData[3].rating[0] === null ? (FullyData[3].rating.push("VP"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(0, 1, "VP")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle1Answer2InQuestion4 = () => {
        FullyData[3].rating[1] === null ? (FullyData[3].rating.push("G"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(1, 1, "G")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle2Answer2InQuestion4 = () => {
        FullyData[3].rating[1] === null ? (FullyData[3].rating.push("A"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(1, 1, "A")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle3Answer2InQuestion4 = () => {
        FullyData[3].rating[1] === null ? (FullyData[3].rating.push("P"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(1, 1, "P")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle4Answer2InQuestion4 = () => {
        FullyData[3].rating[1] === null ? (FullyData[3].rating.push("VP"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(1, 1, "VP")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle1Answer3InQuestion4 = () => {
        FullyData[3].rating[2] === null ? (FullyData[3].rating.push("G"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(2, 1, "G")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle2Answer3InQuestion4 = () => {
        FullyData[3].rating[2] === null ? (FullyData[3].rating.push("A"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(2, 1, "A")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle3Answer3InQuestion4 = () => {
        FullyData[3].rating[2] === null ? (FullyData[3].rating.push("P"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(2, 1, "P")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle4Answer3InQuestion4 = () => {
        FullyData[3].rating[2] === null ? (FullyData[3].rating.push("VP"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(2, 1, "VP")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle1Answer4InQuestion4 = () => {
        FullyData[3].rating[3] === null ? (FullyData[3].rating.push("G"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(3, 1, "G")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle2Answer4InQuestion4 = () => {
        FullyData[3].rating[3] === null ? (FullyData[3].rating.push("A"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(3, 1, "A")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle3Answer4InQuestion4 = () => {
        FullyData[3].rating[3] === null ? (FullyData[3].rating.push("P"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(3, 1, "P")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle4Answer4InQuestion4 = () => {
        FullyData[3].rating[3] === null ? (FullyData[3].rating.push("VP"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(3, 1, "VP")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle1Answer5InQuestion4 = () => {
        FullyData[3].rating[4] === null ? (FullyData[3].rating.push("G"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(4, 1, "G")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle2Answer5InQuestion4 = () => {
        FullyData[3].rating[4] === null ? (FullyData[3].rating.push("A"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(4, 1, "A")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle3Answer5InQuestion4 = () => {
        FullyData[3].rating[4] === null ? (FullyData[3].rating.push("P"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(4, 1, "P")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle4Answer5InQuestion4 = () => {
        FullyData[3].rating[4] === null ? (FullyData[3].rating.push("VP"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(4, 1, "VP")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle1Answer6InQuestion4 = () => {
        FullyData[3].rating[5] === null ? (FullyData[3].rating.push("G"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(5, 1, "G")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle2Answer6InQuestion4 = () => {
        FullyData[3].rating[5] === null ? (FullyData[3].rating.push("A"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(5, 1, "A")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle3Answer6InQuestion4 = () => {
        FullyData[3].rating[5] === null ? (FullyData[3].rating.push("P"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(5, 1, "P")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle4Answer6InQuestion4 = () => {
        FullyData[3].rating[5] === null ? (FullyData[3].rating.push("VP"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(5, 1, "VP")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle1Answer7InQuestion4 = () => {
        FullyData[3].rating[6] === null ? (FullyData[3].rating.push("G"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(6, 1, "G")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle2Answer7InQuestion4 = () => {
        FullyData[3].rating[6] === null ? (FullyData[3].rating.push("A"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(6, 1, "A")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle3Answer7InQuestion4 = () => {
        FullyData[3].rating[6] === null ? (FullyData[3].rating.push("P"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(6, 1, "P")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle4Answer7InQuestion4 = () => {
        FullyData[3].rating[6] === null ? (FullyData[3].rating.push("VP"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(6, 1, "VP")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle1Answer8InQuestion4 = () => {
        FullyData[3].rating[7] === null ? (FullyData[3].rating.push("G"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(7, 1, "G")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle2Answer8InQuestion4 = () => {
        FullyData[3].rating[7] === null ? (FullyData[3].rating.push("A"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(7, 1, "A")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle3Answer8InQuestion4 = () => {
        FullyData[3].rating[7] === null ? (FullyData[3].rating.push("P"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(7, 1, "P")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle4Answer8InQuestion4 = () => {
        FullyData[3].rating[7] === null ? (FullyData[3].rating.push("VP"), console.log(FullyData[3].rating)) : (
            FullyData[1].rating.splice(7, 1, "VP")
            , console.log(FullyData[3].rating)
        )
    }
    const toggle1Answer1InQuestion5 = () => {
        FullyData[4].rating[0] === null ? (FullyData[4].rating.push("G"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(0, 1, "G")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle2Answer1InQuestion5 = () => {
        FullyData[4].rating[0] === null ? (FullyData[4].rating.push("A"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(0, 1, "A")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle3Answer1InQuestion5 = () => {
        FullyData[4].rating[0] === null ? (FullyData[4].rating.push("P"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(0, 1, "P")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle4Answer1InQuestion5 = () => {
        FullyData[4].rating[0] === null ? (FullyData[4].rating.push("VP"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(0, 1, "VP")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle1Answer2InQuestion5 = () => {
        FullyData[4].rating[1] === null ? (FullyData[4].rating.push("G"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(1, 1, "G")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle2Answer2InQuestion5 = () => {
        FullyData[4].rating[1] === null ? (FullyData[4].rating.push("A"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(1, 1, "A")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle3Answer2InQuestion5 = () => {
        FullyData[4].rating[1] === null ? (FullyData[4].rating.push("P"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(1, 1, "P")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle4Answer2InQuestion5 = () => {
        FullyData[4].rating[1] === null ? (FullyData[4].rating.push("VP"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(1, 1, "VP")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle1Answer3InQuestion5 = () => {
        FullyData[4].rating[2] === null ? (FullyData[4].rating.push("G"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(2, 1, "G")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle2Answer3InQuestion5 = () => {
        FullyData[4].rating[2] === null ? (FullyData[4].rating.push("A"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(2, 1, "A")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle3Answer3InQuestion5 = () => {
        FullyData[4].rating[2] === null ? (FullyData[4].rating.push("P"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(2, 1, "P")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle4Answer3InQuestion5 = () => {
        FullyData[4].rating[2] === null ? (FullyData[4].rating.push("VP"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(2, 1, "VP")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle1Answer4InQuestion5 = () => {
        FullyData[4].rating[3] === null ? (FullyData[4].rating.push("G"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(3, 1, "G")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle2Answer4InQuestion5 = () => {
        FullyData[4].rating[3] === null ? (FullyData[4].rating.push("A"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(3, 1, "A")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle3Answer4InQuestion5 = () => {
        FullyData[4].rating[3] === null ? (FullyData[4].rating.push("P"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(3, 1, "P")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle4Answer4InQuestion5 = () => {
        FullyData[4].rating[3] === null ? (FullyData[4].rating.push("VP"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(3, 1, "VP")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle1Answer5InQuestion5 = () => {
        FullyData[4].rating[4] === null ? (FullyData[4].rating.push("G"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(4, 1, "G")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle2Answer5InQuestion5 = () => {
        FullyData[4].rating[4] === null ? (FullyData[4].rating.push("A"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(4, 1, "A")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle3Answer5InQuestion5 = () => {
        FullyData[4].rating[4] === null ? (FullyData[4].rating.push("P"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(4, 1, "P")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle4Answer5InQuestion5 = () => {
        FullyData[4].rating[4] === null ? (FullyData[4].rating.push("VP"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(4, 1, "VP")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle1Answer6InQuestion5 = () => {
        FullyData[4].rating[5] === null ? (FullyData[4].rating.push("G"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(5, 1, "G")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle2Answer6InQuestion5 = () => {
        FullyData[4].rating[5] === null ? (FullyData[4].rating.push("A"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(5, 1, "A")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle3Answer6InQuestion5 = () => {
        FullyData[4].rating[5] === null ? (FullyData[4].rating.push("P"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(5, 1, "P")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle4Answer6InQuestion5 = () => {
        FullyData[4].rating[5] === null ? (FullyData[4].rating.push("VP"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(5, 1, "VP")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle1Answer7InQuestion5 = () => {
        FullyData[4].rating[6] === null ? (FullyData[4].rating.push("G"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(6, 1, "G")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle2Answer7InQuestion5 = () => {
        FullyData[4].rating[6] === null ? (FullyData[4].rating.push("A"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(6, 1, "A")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle3Answer7InQuestion5 = () => {
        FullyData[4].rating[6] === null ? (FullyData[4].rating.push("P"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(6, 1, "P")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle4Answer7InQuestion5 = () => {
        FullyData[4].rating[6] === null ? (FullyData[4].rating.push("VP"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(6, 1, "VP")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle1Answer8InQuestion5 = () => {
        FullyData[4].rating[7] === null ? (FullyData[4].rating.push("G"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(7, 1, "G")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle2Answer8InQuestion5 = () => {
        FullyData[4].rating[7] === null ? (FullyData[4].rating.push("A"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(7, 1, "A")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle3Answer8InQuestion5 = () => {
        FullyData[4].rating[7] === null ? (FullyData[4].rating.push("P"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(7, 1, "P")
            , console.log(FullyData[4].rating)
        )
    }
    const toggle4Answer8InQuestion5 = () => {
        FullyData[4].rating[7] === null ? (FullyData[4].rating.push("VP"), console.log(FullyData[4].rating)) : (
            FullyData[1].rating.splice(7, 1, "VP")
            , console.log(FullyData[4].rating)
        )
    }

    return (
        <View style={[styles.container, { backgroundColor: Color.white }]}>
            <HeaderStack
                borderBottomWith={1}
                color={Color.primary}
                goBack={() => navigation.goBack()}
            />
            <ScrollView>
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
                <ScrollView horizontal>
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
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <TouchableOpacity onPress={toggleQuestion1} style={questionColor1.questionNumber}>
                                    <Text style={questionColor1.container}>1</Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: "row", marginLeft: 40 }}>
                                    <Tooltip backgroundColor={Color.secondary} popover={<Pops
                                        circle1={toggle1Answer1InQuestion1}
                                        circle2={toggle2Answer1InQuestion1}
                                        circle3={toggle3Answer1InQuestion1}
                                        circle4={toggle4Answer1InQuestion1}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer2InQuestion1}
                                        circle2={toggle2Answer2InQuestion1}
                                        circle3={toggle3Answer2InQuestion1}
                                        circle4={toggle4Answer2InQuestion1}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer3InQuestion1}
                                        circle2={toggle2Answer3InQuestion1}
                                        circle3={toggle3Answer3InQuestion1}
                                        circle4={toggle4Answer3InQuestion1}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer4InQuestion1}
                                        circle2={toggle2Answer4InQuestion1}
                                        circle3={toggle3Answer4InQuestion1}
                                        circle4={toggle4Answer4InQuestion1}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer5InQuestion1}
                                        circle2={toggle2Answer5InQuestion1}
                                        circle3={toggle3Answer5InQuestion1}
                                        circle4={toggle4Answer5InQuestion1}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer6InQuestion1}
                                        circle2={toggle2Answer6InQuestion1}
                                        circle3={toggle3Answer6InQuestion1}
                                        circle4={toggle4Answer6InQuestion1}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer7InQuestion1}
                                        circle2={toggle2Answer7InQuestion1}
                                        circle3={toggle3Answer7InQuestion1}
                                        circle4={toggle4Answer7InQuestion1}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer8InQuestion1}
                                        circle2={toggle2Answer8InQuestion1}
                                        circle3={toggle3Answer8InQuestion1}
                                        circle4={toggle4Answer8InQuestion1}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={toggleQuestion2} style={questionColor2.questionNumber}>
                                    <Text style={questionColor2.container}>2</Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: "row", marginLeft: 40 }}>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer1InQuestion2}
                                        circle2={toggle2Answer1InQuestion2}
                                        circle3={toggle3Answer1InQuestion2}
                                        circle4={toggle4Answer1InQuestion2}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer2InQuestion2}
                                        circle2={toggle2Answer2InQuestion2}
                                        circle3={toggle3Answer2InQuestion2}
                                        circle4={toggle4Answer2InQuestion2}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer3InQuestion2}
                                        circle2={toggle2Answer3InQuestion2}
                                        circle3={toggle3Answer3InQuestion2}
                                        circle4={toggle4Answer3InQuestion2}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer4InQuestion2}
                                        circle2={toggle2Answer4InQuestion2}
                                        circle3={toggle3Answer4InQuestion2}
                                        circle4={toggle4Answer4InQuestion2}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer5InQuestion2}
                                        circle2={toggle2Answer5InQuestion2}
                                        circle3={toggle3Answer5InQuestion2}
                                        circle4={toggle4Answer5InQuestion2}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer6InQuestion2}
                                        circle2={toggle2Answer6InQuestion2}
                                        circle3={toggle3Answer6InQuestion2}
                                        circle4={toggle4Answer6InQuestion2}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer7InQuestion2}
                                        circle2={toggle2Answer7InQuestion2}
                                        circle3={toggle3Answer7InQuestion2}
                                        circle4={toggle4Answer7InQuestion2}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer8InQuestion2}
                                        circle2={toggle2Answer8InQuestion2}
                                        circle3={toggle3Answer8InQuestion2}
                                        circle4={toggle4Answer8InQuestion2}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={toggleQuestion3} style={questionColor3.questionNumber}>
                                    <Text style={questionColor3.container}>3</Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: "row", marginLeft: 40 }}>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer1InQuestion3}
                                        circle2={toggle2Answer1InQuestion3}
                                        circle3={toggle3Answer1InQuestion3}
                                        circle4={toggle4Answer1InQuestion3}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer2InQuestion3}
                                        circle2={toggle2Answer2InQuestion3}
                                        circle3={toggle3Answer2InQuestion3}
                                        circle4={toggle4Answer2InQuestion3}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer3InQuestion3}
                                        circle2={toggle2Answer3InQuestion3}
                                        circle3={toggle3Answer3InQuestion3}
                                        circle4={toggle4Answer3InQuestion3}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer4InQuestion3}
                                        circle2={toggle2Answer4InQuestion3}
                                        circle3={toggle3Answer4InQuestion3}
                                        circle4={toggle4Answer4InQuestion3}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer5InQuestion3}
                                        circle2={toggle2Answer5InQuestion3}
                                        circle3={toggle3Answer5InQuestion3}
                                        circle4={toggle4Answer5InQuestion3}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer6InQuestion3}
                                        circle2={toggle2Answer6InQuestion3}
                                        circle3={toggle3Answer6InQuestion3}
                                        circle4={toggle4Answer6InQuestion3}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer7InQuestion3}
                                        circle2={toggle2Answer7InQuestion3}
                                        circle3={toggle3Answer7InQuestion3}
                                        circle4={toggle4Answer7InQuestion3}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer8InQuestion3}
                                        circle2={toggle2Answer8InQuestion3}
                                        circle3={toggle3Answer8InQuestion3}
                                        circle4={toggle4Answer8InQuestion3}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={toggleQuestion4} style={questionColor4.questionNumber}>
                                    <Text style={questionColor4.container}>4</Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: "row", marginLeft: 40 }}>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer1InQuestion4}
                                        circle2={toggle2Answer1InQuestion4}
                                        circle3={toggle3Answer1InQuestion4}
                                        circle4={toggle4Answer1InQuestion4}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer2InQuestion4}
                                        circle2={toggle2Answer2InQuestion4}
                                        circle3={toggle3Answer2InQuestion4}
                                        circle4={toggle4Answer2InQuestion4}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer3InQuestion4}
                                        circle2={toggle2Answer3InQuestion4}
                                        circle3={toggle3Answer3InQuestion4}
                                        circle4={toggle4Answer3InQuestion4}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer4InQuestion4}
                                        circle2={toggle2Answer4InQuestion4}
                                        circle3={toggle3Answer4InQuestion4}
                                        circle4={toggle4Answer4InQuestion4}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer5InQuestion4}
                                        circle2={toggle2Answer5InQuestion4}
                                        circle3={toggle3Answer5InQuestion4}
                                        circle4={toggle4Answer5InQuestion4}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer6InQuestion4}
                                        circle2={toggle2Answer6InQuestion4}
                                        circle3={toggle3Answer6InQuestion4}
                                        circle4={toggle4Answer6InQuestion4}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer7InQuestion4}
                                        circle2={toggle2Answer7InQuestion4}
                                        circle3={toggle3Answer7InQuestion4}
                                        circle4={toggle4Answer7InQuestion4}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer8InQuestion4}
                                        circle2={toggle2Answer8InQuestion4}
                                        circle3={toggle3Answer8InQuestion4}
                                        circle4={toggle4Answer8InQuestion4}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={toggleQuestion5} style={questionColor5.questionNumber}>
                                    <Text style={questionColor5.container}>5</Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: "row", marginLeft: 40 }}>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer1InQuestion5}
                                        circle2={toggle2Answer1InQuestion5}
                                        circle3={toggle3Answer1InQuestion5}
                                        circle4={toggle4Answer1InQuestion5}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer2InQuestion5}
                                        circle2={toggle2Answer2InQuestion5}
                                        circle3={toggle3Answer2InQuestion5}
                                        circle4={toggle4Answer2InQuestion5}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer3InQuestion5}
                                        circle2={toggle2Answer3InQuestion5}
                                        circle3={toggle3Answer3InQuestion5}
                                        circle4={toggle4Answer3InQuestion5}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer4InQuestion5}
                                        circle2={toggle2Answer4InQuestion5}
                                        circle3={toggle3Answer4InQuestion5}
                                        circle4={toggle4Answer4InQuestion5}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer5InQuestion5}
                                        circle2={toggle2Answer5InQuestion5}
                                        circle3={toggle3Answer5InQuestion5}
                                        circle4={toggle4Answer5InQuestion5}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer6InQuestion5}
                                        circle2={toggle2Answer6InQuestion5}
                                        circle3={toggle3Answer6InQuestion5}
                                        circle4={toggle4Answer6InQuestion5}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer7InQuestion5}
                                        circle2={toggle2Answer7InQuestion5}
                                        circle3={toggle3Answer7InQuestion5}
                                        circle4={toggle4Answer7InQuestion5}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                    <Tooltip popover={<Pops
                                        circle1={toggle1Answer8InQuestion5}
                                        circle2={toggle2Answer8InQuestion5}
                                        circle3={toggle3Answer8InQuestion5}
                                        circle4={toggle4Answer8InQuestion5}
                                    />}>
                                        <View style={styles.circle}>
                                            <View style={styles.subCircle} />
                                        </View>
                                    </Tooltip>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                {/* <Table /> */}
            </ScrollView>
            <View style={styles.footerContainer}>
                <Text style={styles.footerTitle}>{MatrixQuestions[questionNumber].title}</Text>
                <Text style={styles.footerDescription}>{MatrixQuestions[questionNumber].question}</Text>
                <View style={{ position: "absolute", bottom: 0, right: 0, left: 0 }}>
                    <Footer
                        goBack={() => navigation.goBack()}
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
    )
}
export default DiversityMatrix;