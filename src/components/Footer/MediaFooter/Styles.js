import Color from '@Assets/Constant';

const styles = {
    button: {
        borderRadius: 50,
        backgroundColor: `${Color.primary}`,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        marginVertical: 22,
        marginBottom: "10%",
        width: "50%",
        alignSelf: "center"
    },
    SignupText: {
        color: `${Color.white}`,
        fontSize: 16
    },
    CardContainer: {
        width: "90%",
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: "10%"
    },
    img: {
        width: "90%",
        height: 200,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "cover",
        borderRadius: 20,
    },
    cardContent: {
        position: 'absolute',
        left: "13%",
        top: "13%",
        right: 0
    },
    title: {
        color: `${Color.white}`,
        fontSize: 16,
        fontWeight: "bold"
    },
    description: {
        color: `${Color.primary}`,
        fontSize: 30,
        fontWeight: "bold"
    },
    buttonText: {
        color: `${Color.white}`,
        fontSize: 16
    },
    cardButton: {
        borderRadius: 50,
        backgroundColor: `${Color.primary}`,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        width: "80%",
        marginLeft: "3%",
        alignSelf: "flex-start",
        marginTop: "5%"
    },
    mediaCenterCard: {
        width: "100%",
        borderRadius: 20,
        marginBottom: "10%"
    },
    mediaCenterImage: {
        width: "90%",
        height: 200,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "cover",
        borderRadius: 20,
    },
    mediaCenterTextContainer: {
        position: 'absolute',
        left: "13%",
        top: "13%",
        right: 0
    },
    mediaOur: {
        color: `${Color.white}`,
        fontSize: 16,
        fontFamily: "Altissimo",
    },
    mediaCenter: {
        color: `${Color.primary}`,
        fontSize: 30,
        fontFamily: "Altissimo_bold",
    },
    MediaButton: {
        borderRadius: 50,
        backgroundColor: `${Color.primary}`,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        width: "80%",
        marginLeft: "3%",
        alignSelf: "flex-start",
        marginTop: "5%"
    },
}
export default styles