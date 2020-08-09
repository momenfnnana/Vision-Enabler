import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    image: {
        position: "absolute",
        top: 0,
        right: 0,
        resizeMode: "contain"
    },
    profileImage: {
        height: 70,
        width: 70,
        borderRadius: 60,
        alignSelf: "flex-start",
    },
    personalInformation: {
        margin: "5%",
        flexDirection: "row"
    },
    text: {
        marginLeft: "3%",
        justifyContent: "center"
    },
    name: {
        color: Color.primary,
        fontSize: 21
    },
    job: {
        color: Color.secondary,
        fontSize: 11
    },
    editProfile: {
        height: 60,
        width: 60,
        borderRadius: 35,
        backgroundColor: Color.primary,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: "5%",
        bottom: "-10%"
    },
    cardContainer: {
        height: 50,
        width: 50,
        backgroundColor: Color.primary,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        margin: "5%",
    },
    title: {
        fontSize: 15,
        color: Color.primary
    },
    description: {
        fontSize: 13,
        color: Color.black + 90,
        width: "100%"
    },
    line: {
        height: 1,
        width: "90%",
        alignSelf: "center"
    }
})
export default styles;