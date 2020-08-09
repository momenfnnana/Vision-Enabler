import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    contianer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: Color.white,
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45,
        paddingVertical: "3%",
    },
    goback: {
        backgroundColor: Color.white,
        borderColor: Color.primary,
        borderWidth: 2,
        paddingVertical: "3%",
        paddingHorizontal: "7%",
        borderRadius: 50,
        marginBottom: "2%"
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    screenButton: {
        borderRadius: 20,
        margin: 5
    },
    nextButtonContainer: {
        backgroundColor: Color.primary,
        paddingVertical: "3%",
        paddingHorizontal: "7%",
        borderRadius: 50,
        marginBottom: "2%"
    },
    next: {
        color: Color.white,
        fontSize: 16,
    }
})
export default styles