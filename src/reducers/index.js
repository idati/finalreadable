import { GET_ALL_CATEGORY, GET_ALL_POSTS, GET_ALL_COMMENTS, CREATE_COMMENT, UP_VOTE_COMMENT, DOWN_VOTE_COMMENT, UP_VOTE_POST, DOWN_VOTE_POST } from '../actions/index'

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
  console.log('##',action)
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
    case UP_VOTE_POST:
    // console.log('österr', action.posts)
      return {
        ...state,
        posts: action.posts
      }
        case DOWN_VOTE_POST:
    // console.log('österr', action.posts)
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state
  }
}

export function comments(state = {}, action){
  console.log('1###1', action)
  switch(action.type){
    case GET_ALL_COMMENTS:
          return {
              ...state,
              [action.id]: action.comments
          }
      // console.log('comments11', action)
      // return action.comments.reduce((comments, comment)=>{
      //   comments[comment.id]=[
      //                       comment.id,
      //                       comment.parentId,
      //                       comment.timestamp,
      //                       comment.body,
      //                       comment.author,
      //                       comment.voteScore,
      //                       comment.deleted,
      //                       comment.parentDeleted
      //                     ]
      //     return comments
      //   },{})

      case CREATE_COMMENT:
        console.log('yes i was here', action)
        let existingComments = state[action.comments.parentId] || [];
          return {
            ...state,
           [action.comments.parentId]: existingComments.concat(action.comments)
          }
      // case UP_VOTE_COMMENT:
      case DOWN_VOTE_COMMENT:
      case UP_VOTE_COMMENT:
    console.log('österr', action.comments)
    // let existingComments = state[action.comments.parentId] || [];
    let existingComments2 = state[action.comments.parentId] || [];
    console.log('qwertz',existingComments2)
    for(var i in existingComments2){
      console.log('yxcvb',existingComments2[i], action.comments.id)
      if (existingComments2[i].id==action.comments.id){
          existingComments2[i]=action.comments
          console.log('Stromnetzz',action.comments)
      //   return{
      //     ...state,
      //     [action.comments.parentId]: existingComments2.concat(action.comments)
      //   }
      // }
      // console.log('element', state[action.comments.parentId][i])
      }
    }
     console.log('Stromnetz',existingComments2, action.comments)
      return {
        ...state,
        [action.comments.parentId]: existingComments2
      //   [action.comments.parentId]: existingComments2.concat([action.comments])
      //   // commentss: action
      //   // [action.comments.parentId]: existingComments.concat(action.comments)
      }
        // case DOWN_VOTE_COMMENT:
    // console.log('österr', action.posts)
      // return {
      //   ...state,
      //   comments: action.comments
      // }
      default:
        return state
  }
}