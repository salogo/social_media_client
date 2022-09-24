import React, { Component } from 'react';
import {Redirect} from "react-router-dom"

class ContactUs extends Component {

    contacUsForm =()=> ( 
        <form>

                    <div className="form-groupe">
                        <label className="">Phone:
                          <p>USA/Chicago</p>
                          +1(773)615-6615
                        </label>                
                    </div>

         </form>

    )

    render() {
       
        return (
            <div className="container">
                <h2 className="mt-5 mb-5"> Contact US</h2>  
                {this.contacUsForm()}          
            </div>
        );
    }
}
export default ContactUs;