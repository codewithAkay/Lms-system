import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Choices from './pages/Choices';
import AdmLogin from './pages/admin/AdmLogin'
import StudentLogin from './pages/student/StudentLogin'
import TeacherLogin from './pages/teacher/TeacherLogin'
import RegistrationChoice from './pages/RegistrationChoice'
import StudentRegistration from './pages/student/StudentRegistration';
import TeacherRegistration from './pages/teacher/TeacherRegistration';
import {ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './pages/admin/AdminDashboard'
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import TeachProtected from './components/TeachProtected'
import StuProtected from './components/StuProtected'
import AdmProtected from './components/AdmProtected'
import Dashboard from './pages/Dashboard/Dashboard';
function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer  
   position='top-center'
   autoClose={5000}
   hideProgressBar={false}
   newestOnTop={false}
   rtl={false}
   pauseOnFocusLoss
   draggable
   limit={1}
   pauseOnHover
   />
    <Navbar/>    
    <Routes>

      {/* website Paths */}
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Choices/>}/>
      <Route path="/registration" element={<StudentRegistration/>}/>
      {/* <Route path="/choice" element={<Choices/>}/> */}

      {/* Admin Paths */}
      <Route path="/admlogin" element={<AdmLogin/>}/>
      <Route path="/admindashboard" element={<AdmProtected><AdminDashboard/></AdmProtected>}/>

      {/* teacher Paths */}
      <Route path="/teacherlogin" element={<TeacherLogin/>}/>
      <Route path="/teacherregistration" element={<TeacherRegistration/>}/>
      {/* <Route path="/teacherdashboard" element={<TeachProtected><TeacherDashboard/></TeachProtected>}/> */}
      <Route path="/teacherdashboard" element={<TeachProtected><AdminDashboard/></TeachProtected>}/>

      {/* student paths */}
      <Route path="/studentlogin" element={<StudentLogin/>}/>
      <Route path="/studentregistration" element={<StudentRegistration/>}/>
      <Route path="/studentdashboard" element={<StuProtected><StudentDashboard/></StuProtected>}/>
       
      {/* page 404  */}
      <Route path="*" element={<h1>Error 404 Page Not Found</h1>}/>

    </Routes>
    <footer>
      <Footer/>
    </footer>
    </BrowserRouter>
    </>
  );
}

export default App;
