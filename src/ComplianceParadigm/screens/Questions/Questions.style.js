// 
import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container2: {
        backgroundColor: `${Color.black}05`,
        marginTop: "2%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignSelf: "center",
    },
    headerTitle2: {
        fontSize: 16,
        color: Color.primary,
        position: "absolute",
        top: "3.5%",
        left: "30%",
        fontFamily: "DINNextLTProRegular",
        marginBottom: "10%"
    },
    line2: {
        borderColor: Color.primary,
        borderWidth: 1,
        width: 30,
        borderRadius: 50,
        height: "0%",
        alignSelf: "center",
        marginTop: "2%"
    },
    questionsScroll2: {
        padding: "5%"
    },
    title2: {
        fontSize: 16,
        color: Color.primary
    },
    subTitle2: {
        fontSize: 14,
        color: `${Color.black}80`
    },
    questionsContainer2: {
        marginTop: "5%"
    },
    qustions2: {
        width: "80%",
        fontSize: 14,
        color: "#38465F",
        marginLeft: "2%"
    },
    questionContainer2: {
        flexDirection: "row",
        shadowColor: Color.primary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 3,
        backgroundColor: Color.white,
        borderRadius: 10,
        marginVertical: "2%",
        paddingVertical: "5%",
        justifyContent: "center",
        alignItems: "center"
    }
})
export default styles;