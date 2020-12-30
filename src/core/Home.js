import React from "react";
import Posts from "../post/Posts";
import connect from "../images/connect.jpg";



const Home = () => (
    <div>
        <div className="jumbotron bg-secondary sega" >

            <img 
            src={connect} 
            alt="people" 
            style={{ height: "100%", width: "100%", }}
            />        

        </div>
        <div className="container">
            <Posts /> 
        </div>
    </div>


);

export default Home;