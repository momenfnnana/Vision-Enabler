import Color from '@Assets/Constant'

const styles = {
    handleReadMore: {
        color: Color.secondary,
        marginTop: 5,
        fontWeight: "bold"
    },
    handleReadLess: {
        color: Color.secondary,
        marginTop: 5,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: Color.white
    },
    headSection: {
        width: "100%",
        marginTop: "15%",
        flexDirection: "row",
        marginBottom: "3%"
    },
    titleContainer: {
        width: "60%",
        justifyContent: "flex-end"
    },
    sectionTitleContainer: {
        marginLeft: "3%"
    },
    headImageContainer: {
        marginTop: "-18%"
    },
    who: {
        marginLeft: "-29%"
    },
    underWho: {
        marginTop: "-21%",
        zIndex: -1
    },
    ourAwards: {
        backgroundColor: `${Color.white}`,
        marginLeft: "7%",
        paddingVertical: "8%"
    },
    our: {
        fontFamily: "DINNextLTProRegular",
        fontSize: 16,
        color: `${Color.secondary}`
    },
    awards: {
        fontFamily: "Altissimo_bold",
        fontSize: 30,
        color: `${Color.primary}`
    },
    FranceCard: {
        backgroundColor: `${Color.white}`,
        shadowColor: `${Color.black}`,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        alignSelf: "center",
        borderRadius: 20,
        width: "90%",
        marginBottom: "10%"
    },
    cardTitle: {
        fontFamily: "Altissimo_bold",
        fontSize: 20,
        color: `${Color.primary}`,
        marginHorizontal: "8%",
        paddingTop: "8%"
    },
    cardsubTitle: {
        fontFamily: "Altissimo_bold",
        fontSize: 14,
        color: `${Color.secondary}`,
        marginHorizontal: "8%",
        marginVertical: "2%"
    },
    readMoreView: {
        marginTop: "7%",
        marginHorizontal: "8%"
    },
    readMoreText: {
        color: `${Color.primary}`,
        fontSize: 14,
    },
    cardImage: {
        resizeMode: "cover",
        width: "100%",
        borderRadius: 20
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
    button: {
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
    buttonText: {
        color: `${Color.white}`,
        fontSize: 16
    },
}
export default styles