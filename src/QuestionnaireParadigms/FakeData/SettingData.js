import Color from '@Assets/Constant';

const SettingData = [
    {
        id: 1,
        title: "Edit Personal Information",
        description: "update your name, personal image, email and bio",
        img: require('@Assets/images/editProfile.png'),
        backgroundColor: Color.secondary
    },
    {
        id: 2,
        title: "Edit Password",
        description: "update your account password",
        img: require('@Assets/images/lock.png'),
        backgroundColor: Color.secondary
    },
    {
        id: 3,
        title: "Privacy Policy",
        description: "update your account password",
        img: require('@Assets/images/privacy-policy.png'),
        backgroundColor: Color.secondary
    },
    {
        id: 4,
        title: "Share App",
        description: "update your account password",
        img: require('@Assets/images/share.png'),
        backgroundColor: Color.secondary
    },
    {
        id: 5,
        title: "Rate This App",
        description: "give our app a some of feedback for help us to improve your experience",
        img: require('@Assets/images/star.png'),
        backgroundColor: Color.white
    }
]
export default SettingData;