export const create = (userId, token, post) => {
    return fetch(`http://localhost:8080/api/post/new/${userId}`, {
      method:"POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: post
    }) 
      .then(response => {
        return response.json();       
      }) 
      .catch(err => console.log("update error!",err));  
  };

  export const list = ()=> {
    return fetch("http://localhost:8080/api/posts", {
      method: "GET",
    })
      .then(response => {
        return response.json()
      })
      .catch(err => console.log(err))
  }

  export const singlePost = (postId)=> {
    return fetch(`http://localhost:8080/api/post/${postId}`, {
      method: "GET"
    })
      .then(response => {
        return response.json()
      })
      .catch(err => console.log(err))
  }

  export const listByUser = (userId, token)=> {
    return fetch(`http://localhost:8080/api/posts/by/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json",
        Authorization: `Bearer ${token}`
      },
    })
      .then(response => {
        return response.json()
      })
      .catch(err => console.log(err))
  }

  export const remove = (postId, token) => {
    return fetch(`http://localhost:8080/api/post/${postId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        return response.json()
      })
      .catch(err => console.log(err))
  };

  export const update = (postId, token, post) => {
    return fetch(`http://localhost:8080/api/post/${postId}`, {
      method:"put",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: post
    }) 
      .then(response => {
        return response.json();       
      }) 
      .catch(err => console.log("update error!",err));  
  };