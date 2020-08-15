// 
import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    textContainer: {
        margin: "5%"
    },
    title: {
        color: Color.primary,
        fontSize: 22,
        textTransform: "uppercase",
        fontFamily: "Altissimo_bold"
    },
    description: {
        color: Color.secondary,
        marginTop: "3%",
        lineHeight: 20
    },
    typeContainer: {
        backgroundColor: Color.primary
    },
    typeText: {
        color: Color.white
    },
    container: {
        marginVertical: "2%",
        width: "90%",
        alignSelf: "center",
        borderRadius: 20
    },
    pupsCorner: {
        resizeMode: "contain",
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: -1,
        borderTopRightRadius: 20,

    },
    cardData: {
        fontSize: 18,
        fontFamily: "Altissimo_bold",
        textTransform: "uppercase",
        color: Color.white,
        alignSelf: "center",
        textAlign: "center",
        width: "60%",
        marginVertical: "13%",
        lineHeight: 20
    }
})
export default styles;