import { fetchAllCategories, getPosts } from '../api/index'

export const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'

function getAll(categories) {
  return {
    type:GET_ALL_CATEGORY,
    categories
  }
}

export function getAllCategory() {
  return dispatch => {
    return  fetchAllCategories().then(data =>
      dispatch(getAll(data)))
  }
}

function getAllPost(posts) {
  return {
    type:GET_ALL_POSTS,
    posts
  }
}

export function getAllPosts() {
  return dispatch => {
    return  getPosts().then(data =>
      dispatch(getAllPost(data)))
      // dispatch(data))
  }
}