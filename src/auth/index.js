

export const  signup = (user) => {
  

    return fetch(`https://nodesocialapp.herokuapp.com/api/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};


export const   authenticate =(jwt, next)=> {
    if (typeof windown !== undefined) {
        localStorage.setItem("jwt" , JSON.stringify(jwt))
        next()
    }
}

 
export const signout = next => {
    if (typeof window !== "undefined") localStorage.removeItem("jwt");
    next();
    return fetch(`https://nodesocialapp.herokuapp.com/api/signout`, {
        methode: "GET"
    })
        .then(response => {
            console.log("signout", response)
            return response.json()
        })
        .catch(err => console.log("signout error",err))
}

export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false
    }
}