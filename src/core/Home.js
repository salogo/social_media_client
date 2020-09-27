import React from "react";
import Posts from "../post/Posts";

const Home = () => (
    <div>
        <div className="jumbotron">

            <h2> Home</h2>
            <p>Welcome to Social Media Client!</p>

        </div>
        <div className="container">
            <Posts />
        </div>
    </div>


);

export default Home;