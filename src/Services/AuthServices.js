import fetching from '@Utilities/Fetching';

export const login = body => fetching(`/auth/login`, 'post', body);
export const register = body => fetching(`/auth/Register`, 'post', body);
export const forgetPassword = body => fetching(`/forgetPassword`, 'post', body);
export const activeAccount = body => fetching(`/verify/${body}`, 'post', body);