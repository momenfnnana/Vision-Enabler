import createDataContext from "./createDataContext";
import { register } from "@Services/AuthServices";
import { AsyncStorage } from 'react-native';
const authReducer = (state, action) => {
    switch (action.type) {
        case "signin":
            return { token: true };
        case "login":
            return { token: true };
        case "questionFlow":
            return { token: true, QuestionsFlow: action.payload };
        case "pyamentFlow":
            return { token: true, PaymentFlow: action.payload };
        case "change_pdf":
            return { ...state, pdf: action.payload }
        default:
            return state;
    }
};
const loginToken = dispatch => {
    return async () => {
        dispatch({ type: 'login' })
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token })
    } else {
        console.log("something went wrong with us");
    }
}

const setQuestionFlow = dispatch => (flowNumber) => {
    dispatch({ type: 'questionFlow', payload: flowNumber })
    console.log(flowNumber);
}

const setPyamentFlow = dispatch => (flowNumber) => {
    dispatch({ type: 'pyamentFlow', payload: flowNumber })
    console.log(flowNumber);
}

const changePdf = dispatch => (data) => {
    dispatch({ type: 'change_pdf', payload: data })
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { loginToken, setQuestionFlow, setPyamentFlow, tryLocalSignin, changePdf },
    { token: false, QuestionsFlow: 0, PaymentFlow: 0, pdf: null }
);
