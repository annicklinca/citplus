import  React,{useState} from "react";
import "../../css/tailwindcss.css";
import "../../css/dashboard.css";
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cityplus from '../../images/Cityplus.png';
import { FaAlignJustify } from 'react-icons/fa';
import { FaTimes} from 'react-icons/fa';
import { FaUserCheck } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaAddressCard } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaSatelliteDish } from 'react-icons/fa';
import { FaRocketchat } from 'react-icons/fa';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';

function NavLeft() {
    
    return(
        <>
               <div className="pr-4 pl-4 pb-1 pt-1 hidden md:block lg:block">
                    <ul className="">
                       
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="">
                                <div class="row">
                                    <div className="col-md-12 pl-20">
                                        <i className="text-3xl text-blue-300"><FaUserCheck/></i>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="font-medium p-1 font-sans  text-blue-800">User Account</p>
                                    </div>
                                </div>                
                            </a>
                        </li>
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="">
                                <div class="row">
                                    <div className="col-md-12 pl-20">
                                        <i className="text-3xl text-green-400"><FaCalendarAlt/></i>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="font-medium p-1 font-sans  text-blue-800">Timetable</p>
                                    </div>
                                </div>                
                            </a>
                        </li>
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="">
                                <div class="row">
                                    <div className="col-md-12 pl-20">
                                        <i className="text-3xl text-blue-300"><FaAddressCard/></i>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="font-medium p-1 font-sans  text-blue-800">Class</p>
                                    </div>
                                </div>                
                            </a>
                        </li>
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="">
                                <div class="row">
                                    <div className="col-md-12 pl-20">
                                        <i className="text-3xl text-yellow-700"><FaChalkboardTeacher/></i>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="font-medium p-1 font-sans  text-blue-800">Teacher</p>
                                    </div>
                                </div>                
                            </a>
                        </li>
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="">
                                <div class="row">
                                    <div className="col-md-12 pl-20">
                                        <i className="text-3xl text-black-400"><FaLink/></i>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="font-medium p-1 font-sans  text-blue-800">Modules</p>
                                    </div>
                                </div>                
                            </a>
                        </li>
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="">
                                <div class="row">
                                    <div className="col-md-12 pl-20">
                                        <i className="text-3xl text-indigo-500"><FaBook/></i>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="font-medium p-1 font-sans  text-blue-800">Books</p>
                                    </div>
                                </div>                
                            </a>
                        </li>
                        
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="">
                                <div class="row">
                                    <div className="col-md-12 pl-20">
                                        <i className="text-3xl text-gray-500"><FaSatelliteDish/></i>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="font-medium p-1 font-sans  text-blue-800">Comunique</p>
                                    </div>
                                </div>                
                            </a>
                        </li>

                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="">
                                <div class="row">
                                    <div className="col-md-12 pl-20">
                                        <i className="text-3xl text-blue-600"><FaRocketchat/></i>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="font-medium p-1 font-sans  text-blue-800">LiveChat</p>
                                    </div>
                                </div>                
                            </a>
                        </li>

                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="">
                                <div class="row">
                                    <div className="col-md-12 pl-20">
                                        <i className="text-3xl text-red-300"><FaExclamationTriangle/></i>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="font-medium p-1 font-sans  text-blue-800">Todo</p>
                                    </div>
                                </div>                
                            </a>
                        </li>
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="">
                                <div class="row">
                                    <div className="col-md-12 pl-20">
                                        <i className="text-4xl text-blue-600"><FaSignOutAlt/></i>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="font-medium p-1 font-sans  text-blue-800">Logout</p>
                                    </div>
                                </div>                
                            </a>
                        </li>
                    </ul>
                </div>
                
        </>
    )
}
export default NavLeft;
