import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Tooltip } from 'react-native-elements';
import Color from '@Assets/Constant';
import styles from './DiversityMatrix.style';
import Pops from './Pops';
const Row = ({
    data,
    index
}) => {
    const [IdColor, setIdColor] = useState({ style: styles.rowNum })
    const [backgroundID, setBackgroundID] = useState({ style: styles.rowNumCol })

    const [subCircleBackground, setSubCircleBackground] = useState(Color.secondary);
    const toggleQuestion1 = () => {
        backgroundID.style === styles.rowNumCol ? (
            setBackgroundID({ style: styles.rowNumCol1 }),
            setIdColor({ style: styles.rowNum1 })
        ) : (
                setBackgroundID({ style: styles.rowNumCol }),
                setIdColor({ style: styles.rowNum })
            )
    }

    const MatrixAnswers = [
        {
            id: 1,
            answers: ['A']
        },
        {
            id: 2,
            answers: []
        },
        {
            id: 3,
            answers: []
        },
        {
            id: 4,
            answers: []
        },
        {
            id: 5,
            answers: []
        },
    ]

    // pass id to index 
    // find matrix answers by id
    // overRide or creat new object containing same id new answers


    // id is the x axis 
    //index is the y axis 
    const handleClick = (id, index) => {

    }

    const handleTooltipClick = (color, index) => {
        //color = 'A'
        const foundInData = data.find(e => e.id === id)
        [{ id: 1 }]

    }

    const toggle1Answer1InQuestion1 = () => {
        if (index + 1 == data.id) {
            if (MatrixAnswers[index].answers[0] === null) {
                MatrixAnswers[index].answers[0].push('G')
            } else {
                MatrixAnswers[index].answers.splice(0, 1, 'G')
            }
            console.log(MatrixAnswers);
        } else {
            console.log("error");
        }
    };

    const toggle2Answer1InQuestion1 = () => {
        if (index + 1 == data.id) {
            if (MatrixAnswers[index].answers[0] === null) {
                MatrixAnswers[index].answers[0].push('A')
            } else {
                MatrixAnswers[index].answers.splice(0, 1, 'A')
            }
            console.log(MatrixAnswers);
        } else {
            console.log("error");
        }
    };

    const toggle3Answer1InQuestion1 = () => {
        if (index + 1 == data.id) {
            if (MatrixAnswers[index].answers[0] === null) {
                MatrixAnswers[index].answers[0].push('P')
            } else {
                MatrixAnswers[index].answers.splice(0, 1, 'P')
            }
            console.log(MatrixAnswers);
        } else {
            console.log("error");
        }
    };

    const toggle4Answer1InQuestion1 = () => {
        if (index + 1 == data.id) {
            if (MatrixAnswers[index].answers[0] === null) {
                MatrixAnswers[index].answers[0].push('VP')
            } else {
                MatrixAnswers[index].answers.splice(0, 1, 'VP')
            }
            console.log(MatrixAnswers);
        } else {
            console.log("error");
        }
    };

    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={toggleQuestion1} style={backgroundID.style}>
                <Text style={IdColor.style}>{data.id}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginLeft: 40 }}>
                <Tooltip backgroundColor={Color.secondary}
                    popover={<Pops
                        circle1={() => handleTooltipClick('G')}
                        circle2={() => handleTooltipClick('A')}
                        circle3={() => handleTooltipClick('P')}
                        circle4={() => handleTooltipClick('VP')}
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