Full-Stack: Social media App
A user can sign up , sign in, sign out . A user can create, edit, delete a post. A user can like or unlike other people posts and comment. A user can delete his/her profile . A user can also follow others or unfollow

#

Project live :

http://determined-relation.surge.sh/
##

Youtub Video:
https://youtu.be/HHYsmh-NdKI

#
Screen Shot of the App .
Home page:
![image](https://user-images.githubusercontent.com/54459398/95004260-85aba880-05ae-11eb-96c3-e724747375e1.png)

# 

Built With:
React (https://reactjs.org/)- The web framework used,
Css3,
JavaScript,
Bootstrap,
Node.js,
Express.js,
Mongodb 

###

A user profile:
![image](https://user-images.githubusercontent.com/54459398/108567057-19b3ad80-72cd-11eb-9c8b-c229513d11bb.png)

#

A user can update profile: 
![image](https://user-images.githubusercontent.com/54459398/108567271-8f1f7e00-72cd-11eb-818c-cf6359cf7208.png)
#

A user can follow other users:

![image](https://user-images.githubusercontent.com/54459398/108567329-ad857980-72cd-11eb-8534-4ca8444b60f0.png)

#
A user can create a post
![image](https://user-images.githubusercontent.com/54459398/108567497-f6d5c900-72cd-11eb-9855-7e7e37df6cec.png)

#
A user can like or unlike comments:
![image](https://user-images.githubusercontent.com/54459398/108567615-30a6cf80-72ce-11eb-8722-c5b202df7fc4.png)

#
A user can view other users posts and comment
![image](https://user-images.githubusercontent.com/54459398/108567685-503df800-72ce-11eb-83f1-feae1837a422.png)

#
Code Examples
#
Here is where I imported list() function, then DidMounted to get all the posts and filled out the state to display them :  
#
import React, { Component } from 'react';
import { list } from "./apiPost";
import DefaultPost from "../images/clouds.jpeg";
import { Link } from "react-router-dom";

class Posts extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        list().then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                this.setState({ posts: data })
            }
        })
    }

    renderPosts = posts => {
        return (
            <div className="row">
                {posts.map((post, i) => {
                    const posterId = post.postedBy
                        ? `/api/user/${post.postedBy._id}`
                        : "";
                    const posterName = post.postedBy
                        ? post.postedBy.name
                        : " Unknown";

                    return (
                        <div style={{ height: "50%", width: "50%", }} key={i}>
                            <div className="card-body">
                                <img
                                    src={`https://nodesocialapp.herokuapp.com/api/post/photo/${post._id}`}
                                    alt={post.title}
                                    onError={i => i.target.src = `${DefaultPost}`}
                                    className="img-thunbail mb-3"
                                  style={{ height: "200px", width: "100%" }}
                                />
                                <h5 className="card-title">{post.title}</h5>
                                {/*substring(0, 10) its to just show few letters before click more */}
                                <p className="card-text">{post.body.substring(0, 100)} </p>
                                <br />
                                <p className="font-italic mark">
                                    Posted by{" "}
                                    <Link to={`${posterId}`}>
                                        {posterName} {" "}
                                    </Link>
                                    on {new Date(post.created).toDateString()}
                                </p>
                                <Link
                                    to={`/api/post/${post._id}`}
                                    className="btn btn-raised btn-primary btn-sm">
                                    Read more
</Link>
                            </div>
                        </div>
                    )

                })}
            </div>
        );
    };

    render() {
        const { posts } = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">
                    {!posts.length ? "Loading..." : "STAY CONNECTED TO OUR ACTIVE USERS"}
                </h2>
                {this.renderPosts(posts)}
            </div>
        );
    }
}
export default Posts;
