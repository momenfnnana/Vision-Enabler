import Color from '@Assets/Constant'

const styles = {
    card: {
        flexDirection: "row",
        alignSelf: "center",
        height: 200,
        width: "80%",
        backgroundColor: Color.white,
        marginVertical: "5%",
        borderRadius: 10,
        shadowColor: '#EEE9E9',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 4,
    },
    textWithImage: {
        padding: 15,
        width: "100%"
    },
    title: {
        fontSize: 20,
        color: Color.secondary,
        marginVertical: "3%",
        fontFamily: "DINNextLTProRegular"
    },
    description: {
        fontSize: 14,
        color: Color.primary,
        marginVertical: "3%",
        fontFamily: "DINNextLTProRegular"
    },
    img: {
        marginVertical: "3%"
    },
    leftImage: {
        position: "absolute",
        right: 0,
        top: 0,
        resizeMode: "contain"
    },
}
export default styles