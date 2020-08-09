import { StyleSheet } from 'react-native';
import Color from '@Assets/Constant';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    header: {
        height: 300,
        width: "100%",
        backgroundColor: Color.primary,
    },
    Profile: {
        color: Color.white,
        alignSelf: "center",
        marginTop: "9%",
        fontSize: 16
    },
    setting: {
        position: "absolute",
        right: "7%",
        top: "12%"
    },
    pups: {
        position: "absolute",
        top: "10%"
    },
    profileImageContainer: {
        height: 120,
        width: 120,
        borderRadius: 60,
        alignSelf: "center",
        marginTop: "5%"
    },
    name: {
        color: Color.white,
        fontSize: 25,
        alignSelf: "center",
        marginTop: "3%"
    },
    job: {
        color: Color.white,
        fontSize: 11,
        alignSelf: "center",
        marginTop: "2%"
    },
    matrixContainer: {
        margin: "5%",
    },
    title: {
        color: Color.primary,
        fontSize: 17,
        margin: "1%"
    },
    qestionaerNumber: {
        color: Color.black + 95,
        marginBottom: "7%",
        fontSize: 15
    }
})
export default styles;