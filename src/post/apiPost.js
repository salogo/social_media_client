export const create = (userId, token, post) => {
    return fetch(`http://64.225.118.247/api/post/new/${userId}`, {
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
  //${process.env.REACT_APP_API_URL}
  export const list = ()=> {
    return fetch(`http://64.225.118.247/api/posts`, {
      method: "GET",
    })
      .then(response => {
        return response.json()
      })
      .catch(err => console.log(err))
  }

  export const singlePost = (postId)=> {
    return fetch(`http://64.225.118.247/api/post/${postId}`, {
      method: "GET"
    })
      .then(response => {
        return response.json()
      })
      .catch(err => console.log(err))
  }

  export const listByUser = (userId, token)=> {
    return fetch(`http://64.225.118.247/api/posts/by/${userId}`, {
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
    return fetch(`http://64.225.118.247/api/post/${postId}`, {
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
    return fetch(`http://64.225.118.247/api/post/${postId}`, {
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

  export const like = (userId, token, postId) => {
    return fetch(`http://64.225.118.247/api/post/like`, {
      method:"put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({userId, postId})
    }) 
      .then(response => {
        return response.json();       
      }) 
      .catch(err => console.log("update error!",err));  
  };

  export const unlike = (userId, token, postId) => {
    return fetch(`http://64.225.118.247/api/post/unlike`, {
      method:"put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({userId, postId})
    }) 
      .then(response => {
        return response.json();       
      }) 
      .catch(err => console.log("update error!",err));  
  };

  export const comment = (userId, token, postId, comment) => {
    return fetch(`http://64.225.118.247/api/post/comment`, {
      method:"put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({userId, postId, comment})
    }) 
      .then(response => {
        return response.json();       
      }) 
      .catch(err => console.log("comment error!",err));  
  };

  export const uncomment = (userId, token, postId, comment) => {
    return fetch(`http://64.225.118.247/api/post/uncomment`, {
      method:"put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({userId, postId, comment})
    }) 
      .then(response => {
        return response.json();       
      }) 
      .catch(err => console.log("uncomment error!",err));  
  };