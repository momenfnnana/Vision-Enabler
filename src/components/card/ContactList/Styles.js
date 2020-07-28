import Color from '@Assets/Constant';

const styles = {
    cardContainer: {
        width: "80%",
        alignSelf: "center",
        backgroundColor: Color.white,
        shadowColor: Color.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        borderRadius: 20,
        marginVertical: "4%"
    },
    imgCard: {
        alignSelf: "center",
        marginTop: "9%"
    },
    title: {
        textAlign: "center",
        color: Color.primary,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: "2%",
        marginTop: "9%"
    },
    text1: {
        textAlign: "center",
        color: Color.primary
    },
    text2: {
        textAlign: "center",
        color: Color.primary,
        marginVertical: "2%"
    },
    text3: {
        textAlign: "center",
        color: Color.primary,
        marginBottom: "9%"
    },
}
export default styles