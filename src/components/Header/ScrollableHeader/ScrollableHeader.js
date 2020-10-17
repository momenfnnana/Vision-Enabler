import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Color from '@Assets/Constant';
import { AntDesign } from '@expo/vector-icons';
import * as Animated from "react-native-animatable";

const SCREEN_WIDTH = Dimensions.get('window').width;
const ScrollableHeader = ({ goBack }) => {
    return (
        <Animated.View animation="fadeInDownBig" duration={300} style={{
            backgroundColor: Color.white,
            height: "10%",
            flexDirection: "row",
            alignItems: "center",
            width: SCREEN_WIDTH,
            justifyContent: "center",
            borderBottomColor: `${Color.primary}20`,
            borderBottomWidth: 1
        }}>
            <TouchableOpacity onPress={goBack} style={{ position: "absolute", left: "5%" }} >
                <AntDesign name="arrowleft" size={24} color={Color.primary} />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, color: Color.primary, fontFamily: "Altissimo_bold" }}>Diversity</Text>
        </Animated.View>
    )
}
export default ScrollableHeader;