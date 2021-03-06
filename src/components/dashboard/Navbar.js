import  React,{useState} from "react";
import "../../css/tailwindcss.css";
import Cityplus from '../../images/Cityplus.png';
import { FaAlignJustify } from 'react-icons/fa';
import { FaTimes} from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
function Navbar() {
  const history =useHistory()
    const [small,setSmall]=useState(false);
    const [click,setClick]=useState(0);

    const openMenu=()=>{
        if(click===0){
            setSmall(true);
            setClick(1);
        }
        else{
            setSmall(false);
            setClick(0);

        }
    }
     const myname = localStorage.getItem('fullname')
   const token =localStorage.getItem('token')
   const category =localStorage.getItem('category')

   if(token==='' || category!=='teacher' ){
history.push('/') 
}
    return(
        <>
<div className=" bg-white ">
         <div className=" bg-white-100 flex">
             <div className="float-left w-1/2">
                 <img src={Cityplus} className=" h-16 hover:cursor-pointer"/>
             </div>
             <div className="w-1/2 md:hidden">
                
                {small? <i  onClick={()=>setSmall(false)} className="text-gray-600 float-right p-2 text-2xl">  
                          <FaTimes/></i>
                        :  <i onClick={openMenu} class="text-gray-600 float-right p-2 text-2xl"><FaAlignJustify/></i>  
}              
             </div>
         </div></div>
         {small?
            <div className="  md:hidden mb-20 md:mb-0 border-b border-gray-900">
              <div className="rounded-lg">
                <div className="bg-white divide-y-2 rounded-lg  divide-gray-50">
                  <div className="px-4 pt-0 pb-4 space-y-4">
                    <div className="flex items-center justify-between">
                     
                     
                    </div>
                    <div>
                      <nav className="grid gap-y-4">
                        <a href="/Home" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                          <div className="text-base font-medium leading-6 text-gray-900">
                            User Account
                          </div>
                        </a>
                        
                        <a href="/timetable" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">                        
                          <div className="text-base font-medium leading-6 text-gray-900">
                            Timetable
                          </div>
                        </a>

                        <a href="" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">                        
                          <div className="text-base font-medium leading-6 text-gray-900">
                            Class
                          </div>
                        </a>

                        <a href="" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">                        
                          <div className="text-base font-medium leading-6 text-gray-900">
                            Contact Us
                          </div>
                        </a>

                        <a href="" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">                       
                          <div className="text-base font-medium leading-6 text-gray-900">
                            Teacher
                          </div>
                        </a>

                        <a href="" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">                       
                          <div className="text-base font-medium leading-6 text-gray-900">
                            Modules
                          </div>
                        </a>

                        <a href="" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">                       
                          <div className="text-base font-medium leading-6 text-gray-900">
                            Books
                          </div>
                        </a>

                        <a href="" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">                       
                          <div className="text-base font-medium leading-6 text-gray-900">
                           Comunique
                          </div>
                        </a>

                        <a href="" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">                       
                          <div className="text-base font-medium leading-6 text-gray-900">
                          LiveChat
                          </div>
                        </a>

                        <a href="" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">                       
                          <div className="text-base font-medium leading-6 text-gray-900">
                           Todo
                          </div>
                        </a>

                        <a href="" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">                       
                          <div className="text-base font-medium leading-6 text-gray-900">
                           Logout
                          </div>
                        </a>
                        
                        
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :<span></span>}

        </>
    )
}
export default Navbar;
