import Color from '@Assets/Constant'

const styles = {
    container: {
        marginLeft: "7%",
        marginRight: "7%",
        marginTop: "5%"
    },
    card: {
        marginVertical: "5%",
        paddingVertical: "5%",
        paddingLeft: "5%",
        paddingRight: "20%",
        shadowColor: Color.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        backgroundColor: Color.white,
        borderLeftColor: `${Color.primary}`,
        borderLeftWidth: 4
    },
    text: {
        color: `${Color.primary}`,
        fontSize: 14,
        fontFamily: "DINNextLTProRegular"
    }
}
export default styles