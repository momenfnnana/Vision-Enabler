import Color from '@Assets/Constant';

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.primary
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        paddingBottom: "5%",
        borderBottomColor: `${Color.primary}20`,
        alignItems: "center",
        paddingTop: "7%",
    },
    PerceptionReport: {
        color: Color.white,
        fontSize: 22,
        fontFamily: "Altissimo_bold",
        marginVertical: "5%",
        marginLeft: "5%"
    },
    Overall: {
        fontSize: 15,
        color: Color.white,
        marginLeft: "5%",
        marginBottom: "10%",
        width: "60%"
    },
    avarageNum: {
        fontSize: 13,
        color: Color.white,
        marginLeft: "5%",
        marginBottom: "5%"
    },
    number: {
        color: "#F77700"
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
    avarageRangeContainer2: {
        borderRightColor: `${Color.secondary}30`,
        borderRightWidth: 1,
        paddingRight: "5%"
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
        paddingLeft: "5%"
    },
    descriptionShape: {
        backgroundColor: Color.secondary,
        paddingHorizontal: "3%",
        borderRadius: 15,
        height: "16%",
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        borderBottomWidth: 0.3,
        borderBottomColor: 'black',
        height: 25,
        fontSize: 16,
        marginVertical: 50,
        marginHorizontal: 20,
    },
});
export default styles