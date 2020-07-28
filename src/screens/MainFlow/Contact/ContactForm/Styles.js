import Color from '@Assets/Constant';

const styles = {
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: Color.white
    },
    ImageBackground: {
        width: "100%",
        resizeMode: "cover",
        height: 410,
        paddingTop: "7%",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    goBack: {
        alignSelf: "flex-start",
        marginLeft: "5%"
    },
    headTitleContainer: {
        height: "13%",
        width: "18%",
        borderRadius: 10,
        backgroundColor: Color.white,
        marginTop: "7%"
    },
    headTitle: {
        fontSize: 22,
        color: Color.white,
        fontFamily: "Altissimo",
        fontWeight: "bold",
        textTransform: "uppercase",
        marginTop: "7%"
    },
    headTitleLine: {
        color: Color.secondary
    },
    headDescription: {
        color: Color.white,
        textAlign: "center",
        marginTop: "7%",
        width: "85%"
    },
    firstName: {
        borderColor: Color.secondary,
        borderWidth: 2,
        borderRadius: 5,
        width: "85%",
        alignSelf: "center",
        marginTop: "7%",
        paddingVertical: "3%",
        paddingLeft: "5%"
    },
    lastName: {
        borderColor: Color.secondary,
        borderWidth: 2,
        borderRadius: 5,
        width: "85%",
        alignSelf: "center",
        marginTop: "7%",
        paddingVertical: "3%",
        paddingLeft: "5%"
    },
    email: {
        borderColor: Color.secondary,
        borderWidth: 2,
        borderRadius: 5,
        width: "85%",
        alignSelf: "center",
        marginTop: "7%",
        paddingVertical: "3%",
        paddingLeft: "5%"
    },
    mobileNumber: {
        borderColor: Color.secondary,
        borderWidth: 2,
        borderRadius: 5,
        width: "85%",
        alignSelf: "center",
        marginTop: "7%",
        paddingVertical: "3%",
        paddingLeft: "5%"
    },
    dropDownPickerContainer: {
        height: "7%",
        width: "85%",
        alignSelf: "center",
        marginTop: "5%",
        marginBottom: "5%",
    },
    dropDownStyle: {
        backgroundColor: Color.white,
        borderColor: `${Color.secondary}`,
        borderWidth: 2,
    },
    itemPickerStyle: {
        justifyContent: 'flex-start',
        color: Color.primary,
    },
    privacyPolicy: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingLeft: "2%",
        marginBottom: "10%",
        marginTop: "-5%",
        width: "90%",
        alignSelf: "center",
    },
    textAreaContainer: {
        borderColor: Color.secondary,
        borderWidth: 1,
        padding: 5,
        width: "85%",
        alignSelf: "center",
        borderRadius: 5
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
    },
    button: {
        borderRadius: 50,
        backgroundColor: `${Color.primary}`,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        marginVertical: 22,
        marginBottom: "10%",
        width: "85%",
        alignSelf: "center"
    },
    SignupText: {
        color: `${Color.white}`,
        fontSize: 16
    }
}
export default styles