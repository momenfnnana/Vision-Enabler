import Color from '@Assets/Constant';

const styles = {
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: Color.white
    },
    readMore: {
        color: Color.secondary,
        marginTop: 5,
        fontWeight: "bold"
    },
    goBack: {
        position: "absolute",
        top: "6%",
        left: "4%",
        zIndex: 1
    },
    userPic: {
        width: "100%",
        height: 600,
        resizeMode: "cover",
        backgroundColor: Color.white
    },
    userDetailsContainer: {
        backgroundColor: `${Color.primary}`,
        paddingVertical: "7%",
        width: "93%",
        alignSelf: "flex-end",
        paddingHorizontal: "5%",
        marginTop: "-26.8%"
    },
    userName: {
        color: `${Color.white}`,
        fontSize: 30,
        fontFamily: "Altissimo",
        fontWeight: "bold"
    },
    userJob: {
        color: `${Color.white}`,
        fontSize: 13,
        fontFamily: "Altissimo"
    },
    secondaryLine: {
        backgroundColor: Color.secondary,
        height: 16,
        width: "86%",
        alignSelf: "center"
    },
    description: {
        color: `${Color.primary}`,
        fontSize: 14,
        lineHeight: 20
    }
}
export default styles