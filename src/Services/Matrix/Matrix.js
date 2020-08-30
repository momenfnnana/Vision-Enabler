import fetching from '@Utilities/Fetching';
export const getMatrix = () => fetching(`/auth/Matrix/1`, 'post');
export const postMatrixAnswers1 = (body) => fetching(`/auth/MatrixStor/1`, 'post', body);
