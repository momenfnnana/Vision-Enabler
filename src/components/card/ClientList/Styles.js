import Color from '@Assets/Constant';

const styles = {
    container: {
        flex: 1,
        marginVertical: "3%",
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        height: 150,
        width: 150,
        backgroundColor: `${Color.secondary}70`,
    },
    card: {
        backgroundColor: Color.white,
        width: "95%",
        height: "95%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'flex-end',
        marginTop: "-3%",
        marginRight: "-3%",
        shadowColor: Color.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    Image: {
        height: 70,
        width: 70,
        resizeMode: "contain",
    }
}
export default styles