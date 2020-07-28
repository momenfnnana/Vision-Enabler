import Color from '@Assets/Constant'

const styles = {
    fullContainer: {
        marginTop: "5%",
        marginLeft: "5%"
    },
    container: {
        marginHorizontal: 18,
        marginVertical: "5%",
        position: "relative"
    },
    backgroundCard: {
        width: 220,
        height: 157,
        backgroundColor: `${Color.secondary}`,
        position: "absolute",
        left: "-5%",
        bottom: "-4%"
    },
    backgroundImage: {
        width: 220,
        height: 353,
        shadowColor: Color.white,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 16
    },
    details: {
        width: 200,
        height: 77,
        backgroundColor: `${Color.primary}`,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        right: 0,
        shadowColor: `${Color.black}`,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 16
    },
    name: {
        color: `${Color.white}`,
        fontSize: 22,
        fontWeight: "bold",
        fontFamily: "Altissimo_bold"
    },
    job: {
        color: `${Color.white}`,
        fontSize: 14,
        fontFamily: "DINNextLTProRegular"
    }
}
export default styles