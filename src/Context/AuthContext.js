import createDataContext from "./createDataContext";
const authReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { token: true };
        case "questionFlow":
            return { token: true, QuestionsFlow: action.payload };
        case "pyamentFlow":
            return { token: true, PaymentFlow: action.payload };
        default:
            return state;
    }
};

const login = dispatch => {
    return async () => {
        dispatch({ type: 'login' })
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

export const { Provider, Context } = createDataContext(
    authReducer,
    { login, setQuestionFlow, setPyamentFlow },
    { token: false, QuestionsFlow: 0, PaymentFlow: 0 }
);
