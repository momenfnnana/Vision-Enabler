import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    leftColumn: {
        alignSelf: "flex-start",
        marginTop: 120,
    },
    rowNumCol1: {
        marginVertical: 12,
        backgroundColor: Color.primary,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4
    },
    rowNum1: {
        color: Color.white,
        fontSize: 14
    },
    rowNumCol: {
        marginVertical: 12,
        backgroundColor: Color.white,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4
    },
    rowNum: {
        color: Color.primary,
        fontSize: 14
    },
    topRow: {
        flexDirection: "row",
        marginVertical: 20
    },
    Image: {
        marginHorizontal: 10
    },
    table: {
        flexDirection: "row",
        width: 800,
        justifyContent: "space-around"
    },
    circle: {
        backgroundColor: Color.white,
        height: 23,
        width: 23,
        borderColor: Color.secondary,
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    subCircle: {
        height: 15,
        width: 15,
        borderRadius: 10,
    },
})
export default styles;