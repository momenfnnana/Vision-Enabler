import fetching from '@Utilities/Fetching';

export const ContactForm = body => fetching(`/ContactStore`, 'post', body);
export const ContactUSForm = body => fetching(`/contact`, 'post', body);
// export const getProfile = () => fetching(`/profile`);
