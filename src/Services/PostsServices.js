import fetching from '@Utilities/Fetching';

export const getPosts = () => fetching('/posts');
export const getPost = id => fetching(`/posts/${id}`);
export const addPost = body => fetching(`/posts/`, 'post', body);
