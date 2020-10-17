import { AsyncStorage } from "react-native";
let MyToken;
(async function () {
    const Access_token = await AsyncStorage.getItem('accessToken')
    MyToken = Access_token
})

const Constants = {
    apiUrl: 'https://visionenabler.dits.cloud/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'client_id': 4,
        'client_secret': 'rv58bWVxWLkPY3DjPvdZ9MFhodTSe4AUkRp9EWv7',
        Authorization: MyToken
    }
};
AsyncStorage.getItem('accessToken').then(async (accessToken) => {
    if (accessToken) {
        Constants.headers.Authorization = 'Bearer ' + accessToken;
    }
    // console.log(accessToken);
});

export default Constants;