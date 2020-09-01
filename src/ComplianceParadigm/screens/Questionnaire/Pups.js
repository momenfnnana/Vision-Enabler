import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Questionnaire.style'
const Pups = ({ data, isActive, index, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={isActive ? styles.questionNumberContainer : styles.secondaryQuestionsContainer} >
            <Text style={isActive ? styles.PrimaryquestionNumberStyle : styles.SecondayquestionNumberStyle}>{index + 1}</Text>
        </TouchableOpacity>
    )
}
export default Pups;