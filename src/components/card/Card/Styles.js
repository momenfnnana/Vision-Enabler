import Color from '@Assets/Constant'

const styles = {
    container: {
        flexDirection: "row",
        width: "90%",
        paddingVertical: "9%",
        justifyContent: 'space-between',
        marginTop: "10%",
        backgroundColor: `${Color.white}`,
        shadowColor: `${Color.secondary}`,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 10,
        borderRadius: 15,
        alignSelf: "center"
    },
    TextContainer: {
        width: "60%",
        alignSelf: 'flex-start',
        paddingLeft: "5%",
    },
    PrimaryText: {
        color: `${Color.primary}`,
        fontSize: 20,
        fontFamily: "Altissimo"
    },
    SecondaryText: {
        color: `${Color.secondary}`,
        fontFamily: "Altissimo"
    },
    Image: {
        borderTopRightRadius: 15,
        resizeMode: "contain",
        position: "absolute",
        right: 0,
        top: 0,
    },
}
export default styles