import Color from '@Assets/Constant'

const styles = {
    container: {
        flex: 1,
        marginTop: "12%"
    },
    bigCircle: {
        backgroundColor: `${Color.white}`,
        height: 128,
        width: 128,
        borderRadius: 64,
        borderColor: `${Color.secondary}50`,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    smallCircle: {
        height: 100,
        width: 100,
        backgroundColor: `${Color.primary}`,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: `${Color.black}`,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
    },
    year: {
        color: `${Color.white}`,
        fontSize: 24,
        fontFamily: "DINNextLTProRegular"
    },
    dash: {
        width: 1,
        height: "70%",
        flexDirection: 'column',
        position: "absolute",
        alignSelf: "center",
        marginTop: "30%",
        zIndex: -1
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        width: "85%",
        alignSelf: "center",
        marginTop: "15%"
    },
    cardContainer: {
        shadowColor: `${Color.black}`,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        backgroundColor: `${Color.white}`,
        marginVertical: "5%",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: "10%",
        borderRadius: 20,
    },
    imageContainer: {
        backgroundColor: `${Color.primary}`,
        padding: "5%",
        borderRadius: 20,
        marginTop: "-22%",
        marginBottom: "5%"
    },
    title: {
        fontSize: 16,
        color: `${Color.primary}`,
        fontFamily: "DINNextLTProRegular"
    },
    description: {
        fontSize: 13,
        color: `${Color.black}95`,
        fontFamily: "DINNextLTProRegular",
        paddingHorizontal: "15%",
        textAlign: "center",
        marginTop: "2%"
    }
}
export default styles