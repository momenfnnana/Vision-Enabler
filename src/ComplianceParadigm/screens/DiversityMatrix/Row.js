import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Tooltip } from 'react-native-elements';
import Color from '@Assets/Constant';
import styles from './DiversityMatrix.style';
import Pops from './Pops';
import ToolTips from '@ParadigmFakeData/Tooltips';
import { Context as AuthContext } from '@Context/AuthContext';
const Row = ({ data }) => {
    const [IdColor, setIdColor] = useState({ style: styles.rowNum })
    const [backgroundID, setBackgroundID] = useState({ style: styles.rowNumCol })
    const [subCircleBackground, setSubCircleBackground] = useState(Color.secondary);
    const { MatrixAnswers } = useContext(AuthContext);
    const sendData = async () => {
        setIsLoading(true);
        try {
            const response = await login(_data);
            if (response.status == true) {
                navigation.navigate('QuestionnaireA1')
            } else {
                alert("you should have to answer all questions");
            }
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setTimeout(() => {
                alert("somthingwent wrong with us");
            }, 300);
        }
    };

    let _data = [
        {
            id: 1,
            answers: [null, null, null, null, null, null, null, null]
        },
        {
            id: 2,
            answers: [null, null, null, null, null, null, null, null]
        },
        {
            id: 3,
            answers: [null, null, null, null, null, null, null, null]
        },
        {
            id: 4,
            answers: [null, null, null, null, null, null, null, null]
        },
        {
            id: 5,
            answers: [null, null, null, null, null, null, null, null]
        }
    ];

    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity style={backgroundID.style}>
                <Text style={IdColor.style}>{data.id}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginLeft: 40 }}>
                {
                    ToolTips.map((i, index) => {
                        const handelClick = async (color) => {
                            let myIndex = _data.findIndex(x => x.id === data.id);
                            _data[myIndex].answers[index] = color;
                            // console.log("_data", _data);
                            // console.log("myIndex", myIndex);
                            // console.log(_data);
                            await _data[myIndex].answers[_data[myIndex].answers.length - 1] !== null && await MatrixAnswers({ id: myIndex + 1, answers: _data[myIndex].answers })
                        };
                        return (
                            <Tooltip key={index.toString()} backgroundColor={Color.secondary}
                                popover={<Pops
                                    circle1={() => handelClick('G')}
                                    circle2={() => handelClick('A')}
                                    circle3={() => handelClick('P')}
                                    circle4={() => handelClick('VP')}
                                />}>
                                <View style={styles.circle}>
                                    <View style={[styles.subCircle, { backgroundColor: subCircleBackground }]} />
                                </View>
                            </Tooltip>
                        )
                    })
                }
            </View>
        </View>
    )
}
export default Row;