import React, { Fragment} from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth"

const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: "#ADFF2F" }
    else return { color: "#ffffff" }
}


const Menu = ({ history }) => (
    <div>

        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                 </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/users")}
                    to="/api/users"
                >
                    ALL Users
             </Link>
            </li>
            
            <li className="nav-item">

            <Link
                to={"/post/create"}
                className="nav-link">
                Create Post
           </Link>

        </li>


            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            Sign Up
 </Link>
                    </li>
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
                <>

                    <li className="nav-item">

                    <Link
                        to={"/findpeople"}
                        className="nav-link">
                        Follow People!
                   </Link>

                </li>

                    <li className="nav-item">

                        <Link
                            to={`/api/user/${isAuthenticated().user._id}`}
                            className="nav-link">
                            {`${isAuthenticated().user.name}' profile`}
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

                </>
            )}
        </ul>
    </div>
);
export default withRouter(Menu);




