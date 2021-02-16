import  React,{useState,Component} from "react";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import "../../css/tailwindcss.css";
import "../../css/dashboard.css";
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import NavLeft from './NavLeft';
import { FaCalendarAlt } from 'react-icons/fa';
import cartoon from '../../images/cartoon.jpg';
import pic from '../../images/pic.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cityplus from '../../images/Cityplus.png';
import { FaSquare } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaStar} from 'react-icons/fa';
import { FaQuestion} from 'react-icons/fa';
import { FaEnvelope} from 'react-icons/fa';
import { FaEnvelNavLeftope} from 'react-icons/fa';
import { FaPhoneSquare} from 'react-icons/fa';


function Dashboard() {
    const history =useHistory()
    const [show, setShow] = useState(false);
    const [showAssginment, setShowAssign] = useState(false);
    const [showMiddleTermExam, setShowMiddleTermExam] = useState(false);
    const [showTermExam, setTermExam] = useState(false);
    const [showYearExam, setYearExam] = useState(false);
    const [showInnovation, setInnovation] = useState(false);
   
    const handleTest = () => {
        setShow(true);
    }
    const handleAssginment = () =>{
        setShowAssign(true);
    }
    const handleMiddleTermExam = () =>{
        setShowMiddleTermExam(true);        
    }
    const handleTermExam = () =>{
        setTermExam(true);
    }
    const handleYearExam = () =>{
        setYearExam(true);
    }
    const handleInnovation = () =>{
        setInnovation(true);
    }
    const handleClose = () => {
        setShow(false);
        setShowAssign(false);
        setShowMiddleTermExam(false);
        setTermExam(false);
        setYearExam(false);
        setInnovation(false);
    }
   const myname = localStorage.getItem('fullname')
   const token =localStorage.getItem('token')
   const category =localStorage.getItem('category')

   if(token==='' || category!=='teacher' ){
history.push('/')
}
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
                         <span className="font-medium font-sans text-gray-700 text-2xl capitalize">Dear <span>{myname}</span> <br/> Good Lucky Today!</span>
                         <div className="mt-4">
                          <span className="font-normal">Mathematich</span><br/>
                          <span className="font-normal">Physics</span>
                         </div>
                         <div className="mt-4 row">
                          <div className="col-6">
                              <snap className="font-normal hover:cursor-pointer" onClick={handleTest}><a href="#">Test</a></snap>
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                    <Modal.Title><p>Adding Test marks</p></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form className="">
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Category</label>
                                                <div class="col-sm-10">
                                                    <input type="category" class="form-control" id="inputPassword" placeholder="Enter Category"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter Test title"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Student</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter student id"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Class</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter class id"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Term</label>
                                                <div class="col-sm-10">
                                                    <select class="form-control">
                                                        <option>First Term</option>
                                                        <option>Second Term</option>
                                                        <option>Third Term</option>
                                                    </select>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Marks</label>
                                                <div class="col-sm-10">
                                                    <input type="number" class="form-control" id="inputPassword" placeholder="Enter marks"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <div class="col-sm-12">
                                                  <button className="bg-blue-500 w-full p-2 rounded-lg hover:bg-blue-400 font-semibold text-white">Add Marks</button>
                                                </div>   
                                            </div>
                                        </form>
                                    </Modal.Body>
                                </Modal>
                          
                          </div>
                          <div className="col-6 flex gap-1">
                              <span className="flex text-sm text-green-400"><FaSquare/><FaSquare/><FaSquare/></span>
                              <span className="flex text-sm text-blue-400"><FaSquare/><FaSquare className="text-gray-400"/><FaSquare className="text-gray-400"/></span>
                              <span className="flex text-sm text-pink-400"><FaSquare/><FaSquare/><FaSquare /></span>
                          </div>
                          <div className="col-6">

                            <snap className="font-normal hover:cursor-pointer" onClick={handleAssginment}><a href="#">Assignments</a></snap>
                                <Modal
                                    show={showAssginment}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard=""
                                >
                                    <Modal.Header closeButton>
                                    <Modal.Title><p>Adding Assignments marks</p></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form className="">
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Category</label>
                                                <div class="col-sm-10">
                                                    <input type="category" class="form-control" id="inputPassword" placeholder="Enter Category"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter Assignment title"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Student</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter student id"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Class</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter class id"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Term</label>
                                                <div class="col-sm-10">
                                                    <select class="form-control">
                                                        <option>First Term</option>
                                                        <option>Second Term</option>
                                                        <option>Third Term</option>
                                                    </select>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Marks</label>
                                                <div class="col-sm-10">
                                                    <input type="number" class="form-control" id="inputPassword" placeholder="Enter marks"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <div class="col-sm-12">
                                                  <button className="bg-blue-500 w-full p-2 rounded-lg hover:bg-blue-400 font-semibold text-white">Add Marks</button>
                                                </div>   
                                            </div>
                                        </form>
                                    </Modal.Body>
                                </Modal>      
                          </div>
                          <div className="col-6 flex gap-1">
                              <span className="flex text-sm text-green-400"><FaSquare/><FaSquare/><FaSquare/></span>
                              <span className="flex text-sm text-blue-400"><FaSquare/><FaSquare/><FaSquare className="text-gray-400"/></span>
                              <span className="flex text-sm text-pink-400"><FaSquare/><FaSquare/><FaSquare/></span>
                          </div>
                          <div className="col-6">
                              <snap className="font-normal hover:cursor-pointer" onClick={handleMiddleTermExam}><a href="#">Middle Term Exam</a></snap>
                                <Modal
                                    show={showMiddleTermExam}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard=""
                                >
                                    <Modal.Header closeButton>
                                    <Modal.Title><p>Adding Middle Term Exam marks</p></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form className="">
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Category</label>
                                                <div class="col-sm-10">
                                                    <input type="category" class="form-control" id="inputPassword" placeholder="Enter Category"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter Middle term title"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Student</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter student id"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Class</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter class id"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Term</label>
                                                <div class="col-sm-10">
                                                    <select class="form-control">
                                                        <option>First Term</option>
                                                        <option>Second Term</option>
                                                        <option>Third Term</option>
                                                    </select>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Marks</label>
                                                <div class="col-sm-10">
                                                    <input type="number" class="form-control" id="inputPassword" placeholder="Enter marks"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <div class="col-sm-12">
                                                  <button className="bg-blue-500 w-full p-2 rounded-lg hover:bg-blue-400 font-semibold text-white">Add Marks</button>
                                                </div>   
                                            </div>
                                        </form>
                                    </Modal.Body>
                                </Modal>
                          </div>

                          <div className="col-6 flex gap-1">
                              <span className="flex text-sm text-green-400"><FaSquare/><FaSquare/><FaSquare/></span>
                              <span className="flex text-sm text-blue-400"><FaSquare/><FaSquare/><FaSquare className="text-gray-400"/></span>
                              <span className="flex text-sm text-pink-400"><FaSquare/><FaSquare/><FaSquare/></span>
                          </div>
                          <div className="col-6">
                              <snap className="font-normal hover:cursor-pointer" onClick={handleTermExam}><a href="#">Term Exam</a></snap>
                              <Modal
                                    show={showTermExam}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard=""
                                >
                                    <Modal.Header closeButton>
                                    <Modal.Title><p>Adding Term Exams marks</p></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form className="">
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Category</label>
                                                <div class="col-sm-10">
                                                    <input type="category" class="form-control" id="inputPassword" placeholder="Enter Category"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter Term Exam title"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Student</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter student id"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Class</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter class id"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Term</label>
                                                <div class="col-sm-10">
                                                    <select class="form-control">
                                                        <option>First Term</option>
                                                        <option>Second Term</option>
                                                        <option>Third Term</option>
                                                    </select>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Marks</label>
                                                <div class="col-sm-10">
                                                    <input type="number" class="form-control" id="inputPassword" placeholder="Enter marks"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <div class="col-sm-12">
                                                  <button className="bg-blue-500 w-full p-2 rounded-lg hover:bg-blue-400 font-semibold text-white">Add Marks</button>
                                                </div>   
                                            </div>
                                        </form>
                                    </Modal.Body>
                                </Modal>
                          </div>
                          <div className="col-6 flex gap-1">
                              <span className="flex text-sm text-green-400"><FaSquare/><FaSquare/><FaSquare/></span>
                              <span className="flex text-sm text-blue-400"><FaSquare className="text-gray-400"/><FaSquare className="text-gray-400"/><FaSquare className="text-gray-400"/></span>
                              <span className="flex text-sm text-pink-400"><FaSquare/><FaSquare/><FaSquare/></span>
                          </div>
                          <div className="col-6">
                              <snap className="font-normal hover:cursor-pointer" onClick={handleYearExam}><a href="#">Year Exam</a></snap>
                                <Modal
                                    show={showYearExam}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard=""
                                >
                                    <Modal.Header closeButton>
                                    <Modal.Title><p>Adding Year Exams marks</p></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form className="">
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Category</label>
                                                <div class="col-sm-10">
                                                    <input type="category" class="form-control" id="inputPassword" placeholder="Enter Category"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter Exam title"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Student</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter student id"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Class</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter class id"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Term</label>
                                                <div class="col-sm-10">
                                                    <select class="form-control">
                                                        <option>First Term</option>
                                                        <option>Second Term</option>
                                                        <option>Third Term</option>
                                                    </select>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Marks</label>
                                                <div class="col-sm-10">
                                                    <input type="number" class="form-control" id="inputPassword" placeholder="Enter marks"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <div class="col-sm-12">
                                                  <button className="bg-blue-500 w-full p-2 rounded-lg hover:bg-blue-400 font-semibold text-white">Add Marks</button>
                                                </div>   
                                            </div>
                                        </form>
                                    </Modal.Body>
                                </Modal>
                          </div>
                          <div className="col-6 flex gap-1">
                              <span className="flex text-sm text-pink-400"><FaSquare/><FaSquare/><FaSquare/></span>
                              <span className="flex text-sm text-pink-400"><FaSquare/><FaSquare/><FaSquare/></span>
                              <span className="flex text-sm text-pink-400"><FaSquare/><FaSquare/><FaSquare/></span>
                          </div>
                          <div className="col-6">
                              <snap className="font-normal hover:cursor-pointer" onClick={handleInnovation}><a href="#">Innovations Marks</a></snap>
                                <Modal
                                    show={showInnovation}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard=""
                                >
                                    <Modal.Header closeButton>
                                    <Modal.Title><p>Adding Innovations marks</p></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form className="">
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Category</label>
                                                <div class="col-sm-10">
                                                    <input type="category" class="form-control" id="inputPassword" placeholder="Enter Category"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter Innovation title"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Student</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter student id"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Class</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputPassword" placeholder="Enter class id"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Term</label>
                                                <div class="col-sm-10">
                                                    <select class="form-control">
                                                        <option>First Term</option>
                                                        <option>Second Term</option>
                                                        <option>Third Term</option>
                                                    </select>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Marks</label>
                                                <div class="col-sm-10">
                                                    <input type="number" class="form-control" id="inputPassword" placeholder="Enter marks"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <div class="col-sm-12">
                                                  <button className="bg-blue-500 w-full p-2 rounded-lg hover:bg-blue-400 font-semibold text-white">Add Marks</button>
                                                </div>   
                                            </div>
                                        </form>
                                    </Modal.Body>
                                </Modal>
                          </div>
                          <div className="col-6 flex gap-1">
                              <span className="flex text-sm text-green-400"><FaSquare/><FaSquare className="text-orange-400"/><FaSquare/></span>
                              <span className="flex text-sm text-blue-400"><FaSquare className="text-orange-400"/><FaSquare className="text-orange-400"/><FaSquare className="text-orange-400"/></span>
                              <span className="flex text-sm text-pink-400"><FaSquare className="text-orange-400"/><FaSquare className="text-orange-400"/><FaSquare className="text-orange-400"/></span>
                          </div>
                         </div>
                     </div>
                     <div className="mt-4 mr-2 ml-2 pl-4 pt-2  bg-white shadow-lg rounded-xl">
                         <h2 className="font-medium text-lg text-blue-900">Classes</h2>
                         <div className="pl-3 pt-2">
                             <h4 className="font-medium text-blue-900">Nursery</h4>
                             <div className="row pl-3">
                                 <div className="col-4 font-normal"><snap>1st Class</snap></div>
                                 <div className="col-8 font-normal text-sm"><span>---------------128</span></div>
                                 <div className="col-4 font-normal"><snap>2nd Class</snap></div>
                                 <div className="col-8 font-normal text-sm"><span>---------------------------145</span></div>
                                 <div className="col-4 font-normal"><snap>3rd Class</snap></div>
                                 <div className="col-8 font-normal text-sm"><span>--------------------130</span></div>
                             </div>
                         </div>
                         <div className="pl-3 pt-2">
                             <h4 className="font-medium text-blue-900">Primary</h4>
                             <div className="row pl-3">
                                 <div className="col-4 font-normal"><snap>P 1</snap></div>
                                 <div className="col-8 font-normal text-sm"><span>---------------128</span></div>
                                 <div className="col-4 font-normal"><snap>P 2</snap></div>
                                 <div className="col-8 font-normal text-sm"><span>---------------------------145</span></div>
                                 <div className="col-4 font-normal"><snap>P 3</snap></div>
                                 <div className="col-8 font-normal text-sm"><span>--------------------130</span></div>
                                 <div className="col-4 font-normal"><snap>P 4</snap></div>
                                 <div className="col-8 font-normal text-sm"><span>--------------------130</span></div>
                                 <div className="col-4 font-normal"><snap>P 5</snap></div>
                                 <div className="col-8 font-normal text-sm"><span>--------------------130</span></div>
                                 <div className="col-4 font-normal"><snap>P 6</snap></div>
                                 <div className="col-8 font-normal text-sm"><span>--------------------130</span></div>
                             </div>
                         </div>
                         <div className="pl-3 pt-2">
                             <h4 className="font-medium text-blue-900">O-Level</h4>
                             <div className="row pl-3">
                                 <div className="col-4 font-normal"><snap>Sinior 1</snap></div>
                                 <div className="col-8 font-normal text-sm"><span>---------------128</span></div>
                                 <div className="col-4 font-normal"><snap>Sinior 2</snap></div>
                                 <div className="col-8 font-normal text-sm"><span>---------------------------145</span></div>
                                 <div className="col-4 font-normal"><snap>Sinior 3</snap></div>
                                 <div className="col-8 font-normal text-sm"><span>--------------------130</span></div>
                             </div>
                         </div>
                         <div className="pl-3 pt-2">
                             <h4 className="font-medium text-blue-900">E-Level</h4>
                             <div className="row pl-3">
                                 <div className="col-4 font-normal"><snap>Sinior 4</snap></div>
                                 <div className="col-8 font-normal text-sm"><span>---------------128</span></div>
                                 <div className="col-4 font-normal"><snap>Sinior 5</snap></div>
                                 <div className="col-8 font-normal text-sm"><span>---------------------------145</span></div>
                                 <div className="col-4 font-normal"><snap>Sinior 6</snap></div>
                                 <div className="col-8 font-normal text-sm"><span>--------------------130</span></div>
                             </div>
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
                                        </div>

                                        <div className="col-12 font-normal text-sm mt-2"><snap>PM</snap></div>
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
                              <div className="col-8 pl-4 py-5 pt-2 pb-2">
                                <span className="font-medium font-sans text-gray-700 text-xl capitalize">Hello, {myname}</span>
                                <div className="mt-2">
                                <span className="font-normal text-sm">Remember to submit all student's quiz for reporting processing <br/> Have a nice day! </span><br/>
                                <button className="bg-blue-600 hover:bg-blue-500 m-1 p-1 shadow-md text-gray-100 font-medium w-full rounded-xl">Submit</button>
                                </div>
                              </div>
                              <div className="col-4">
                                  <div className="pt-4 pr-2">
                                    <img src={cartoon}  alt=""/>
                                  </div>
                              </div>
                           </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className=""> 
                            <div className="row bg-red-400 rounded-xl shadow-lg md:mr-6 md:ml-3 p-4">     
                                <div className=" col-sm-12 col-md-3">
                                    <div className=" bg-gray-100 hover:bg-blue-100 shadow-md rounded-lg">
                                        <a href="">
                                            <div class="row p-1">
                                                <div className="col-md-12 justify-center ">
                                                    <center className="text-4xl text-blue-500"><FaUser/></center>
                                                </div>
                                                <div className="col-md-12 text-center">
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Jay mugabe</snap><br/>
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">S1 class leader</snap>
                                                </div>
                                                <div className="col-md-12 mt-2 text-center">
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Upload exercise</snap><br/>
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Upload assignments</snap><br/>
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Upload Notes</snap>
                                                </div>
                                            </div>                
                                        </a>
                                    </div>
                                </div> 
                                <div className=" col-sm-12 col-md-3">
                                    <div className="p-2 bg-gray-100 hover:bg-blue-100 shadow-md rounded-lg">
                                        <a href="">
                                            <div class="row p-1">
                                                <div className="col-md-12 justify-center ">
                                                    <center className="text-4xl text-blue-500"><FaUser/></center>
                                                </div>
                                                <div className="col-md-12 text-center">
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Jay mugabe</snap><br/>
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">S1 class leader</snap>
                                                </div>
                                                <div className="col-md-12 mt-2 text-center">
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Upload exercise</snap><br/>
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Upload assignments</snap><br/>
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Upload Notes</snap>
                                                </div>
                                            </div>                
                                        </a>
                                    </div>
                                </div>
                                <div className=" col-sm-12 col-md-3">
                                    <div className="p-2 bg-gray-100 hover:bg-blue-100 shadow-md rounded-lg">
                                        <a href="">
                                            <div class="row p-1">
                                                <div className="col-md-12 justify-center ">
                                                    <center className="text-4xl text-blue-500"><FaUser/></center>
                                                </div>
                                                <div className="col-md-12 text-center">
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Jay mugabe</snap><br/>
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">S1 class leader</snap>
                                                </div>
                                                <div className="col-md-12 mt-2 text-center">
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Upload exercise</snap><br/>
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Upload assignments</snap><br/>
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Upload Notes</snap>
                                                </div>
                                            </div>                
                                        </a>
                                    </div>
                                </div>
                                <div className=" col-sm-12 col-md-3">
                                    <div className="p-2 bg-gray-100 hover:bg-blue-100 shadow-md rounded-lg">
                                        <a href="">
                                            <div class="row p-1">
                                                <div className="col-md-12 justify-center ">
                                                    <center className="text-4xl text-blue-500"><FaUser/></center>
                                                </div>
                                                <div className="col-md-12 text-center">
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Jay mugabe</snap><br/>
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">S1 class leader</snap>
                                                </div>
                                                <div className="col-md-12 mt-2 text-center">
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Upload exercise</snap><br/>
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Upload assignments</snap><br/>
                                                    <snap className="font-medium font-sans text-xs  text-gray-800">Upload Notes</snap>
                                                </div>
                                            </div>                
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-4">
                        <div className="col-md-7 mt-2"> 
                            <div className="row">     
                                <div className="bg-white rounded-xl shadow-lg md:m-1  pl-3 pt-3 pb-3">
                                    <h4 className="font-medium text-blue-900">Latest Reviews</h4>
                                    <div className="row pt-2 pb-2">
                                        <div className="col-2"><snap><img src={pic} className="w-8 h-8 rounded-full shadow-lg float-right"/></snap></div>
                                        <div className="col-9 row">
                                            <div className="col-12 p-0">
                                                <snap className="font-semibold text-sm">Ganza lodrige, <snap className="text-green-600 font-medium">S4</snap></snap>
                                            </div>
                                            <div className="col-12 p-0 flex ">
                                                <span className="flex text-xs text-orange-400 float-left"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                                                <span className="flex text-xs font-normal text-gray-400 pl-6">Time 2hours Ago</span>
                                            </div>
                                            <div className="col-12 p-0">
                                                <snap className="font-normal text-xs">Teacher must to anytimr hre dhjd for new for eceyd dd to be erviodsd bu snd to bring nwe ciree </snap>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pt-2 pb-2">
                                        <div className="col-2"><snap><img src={pic} className="w-8 h-8 rounded-full shadow-lg float-right"/></snap></div>
                                        <div className="col-9 row">
                                            <div className="col-12 p-0">
                                                <snap className="font-semibold text-sm">Ganza lodrige, <snap className="text-green-600 font-medium">S4</snap></snap>
                                            </div>
                                            <div className="col-12 p-0 flex ">
                                                <span className="flex text-xs text-orange-400 float-left"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                                                <span className="flex text-xs font-normal text-gray-400 pl-6">Time 2hours Ago</span>
                                            </div>
                                            <div className="col-12 p-0">
                                                <snap className="font-normal text-xs">Teacher must to anytimr hre dhjd for new for eceyd dd to be erviodsd bu snd to bring nwe ciree </snap>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pt-2 pb-2">
                                        <div className="col-2"><snap><img src={pic} className="w-8 h-8 rounded-full shadow-lg float-right"/></snap></div>
                                        <div className="col-9 row">
                                            <div className="col-12 p-0">
                                                <snap className="font-semibold text-sm">Ganza lodrige, <snap className="text-green-600 font-medium">S4</snap></snap>
                                            </div>
                                            <div className="col-12 p-0 flex ">
                                                <span className="flex text-xs text-orange-400 float-left"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                                                <span className="flex text-xs font-normal text-gray-400 pl-6">Time 2hours Ago</span>
                                            </div>
                                            <div className="col-12 p-0">
                                                <snap className="font-normal text-xs">Teacher must to anytimr hre dhjd for new for eceyd dd to be erviodsd bu snd to bring nwe ciree </snap>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mt-2">
                            <div className="row md:ml-0">     
                                <div className="bg-white rounded-xl shadow-lg pl-3 pt-3 pb-3">
                                    <h4 className="font-medium text-blue-900">Staff Reviews</h4>
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
                                               <span className="flex text-sm text-orange-400 float-left gap-1"><FaQuestion/><FaEnvelope className="text-pink-400"/><FaPhoneSquare className="text-blue-400"/></span>
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
                                               <span className="flex text-sm text-orange-400 float-left gap-1"><FaQuestion/><FaEnvelope className="text-pink-400"/><FaPhoneSquare className="text-blue-400"/></span>
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
                                               <span className="flex text-sm text-orange-400 float-left gap-1"><FaQuestion/><FaEnvelope className="text-pink-400"/><FaPhoneSquare className="text-blue-400"/></span>
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
export default Dashboard;
