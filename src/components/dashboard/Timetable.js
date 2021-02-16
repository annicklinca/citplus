import  React,{useState} from "react";
import "../../css/tailwindcss.css";
import "../../css/dashboard.css";
import Navbar from './Navbar';
import NavLeft from './NavLeft';
import {  FaAngleRight, FaCalendarAlt, FaComment, FaFacebookMessenger, FaMap } from 'react-icons/fa';
import cartoon from '../../images/cartoon.jpg';
import kid from '../../images/kid.jpeg';
import pic from '../../images/pic.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cityplus from '../../images/Cityplus.png';
import { FaSquare } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaStar} from 'react-icons/fa';
import { FaQuestion} from 'react-icons/fa';
import { FaEnvelope} from 'react-icons/fa';
import { FaPhoneSquare} from 'react-icons/fa';
import { FaAngleLeft} from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import WordLimit from 'react-word-limit';

function Timetable() {

  
        const [date, setDate] = React.useState(new Date());
      
       //Replaces componentDidMount and componentWillUnmount
       React.useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
            clearInterval(timerID);
          };
       });
      
         function tick() {
          setDate(new Date());
         }
      
      
         var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
         var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
         var dayw = days[ date.getDay() ];
         var monthw = months[ date.getMonth() ];
         
    

   
   
  
    const data = [
        {
          name: '2010',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: '2011',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: '2012',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: '2013',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: '2014',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: '2015',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: '2016',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    
    return(
        <>
           {/* Navbar top import */}
        
            <Navbar/>
        <div className="flex flex-wrap">
                
            {/* Navbar left import    */}
                
            <div className="w-full  md:w-1/6 ">
                <NavLeft/>
            </div>
            
            {/* body content */}

            <div className="w-full md:w-5/6">
               <div className="bg-blue-100 rounded-lg md:mr-4 flex flex-wrap"> 
                <div className="w-full md:w-2/6 md:pl-8">
                     <div className="m-2 p-2">
                         <span className="font-medium font-bold text-gray-700 text-2xl">{dayw} {date.getDate()} {monthw}  {date.getUTCFullYear()}</span>
                         <div className="mt-4">
                         <div class="grid grid-cols-4 gap-3">
                              <div className="bg-green-500">
                                  <h2 className="pl-2 text-white font-bold font-medium ">
                                  <WordLimit limit={3}>  
                                      {dayw}
                                      </WordLimit>
                                      </h2>
                                  <h3 className="pl-3 text-white font-bold font-medium">DAYS</h3>
                              </div>
                             <div className="bg-green-500">
                             <h2 className="pl-4 text-white font-bold font-medium ">{date.getUTCHours()}</h2>
                             <h3 className="pl-3 text-white font-bold font-medium">HOUR</h3>
                             </div>
                              <div className="bg-green-500">
                              <h2 className="pl-4 text-white font-bold font-medium ">{date.getUTCMinutes()}</h2>
                              <h3 className="pl-3 text-white font-bold font-medium">MIN</h3>
                              </div>
                              <div className="bg-green-500">
                              <h2 className="pl-4 text-white font-bold font-medium ">{date.getUTCSeconds()}</h2>
                             <h3 className="pl-3 text-white font-bold font-medium">SEC</h3>
                              </div>
                              </div>
                         </div>
                         <div className="mt-4 pt-4 row bg-white rounded-xl">
                             <h2 className="font-bold text-blue-900">Develop Your Talent</h2>
                          <div className="col-6"><snap className="font-normal">Writing</snap></div>
                          <div className="col-6 flex gap-4">
                              <span className="flex text-sm text-green-400"><FaComment/></span>
                              <span className="flex text-sm text-blue-600"><FaMap/></span>
                          </div>
                          <div className="col-6"><snap className="font-normal">Dance</snap></div>
                          <div className="col-6 flex gap-4">
                              <span className="flex text-sm text-green-400"><FaComment/></span>
                              <span className="flex text-sm text-blue-600"><FaMap/></span>
                          </div>
                          <div className="col-6"><snap className="font-normal">Football</snap></div>
                          <div className="col-6 flex gap-4">
                          <span className="flex text-sm text-green-400"><FaComment/></span>
                              <span className="flex text-sm text-blue-600"><FaMap/></span>
                          </div>
                          <div className="col-6"><snap className="font-normal">Volleyball</snap></div>
                          <div className="col-6 flex gap-4">
                          <span className="flex text-sm text-green-400"><FaComment/></span>
                              <span className="flex text-sm text-blue-600"><FaMap/></span>
                          </div>
                          <div className="col-6"><snap className="font-normal">Basketball</snap></div>
                          <div className="col-6 flex gap-4">
                          <span className="flex text-sm text-green-400"><FaComment/></span>
                              <span className="flex text-sm text-blue-600"><FaMap/></span>
                          </div>
                          <div className="col-6"><snap className="font-normal">Play Music Inst</snap></div>
                          <div className="col-6 flex gap-4">
                          <span className="flex text-sm text-green-400"><FaComment/></span>
                              <span className="flex text-sm text-blue-600"><FaMap/></span>
                          </div>
                          <div className="col-6"><snap className="font-normal">Art</snap></div>
                          <div className="col-6 flex gap-4">
                          <span className="flex text-sm text-green-400"><FaComment/></span>
                              <span className="flex text-sm text-blue-600"><FaMap/></span>
                          </div>
                         </div>
                     </div>
                     <div className="mt-4 mr-2 ml-2 pl-4 pt-2  bg-white shadow-lg rounded-xl">
                         <h2 className="font-medium font-bold text-blue-900">Recommended books</h2>
                         <div className="pt-2">
                             <h4 className="font-medium underline text-blue-900">Isac Newton Motion Laws</h4>
                             <h4 className="font-medium underline text-blue-900">The Galaxy</h4>
                             <h4 className="font-medium underline text-blue-900">Theories of Light</h4>
                             <h4 className="font-medium underline text-blue-900">Pray for Mothers</h4>
                         </div>
                      <div>
                      <button class="bg-indigo-700 hover:bg-blue-500 text-white font-bold mt-2 pl-4 px-4 rounded-md">
                     Recommend us a book
                     </button>
                      </div>
                    <div className="text-white">ffff</div>
                     </div>
                     <div className="mt-4 pt-4 row bg-white rounded-xl">
                             <h2 className="font-bold text-blue-900">Tasks & Works</h2>
                          <div className="col-4"><snap className="flex text-sm text-yellow-900 font-normal">SUBJECT</snap></div>
                          <div className="col-5"><snap className="flex text-sm text-yellow-900 font-normal">SUB DATE</snap></div>
                          <div className="col-3 flex gap-6">
                              <span className="flex text-sm text-yellow-900 font-normal">ACTION</span>
                          </div>
                          <div className="col-4"><snap className="font-bold text-green-700 underline">Math</snap></div>
                          <div className="col-5"><snap className="text-yellow-900 ">01/3  10:30A.M</snap></div>
                          <div className="col-3 flex gap-2">
                              <span className="flex text-sm text-blue-600"><FaSquare/></span>
                              <span className="flex text-sm text-green-400"><FaSquare/></span>
                          </div>
                          <div className="col-4"><snap className="font-bold text-green-700 underline">Kiny</snap></div>
                          <div className="col-5"><snap className="text-yellow-900 ">01/3  10:30A.M</snap></div>
                          <div className="col-3 flex gap-2">
                              <span className="flex text-sm text-blue-600"><FaSquare/></span>
                              <span className="flex text-sm text-green-400"><FaSquare/></span>
                          </div>
                          <div className="col-4"><snap className="font-bold text-green-700 underline">BIO</snap></div>
                          <div className="col-5"><snap className=" text-yellow-900 ">01/3  10:30A.M</snap></div>
                          <div className="col-3 flex gap-2">
                              <span className="flex text-sm text-blue-600"><FaSquare/></span>
                              <span className="flex text-sm text-green-400"><FaSquare/></span>
                          </div>
                          <div className="col-4"><snap className="font-bold text-green-700 underline">FRENCH</snap></div>
                          <div className="col-5"><snap className="text-yellow-900 ">01/3  10:30A.M</snap></div>
                          <div className="col-3 flex gap-2">
                              <span className="flex text-sm text-blue-600"><FaSquare/></span>
                              <span className="flex text-sm text-green-400"><FaSquare/></span>
                          </div>
                          <div className="col-4"><snap className="font-bold text-green-700 underline">HISTORY</snap></div>
                          <div className="col-5"><snap className="text-yellow-900 ">01/3  10:30A.M</snap></div>
                          <div className="col-3 flex gap-2">
                              <span className="flex text-sm text-blue-600"><FaSquare/></span>
                              <span className="flex text-sm text-green-400"><FaSquare/></span>
                          </div>
                          <div className="col-4"><snap className="font-bold text-green-700 underline">GEO</snap></div>
                          <div className="col-5"><snap className="text-yellow-900 ">01/3  10:30A.M</snap></div>
                          <div className="col-3 flex gap-2">
                              <span className="flex text-sm text-blue-600"><FaSquare/></span>
                              <span className="flex text-sm text-green-400"><FaSquare/></span>
                          </div>
                          <div className="col-4"><snap className="font-bold text-green-700 underline">ENG</snap></div>
                          <div className="col-5"><snap className="text-yellow-900 ">01/3  10:30A.M</snap></div>
                          <div className="col-3 flex gap-2">
                              <span className="flex text-sm text-blue-600"><FaSquare/></span>
                              <span className="flex text-sm text-green-400"><FaSquare/></span>
                          </div>
                          <div className="col-4"><snap className="font-bold text-green-700 underline">ICT</snap></div>
                          <div className="col-5"><snap className="text-yellow-900 ">01/3  10:30A.M</snap></div>
                          <div className="col-3 flex gap-2">
                              <span className="flex text-sm text-blue-600"><FaSquare/></span>
                              <span className="flex text-sm text-green-400"><FaSquare/></span>
                          </div>
                         </div>
                </div>
                <div className="w-full md:w-4/6">
                    <div className="row p-4">
                        <div className="col-md-5 mt-2"> 
                            <div className="row">     
                                <div className="bg-white rounded-xl shadow-lg md:m-1  pl-3 pt-3 pb-3">
                                    <h4 className="font-medium text-blue-900">Jan25, 2021</h4>
                                    <div className="row pt-2 pb-2">
                                        <div className="col-12 font-normal text-sm"><snap>AM</snap></div>
                                        <div className="col-3 font-normal text-xs"><snap>S2 b</snap></div>
                                        <div className="col-4 font-normal text-xs"><span>09.30 - 10.30</span></div>
                                        <div className="col-5 font-normal text-xs">
                                            <snap className="flex gap-1"><FaCircle className="text-gray-400"/><FaCircle className="text-gray-400"/><FaCircle className="text-orange-400"/><FaCircle className="text-gray-400"/></snap>
                                        </div>
                                        <div className="col-3 font-normal text-xs"><snap>S1 b</snap></div>
                                        <div className="col-4 font-normal text-xs"><span>11.00 - 12.00</span></div>
                                        <div className="col-5 font-normal text-xs">
                                            <snap className="flex gap-1"><FaCircle className="text-pink-400"/><FaCircle className="text-gray-400"/><FaCircle className="text-gray-400"/><FaCircle className="text-gray-400"/></snap>
                                        </div><br/>

                                        <div className="col-12 font-normal text-sm mt-2"><snap>PM</snap></div>
                                        <div className="col-3 font-normal text-xs"><snap>S4 a</snap></div>
                                        <div className="col-4 font-normal text-xs"><span>13.00 - 15.00</span></div>
                                        <div className="col-5 font-normal text-xs">
                                            <snap className="flex gap-1"><FaCircle className="text-gray-400"/><FaCircle className="text-gray-400"/><FaCircle className="text-gray-400"/><FaCircle className="text-green-400"/></snap>
                                        </div>
                                        <div className="col-3 font-normal text-xs"><snap>S4 a</snap></div>
                                        <div className="col-4 font-normal text-xs"><span>13.00 - 15.00</span></div>
                                        <div className="col-5 font-normal text-xs">
                                            <snap className="flex gap-1"><FaCircle className="text-gray-400"/><FaCircle className="text-gray-400"/><FaCircle className="text-gray-400"/><FaCircle className="text-green-400"/></snap>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 mt-2">
                           <div className="row md:m-1  bg-white rounded-xl shadow-lg">
                              <div className="col-8 pl-3 pt-2 pb-2">
                                <span className="font-medium font-sans text-blue-900 text-xl">Ineza Queen Deborah</span>
                                <div className="mt-2">
                                <span className="font-medium text-md text-blue-900">RG ID:2006-IQ0105-50 </span><br/>
                                <span className="font-medium text-sm text-blue-900">Age: 21    Gender:F  H:1.8m </span><br/>
                                <span className="font-medium text-sm text-blue-900">W:  45 BPM:  45  DA:No</span><br/><br/>
                                <span className="font-medium text-sm text-blue-900">Phone: +250 784 562 410 </span><br/>
                                <span className="font-medium text-sm text-blue-900">E-mail: erdan@gmail.com </span><br/>
                                <span className="font-medium text-sm text-blue-900">Senior: 3B </span><br/>
                                </div>
                              </div>
                              <div className="col-4">
                                  <div className="pt-12 pr-24 w-48">
                                    <img className="h-24" src={kid} />
                                    <button className="bg-indigo-600 hover:bg-blue-500 w-64 shadow-md text-gray-100 font-medium w-full rounded-sm">Edit Profile</button>
                                  </div>
                              </div>
                           </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12"> 
                            <div className="row bg-white rounded-xl shadow-lg md:mr-6 md:ml-3 pt-4 pb-4">     
                                
                                    <div className="col-2 flex">
                                      <h2 className="font-bold text-sm">Select Year</h2>
                                      </div>
                                      <div className="col-2 flex gap-2">
                                          <snap className="flex text-blue-500 "><FaAngleLeft/></snap>
                                          <snap className="flex font-bold text-sm">2016</snap>
                                          <snap className="flex text-blue-500 "><FaAngleRight/></snap>
                                          </div>
                                          <div className="col-2 flex">
                                      <h2 className="font-bold text-sm">Select Year</h2>
                                      </div>
                                      <div className="col-1 flex gap-1">
                                          <snap className="flex text-blue-500"><FaAngleLeft/></snap>
                                          <snap className="flex font-bold text-sm">S3</snap>
                                          <snap className="flex text-blue-500 "><FaAngleRight/></snap>
                                        
                                          </div>
                                    <div className="col-5"><h3 className="font-bold text-xs mt-1 pl-4">School:GS ST JOSEPH KABGAYI</h3></div>
                                    <div className="overflow-auto">
                                     <table className="border-2 border-white shadow-xl ">
                                       <tr >
                                           <th className="bg-indigo-700 text-white font-bold text-xs">Subjects/Marks</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TS</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">EX</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TOT</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white-600">GR</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TS</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">EX</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TOT</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white-600">GR</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TS</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">EX</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TOT</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white-600">GR</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TS</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">EX</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TOT</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white-600">GR</th>
                                           <th className="bg-indigo-700 text-white font-bold text-xs">Subjects/Marks</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TS</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">EX</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TOT</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white-600">GR</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TS</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">EX</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TOT</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">GR</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TS</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">EX</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TOT</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white-600">GR</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TS</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">EX</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white">TOT</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-white-600">GR</th>
                                       </tr>

                                       <tr>
                                           <th className="bg-indigo-700 text-white font-bold text-xs"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">1</th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">st</th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">Term</th>
                                           <th className="bg-white-500 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">2</th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">nd</th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">Term</th>
                                           <th className="bg-white-500 text- text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">3</th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">rd</th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">Term</th>
                                           <th className="bg-white-500 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-indigo-700 text-white font-bold text-xs "></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">1</th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">st</th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">Term</th>
                                           <th className="bg-white-500 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">2</th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">nd</th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">Term</th>
                                           <th className="bg-white-500 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">3</th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">rd</th>
                                           <th className="bg-white-500 text-xs text-black font-bold border-r-2 border-white">Term</th>
                                           <th className="bg-white-500 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                       </tr>

                                       <tr>
                                           <th className="bg-indigo-700 text-white font-bold text-xs">Math</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">60</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">60</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">120</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-gray-600">18</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-300 text- text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-indigo-700 text-white font-bold text-xs ">Swahili</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">20</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">20</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">40</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-gray-600">18</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">32</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">32</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">12</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">28</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                       </tr>

                                       <tr>
                                           <th className="bg-indigo-700 text-white font-bold text-xs">Physics</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">40</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">40</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">80</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-gray-600">18</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">27</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">12.5</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">33.5</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">27</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">22.5</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">49</th>
                                           <th className="bg-blue-100 text- text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-indigo-700 text-white font-bold text-xs ">Literature</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">20</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">20</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">40</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-gray-600">18</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">32</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">32</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">12</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">28</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                       </tr>
                                       <tr>
                                           <th className="bg-indigo-700 text-white font-bold text-xs">Biology</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">60</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">60</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">120</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-gray-600">18</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-300 text- text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-indigo-700 text-white font-bold text-xs ">ICT</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">20</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">20</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">40</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-gray-600">18</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">32</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">32</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">12</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">28</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                       </tr>

                                       <tr>
                                           <th className="bg-indigo-700 text-white font-bold text-xs">Chemistry</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">40</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">40</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">80</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-gray-600">18</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">27</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">12.5</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">33.5</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">27</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">22.5</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">49</th>
                                           <th className="bg-blue-100 text- text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-indigo-700 text-white font-bold text-xs ">Physical Edu</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">20</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">20</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">40</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-gray-600">18</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">32</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">32</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">12</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">28</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                       </tr>

                                       <tr>
                                           <th className="bg-indigo-700 text-white font-bold text-xs">HISTORY</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">60</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">60</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">120</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-gray-600">18</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-300 text- text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-indigo-700 text-white font-bold text-xs ">Religion</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">20</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">20</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">40</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-gray-600">18</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">32</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">32</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">12</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">16</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">28</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                       </tr>

                                       <tr>
                                           <th className="bg-indigo-700 text-white font-bold text-xs">Geography</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">40</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">40</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">80</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-gray-600">18</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">27</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">12.5</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">33.5</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">27</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">22.5</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">49</th>
                                           <th className="bg-blue-100 text- text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-indigo-700 text-white font-bold text-xs "></th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                       </tr>

                                       <tr>
                                           <th className="bg-indigo-700 text-white font-bold text-xs">English</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">60</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">60</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">120</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-gray-600">18</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-300 text- text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-indigo-700 text-white font-bold text-xs "></th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                       </tr>

                                       <tr>
                                           <th className="bg-indigo-700 text-white font-bold text-xs">FRENCH</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">40</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">40</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">80</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-gray-600">18</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">27</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">12.5</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">33.5</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">27</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">22.5</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">49</th>
                                           <th className="bg-blue-100 text- text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-indigo-700 text-white font-bold text-xs "></th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                       </tr>

                                       <tr>
                                           <th className="bg-indigo-700 text-white font-bold text-xs">Kinyarwanda</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">60</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">60</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white">120</th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-gray-600">18</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-300 text- text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-indigo-700 text-white font-bold text-xs "></th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-blue-600 font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-300 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                       </tr>

                                       <tr>
                                           <th className="bg-indigo-700 text-white font-bold text-xs">Entrepreneurship  </th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">40</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">40</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white">80</th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-gray-600">18</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">27</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">12.5</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">33.5</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">27</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">22.5</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">49</th>
                                           <th className="bg-blue-100 text- text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">36</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">26</th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white">62</th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-indigo-700 text-white font-bold text-xs "></th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-blue-600 font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-black font-bold border-r-2 border-white"></th>
                                           <th className="bg-blue-100 text-xs text-white font-bold border-r-2 border-gray-600"></th>
                                       </tr>

                                     </table>
                                
                               
                                
                                     </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="row p-4">
                        <div className="col-md-7 mt-2"> 
                            <div className="row">     
                                <div className="bg-white rounded-xl shadow-lg md:m-1  pl-3 pt-3 pb-3">
                                    <h4 className="font-medium text-blue-900">Academic Perfomance</h4>
                                    <BarChart
                                     width={400}
                                    height={300}
                                     data={data}
                                    margin={{
                                    top: 5,
                                   right: 30,
                                   left: 20,
                                   bottom: 5,
                                   
                                   }}
                                    >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                             <Tooltip />
                            <Legend />
                          <Bar dataKey="pv" fill="#8884d8" />
                         <Bar dataKey="uv" fill="#82ca9d" />
                         </BarChart>
                                 
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mt-2">
                            <div className="row md:ml-0">     
                                <div className="bg-white rounded-xl shadow-lg pl-3 pt-3 pb-3">
                                    <h4 className="font-medium text-blue-900">Classmates </h4>
                                    <div className="row pt-3 pb-2">
                                        <div className="col-3"><snap className="bg-orange-400 h-3 w-3 rounded-full p-2">P</snap></div>
                                        <div className="col-5 p-0 row">
                                            <div className="col-12 p-0">
                                                <snap className="font-semibold text-sm">Philbert Nddizeye</snap><br/>
                                                <span className="flex text-xs text-gray-600 font-normal float-left">ndzpilber@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="col-4 row">
                                            <div className="col-12 mt-2 ">
                                               <span className="flex text-sm text-black font-bold float-left gap-1"><FaQuestion/><FaEnvelope className="text-orange-400"/><FaPhoneSquare className="text-orange-400"/></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pt-3 pb-2">
                                        <div className="col-3"><snap className="bg-pink-400 h-3 w-3 rounded-full p-2">L</snap></div>
                                        <div className="col-5 p-0 row">
                                            <div className="col-12 p-0">
                                                <snap className="font-semibold text-sm">Lague byiringiro</snap><br/>
                                                <span className="flex text-xs text-gray-600 font-normal float-left">ndzpilber@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="col-4 row">
                                            <div className="col-12 mt-2 ">
                                               <span className="flex text-sm text-black font-bold float-left gap-1"><FaQuestion/><FaEnvelope className="text-orange-400"/><FaPhoneSquare className="text-orange-400"/></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pt-3 pb-2">
                                        <div className="col-3"><snap className="bg-blue-400 h-3 w-3 rounded-full p-2">S</snap></div>
                                        <div className="col-5 p-0 row">
                                            <div className="col-12 p-0">
                                                <snap className="font-semibold text-sm">Sugira Erenst</snap><br/>
                                                <span className="flex text-xs text-gray-600 font-normal float-left">sugiraernt@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="col-4 row">
                                            <div className="col-12 mt-2 ">
                                               <span className="flex text-sm text-black font-bold float-left gap-1"><FaQuestion/><FaEnvelope className="text-orange-400"/><FaPhoneSquare className="text-orange-400"/></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pt-3 pb-2">
                                        <div className="col-3"><snap className="bg-blue-400 h-3 w-3 rounded-full p-2">S</snap></div>
                                        <div className="col-5 p-0 row">
                                            <div className="col-12 p-0">
                                                <snap className="font-semibold text-sm">Sugira Erenst</snap><br/>
                                                <span className="flex text-xs text-gray-600 font-normal float-left">sugiraernt@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="col-4 row">
                                            <div className="col-12 mt-2 ">
                                               <span className="flex text-sm text-black font-bold float-left gap-1"><FaQuestion/><FaEnvelope className="text-orange-400"/><FaPhoneSquare className="text-orange-400"/></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pt-3 pb-2">
                                        <div className="col-3"><snap className="bg-blue-400 h-3 w-3 rounded-full p-2">S</snap></div>
                                        <div className="col-5 p-0 row">
                                            <div className="col-12 p-0">
                                                <snap className="font-semibold text-sm">Sugira Erenst</snap><br/>
                                                <span className="flex text-xs text-gray-600 font-normal float-left">sugiraernt@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="col-4 row">
                                            <div className="col-12 mt-2 ">
                                               <span className="flex text-sm text-black font-bold float-left gap-1"><FaQuestion/><FaEnvelope className="text-orange-400"/><FaPhoneSquare className="text-orange-400"/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Timetable;
