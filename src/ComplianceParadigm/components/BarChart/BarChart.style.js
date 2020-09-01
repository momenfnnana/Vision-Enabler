import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    avarageRangesContainer: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-around",
        width: "100%",
        marginBottom: "10%"
    },
    avarageRangeContainer1: {
        borderRightColor: `${Color.secondary}30`,
        borderRightWidth: 1,
        paddingRight: "5%"
    },
    avarageRange1: {
        backgroundColor: "#44DD7F",
        height: 4,
        width: "30%",
        borderRadius: 50
    },
    avarageRangeText1: {
        color: Color.white,
        marginTop: "10%"
    },
    avarageRange2: {
        backgroundColor: "#F77700",
        height: 4,
        width: "30%",
        borderRadius: 50
    },
    avarageRangeText2: {
        color: Color.white,
        marginTop: "10%"
    },
    avarageRangeContainer3: {
        borderRightColor: `${Color.secondary}30`,
        borderRightWidth: 1,
        paddingRight: "5%"
    },
    avarageRange3: {
        backgroundColor: "#FA475F",
        height: 4,
        width: "30%",
        borderRadius: 50
    },
    avarageRangeText3: {
        color: Color.white,
        marginTop: "10%"
    },
    chart: {
        height: 510
    },
    descriptionShape: {
        backgroundColor: Color.secondary,
        borderRadius: 15,
        height: "50%",
        width: "25%",
        justifyContent: "center",
        alignItems: "center"
    },
    yAxis: {
        color: Color.white,
        marginLeft: 20
    }
})
export default styles;