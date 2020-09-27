import React, { Component } from 'react';
import { singlePost } from "./apiPost";
import DefaultPost from "../images/clouds.jpeg";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";

 class SinglePost extends Component {
     state = {
         post: ""
     }
     componentDidMount = () => {
         const postId = this.props.match.params.postId
         singlePost(postId).then(data => {
             if(data.error) {
                 console.log(data.error)
             } else {
                 this.setState({post: data})
             }
         })
     }

   renderPost = (post) => {
    const posterId = post.postedBy 
    ? `/api/user/${post.postedBy._id}`
     : "";
    const posterName = post.postedBy 
    ? post.postedBy.name
     : " Unknown";
      
     return (
       
            <div className="card-body">
            <img 
            src={`http://localhost:8080/api/post/photo/${post._id}`}
             alt={post.title} 
             onError={i => i.target.src = `${DefaultPost}`}
             className="img-thunbail mb-3"
             style={{height: "300px", width: "100%" ,objectFit: "cover"}}
             />
            
                <p className="card-text">{post.body} </p>
                <br />
                <p className="font-italic mark">
                    Posted by{" "} 
                     <Link to={`${posterId}`}>
                     {posterName} {" "}
                     </Link>
                    on {new Date(post.created).toDateString()}
                </p>
                <div className="d-inline-block">
                <Link
                    to={"/"}
                    className="btn btn-raised btn-primary btn-sm mr-5">
                    Back to posts
                </Link>
                {isAuthenticated().user &&
                    isAuthenticated().user._id === post.postedBy._id && 
                    <>
                    <button className="btn btn-raised btn-warning mr-5">
                    Update Post
                   </button>
                    
                   <button className="btn btn-raised btn-danger">
                   Delete Post
                  </button> 
                  </>
                }
                
                </div>
            </div>
       
    )

   }     

  render() {
      const {post} = this.state
    return (
      <div className="container">

        <h2 className="display-2 mt-5 mb-5">{post.title}</h2>
        
        {!post ? (
            <div className="jumbotron text-center">
            <h2>Loading...</h2>                 
            </div>
        ) : (
            this.renderPost(post)
             )}

      </div>
    );
  }
}
export default SinglePost