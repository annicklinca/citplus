import { Form } from "react-bootstrap";
import React,{useState,useHistory} from 'react';
import "../../css/tailwindcss.css";
import "../../css/sign.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cityplus from '../../images/Cityplus.png';

function Signin() {
    return(
        <>

<div class="container">
    <div class="row mt-24">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card card-signin flex-row my-5">
          <div class="card-img-left d-none d-md-flex">
            
          </div>
          <div class="card-body">
            <img src={Cityplus} className="w-20 float-right" />  
            <h5 class="card-title text-blue-500">Login Account</h5>
            
            <form class="form-signin">
              
              <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required />
                <label for="inputEmail">Username or Email</label>
              </div>
              

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                <label for="inputPassword">Password</label>
              </div>
              <div className="from-label-group p-1">
                <a className=" text-blue-500" href="/Signup">forgot password?</a>
             </div> 
              

             <div className="from-label-group">
              <a href="/Home" className="btn btn-lg btn-primary btn-block text-uppercase">sign in</a>
            </div> 
             <div className="from-label-group pt-2">
              <p>I don't have an account? 
                <a className=" ml-2 text-blue-500" href="/Signup">Sign Up</a>
              </p>
             </div> 
             
              <hr class="my-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
           
        </>
    )
}
export default Signin;
