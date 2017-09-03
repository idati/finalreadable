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