import fetching from '@Utilities/Fetching';
export const getMatrix1 = () => fetching(`/auth/Matrix/1`, 'post');
