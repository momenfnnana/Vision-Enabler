import Color from '@Assets/Constant'

const styles = {
    container: {
        marginLeft: "7%",
        marginRight: "7%",
        marginTop: "5%"
    },
    title: {
        color: `${Color.white}`,
        backgroundColor: `${Color.primary}`,
        paddingLeft: "3%",
        paddingVertical: "3%",
        width: "18%",
        fontSize: 14,
        fontFamily: "DINNextLTProRegular"
    },
    textContainer: {
        backgroundColor: `${Color.white}`,
        padding: "7%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
    },
    text: {
        color: `${Color.primary}`,
        fontFamily: "DINNextLTProRegular"
    }
}
export default styles