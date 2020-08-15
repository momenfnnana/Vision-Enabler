// 
import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerTitle: {
        fontSize: 16,
        color: Color.primary,
        position: "absolute",
        top: "5%",
        left: "30%",
        fontFamily: "DINNextLTProRegular",
        marginBottom: "10%"
    },
    parentModal: {
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    modalContainer: {
        flex: 1,
    },
    questionsNumber: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "10%"
    },
    backgroundLine: {
        borderBottomWidth: 1,
        width: "90%",
        borderBottomColor: `${Color.secondary}50`,
        position: "absolute",
        alignSelf: "center"
    },
    questionNumberContainer: {
        backgroundColor: Color.primary,
        paddingVertical: "3%",
        paddingHorizontal: "7%",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Color.primary,
    },
    questionNumberStyle: {
        color: Color.white
    },
    secondaryQuestionsContainer: {
        backgroundColor: Color.white,
        paddingVertical: "3%",
        paddingHorizontal: "7%",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: `${Color.secondary}50`,
    },
    questionsScroll: {
        padding: "8%"
    },
    title: {
        fontSize: 16,
        color: Color.primary
    },
    subTitle: {
        fontSize: 14,
        color: `${Color.black}80`
    },
    slider: {
        width: "90%",
        height: 40,
        alignSelf: "center",
        marginTop: "3%",
    },
    itemMiniTitle: {
        fontSize: 16,
        color: Color.primary
    },
    itemMiniDescription: {
        fontSize: 14,
        color: `${Color.black}95`,
    },
    mainTitle: {
        fontSize: 20,
        fontFamily: "Altissimo",
        color: Color.primary,
        marginTop: "5%",
        marginLeft: "5%",
        width: "80%"
    },
    progressBarContainer: {
        width: "90%",
        alignSelf: "center",
        marginTop: "10%"
    },
    firstModal: {
        flex: 1,
        marginTop: "5%",
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
    },
    firstModalContainer: {
        height: "70%",
        backgroundColor: Color.primary,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    Question1Container: {
        backgroundColor: Color.white,
        width: "25%",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: "3%",
        borderRadius: 10,
        marginLeft: "8%",
        marginTop: "8%",
    },
    modalQuestionNumber: {
        color: Color.primary,
        fontSize: 12,
        textTransform: "uppercase"
    },
    questionTitle: {
        color: Color.white,
        fontSize: 16,
        marginTop: "5%",
        marginLeft: "8%",
    },
    questionDescription: {
        fontSize: 16,
        color: Color.white,
        marginLeft: "8%",
        marginTop: "2%"
    },
    subQuestionsContainer: {
        backgroundColor: Color.white,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: "4%",
    },
    imagesAndSliderContainer: {
        height: "100%",
        justifyContent: "flex-end"
    },
    configuration: {
        backgroundColor: Color.secondary,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    imagesContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        marginTop: "4%",
    },
    firstStep: {
        fontSize: 18,
        color: Color.white,
        fontFamily: "Altissimo"
    },
    footerContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    }
})
export default styles