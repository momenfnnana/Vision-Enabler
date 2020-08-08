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
        marginTop: "10%"
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
    }
})
export default styles