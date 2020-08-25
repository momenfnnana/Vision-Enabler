import createDataContext from "./createDataContext";
const authReducer = (state, action) => {
    switch (action.type) {
        case "add-data":
            return { data: payload };
        case "change_pdf":
            return { ...state, pdf: action.payload }
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

const changePdf = dispatch => (data) => {
    dispatch({ type: 'add-data', payload: data })
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { login, setQuestionFlow, changePdf },
    { data: [], pdf: null }
);
