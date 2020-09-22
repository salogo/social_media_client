export const read = (userId, token) => {
    return fetch(`http://localhost:8080/api/user/${userId}`, {
      method: "GET",
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

  export const update = (userId, token, user) => {
    return fetch(`http://localhost:8080/api/user/${userId}`, {
      method:"PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body:  JSON.stringify(user)
    })
      .then(response => {
        return response.json();       
      }) 
      .catch(err => console.log("update error!",err));
  };
  //
  export const remove = (userId, token) => {
    return fetch(`http://localhost:8080/api/user/${userId}`, {
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

  export const list = ()=> {
    return fetch("http://localhost:8080/api/users", {
      method: "GET",
    })
      .then(response => {
        return response.json()
      })
      .catch(err => console.log(err))
  }