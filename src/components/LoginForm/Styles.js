import Color from '@Assets/Constant'

const styles = {
    container: {
        // flex: 1,
        width: "100%"
    },
    forgetPassword: {
        color: `${Color.primary}`,
        textAlign: "right",
        paddingTop: 0,
        paddingBottom: 20
    },
    button: {
        borderRadius: 50,
        backgroundColor: `${Color.primary}`,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12
    },
    buttonText: {
        color: `${Color.white}`,
        fontSize: 16
    },
    orContainer: {
        flexDirection: "row",
        marginTop: 20
    },
    line: {
        borderTopColor: `${Color.primary}30`,
        borderTopWidth: 1,
        marginTop: 10,
        width: "45%"
    },
    betweenLines: {
        color: `${Color.primary}`,
        fontSize: 14,
        alignSelf: "flex-end",
        marginHorizontal: 7
    },
    signUpButton: {
        borderRadius: 50,
        backgroundColor: `${Color.white}`,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        borderColor: `${Color.primary}30`,
        borderWidth: 1,
        marginTop: 20
    },
    SignupText: {
        color: Color.primary,
        fontSize: 16
    },
}
export default styles