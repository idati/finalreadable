import { GET_ALL_CATEGORY, GET_ALL_POSTS, GET_ALL_COMMENTS  } from '../actions/index'

export function categories(state = {}, action){
  console.log('#',action.type)
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
  console.log('##',action.type)
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
                            post.category,
                            post.deleted
                          ] 
        return posts
      }, {})
    default:
      return state
  }
}

export function comments(state = {}, action){
  console.log('###',action.type)
  switch(action.type){
    case GET_ALL_COMMENTS:
      console.log('comments11', action)
      return action.comments.reduce((comments, comment)=>{
        comments[comment.id]=[
                            comment.id,
                            comment.parentId,
                            comment.timestamp,
                            comment.body,
                            comment.author,
                            comment.voteScore,
                            comment.deleted,
                            comment.parentDeleted
                          ]
          return comments
        },{})
      default:
        return state
  }
}