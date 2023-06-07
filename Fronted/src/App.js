import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Courses from './pages/Courses';
import Choices from './pages/Choices';
import AdmLogin from './pages/admin/AdmLogin'
import StudentLogin from './pages/student/StudentLogin'
import StudentRegistration from './pages/student/StudentRegistration';
import {ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './pages/admin/AdminDashboard'
import StudentDashboard from './pages/student/StudentDashboard';
import StuProtected from './components/StuProtected'
import AdmProtected from './components/AdmProtected'
import EditRegistation from './pages/student/EditRegistation'
import Forget from './pages/Forget'
import CoursesView from './pages/CoursesView';
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
      <Route path="/login" element={<Choices/>}/>
      <Route path="/courseview" element={<CoursesView/>}/>
      <Route path="/registration" element={<StudentRegistration/>}/>
      <Route path="/forget" element={<Forget/>}/>
      {/* <Route path="/choice" element={<Choices/>}/> */}

      {/* Admin Paths */}
      <Route path="/admlogin" element={<AdmLogin/>}/>
      <Route path="/admindashboard" element={<AdmProtected><AdminDashboard/></AdmProtected>}/>

      {/* student paths */}
      <Route path="/studentlogin" element={<StudentLogin/>}/>
      <Route path="/studentregistration" element={<StudentRegistration/>}/>
      <Route path="/studentdashboard" element={<StuProtected><StudentDashboard/></StuProtected>}/>
      <Route path="/editregistration" element={<EditRegistation/>}/>
       
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
