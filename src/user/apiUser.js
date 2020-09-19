export const read = (userId, token) => {
    return fetch(`http://localhost:8080/api/user/${userId}`, {
      methode: "GET",
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
  }

  export const list = ()=> {
    return fetch("http://localhost:8080/api/users", {
      methode: "GET",
    })
      .then(response => {
        return response.json()
      })
      .catch(err => console.log(err))
  }