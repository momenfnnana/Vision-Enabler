import Color from '@Assets/Constant'

const styles = {
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: Color.white
    },
    root: {
        flex: 1,
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    codeFieldRoot: {
        marginTop: 20
    },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderBottomWidth: 2,
        borderBottomColor: `${Color.black}30`,
        textAlign: 'center',
    },
    focusCell: {
        borderColor: `${Color.white}`,
    },
    button: {
        borderRadius: 50,
        backgroundColor: `${Color.primary}`,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        marginVertical: 22
    },
    SignupText: {
        color: `${Color.white}`,
        fontSize: 16
    },
    headSection: {
        flex: 1,
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "5%"
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
    date: {
        color: `${Color.secondary}`,
        textAlign: "center",
        fontSize: 24,
        marginTop: 30
    },
    resendCode: {
        alignSelf: "center",
        marginTop: 10
    },
    resendCodeText: {
        fontSize: 14,
        color: `${Color.primary}`
    },
    pups: {
        position: "absolute",
        bottom: "-40%",
        right: "-20%"
    }
}
export default styles