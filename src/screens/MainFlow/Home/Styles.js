import Color from '@Assets/Constant';

const styles = {
    button: {
        flexDirection: "row",
        borderRadius: 50,
        backgroundColor: Color.primary,
        paddingVertical: 12,
        width: "80%",
        alignSelf: "center",
    },
    buttonText: {
        color: Color.white,
        fontSize: 16,
        width: "90%",
        textAlign: "center",
        marginLeft: "3%"
    },
    arrow: {
        alignSelf: "flex-end",
        marginLeft: "-5%"
    },
    headSection: {
        marginVertical: "4%",
        width: "80%",
    },
}
export default styles