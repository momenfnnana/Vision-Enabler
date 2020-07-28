import Color from '@Assets/Constant';

const styles = {
    visionList: {
        flexDirection: "row",
        marginVertical: "2%",
        marginHorizontal: 20,
        backgroundColor: Color.white,
        shadowColor: Color.secondary,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        borderRadius: 15,
        width: 280
    },
    visionCardTitle: {
        fontSize: 20,
        color: Color.secondary,
        marginVertical: "3%"
    },
    visionCardDescription: {
        fontSize: 14,
        color: Color.primary,
        marginVertical: "3%"
    },
    leftCornerImage: {
        width: "60%",
        marginLeft: -155,
        marginTop: 0,
        resizeMode: "contain"
    },
}
export default styles