import createDataContext from "./createDataContext";
const authReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { token: true };
        default:
            return state;
    }
};
const login = dispatch => {
    return async () => {
        dispatch({ type: 'login' })
    }
}
export const { Provider, Context } = createDataContext(
    authReducer,
    { login },
    { token: false }
);
