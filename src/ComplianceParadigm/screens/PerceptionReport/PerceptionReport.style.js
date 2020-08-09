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