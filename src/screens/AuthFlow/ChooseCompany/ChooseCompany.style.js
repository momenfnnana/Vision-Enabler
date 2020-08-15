import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    image: {
        position: "absolute",
        top: 0,
        right: 0,
        resizeMode: "contain",
    },
    card: {
        flexDirection: "row",
        width: "90%",
        shadowColor: Color.primary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        marginVertical: "2%",
        borderRadius: 20,
        alignSelf: "center",
        paddingVertical: "2%",
        paddingLeft: "3%"
    },
    imageContainer: {
        borderColor: "#F3F1F1",
        borderWidth: 1,
        padding: "4%",
        borderRadius: 10
    },
    cardImage: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    textContainer: {
        justifyContent: "center",
        marginLeft: "3%"
    },
    title: {
        fontSize: 18,
        textTransform: "uppercase",
        fontFamily: "Altissimo",
        color: Color.primary,
        width: "74%"
    },
    description: {
        fontSize: 14,
        color: Color.secondary
    }
})
export default styles;