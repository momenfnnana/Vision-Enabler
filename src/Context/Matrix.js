import createDataContext from "./createDataContext";
const authReducer = (state, action) => {
    switch (action.type) {
        case "add-data":
            return { data: payload };
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
const addData = dispatch => (data) => {
    dispatch({ type: 'add-data', payload: data })
    console.log(flowNumber);
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { login, setQuestionFlow },
    { data: [] }
);
