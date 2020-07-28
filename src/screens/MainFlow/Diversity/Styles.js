import Color from '@Assets/Constant'

const styles = {
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: Color.white
    },
    image: {
        position: "absolute",
        top: 0,
        right: 0,
        resizeMode: "contain"
    },
    imageButton: {
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: "7%"
    },
    modalView: {
        height: "50%",
        marginTop: "100%",
        backgroundColor: Color.white,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: Color.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalTitle: {
        color: Color.primary,
        fontSize: 20,
        fontFamily: "Altissimo_bold",
        alignSelf: "flex-start",
        marginTop: "7%",
        marginLeft: "5%"
    },
    subTitle: {
        width: "90%",
        color: Color.primary,
        fontFamily: "Altissimo",
        marginVertical: "5%",
        alignSelf: "center"
    },
    description: {
        fontFamily: "Altissimo",
        lineHeight: 20,
        width: "90%",
        alignSelf: "center",
        color: `${Color.primary}99`
    },
    modalButton: {
        backgroundColor: Color.primary,
        width: "80%",
        justifyContent: "center",
        alignItems: 'center',
        paddingVertical: "3%",
        borderRadius: 20,
        alignSelf: 'center',
        marginVertical: "5%"
    },
    modalButtonText: {
        color: Color.white
    }
}
export default styles