import Color from '@Assets/Constant';

const styles = {
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: Color.white
    },
    headerImage: {
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
    userContainerImage: {
        height: "13%",
        width: "18%",
        borderRadius: 10,
        backgroundColor: Color.white,
        marginTop: "7%",
        justifyContent: "center",
        alignItems: "center"
    },
    upLoadCV: {
        fontSize: 22,
        color: Color.white,
        fontFamily: "Altissimo",
        fontWeight: "bold",
        textTransform: "uppercase",
        marginTop: "7%"
    },
    description: {
        color: Color.white,
        textAlign: "center",
        marginTop: "7%",
        width: "85%",
        fontSize: 14
    },
    input: {
        borderColor: Color.secondary,
        borderWidth: 2,
        borderRadius: 5,
        width: "85%",
        alignSelf: "center",
        marginTop: "7%",
        paddingVertical: "3%",
        paddingLeft: "5%"
    },
    uploadButton: {
        backgroundColor: Color.white,
        borderColor: Color.secondary,
        borderStyle: 'dashed',
        borderWidth: 2,
        borderRadius: 10,
        width: "85%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: "3%",
        marginTop: "5%"
    },
    uploadButtonText: {
        color: Color.primary,
        fontSize: 16,
        marginHorizontal: "1%"
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