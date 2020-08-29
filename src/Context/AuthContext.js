import createDataContext from "./createDataContext";
import { register } from "@Services/AuthServices";
import { AsyncStorage, ColorPropType } from 'react-native';
import Color from '@Assets/Constant';

const authReducer = (state, action) => {
    switch (action.type) {
        case "questionFlow":
            return { token: true, QuestionsFlow: action.payload };
        case "pyamentFlow":
            return { token: true, PaymentFlow: action.payload };
        case "change_pdf":
            return { ...state, pdf: action.payload }
        case "matrix_questions":
            return { ...state, MatrixQuestions: action.payload }
        case "matrix_answers":
            return { ...state, MatrixAnswers: action.payload }
        case "set_pops_color":
            return { ...state, popsColor: action.payload }
        default:
            return state;
    }
};

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

const MatrixQuestions = dispatch => async (data) => {
    await dispatch({ type: 'matrix_questions', payload: data })
    console.log("questions from context", data);
}

const MatrixAnswers = dispatch => async (data) => {
    await dispatch({ type: 'matrix_answers', payload: data })
    console.log("answers from context", data);
}

const setPopsColor = dispatch => async (data) => {
    await dispatch({ type: 'set_pops_color', payload: data })
}
// const signout = () => {
//     return async () => {
//         await AsyncStorage.removeItem('token', '');
//     }
// }
export const { Provider, Context } = createDataContext(
    authReducer,
    { setQuestionFlow, setPyamentFlow, changePdf, MatrixQuestions, MatrixAnswers, setPopsColor },
    { QuestionsFlow: 0, PaymentFlow: 0, pdf: null, MatrixQuestions: [], MatrixAnswers: [], popsColor: Color.secondary }
);
