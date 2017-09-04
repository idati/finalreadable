import { GET_ALL_CATEGORY, GET_ALL_POSTS  } from '../actions/index'

export function categories(state = {}, action){
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return action.categories.reduce((categories, category) => {
        categories[category.name] = category.path
        return categories
      }, {})
    default:
      return state
  }
}

export function posts(state = {}, action){
  switch (action.type) {
    case GET_ALL_POSTS:
      console.log('posts', action)
      return action.posts.reduce((posts, post) => {
        posts[post.id] = [
                            post.id, 
                            post.timestamp,
                            post.title,
                            post.body,
                            post.author, 
                            post.voteScore, 
                            post.category
                          ] 
        return posts
      }, {})
    default:
      return state
  }
}