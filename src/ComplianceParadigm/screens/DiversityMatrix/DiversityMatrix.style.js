// 
import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    compalianceMatrix: {
        fontSize: 22,
        color: Color.primary,
        textTransform: "uppercase",
        marginTop: "5%",
        marginLeft: "5%"
    },
    awareness: {
        fontSize: 15,
        color: "#FF7058",
        marginTop: "2%",
        marginLeft: "5%",
        fontFamily: "Altissimo"
    },
    dotsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "5%",
        alignSelf: "center",
        width: "90%"
    },
    greatContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRightColor: "#F2F3F7",
        borderRightWidth: 1
    },
    greatDot: {
        backgroundColor: "#44DD7F",
        height: 10,
        width: 10,
        borderRadius: 10,
        marginHorizontal: "7%"
    },
    greatText: {
        color: "#44DD7F"
    },
    avarageContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRightColor: "#F2F3F7",
        borderRightWidth: 1
    },
    avarageDot: {
        backgroundColor: "#FF7058",
        height: 10,
        width: 10,
        borderRadius: 10,
        marginHorizontal: "7%"
    },
    avarageText: {
        color: "#FF7058"
    },
    poorContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRightColor: "#F2F3F7",
        borderRightWidth: 1
    },
    poorDot: {
        backgroundColor: "#FA475F",
        height: 10,
        width: 10,
        borderRadius: 10,
        marginHorizontal: "7%"
    },
    VerypoorDot: {
        backgroundColor: "#000",
        height: 10,
        width: 10,
        borderRadius: 10,
        marginHorizontal: "7%"
    },
    poorText: {
        color: "#FA475F"
    },
    VerypoorText: {
        color: "#000"
    },
    footerContainer: {
        height: 180,
        backgroundColor: Color.primary,
        marginTop: "8%",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    footerTitle: {
        fontSize: 16,
        color: Color.white,
        marginLeft: "5%",
        marginTop: "5%"
    },
    footerDescription: {
        fontSize: 13,
        color: Color.white,
        marginLeft: "5%",
        marginTop: "1%"
    },
    avarageRangeContainer2: {
        borderRightColor: `${Color.secondary}30`,
        borderRightWidth: 1,
        paddingRight: "5%"
    },
    topRow: {
        flexDirection: "row",
        marginVertical: 20,
        marginLeft: 50
    },
    Image: {
        marginHorizontal: 10
    },
    leftColumn: {
        alignSelf: "flex-start",
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
    circle: {
        backgroundColor: Color.white,
        height: 23,
        width: 23,
        borderColor: Color.secondary,
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 25,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "4.65%"
    },
    subCircle: {
        height: 15,
        width: 15,
        borderRadius: 10,
        backgroundColor: Color.secondary,
    },
})
export default styles;