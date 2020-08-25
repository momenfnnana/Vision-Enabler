import fetching from '@Utilities/Fetching';

export const InterviewFormPost = body => fetching(`/interviewCreate`, 'post', body);
