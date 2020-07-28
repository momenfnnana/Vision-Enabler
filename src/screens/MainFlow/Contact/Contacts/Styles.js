import Color from '@Assets/Constant';

const styles = {
    fullScreen: {
        backgroundColor: Color.white
    },
    container: {
        width: "100%"
    },
    headSection: {
        paddingHorizontal: "5%"
    },
    loopCardContainer: {
        marginTop: "12%",
    },
    bottomCard: {
        marginBottom: "4%",
        position: "relative",
        borderRadius: 20,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.primary,
        paddingVertical: 40,
        paddingHorizontal: 10,
        marginTop: 20
    },
    whiteContainer: {
        borderRadius: 7,
        height: 40,
        width: 60,
        backgroundColor: Color.white,
        justifyContent: "center",
        alignItems: "center"
    },
    help: {
        color: Color.secondary
    },
    desciption: {
        color: Color.white,
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        fontFamily: "DINNextLTProRegular"
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: Color.secondary,
        width: '80%',
        height: 50,
        marginTop: 45
    },
    textButton: {
        color: Color.white,
        fontSize: 16
    },
    titleBottomCard: {
        textTransform: 'uppercase',
        color: Color.white,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    bottomLeftImage: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: -1
    },
    topRightImage: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: -1,
        borderTopRightRadius: 20
    }
}
export default styles