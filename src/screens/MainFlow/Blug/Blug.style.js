import Color from '@Assets/Constant';
const styles = {
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    CardContainer: {
        marginHorizontal: "10%",
        marginVertical: "4%",
        backgroundColor: Color.white,
        shadowColor: Color.primary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        borderRadius: 10,
    },
    img: {
        width: "90%",
        marginTop: "5%",
        alignSelf: 'center',
        borderRadius: 10,
    },
    love: {
        backgroundColor: Color.white,
        shadowColor: Color.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        width: 50,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginTop: "-7%",
        marginLeft: "13%",
    },
    likeNumber: {
        color: `${Color.black}80`,
        fontSize: 12
    },
    cardDetails: {
        marginHorizontal: "5%"
    },
    type: {
        color: Color.secondary,
        fontSize: 12,
        textTransform: "uppercase"
    },
    title: {
        color: Color.primary,
        fontSize: 20,
        marginTop: "7%",
        fontFamily: "Altissimo_bold",
    },
    description: {
        color: `${Color.black}80`,
        marginTop: "7%"
    },
    blugerDetailsContainer: {
        flexDirection: "row",
        marginTop: "7%",
        marginBottom: "6%"
    },
    blugerName: {
        color: `${Color.black}80`,
        textTransform: "uppercase"
    },
    line: {
        borderBottomColor: Color.secondary,
        borderBottomWidth: 1,
        width: "3%",
        marginBottom: "2.5%"
    },
    date: {
        color: `${Color.black}80`,
        textTransform: "uppercase"
    }
}
export default styles