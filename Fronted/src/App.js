import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Choices from './pages/Choices';
import AdmLogin from './pages/admin/AdmLogin'
import StudentLogin from './pages/student/StudentLogin'
import TeacherLogin from './pages/teacher/TeacherLogin'
import RegistrationChoice from './pages/RegistrationChoice'
import StudentRegistration from './pages/student/StudentRegistration';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Choices/>}/>
      <Route path="/registration" element={<RegistrationChoice/>}/>
      <Route path="/choice" element={<Choices/>}/>

      {/* Admin Paths */}
      <Route path="/admlogin" element={<AdmLogin/>}/>
      {/* student Paths */}
      <Route path="/teacherlogin" element={<TeacherLogin/>}/>
      {/* teacher paths */}
      <Route path="/studentlogin" element={<StudentLogin/>}/>
      <Route path="/studentregistration" element={<StudentRegistration/>}/>

    </Routes>
    <footer>
      <Footer/>
    </footer>
    </BrowserRouter>
    </>
  );
}

export default App;
