import  React,{useState} from "react";
import "../../css/tailwindcss.css";
import Cityplus from '../../images/Cityplus.png';
import { FaAlignJustify } from 'react-icons/fa';
import { FaTimes} from 'react-icons/fa';

function Navbar() {
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
    return(
        <>

         <div className=" md:pr-10 sm:pr-10  md:pl-10 sm:pl-10  pt-2 pb-2 bg-white-100 flex">
             <div className="float-left w-1/2">
                 <img src={Cityplus} className="w-auto h-16 hover:cursor-pointer"/>
             </div>
             <div className="w-1/2 md:hidden">
                
                {small? <i  onClick={()=>setSmall(false)} className="text-gray-600 float-right p-2 text-2xl">  
                          <FaTimes/></i>
                        :  <i onClick={openMenu} class="text-gray-600 float-right p-2 text-2xl"><FaAlignJustify/></i>  
}              
             </div>
         </div>
         {small?
            <div className="  md:hidden mb-20 md:mb-0 border-b border-gray-900">
              <div className="rounded-lg">
                <div className="bg-white divide-y-2 rounded-lg  divide-gray-50">
                  <div className="px-4 pt-0 pb-4 space-y-4">
                    <div className="flex items-center justify-between">
                     
                     
                    </div>
                    <div>
                      <nav className="grid gap-y-4">
                        <a href="/" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                          <div className="text-base font-medium leading-6 text-gray-900">
                            Home
                          </div>
                        </a>
                        
                        <a href="/" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">                        
                          <div className="text-base font-medium leading-6 text-gray-900">
                            House for rent
                          </div>
                        </a>

                        <a href="" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">                        
                          <div className="text-base font-medium leading-6 text-gray-900">
                            House for sale
                          </div>
                        </a>

                        <a href="" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">                        
                          <div className="text-base font-medium leading-6 text-gray-900">
                            Contact Us
                          </div>
                        </a>

                        <a href="" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">                       
                          <div className="text-base font-medium leading-6 text-gray-900">
                            Help
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
