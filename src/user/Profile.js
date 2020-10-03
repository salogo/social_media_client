import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { isAuthenticated } from "../auth";
import { read } from "./apiUser";
import DefaultProfile from "../images/avatar.png";
import DeleteUser from './DeleteUser';
import FollowProfileButton from "./FollowProfileButton";
import ProfileTabs from "./ProfileTabs";
import { listByUser } from "../post/apiPost";


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      user: { following: [], followers: [] },
      redirectToSignin: false,
      following: false,
      error: "",
      posts: []
    };
  }

  checkFollow = user => {
    const jwt = isAuthenticated()
    const match = user.followers.find(follower => {
      return follower._id === jwt.user._id
    })
    return match
  }

  clickFollowButton = callApi => {
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    callApi(userId, token, this.state.user._id)
      .then(data => {
        if (data.error) {
          this.setState({ error: data.error })
        } else {
          this.setState({ user: data, following: !this.state.following })
        }
      })
  }


  init = (userId) => {
    const token = isAuthenticated().token;
    read(userId, token)
      .then(data => {
        if (data.error) {
          this.setState({ redirectToSignin: true });
        } else {
          let following = this.checkFollow(data);
          this.setState({ user: data, following });
          this.loadPosts(data._id)
        }
      });
  };

  loadPosts = userId => {
    const token = isAuthenticated().token;
    listByUser(userId, token).then(data => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({posts: data})
      }
    })
  }

  componentDidMount() {
    const userId = this.props.match.params.userId
    this.init(userId)
  }
  componentWillReceiveProps(props) {
    const userId = props.match.params.userId
    this.init(userId)
  }


  render() {
    const { redirectToSignin, user , posts} = this.state;

    if (redirectToSignin) return <Redirect to="/signin" />

    const photoUrl = user._id
      ? `http://64.225.118.247/api/user/photo/${user._id}?${new Date().getTime()}`
      : DefaultProfile;

    return (
      <div className="container">
        <h2 className="mt-5 mb-5">Profile</h2>
        <div className="row">
          <div className="col-md-4">

            <img
              style={{ height: "200px", width: "auto",border: "1px solid black", borderRadius: "50%" }}
              src={photoUrl}
              onError={i => (i.target.src = `${DefaultProfile}`)}
              className="img-thumbnail"
              alt={user.name}
            />

          </div>

          <div className="col-md-8">

            <div className="lead mt-2">
              <p>Hello {user.name}</p>
              <p>Email {user.email}</p>
              <p>
                {`Joined ${new Date(
                  user.created
                ).toDateString()}`} </p>
            </div>

            {isAuthenticated().user &&
              isAuthenticated().user._id === user._id ? (
                <div className="d-inline-block">

                <Link
                className="btn btn-raised btn-info mr-5"
                to={`/post/create`}
              >
                Create Post
               </Link>

                  <Link
                    className="btn btn-raised btn-success mr-5"
                    to={`/api/user/edit/${user._id}`}
                  >
                    Edit Profile
                   </Link>
                  <DeleteUser userId={user._id} />
                </div>
              ) : (

                <FollowProfileButton
                  following={this.state.following}
                  onButtonClick={this.clickFollowButton}
                />
              )}

          </div>
        </div>

        <div className="row">
          <div className="col md-12 mt-5 mb-5">
            <hr />
            <p className="lead">{user.about}</p>
            <hr />
              
            <ProfileTabs
              followers={user.followers}
              following={user.following}
              posts={posts}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;