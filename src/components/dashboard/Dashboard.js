import  React,{useState,Component,useEffect} from "react";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import "../../css/tailwindcss.css";
import "../../css/dashboard.css";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import urlPath from '../../constant';
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
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Progress } from 'antd';



function Dashboard() {
   
    const [show, setShow] = useState(false);
    const [showAssginment, setShowAssign] = useState(false);
    const [showMiddleTermExam, setShowMiddleTermExam] = useState(false);
    const [showTermExam, setTermExam] = useState(false);
    const [showYearExam, setYearExam] = useState(false);
    const [showInnovation, setInnovation] = useState(false);
    const [datas,setDatas]= useState([]);
 
    const [limitn1,setLimn1]=useState()
    const [limitn2,setLimn2]=useState()
    const [limitn3,setLimn3]=useState()
    const [limitp1,setLimp1]=useState() 
    const [limitp2,setLimp2]=useState()
    const [limitp5,setLimp5]=useState()
    const [limitp4,setLimp4]=useState()
    const [limitp3,setLimp3]=useState()
    const [limitp6,setLimp6]=useState()
    const [limits2,setLims2]=useState()
    const [limits1,setLims1]=useState()
    const [limits3,setLims3]=useState()
    const [limits4,setLims4]=useState()
    const [limits5,setLims5]=useState()
    const [limits6,setLims6]=useState()

    const myname = localStorage.getItem('fullname')
    const token =localStorage.getItem('token')
    

    

  
useEffect( ()=>{    
 const students=axios.get(`${urlPath.assign}`, { headers: {"Authorization" :token} })
 .then(res=>{
     setDatas(res.data.data)
     console.log(res.data.data)

 
   
  })
  .catch((err)=>{
      console.log(err)
    
    
  })
},[]
);



const ctn1= datas.filter(e=> e.nameclass="1 st Class").map(filteredPerson => (
    setLimn1(filteredPerson.limitstudent)
    ));
const percn1=ctn1.length*100/limitn1


const ctn2= datas.filter(e=> e.nameclass="2 nd Class").map(filteredPerson => (
    setLimn2(filteredPerson.limitstudent)
    ));
const percn2=ctn2.length*100/limitn2


const ctn3= datas.filter(e=> e.nameclass="3 nd Class").map(filteredPerson => (
    setLimn3(filteredPerson.limitstudent)
    ));
const percn3=ctn3.length*100/limitn3
// primary section

const ctp1= datas.filter(e=> e.nameclass="P 1").map(filteredPerson => (
    setLimp1(filteredPerson.limitstudent)
    ));
const percp1=ctp1.length*100/limitp1


const ctp2= datas.filter(e=> e.nameclass="P 2").map(filteredPerson => (
    setLimp2(filteredPerson.limitstudent)
    ));
const percp2=ctp2.length*100/limitp2



const ctp3= datas.filter(e=> e.nameclass="P 3").map(filteredPerson => (
    setLimp3(filteredPerson.limitstudent)
    ));
const percp3=ctp3.length*100/limitp3



const ctp4= datas.filter(e=> e.nameclass="P 4").map(filteredPerson => (
    setLimp4(filteredPerson.limitstudent)
    ));
const percp4=ctp4.length*100/limitp4


const ctp5= datas.filter(e=> e.nameclass="P 5").map(filteredPerson => (
    setLimp5(filteredPerson.limitstudent)
    ));
const percp5=ctp5.length*100/limitp5


const ctp6= datas.filter(e=> e.nameclass="P 6").map(filteredPerson => (
    setLimp6(filteredPerson.limitstudent)
    ));
const percp6=ctp6.length*100/limitp6
// o-level

const cts1= datas.filter(e=> e.nameclass="Sinior 1").map(filteredPerson => (
    setLims1(filteredPerson.limitstudent)
    ));
const percs1=cts1.length*100/limits1


const cts2= datas.filter(e=> e.nameclass="Sinior 2").map(filteredPerson => (
    setLims2(filteredPerson.limitstudent)
    ));
const percs2=cts2.length*100/limits2


const cts3= datas.filter(e=> e.nameclass="Sinior 3").map(filteredPerson => (
    setLims3(filteredPerson.limitstudent)
    ));
const percs3=cts3.length*100/limits3
// a_level

const cts4= datas.filter(e=> e.nameclass="Sinior 4").map(filteredPerson => (
    setLims4(filteredPerson.limitstudent)
    ));
const percs4=cts4.length*100/limits4


const cts5= datas.filter(e=> e.nameclass="Sinior 5").map(filteredPerson => (
    setLims5(filteredPerson.limitstudent)
    ));
const percs5=cts5.length*100/limits5


const cts6= datas.filter(e=> e.nameclass="Sinior 6").map(filteredPerson => (
    setLims6(filteredPerson.limitstudent)
    ));
const percs6=cts6.length*100/limits6












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
   
    
    // if(token==='' || category!=='teacher' ){
    //     history.push('/')
    //     }
    
    // const category =localStorage.getItem('category')
     // test========================
     const [category,setCategory]=useState('')
    const [courseTitle,setCourseTitle] =useState('')
    const [classid,setClassid]=useState('')
    const [student,setStudent]=useState('')
    const [term,setTerm]=useState('')
    const [marks, setMarks]=useState('')
    const [message,setMessage]=useState('')
    const [isError,setIsError]=useState('')    
    const [loading,setLoading] =useState(false)
    const testExam=(event)=>{
        event.preventDefault();
      setLoading(true)
    const   data={
            category:category,
            testTitle:courseTitle,
            classID:classid,
            studentID:student,
            marks:marks,
            term:term

        }

    if(category==='' || marks ==='' ){
     setMessage('Please fill all fields')
     setLoading(false)
     setIsError(true)
    }else{
        axios.post(`${urlPath.test}`,data,{headers:{
            'Authorization':token
        }})
        .then((res)=>{
            
            setLoading(false)
            setMessage(res.message)
        })
        .catch((err)=>{
                setLoading(false)
                setMessage(`Failed to add marks- ${err.message}`)
        })

    }

    } 
    // END TEST

    
    //Exam integration

   const [examcategory, setexamCategory]=useState('')
   const [examtitle, setTitle]=useState('')
   const [studentid, setStudentid]=useState('')
   const [examclassid, setexamClassid]=useState('')
   const [examterm, setexamTerm]=useState('')
   const [exammarks, setexamMarks]=useState('')
   const [examloading,setexamLoading]=useState(false) 
   const [exammessage, setexamMessage]=useState(false)


   const AddYearExamMarks = (event) =>{
       event.preventDefault()
       const data={
           "examTitle":examtitle,
           "studentID":studentid,
           "classID":examclassid,
           "semester":examterm,
           "marks":exammarks,
           "category":examcategory
       }
       setexamLoading(true)
       axios.post(`${urlPath.exam}`,data)
       .then((res)=>{
           setexamMessage(res.data.message)
           setexamLoading(false)
       })
       .catch((err)=>{
            setexamMessage(err.message)
            setexamLoading(false)
       })

   } 
//  end of exam inter  

//  retrieve reviews 
 
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
                                        <form method="POST" className="">

                                        {isError?  <div   className="bg-green-200 p-2 text-gray-600  font-bold rounded-xl mb-2">
              <p className="text-center">{message}</p>
              </div>
              :<span></span>}
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Category</label>
                                                <div class="col-sm-10">
                                                    <input type="category" value={category} onChange={(e)=>{
                                                        setCategory(e.target.value)
                                                    }} className="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter Category"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                                                <div class="col-sm-10">
                                                    <input type="text" value={courseTitle} onChange={(e)=>setCourseTitle(e.target.value)} class="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter Test title"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Student</label>
                                                <div class="col-sm-10">
                                                    <input type="text" value={student} onChange={(e)=>setStudent(e.target.value)} class="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter student id"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Class</label>
                                                <div class="col-sm-10">
                                                    <input type="text" value={classid} onChange={(e)=>{setClassid(e.target.value)}}
                                                     class="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter class id"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Term</label>
                                                <div class="col-sm-10">
                                                    <select value={term} onChange={(e)=>setTerm(e.target.value)} class="border w-full px-2 py-2 ">
                                                        <option value="First Term">First Term</option>
                                                        <option value="Second Term">Second Term</option>
                                                        <option value="Third Term">Third Term</option>
                                                    </select>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Marks</label>
                                                <div class="col-sm-10">
                                                    <input type="text" value={marks} onChange={(e)=>setMarks(e.target.value)} class="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter marks"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <div class="col-sm-12">
                                              { loading ? <button  className="bg-blue-500 w-full p-2 rounded-lg hover:bg-blue-400 font-semibold text-white">Adding marks...</button>    :<button type="submit" onClick={testExam} className="bg-blue-500 w-full p-2 rounded-lg hover:bg-blue-400 font-semibold text-white">Add Marks</button>}
                                                </div>   
                                            </div>
                                        </form>
                                    </Modal.Body>
                                </Modal>
                             
                          
                          </div>
                          <div className="col-6 flex gap-1">
                              
                              <span className="flex text-sm text-gray-400"><FaSquare/><FaSquare/><FaSquare/></span>
                              <span className="flex text-sm text-blue-400"><FaSquare/><FaSquare className="text-gray-400"/>
                              <FaSquare className="text-gray-400"/></span>
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
                                                    <input type="category" class="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter Category"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter Assignment title"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Student</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter student id"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Class</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter class id"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Term</label>
                                                <div class="col-sm-10">
                                                    <select class="border w-full px-2 py-2 ">
                                                        <option>First Term</option>
                                                        <option>Second Term</option>
                                                        <option>Third Term</option>
                                                    </select>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Marks</label>
                                                <div class="col-sm-10">
                                                    <input type="number" class="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter marks"/>
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
                              <snap className="font-normal hover:cursor-pointer" onClick={handleYearExam}><a href="#">Exam</a></snap>
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
                                               <p className="p-2 bg-blue-200 font-medium text-green-500">{exammessage}</p>  
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Category</label>
                                                <div class="col-sm-10">
                                                    <input type="text" value={examcategory} onChange={event=>setexamCategory(event.target.value)} class="form-control" id="inputPassword" placeholder="Enter Category"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                                                <div class="col-sm-10">
                                                    <input type="text" value={examtitle} onChange={event=>setTitle(event.target.value)} class="form-control" id="inputPassword" placeholder="Enter Exam title"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Student</label>
                                                <div class="col-sm-10">
                                                    <input type="text" value={studentid} onChange={event=>setStudentid(event.target.value)} class="form-control" id="inputPassword" placeholder="Enter student id"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Class</label>
                                                <div class="col-sm-10">
                                                    <input type="text" value={examclassid} onChange={event=>setexamClassid(event.target.value)} class="form-control" id="inputPassword" placeholder="Enter class id"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Term</label>
                                                <div class="col-sm-10">
                                                    <select value={examterm} onChange={event=>setexamTerm(event.target.value)} class="form-control">
                                                        <option>First Term</option>
                                                        <option>Second Term</option>
                                                        <option>Third Term</option>
                                                    </select>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Marks</label>
                                                <div class="col-sm-10">
                                                    <input type="number" value={exammarks} onChange={event=>setexamMarks(event.target.value)} class="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter marks"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <div class="col-sm-12">
                                                    {examloading? <button className="bg-blue-500 w-full p-2 rounded-lg hover:bg-blue-400 font-semibold text-white"> saving marks ....</button>
                                                 :<button onClick={AddYearExamMarks} className="bg-blue-500 w-full p-2 rounded-lg hover:bg-blue-400 font-semibold text-white">Add Marks</button>}
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
                                                    <input type="category" class="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter Category"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter Innovation title"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Student</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter student id"/>
                                                </div>   
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Class</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter class id"/>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Term</label>
                                                <div class="col-sm-10">
                                                    <select class="border w-full px-2 py-2 ">
                                                        <option>First Term</option>
                                                        <option>Second Term</option>
                                                        <option>Third Term</option>
                                                    </select>
                                                </div>   
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Marks</label>
                                                <div class="col-sm-10">
                                                    <input type="number" class="border w-full px-2 py-2 " id="inputPassword" placeholder="Enter marks"/>
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
                             <div className="row  pl-2">
                                 <div className="col-4 font-normal"><snap>1st Class</snap></div>
                                 <div className="col-8 font-normal text-sm flex">
                                     <span className="w-full "> <ProgressBar variant="dark" now={percn1}  /> 
                                   
                                     </span>
                                     <span className="w-12 ml-2">
            
                                     {ctn1.length}
                                     </span>
                                     
                                     
                                     </div>
                                 <div className="col-4 font-normal"><snap>2nd Class</snap></div>
                                 <div className="col-8 font-normal text-sm flex">
                                     <span className="w-full"><ProgressBar variant="dark" now={percn2} /> </span>
                                     <span className="w-12 ml-2">
                                     {ctn2.length}</span>
                                     
                                     
                                     </div>

                                 <div className="col-4 font-normal"><snap>3rd Class</snap></div>
<div className="col-8 font-normal text-sm flex">
                                     <span className="w-full"><ProgressBar variant="dark" now={percn3}  /> </span>
                                     <span className="w-12 ml-2">
                                     {ctn3.length}</span>
                                     
                                     
                                     </div>                             </div>
                         </div>
                         <div className="pl-3 pt-2">
                             <h4 className="font-medium text-blue-900">Primary</h4>
                             <div className="row pl-2">
                                 <div className="col-4 font-normal"><snap>P 1</snap></div>
                                 <div className="col-8 font-normal text-sm flex">
                                     <span className="w-full"><ProgressBar variant="dark" now={percp1}  /> </span>
                                     <span className="w-12 ml-2">
                                     {ctp1.length}</span>
                                     
                                     
                                     </div> 
                                     
                                     
                                     
                                    <div className="col-4 font-normal"><snap>P 2</snap></div>
                                    <div className="col-8 font-normal text-sm flex">
                                     <span className="w-full"><ProgressBar variant="dark" now={percp2}  /> </span>
                                     <span className="w-12 ml-2">
                                     {ctp2.length}
                                     </span>
                                     
                                     
                                     </div>          
                                     <div className="col-4 font-normal"><snap>P 3</snap></div>
                                     
                                                            <div className="col-8 font-normal text-sm flex">
                                     <span className="w-full"><ProgressBar variant="dark" now={percp3}  /> </span>
                                     <span className="w-12 ml-2">
                                     {ctp3.length}
                                     </span>
                                     
                                     
                                     </div>   

                                     <div className="col-4 font-normal"><snap>P 4</snap></div>
                                     
                                     <div className="col-8 font-normal text-sm flex">
              <span className="w-full"><ProgressBar variant="dark" now={percp4}  /> </span>
              <span className="w-12 ml-2">
              {ctp4.length}
              </span>
              
              
              </div>   


                                     
                                     <div className="col-4 font-normal"><snap>P 5</snap></div>
                                 
                                 <div className="col-8 font-normal text-sm flex">
                                     <span className="w-full"><ProgressBar variant="dark" now={percp5}  /> </span>
                                     <span className="w-12 ml-2">
                                     {ctp5.length}
                                     </span>
                                     
                                     
                                     </div>                                
                                      
                                   
                                         <div className="col-4 font-normal"><snap>P 6</snap></div>
                                         <div className="col-8 font-normal text-sm flex">
                                     <span className="w-full"><ProgressBar variant="dark" now={percp6}   /> </span>
                                     <span className="w-12 ml-2">
                                     {ctp6.length}
                                     </span>
                                     
                                     
                                     </div>                             </div>
                         </div>
                         <div className="pl-3 pt-2">
                             <h4 className="font-medium text-blue-900">O-Level</h4>
                             <div className="row pl-2">
                                 <div className="col-4 font-normal"><snap>Sinior 1</snap></div><div className="col-8 font-normal text-sm flex">
                                     <span className="w-full"><ProgressBar variant="dark" now={percs1}  /> </span>
                                     <span className="w-12 ml-2">
                                     {cts1.length}
                                     </span>
                                     
                                     
                                     </div>
                                 <div className="col-4 font-normal"><snap>Sinior 2</snap></div>
                                 <div className="col-8 font-normal text-sm flex">
                                     <span className="w-full"><ProgressBar variant="dark" now={percs2}  /> </span>
                                     <span className="w-12 ml-2">
                                     {cts2.length}
                                     </span>
                                     
                                     
                                     </div>
                                 <div className="col-4 font-normal"><snap>Sinior 3</snap></div>
                                 <div className="col-8 font-normal text-sm flex">
                                     <span className="w-full"><ProgressBar variant="dark" now={percs3}  /> </span>
                                     <span className="w-12 ml-2">
                                     {cts3.length}
                                     </span>
                                     
                                     
                                     </div>
                             </div>
                         </div>
                         <div className="pl-3 pt-2">
                             <h4 className="font-medium text-blue-900">E-Level</h4>
                             <div className="row pl-2">
                                 <div className="col-4 font-normal"><snap>Sinior 4</snap></div>
                                 <div className="col-8 font-normal text-sm flex">
                                     <span className="w-full"><ProgressBar variant="dark" now={percs4}   /> </span>
                                     <span className="w-12 ml-2">
                                     {cts4.length}
                                     </span>
                                     
                                     
                                     </div>
                                 <div className="col-4 font-normal"><snap>Sinior 5</snap></div>
                                 <div className="col-8 font-normal text-sm flex">
                                     <span className="w-full"><ProgressBar variant="dark" now={percs5}  /> </span>
                                     <span className="w-12 ml-2">
                                     {cts5.length}
                                     </span>
                                     
                                     
                                     </div>
                                 <div className="col-4 font-normal"><snap>Sinior 6</snap></div>
                                 <div className="col-8 font-normal text-sm flex">
                                     <span className="w-full"><ProgressBar variant="dark" now={percs6} /> </span>
                                     <span className="w-12 ml-2">
                                     {cts6.length}
                                     </span>
                                     
                                     
                                     </div>
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
                            <div className="row bg-white rounded-xl shadow-lg md:mr-6 md:ml-3 p-4">     
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
