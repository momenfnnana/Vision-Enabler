import Color from '@Assets/Constant'

const styles = {
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: Color.white
    },
    head: {
        position: "absolute",
        top: 0,
        left: 0
    },
    title: {
        marginTop: "45%",
        // marginHorizontal: "12%",
    },
    logo: {
        position: "absolute",
        top: "20%",
        left: "5%"
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
        fontFamily: "Altissimo_bold",
        alignSelf: "flex-start"
    },
    footerImage: {
        flex: 2,
        resizeMode: "contain",
        // marginBottom: "-50%",
        width: "100%",
        zIndex: -1
    }
}
export default styles