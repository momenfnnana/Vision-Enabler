import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
} from 'react-native';
import styles from './Table.style';
import Color from '@Assets/Constant';
import MatrixQuestions from '@ParadigmFakeData/MatrixQuestions';
const Table = () => {
    const data = {
        Great: Color.greate,
        Average: Color.average,
        Poor: Color.poor,
        Black: Color.black,
        White: Color.white
    }
    const [color, setColor] = useState(data.White);
    const [questionColor, setQuestionColor] = useState({
        container: styles.rowNum,
        questionNumber: styles.rowNumCol
    })
    const [counterItem1, setItemCounterItem1] = useState(0)
    const [counterItem2, setItemCounterItem2] = useState(0)
    return (
        <ScrollView horizontal>
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
        </ScrollView>
    )
}
export default Table;