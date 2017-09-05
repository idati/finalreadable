const api="http://localhost:5001"

let token = localStorage.token

//used it from udacity code
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)


const headers = {
  'Accept': 'application/json',
  'Authorization': token,
}

export const fetchAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getPosts = () =>
    fetch(`${api}/posts/`,{headers})
    .then(res => res.json())


// For Testing
export const newPost = (id, timestamp, title, body, author, category) =>
    fetch(`${api}/posts/`,{
      method:'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      // id: JSON.stringify(id),
      // timestamp: JSON.stringify(timestamp),
      // title: JSON.stringify(title),
      body: JSON.stringify({id, timestamp, title,body,author,category}),
      // author: JSON.stringify(author),
      // categories: JSON.stringify(author)
    }).then(res=>res.json())
      .then(res=>console.log(res))



export const getAllCommentsFromPost = (id) =>
  fetch(`${api}/posts/${id}/comments/`, {headers})
  .then(res => res.json())
  .then( value => { return value })
  

export const deletePost = (id) =>
    fetch(`${api}/posts/${id}`,{
    method:'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
            // id: JSON.stringify(id),
            // timestamp: JSON.stringify(timestamp),
            // title: JSON.stringify(title),
    deleted: JSON.stringify(true),
            // author: JSON.stringify(author),
            // categories: JSON.stringify(author)
  }).then(getAllCommentsFromPost(id).then(
    value =>{
    for(let j=0; j<value.length; j++){
        value[j].parentDeleted=true
    }
    console.log(value)
  }
  ))//.map((res) => res.parentDeleted: true))
    .then(res=>res.json())
    .then(res=>console.log(res))