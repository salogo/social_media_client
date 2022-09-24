import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth"

const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: "#ADFF2F" }
    else return { color: "#ffffff" }
}


const Menu = ({ history }) => (
    <Fragment>

        <ul className="nav nav-tabs bg-info">
        
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                    </svg>
                    {" "}
                    Home
                 </Link>
            </li>

          {/*  <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/users")}
                    to="/api/users"
                >

                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    </svg>
                </Link>
</li> */ }

            <li className="nav-item">

                <Link
                    to={"/post/create"}
                    className="nav-link">

                    Create a new post
           </Link>

            </li>

            <li className="nav-item">

                <Link
                    to={"/ContactUs"}
                    className="nav-link">

                    Contact us
           </Link>

            </li>



            {!isAuthenticated() && (
                <Fragment>
                  {/*  <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            Sign Up
 </Link>
            </li> */ }
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                            Sign In
     </Link>
                    </li>
                </Fragment>
            )}


            {isAuthenticated() && (
                <Fragment>

                    <li className="nav-item">

                       {/* <Link
                            to={"/findpeople"}
                            className="nav-link">
                            Follow
                        {" "}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                            </svg>
            </Link>  */}

                    </li>

                    <li className="nav-item">

                        <Link
                            to={`/api/user/${isAuthenticated().user._id}`}
                            className="nav-link">
                            
                        </Link>
                    </li>
                    <li className="nav-item">
                        <span
                            className="nav-link"
                            style={
                                (isActive(history, "/signup"),
                                    { cursor: "pointer", color: "#fff" })
                            }
                            onClick={() => signout(() => history.push("/"))}

                        >
                            Sign Out
</span>
                    </li>

                </Fragment>
            )}
        </ul>
    </Fragment>
);
export default withRouter(Menu);