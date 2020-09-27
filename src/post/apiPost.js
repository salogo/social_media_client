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