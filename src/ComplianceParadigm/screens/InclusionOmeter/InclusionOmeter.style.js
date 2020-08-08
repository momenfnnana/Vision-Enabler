import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        textTransform: "uppercase",
        color: Color.primary,
        marginVertical: "7%",
        marginHorizontal: "7%"
    },
    completeTitle: {
        color: Color.secondary
    },
    head: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: "5%"
    },
    headTitle: {
        color: Color.white,
        fontSize: 23
    },
    headRange: {
        color: Color.white,
        fontSize: 18
    },
    View: {
        borderRadius: 20,
        width: "25%",
        margin: 10
    },
    line: {
        borderBottomColor: `${Color.white}50`,
        borderBottomWidth: 1,
        width: "80%",
        alignSelf: "center",
        paddingTop: "5%"
    },
    descriptionContainer: {
        paddingVertical: "5%"
    },
    description: {
        fontSize: 16,
        color: Color.white,
        paddingHorizontal: "8%",
    }
})
export default styles;