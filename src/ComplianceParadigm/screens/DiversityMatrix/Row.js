import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Tooltip } from 'react-native-elements';
import Color from '@Assets/Constant';
import styles from './DiversityMatrix.style';
import Pops from './Pops';
const Row = ({
    data,
    IDcolor,
    backgroundID,
    Tooltips,
    toggle1Answer1InQuestion1,
    toggle2Answer1InQuestion1,
    toggle3Answer1InQuestion1,
    toggle4Answer1InQuestion1
}) => {
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
    const [subCircleBackground, setSubCircleBackground] = useState(Color.secondary);

    const [backgroundColor11, setBackgroundColor11] = useState(Color.secondary)
    const [backgroundColor12, setBackgroundColor12] = useState(Color.secondary)
    const [backgroundColor13, setBackgroundColor13] = useState(Color.secondary)
    const [backgroundColor14, setBackgroundColor14] = useState(Color.secondary)
    const [backgroundColor15, setBackgroundColor15] = useState(Color.secondary)
    const [backgroundColor16, setBackgroundColor16] = useState(Color.secondary)
    const [backgroundColor17, setBackgroundColor17] = useState(Color.secondary)
    const [backgroundColor18, setBackgroundColor18] = useState(Color.secondary)
    const [backgroundColor21, setBackgroundColor21] = useState(Color.secondary)
    const [backgroundColor22, setBackgroundColor22] = useState(Color.secondary)
    const [backgroundColor23, setBackgroundColor23] = useState(Color.secondary)
    const [backgroundColor24, setBackgroundColor24] = useState(Color.secondary)
    const [backgroundColor25, setBackgroundColor25] = useState(Color.secondary)
    const [backgroundColor26, setBackgroundColor26] = useState(Color.secondary)
    const [backgroundColor27, setBackgroundColor27] = useState(Color.secondary)
    const [backgroundColor28, setBackgroundColor28] = useState(Color.secondary)
    const [backgroundColor31, setBackgroundColor31] = useState(Color.secondary)
    const [backgroundColor32, setBackgroundColor32] = useState(Color.secondary)
    const [backgroundColor33, setBackgroundColor33] = useState(Color.secondary)
    const [backgroundColor34, setBackgroundColor34] = useState(Color.secondary)
    const [backgroundColor35, setBackgroundColor35] = useState(Color.secondary)
    const [backgroundColor36, setBackgroundColor36] = useState(Color.secondary)
    const [backgroundColor37, setBackgroundColor37] = useState(Color.secondary)
    const [backgroundColor38, setBackgroundColor38] = useState(Color.secondary)
    const [backgroundColor41, setBackgroundColor41] = useState(Color.secondary)
    const [backgroundColor42, setBackgroundColor42] = useState(Color.secondary)
    const [backgroundColor43, setBackgroundColor43] = useState(Color.secondary)
    const [backgroundColor44, setBackgroundColor44] = useState(Color.secondary)
    const [backgroundColor45, setBackgroundColor45] = useState(Color.secondary)
    const [backgroundColor46, setBackgroundColor46] = useState(Color.secondary)
    const [backgroundColor47, setBackgroundColor47] = useState(Color.secondary)
    const [backgroundColor48, setBackgroundColor48] = useState(Color.secondary)
    const [backgroundColor51, setBackgroundColor51] = useState(Color.secondary)
    const [backgroundColor52, setBackgroundColor52] = useState(Color.secondary)
    const [backgroundColor53, setBackgroundColor53] = useState(Color.secondary)
    const [backgroundColor54, setBackgroundColor54] = useState(Color.secondary)
    const [backgroundColor55, setBackgroundColor55] = useState(Color.secondary)
    const [backgroundColor56, setBackgroundColor56] = useState(Color.secondary)
    const [backgroundColor57, setBackgroundColor57] = useState(Color.secondary)
    const [backgroundColor58, setBackgroundColor58] = useState(Color.secondary)
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

    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={toggleQuestion1} style={backgroundID}>
                <Text style={IDcolor}>{data.id}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginLeft: 40 }}>
                <Tooltip backgroundColor={Color.secondary}
                    popover={<Pops
                        circle1={toggle1Answer1InQuestion1}
                        circle2={toggle2Answer1InQuestion1}
                        circle3={toggle3Answer1InQuestion1}
                        circle4={toggle4Answer1InQuestion1}
                    />}>
                    <View style={styles.circle}>
                        <View style={[styles.subCircle, { backgroundColor: subCircleBackground }]} />
                    </View>
                </Tooltip>
                <Tooltip backgroundColor={Color.secondary}
                    popover={<Pops
                        circle1={toggle1Answer1InQuestion1}
                        circle2={toggle2Answer1InQuestion1}
                        circle3={toggle3Answer1InQuestion1}
                        circle4={toggle4Answer1InQuestion1}
                    />}>
                    <View style={styles.circle}>
                        <View style={[styles.subCircle, { backgroundColor: subCircleBackground }]} />
                    </View>
                </Tooltip>
                <Tooltip backgroundColor={Color.secondary}
                    popover={<Pops
                        circle1={toggle1Answer1InQuestion1}
                        circle2={toggle2Answer1InQuestion1}
                        circle3={toggle3Answer1InQuestion1}
                        circle4={toggle4Answer1InQuestion1}
                    />}>
                    <View style={styles.circle}>
                        <View style={[styles.subCircle, { backgroundColor: subCircleBackground }]} />
                    </View>
                </Tooltip>
                <Tooltip backgroundColor={Color.secondary}
                    popover={<Pops
                        circle1={toggle1Answer1InQuestion1}
                        circle2={toggle2Answer1InQuestion1}
                        circle3={toggle3Answer1InQuestion1}
                        circle4={toggle4Answer1InQuestion1}
                    />}>
                    <View style={styles.circle}>
                        <View style={[styles.subCircle, { backgroundColor: subCircleBackground }]} />
                    </View>
                </Tooltip>
                <Tooltip backgroundColor={Color.secondary}
                    popover={<Pops
                        circle1={toggle1Answer1InQuestion1}
                        circle2={toggle2Answer1InQuestion1}
                        circle3={toggle3Answer1InQuestion1}
                        circle4={toggle4Answer1InQuestion1}
                    />}>
                    <View style={styles.circle}>
                        <View style={[styles.subCircle, { backgroundColor: subCircleBackground }]} />
                    </View>
                </Tooltip>
                <Tooltip backgroundColor={Color.secondary}
                    popover={<Pops
                        circle1={toggle1Answer1InQuestion1}
                        circle2={toggle2Answer1InQuestion1}
                        circle3={toggle3Answer1InQuestion1}
                        circle4={toggle4Answer1InQuestion1}
                    />}>
                    <View style={styles.circle}>
                        <View style={[styles.subCircle, { backgroundColor: subCircleBackground }]} />
                    </View>
                </Tooltip>
                <Tooltip backgroundColor={Color.secondary}
                    popover={<Pops
                        circle1={toggle1Answer1InQuestion1}
                        circle2={toggle2Answer1InQuestion1}
                        circle3={toggle3Answer1InQuestion1}
                        circle4={toggle4Answer1InQuestion1}
                    />}>
                    <View style={styles.circle}>
                        <View style={[styles.subCircle, { backgroundColor: subCircleBackground }]} />
                    </View>
                </Tooltip>
                <Tooltip backgroundColor={Color.secondary}
                    popover={<Pops
                        circle1={toggle1Answer1InQuestion1}
                        circle2={toggle2Answer1InQuestion1}
                        circle3={toggle3Answer1InQuestion1}
                        circle4={toggle4Answer1InQuestion1}
                    />}>
                    <View style={styles.circle}>
                        <View style={[styles.subCircle, { backgroundColor: subCircleBackground }]} />
                    </View>
                </Tooltip>
            </View>
        </View>
    )
}
export default Row;