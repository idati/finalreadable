import { fetchAllCategories, getPosts, getAllCommentsFromPost } from '../api/index'

export const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'

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

function getAllComment(comments) {
  console.log('cctop',comments)
  return {
    type:GET_ALL_COMMENTS,
    comments
  }
}
export function getAllComments() {
  return dispatch => {
    //return getAllCommentsFromPost('8xf0y6ziyjabvozdd253nd')
    return getPosts()
      .then((data)=> data
        .map((d)=> getAllCommentsFromPost(d.id)
          .then(data => dispatch(getAllComment(data)))))
      // dispatch(data))
  }
}


export function getCommente(id){
  return dispatch => {
    return getAllCommentsFromPost(id)
    .then(data => dispatch(getAllComment(data)))
  }
}