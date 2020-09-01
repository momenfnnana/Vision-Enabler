import fetching from '@Utilities/Fetching';
export const getQuestions = () => fetching(`/auth/Questionnaire/2`);
export const getQuestionnaier2 = () => fetching(`/auth/getA2`);
export const postQuestionnaierAnswers = (body) => fetching(`/auth/getQuestionReseltA`, 'post', body);
