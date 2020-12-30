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
                        //<div className="card col-md-4" key={i}>
                        <div style={{ height: "50%", width: "50%", }} key={i}>
                            <div className="card-body">
                                <img
                                    src={`http://64.225.118.247/api/post/photo/${post._id}`}
                                    alt={post.title}
                                    onError={i => i.target.src = `${DefaultPost}`}
                                    className="img-thunbail mb-3"
                                  //  style={{ height: "200px", width: "100%" }}
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
                {/*  posts.length because its in array */}
                    {!posts.length ? "Loading..." : "STAY CONNECTED TO OUR ACTIVE USERS"}
                </h2>
                {this.renderPosts(posts)}
            </div>
        );
    }
}
export default Posts;



