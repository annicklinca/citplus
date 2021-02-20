import { Form } from "react-bootstrap";
import React,{useState} from 'react';
import "../../css/tailwindcss.css";
import "../../css/sign.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cityplus from '../../images/Cityplus.png';
import axios from 'axios'
import urlPath from '../../constant'
import { useHistory } from 'react-router-dom';
function Signin() {

  const history=useHistory()
  const [email, setEmail] = useState('')
  const [password,setPassword]=useState('')

  const [loading,setLoading]=useState(false)
  const [isError,setIserror]=useState(false)
  const [message,setMessage]=useState('')

  const handleSignin=(event)=>{
   
    event.preventDefault()
    const data={

      email:email,
      password:password
    }
    setLoading(true)
    if( email ==='' ||password==='' ){
      setMessage('Please fill all fields')
      setIserror(true)
      setLoading(false)
    }
    else{
    
 axios.post(`${urlPath.login}`,data)
        .then((res)=>{

         setMessage(res.data.message)
         localStorage.setItem('token', res.data.token)
         localStorage.setItem('fullname',res.data.data.fullname)
         localStorage.setItem('email',res.data.data.email)
         localStorage.setItem('category',res.data.data.category)
        
         setTimeout(() => {
           history.push('/home')
         }, 1000);
         setLoading(false)
         setIserror(true)
        })
        .catch((err)=>{
              setMessage('Invalid username or password')
          setLoading(false)
         setIserror(true)
        })
     
    }

  }
    return(
        <>

<div className="container">
    <div className="row mt-24">
      <div className="col-lg-10 col-xl-9 mx-auto">
        <div className="card card-signin flex-row my-5">
          <div className="card-img-left d-none d-md-flex">
            
          </div>
          <div className="card-body">
            <img src={Cityplus} className="w-20 float-right" alt="" />  
            <h5 className="card-title text-blue-500">Login Account</h5>
            { isError?  <div   className="bg-green-200 p-2 text-gray-600  font-bold rounded-xl mb-2">
              <p className="text-center">{message}</p>
              </div>
              :<span></span>}
            <form className="form-signin">
              
              <div className="form-label-group">
                <input type="email" value={email} onChange={(e)=>{
                  setEmail(e.target.value)
                }} id="inputEmail" className="form-control" placeholder="Email address" required />
                <label for="inputEmail">Username or Email</label>
              </div>
              

              <div className="form-label-group">
                <input type="password" value={password} onChange={(e)=>{
                  setPassword(e.target.value)
                }} id="inputPassword" className="form-control" placeholder="Password" required />
                <label for="inputPassword">Password</label>
              </div>
              <div className="from-label-group p-1">
                <a className=" text-blue-500" href="/Signup">forgot password?</a>
             </div> 
              

             <div className="from-label-group">
             {loading? <button className="btn btn-lg btn-primary btn-block text-uppercase">Logging.....</button>:   <button onClick={handleSignin} className="btn btn-lg btn-primary btn-block text-uppercase">Sign In</button>
 }
            </div> 
             <div className="from-label-group pt-2">
              <p>I don't have an account? 
                <a className=" ml-2 text-blue-500" href="/Signup">Sign Up</a>
              </p>
             </div> 
             
              <hr className="my-4" />
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
