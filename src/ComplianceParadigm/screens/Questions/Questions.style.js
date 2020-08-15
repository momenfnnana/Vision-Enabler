import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        backgroundColor: `${Color.black}05`,
        marginTop: "2%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignSelf: "center",
    },
    headerTitle: {
        fontSize: 16,
        color: Color.primary,
        position: "absolute",
        top: "3.5%",
        left: "30%",
        fontFamily: "DINNextLTProRegular",
        marginBottom: "10%"
    },
    line: {
        borderColor: Color.primary,
        borderWidth: 1,
        width: 30,
        borderRadius: 50,
        height: "0%",
        alignSelf: "center",
        marginTop: "2%"
    },
    questionsScroll: {
        padding: "5%"
    },
    title: {
        fontSize: 16,
        color: Color.primary
    },
    subTitle: {
        fontSize: 14,
        color: `${Color.black}80`
    },
    questionsContainer: {
        marginTop: "5%"
    },
    qustions: {
        width: "80%",
        fontSize: 14,
        color: "#38465F",
        marginLeft: "2%"
    },
    questionContainer: {
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