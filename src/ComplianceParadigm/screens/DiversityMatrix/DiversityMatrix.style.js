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
        justifyContent: "space-around",
        marginTop: "5%",
        alignSelf: "center",
        width: "100%"
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
        alignItems: "center"
    },
    poorDot: {
        backgroundColor: "#FA475F",
        height: 10,
        width: 10,
        borderRadius: 10,
        marginHorizontal: "7%"
    },
    poorText: {
        color: "#FA475F"
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
})
export default styles