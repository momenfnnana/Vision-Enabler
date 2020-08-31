import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Tooltip } from 'react-native-elements';
import Color from '@Assets/Constant';
import styles from './DiversityMatrix.style';
import Pops from './Pops';
import ToolTips from '@ParadigmFakeData/Tooltips';
import { Context as AuthContext } from '@Context/AuthContext';
const Row = ({ data , qIndex, onPress, isActive}) => {
    const [IdColor, setIdColor] = useState({ style: styles.rowNum })
    const [backgroundID, setBackgroundID] = useState({ style: styles.rowNumCol })
    const [subCircleBackground, setSubCircleBackground] = useState(Color.secondary);
    const { MatrixAnswers } = useContext(AuthContext);
    const {  state: {MatrixAnswersArray} } = useContext(AuthContext);
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
    const getColor = (matrixKey)=>{
        if(matrixKey == null){
            return Color.secondary;
        }
        let colors = [];
        colors['G'] = '#44DD7F';
        colors['A'] = '#FF7058';
        colors['P'] = '#FA475F';
        colors['VP']= '#000000';
        return colors[matrixKey];
    }

    let _data = MatrixAnswersArray;

    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={onPress} style={[backgroundID.style,
                isActive? styles.activeRowNumCol: null]}>
                <Text style={[IdColor.style, isActive? styles.activeText: null]}>{data.id}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginLeft: 40 }}>
                {
                    ToolTips.map((i, index) => {
                        const handelClick = async (color) => {
                            _data[qIndex].answers[index] = color;
                            MatrixAnswers({ id: qIndex + 1, answers: _data[qIndex].answers,
                                questionIndex: qIndex ,answerIndex:index });
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
                                    <View style={[styles.subCircle, 
                                        { backgroundColor: getColor(MatrixAnswersArray[qIndex].answers[index]) }]} />
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