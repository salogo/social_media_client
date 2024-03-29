import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import ContactUs from "./user/ContacUs";
import Menu from "./core/Menu";
import Profile from "./user/Profile";
import Users from "./user/Users";
import EditProfile from "./user/EditProfile";
import PrivateRoute from "./auth/PrivateRoute";
import FindPeople from "./user/FindPeople";
import NewPost from "./post/NewPost";
import SinglePost from "./post/SinglePost";
import EditPost from "./post/EditPost";



const MainRouter = () => (
    <div>
    <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/post/create" component={NewPost} />
            <Route exact path="/api/post/:postId" component={SinglePost} />
            <PrivateRoute exact path="/api/post/edit/:postId" component={EditPost} />  
            <Route exact path="/api/users/" component={Users} />
            <Route exact path="/signup" component={Signup} /> 
            <Route exact path="/signin" component={Signin} /> 
            <Route exact path="/contactUs" component={ContactUs} /> 
            <PrivateRoute exact path="/api/user/edit/:userId" component={EditProfile} />
            <PrivateRoute exact path="/FindPeople" component={FindPeople} />
            <PrivateRoute exact path="/api/user/:userId" component={Profile} />  
        </Switch>
    </div>
);
export default MainRouter;
