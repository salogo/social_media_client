export const read = (userId, token) => {
    return fetch(`https://nodesocialapp.herokuapp.com/api/user/${userId}`, {
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

//user = userData
  export const update = (userId, token, user) => {
    console.log("USER DATA UPDATE:", user);
    return fetch(`https://nodesocialapp.herokuapp.com/api/user/${userId}`, {
      method:"put",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: user
    }) 
      .then(response => {
        return response.json();       
      }) 
      .catch(err => console.log("update error!",err));  
  };
  //
  export const remove = (userId, token) => {
    return fetch(`https://nodesocialapp.herokuapp.com/api/user/${userId}`, {
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
    return fetch("https://nodesocialapp.herokuapp.com/api/users", {
      method: "GET",
    })
      .then(response => {
        return response.json()
      })
      .catch(err => console.log(err))
  }
//update user in localStorage , so the name on user'profile on the top get changed
  export const updatedUser = (user, next) => {
    if(typeof window !== "undefined") {
      if(localStorage.getItem("jwt")) {
        let auth = JSON.parse(localStorage.getItem("jwt"))
        auth.user = user
        localStorage.setItem("jwt", JSON.stringify(auth));
        next();
      }
    }
  }

  export const follow = (userId, token, followId) => {
    return fetch("https://nodesocialapp.herokuapp.com/api/user/follow", {
      method:"put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({userId, followId})
    }) 
      .then(response => {
        return response.json();       
      }) 
      .catch(err => console.log("update error!",err));  
  };


  export const unfollow = (userId, token, unfollowId) => {
    return fetch("https://nodesocialapp.herokuapp.com/api/user/unfollow", {
      method:"put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({userId, unfollowId})
    }) 
      .then(response => {
        return response.json();       
      }) 
      .catch(err => console.log("update error!",err));  
  };

  export const findPeople = (userId, token) => {
    return fetch(`https://nodesocialapp.herokuapp.com/api/user/findpeople/${userId}`, {
      method:"GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }) 
      .then(response => {
        return response.json();       
      }) 
      .catch(err => console.log("update error!",err));  
  };