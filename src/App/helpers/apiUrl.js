const baseUrl = process.env.REACT_APP_API_URL || 'https://jsonplaceholder.typicode.com'

export const getPostsUrl = () => `${baseUrl}/posts`
export const getUsersUrl = () => `${baseUrl}/users`
export const getSingleUserUrl = (userId) => `${baseUrl}/users/${userId}`
export const getSinglePostUrl = (postId) => `${baseUrl}/posts/${postId}`
export const getCommentsForPostUrl = (postId) => `${baseUrl}/comments?postId=${postId}`
export const getPostsForUserUrl = (userId) => `${baseUrl}/posts?userId=${userId}`
