import createDataContext from "./createDataContext";

let inialState = {
    MatrixQuestions:[],
    MatrixAnswersArray: [
        {
            id: 1,
            answers: [null, null, null, null, null, null, null, null]
        },
        {
            id: 2,
            answers: [null, null, null, null, null, null, null, null]
        },
        {
            id: 3,
            answers: [null, null, null, null, null, null, null, null]
        },
        {
            id: 4,
            answers: [null, null, null, null, null, null, null, null]
        },
        {
            id: 5,
            answers: [null, null, null, null, null, null, null, null]
        }
    ],
    QuestionsFlow: null,
    PaymentFlow: null,
    pdf: null
};

const authReducer = (state = inialState, action) => {
    switch (action.type) {
        case "questionFlow":
            return { ...state,token: true, QuestionsFlow: action.payload };
        case "pyamentFlow":
            return { ...state,token: true, PaymentFlow: action.payload };
        case "change_pdf":
            return { ...state, pdf: action.payload }
        case "matrix_questions":
            return { ...state, MatrixQuestions: action.payload }
        case "matrix_answers":
            var MatrixAnswersArray = state.MatrixAnswersArray;

            let qIndex = action.payload.questionIndex;
            let aIndex = action.payload.answerIndex;

            MatrixAnswersArray[qIndex].answers[aIndex] = action.payload.answers[aIndex];

            var answers = {
                ...state,
                MatrixAnswersArray: MatrixAnswersArray
            }
            return answers;
        case "reset_matrix_answers":
            return {...state, MatrixAnswersArray: inialState.MatrixAnswersArray}
        default:
            return state;
    }
};

const setQuestionFlow = dispatch => (flowNumber) => {
    console.log(flowNumber);
    return dispatch({ type: 'questionFlow', payload: flowNumber })
}

const setPyamentFlow = dispatch => (flowNumber) => {
    console.log(flowNumber);
    return dispatch({ type: 'pyamentFlow', payload: flowNumber })
}

const changePdf = dispatch => (data) => {
    return dispatch({ type: 'change_pdf', payload: data })
}

const MatrixData = dispatch => async (data) => {
    console.log("questions from context", data);
    return await dispatch({ type: 'matrix_questions', payload: data })
}

const MatrixAnswers = dispatch => async (data) => {
    return await dispatch({ type: 'matrix_answers', payload: data });
    console.log(data);
}
const ResetMatrixAnswers = dispatch => () => {
    return dispatch({ type: 'reset_matrix_answers'});
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {
        setQuestionFlow,
        setPyamentFlow,
        changePdf,
        MatrixData,
        MatrixAnswers,
        ResetMatrixAnswers
    },
    {
        QuestionsFlow: 0,
        PaymentFlow: 0,
        pdf: null,
        MatrixQuestions: [],
        MatrixAnswersArray: [
            {
                id: 1,
                answers: [null, null, null, null, null, null, null, null]
            },
            {
                id: 2,
                answers: [null, null, null, null, null, null, null, null]
            },
            {
                id: 3,
                answers: [null, null, null, null, null, null, null, null]
            },
            {
                id: 4,
                answers: [null, null, null, null, null, null, null, null]
            },
            {
                id: 5,
                answers: [null, null, null, null, null, null, null, null]
            }
        ]
    }
);
