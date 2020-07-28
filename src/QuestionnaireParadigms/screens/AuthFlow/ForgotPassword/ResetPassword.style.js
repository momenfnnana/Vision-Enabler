import Color from '@Assets/Constant';

const styles = {
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: Color.white
    },
    headSection: {
        flex: 1,
        marginLeft: "10%",
        marginTop: "5%",
        marginRight: "10%"
    },
    title1: {
        color: `${Color.secondary}`,
        fontSize: 16,
        fontFamily: "Altissimo_bold",
        alignSelf: "flex-start"
    },
    title2: {
        color: `${Color.primary}`,
        fontSize: 30,
        fontFamily: "Altissimo",
        fontWeight: "bold",
        alignSelf: "flex-start"
    },
    button: {
        borderRadius: 50,
        backgroundColor: Color.primary,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        marginVertical: 22
    },
    SignupText: {
        color: Color.white,
        fontSize: 16
    },
    imgFooter: {
        resizeMode: "contain",
        position: "absolute",
        bottom: "-40%",
        marginLeft: "-18%"
    }
}
export default styles