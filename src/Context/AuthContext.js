import createDataContext from "./createDataContext";

let inialState = {
    MatrixQuestions: [],
    MatrixAnswersArray: [
        {
            id: 1,
            answers: ["A", "A", "A", "A", "A", "A", "A", "A"]
        },
        {
            id: 2,
            answers: ["A", "A", "A", "A", "A", "A", "A", "A"]
        },
        {
            id: 3,
            answers: ["A", "A", "A", "A", "A", "A", "A", "A"]
        },
        {
            id: 4,
            answers: ["A", "A", "A", "A", "A", "A", "A", "A"]
        },
        {
            id: 5,
            answers: ["A", "A", "A", "A", "A", "A", "A", "A"]
        }
    ],
    QuestionsAnswersArray: [
        {
            id: 1,
            answers: [
                {
                    id: 1,
                    value: null
                }
            ]
        },
        {
            id: 2,
            answers: [
                {
                    id: 1,
                    value: null
                }
            ]
        },
        {
            id: 3,
            answers: [
                {
                    id: 1,
                    value: null
                }
            ]
        },
        {
            id: 4,
            answers: [
                {
                    id: 1,
                    value: null
                }
            ]
        },
        {
            id: 5,
            answers: [
                {
                    id: 1,
                    value: null
                }
            ]
        },
        {
            id: 6,
            answers: [
                {
                    id: 1,
                    value: null
                }
            ]
        },
        {
            id: 7,
            answers: [
                {
                    id: 1,
                    value: null
                }
            ]
        },
        {
            id: 8,
            answers: [
                {
                    id: 1,
                    value: null
                }
            ]
        },
    ],
    QuestionsFlow: null,
    PaymentFlow: null,
    pdf: null
};

const authReducer = (state = inialState, action) => {
    switch (action.type) {
        case "questionFlow":
            return { ...state, token: true, QuestionsFlow: action.payload };
        case "pyamentFlow":
            return { ...state, token: true, PaymentFlow: action.payload };
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
        case "questions_answers":
            var QuestionsAnswersArray = state.QuestionsAnswersArray;

            let sectionIndex = action.payload.sectionIndex;

            QuestionsAnswersArray[sectionIndex].answers = action.payload.answers;

            var answers = {
                ...state,
                QuestionsAnswersArray: QuestionsAnswersArray
            }

            return answers;

        case "reset_questions_answers":
            return { ...state, QuestionsAnswersArray: inialState.QuestionsAnswersArray }
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
}

const ResetMatrixAnswers = dispatch => () => {
    return dispatch({ type: 'reset_matrix_answers' });
}

const QuestionsAnswers = dispatch => async (data) => {
    return await dispatch({ type: 'questions_answers', payload: data });
}

const ResetQuestionsAnswers = dispatch => () => {
    return dispatch({ type: 'reset_questions_answers' });
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {
        setQuestionFlow,
        setPyamentFlow,
        changePdf,
        MatrixData,
        MatrixAnswers,
        ResetMatrixAnswers,
        QuestionsAnswers,
        ResetQuestionsAnswers
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
