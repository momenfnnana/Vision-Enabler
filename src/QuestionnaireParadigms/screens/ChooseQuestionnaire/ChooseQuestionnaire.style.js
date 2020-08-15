import Color from '@Assets/Constant';
const styles = {
    container: {
        marginVertical: "2%",
        width: "90%",
        alignSelf: "center",
        borderRadius: 20
    },
    welcome: {
        fontSize: 20,
        color: Color.secondary,
        fontFamily: "Altissimo",
        textAlign: "center",
    },
    visionEnabler: {
        color: Color.primary,
        fontSize: 30,
        textAlign: "center",
        fontFamily: "Altissimo_bold",
        marginTop: "2%"
    },
    textDescription: {
        textAlign: 'center',
        width: "90%",
        alignSelf: 'center',
        marginTop: "5%",
        color: `${Color.black}80`,
        lineHeight: 20
    },
    chooseA: {
        fontSize: 20,
        fontFamily: "Altissimo_bold",
        color: Color.primary,
        textTransform: "uppercase",
        margin: "5%",
        marginTop: "8%"
    },
    questionnaire: {
        color: Color.secondary,
        textTransform: "uppercase"
    },
    pupsCorner: {
        resizeMode: "contain",
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: -1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    cardData: {
        fontSize: 18,
        fontFamily: "Altissimo",
        textTransform: "uppercase",
        color: Color.white,
        alignSelf: "center",
        textAlign: "center",
        width: "60%",
        marginVertical: "10%",
        lineHeight: 20
    }
}
export default styles