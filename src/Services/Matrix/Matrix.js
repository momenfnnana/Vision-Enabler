import fetching from '@Utilities/Fetching';
export const getMatrix = (body) => fetching(`/auth/Matrix/${body}`, 'post', body);
