import React from "react";
import { Link, withRouter } from "react-router-dom";
import { signout,isAuthenticated} from "../auth"

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

            {!isAuthenticated() && (
                <div>
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
                </div>
            )}

            {isAuthenticated() && (
                 
       <div>
       <li className="nav-item">
       <a href="/"
           className="nav-link"
           style={
               (isActive(history, "/signup"),
                   { cursor: "pointer", color: "#fff" })
           }
           onClick={() => signout(() => history.push("/"))}

       >
           Sign Out
</a>
   </li>

   <li className="nav-item">
     
       <Link to={`api/user/${isAuthenticated().user._id}`} className="nav-link"> 
           {`${isAuthenticated().user.name}' profile`}
      </Link>

   </li>
       </div>

            )}
        </ul>       
    </div>
);
export default withRouter(Menu);




