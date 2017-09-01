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