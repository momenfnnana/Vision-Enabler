import Color from '@Assets/Constant';

const styles = {
    listContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: "2%",
        width: "90%",
        backgroundColor: Color.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        borderRadius: 10,
        alignSelf: "center"
    },
    DateContainer: {
        height: 60,
        width: 60,
        backgroundColor: Color.secondary,
        margin: "2%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    date: {
        color: Color.white
    },
    description: {
        fontSize: 16,
        color: Color.primary,
        width: "70%",
        fontFamily: "DINNextLTProRegular",

    }
}
export default styles