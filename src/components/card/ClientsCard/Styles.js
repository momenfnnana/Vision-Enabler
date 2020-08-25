import Color from '@Assets/Constant';

const styles = {
    clientList: {
        flexDirection: 'row',
        marginTop: "0.7%",
        marginBottom: "0.7%",
        marginHorizontal: 0
    },
    clientListImagesContainer: {
        shadowColor: Color.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 4,
        backgroundColor: Color.white,
        position: 'relative',
        marginHorizontal: 30,
        alignItems: "center",
        justifyContent: 'center',
        height: 100,
        width: 100,
        borderRadius: 50,
        marginVertical: 20
    },
    logo: {
        resizeMode: "contain",
        width: 50,
        height: 50
    },
    halfQuarter: {
        position: "absolute",
        left: -10,
        bottom: -10
    },
    text: {
        justifyContent: "center",
        marginLeft: 7
    },
    subTitle: {
        fontSize: 14,
        color: Color.secondary,
        fontFamily: "Altissimo"
    },
    clientListTitles: {
        fontSize: 20,
        color: Color.primary,
        fontFamily: "Altissimo_bold",
        fontWeight: "bold",
        textTransform: "uppercase"
    }
}
export default styles