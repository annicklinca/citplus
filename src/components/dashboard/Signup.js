import { Form } from "react-bootstrap";
import React,{useState,useHistory} from 'react';
import "../../css/tailwindcss.css";
import "../../css/sign.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cityplus from '../../images/Cityplus.png';
import axios from 'axios'
import urlPath from '../../constant'
function Signup() {

  const [fullname, setFullname]=useState('')
  const [email, setEmail] = useState('')
  const [password,setPassword]=useState('')
  const [pass, setPass] =useState('')
  const [loading,setLoading]=useState(false)
  const [isError,setIserror]=useState(false)
  const [message,setMessage]=useState('')

  const handleSignup=(event)=>{
   
    event.preventDefault()
    const data={
      fullname:fullname,
      email:email,
      category:'teacher',
      password:password
    }
    setLoading(true)
    if(fullname==='' || email ==='' ||password==='' ||pass ===''){
      setMessage('Please fill all fields')
      setIserror(true)
      setLoading(false)
    }
    else{
      if(password===pass){

        axios.post(`${urlPath.signup}`,data)
        .then((res)=>{
         setMessage(res.data.message)
         setLoading(false)
         setIserror(true)
        })
        .catch((err)=>{
          setMessage(err.message)
          setLoading(false)
         setIserror(true)
        })
      }else{
        setMessage('Password are not the same')
        setIserror(true)
        setLoading(false)
      }

    }

  }

    return(
        <>

<div class="container">
    <div class="row mt-24">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card card-signin flex-row my-5">
          <div class="card-img-left d-none d-md-flex">
            
          </div>
          <div class="card-body">
            <img src={Cityplus} className="w-20 float-right" alt="" />  
            <h5 class="card-title text-blue-500">Create Account</h5>
            
            <form class="form-signin">
          { isError?  <div   className="bg-green-200 p-2 text-gray-600  font-bold rounded-xl mb-2">
              <p className="text-center">{message}</p>
              </div>
              :<span></span>}
            <div class="form-label-group">
                <input type="text" id="inputUserame" value={fullname} onChange={(e)=>{
                  setFullname(e.target.value)
                }} class="form-control" placeholder="Username" required autofocus />
                <label for="inputUserame">Fullname</label>
              </div>
             
              <div class="form-label-group">
                <input type="email" value={email} onChange={(e)=>{
                  setEmail(e.target.value)
                }} id="inputEmail" class="form-control" placeholder="Email address" required />
                <label for="inputEmail">Email address</label>
              </div>
              

              <div class="form-label-group">
                <input type="password" id="inputPassword" value={password} onChange={(e)=>{
                  setPassword(e.target.value)
                }} class="form-control" placeholder="Password" required />
                <label for="inputPassword">Password</label>
              </div>
              
              <div class="form-label-group">
                <input type="password" value={pass} onChange={(e)=>{
                  setPass(e.target.value)
                }} id="inputConfirmPassword" class="form-control" placeholder="Password" required />
                <label for="inputConfirmPassword">Confirm password</label>
              </div>

             <div className="from-label-group">
           {loading? <button className="btn btn-lg btn-primary btn-block text-uppercase">Creating...</button>:   <button onClick={handleSignup} className="btn btn-lg btn-primary btn-block text-uppercase">sign Up</button>
 } </div> 
             <div className="from-label-group pt-2">
              <p>Already have account? 
                <a className=" ml-2 text-blue-500" href="/">Sign In</a>
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
export default Signup;
