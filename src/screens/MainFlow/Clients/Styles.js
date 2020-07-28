import Color from '@Assets/Constant'
const styles = {
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: Color.white
    },
    headSection: {
        width: "100%",
        marginTop: "15%",
        flexDirection: "row"
    },
    description: {
        width: "80%",
        marginLeft: "5%"
    },
    clients: {
        marginLeft: "-66%"
    },
    underClients: {
        marginTop: "-21%",
        marginLeft: "15%",
        zIndex: -1
    },
    title: {
        color: `${Color.primary}`,
        fontSize: 30,
        fontFamily: "DINNextLTProRegular",
        fontWeight: "bold",
        alignSelf: "flex-start",
        textTransform: "uppercase",
        marginTop: "2%",
        marginLeft: "7%"
    }
}
export default styles