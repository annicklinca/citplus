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
         <div className="md:pr-10 sm:pr-10  md:pl-10 sm:pl-10  pt-2 pb-2 bg-white-100 flex flex-wrap">
             <div className="float-left w-1/2">
                 <img src={Cityplus} className="w-auto h-16 hover:cursor-pointer"/>
             </div>
             <div className="w-1/2 md:hidden">
                 <i onClick={openMenu} class="text-gray-600 float-right p-2 text-2xl"><FaAlignJustify/></i>                  
             </div>
         </div>
         {small?
            <div className="absolute inset-x-0 top-0 p-1 transition origin-top-right transform md:hidden mb-20 md:mb-0">
              <div className="rounded-lg shadow-lg">
                <div className="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
                  <div className="px-4 pt-4 pb-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <img class="block lg:hidden h-8 w-auto" src={Cityplus} alt="Workflow"/>
                      </div>
                      <div className="-mr-2">
                        <button type="button"onClick={()=>setSmall(false)} className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">  
                          <FaTimes/>
                        </button>
                      </div>
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
