import Color from '@Assets/Constant';

const styles = {
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: Color.white
    },
    title1: {
        color: `${Color.secondary}`,
        fontSize: 16,
        fontFamily: "Altissimo_bold",
        alignSelf: "flex-start"
    },
    title2: {
        color: `${Color.primary}`,
        fontSize: 30,
        fontFamily: "Altissimo",
        fontWeight: "bold",
        alignSelf: "flex-start"
    },
    headSection: {
        flex: 1,
        marginLeft: "10%",
        marginTop: "5%"
    },
    footer: {
        resizeMode: "contain",
        marginTop: "20%",
        marginLeft: "-15%"
    }
}
export default styles