// 
import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './DiversityMatrix.style';
import Color from '@Assets/Constant';
// import { Context as AuthContext } from '@Context/AuthContext';
const Pops = ({ circle1, circle2, circle3, circle4 }) => {
    // const { setPopsColor } = useContext(AuthContext);
    // const onPress1 = () => {
    //     setPopsColor(Color.greate)
    //     circle1();
    // }
    // const onPress2 = () => {
    //     setPopsColor(Color.average)
    //     circle2();
    // }
    // const onPress3 = () => {
    //     setPopsColor(Color.poor)
    //     circle3();
    // }
    // const onPress4 = () => {
    //     setPopsColor(Color.black)
    //     circle4();
    // }
    return (
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.circle} onPress={circle1}>
                <View style={[styles.subCircle, { backgroundColor: Color.greate }]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle} onPress={circle2}>
                <View style={[styles.subCircle, { backgroundColor: Color.average }]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle} onPress={circle3}>
                <View style={[styles.subCircle, { backgroundColor: Color.poor }]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle} onPress={circle4}>
                <View style={[styles.subCircle, { backgroundColor: Color.black }]} />
            </TouchableOpacity>
        </View>
    )
}
export default Pops;