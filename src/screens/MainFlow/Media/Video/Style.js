import Color from '@Assets/Constant';

const styles = {
    container: {
        backgroundColor: Color.white,
        alignItems: 'center',
    },
    img: {
        borderRadius: 15,
        marginHorizontal: "2%",
        marginVertical: "4%",
        width: 165,
        height: 110,
        resizeMode: "contain"
    },
    video: {
        height: 40,
        width: 40,
        borderRadius: 10,
        backgroundColor: `${Color.primary}95`,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: "15%",
        left: "10%"
    },
    FlatList: {
        alignSelf: "center",
        marginTop: "5%"
    }
}
export default styles