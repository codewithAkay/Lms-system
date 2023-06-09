import React, { useEffect, useReducer, useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import Sidebar from './AdminSideBar';
import './Dashboard.css'
import { Outlet } from 'react-router-dom';
import TopNavbar from './AdminNavbar';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import AddChapter from './AddChapter';
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true }
    case "FETCH_SUCCESS":
      return { ...state, loading: false, student: action.payload }
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload }
    case "FETCH_REQUEST2":
      return { ...state, loading2: true }
    case "FETCH_SUCCESS2":
      return { ...state, loading2: false, course: action.payload }
    case "FETCH_FAILURE2":
      return { ...state, loading2: false, error2: action.payload }

    default:
      return " "
  }
}
const initialtState = {
  student: [],
  loading: true,
  error: '',
  course: [],
  loading2: true,
  error2: '',
}
const TeachDashboard = () => {
  const [{ loading, error, student, course, loading2, error2 }, dispatch] = useReducer(reducer, initialtState)
  const [showPopup2, setShowPopup2] = useState(false);
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" })
      try {
        const result = await axios.get('http://localhost:5000/fetchstudent')
        dispatch({ type: "FETCH_SUCCESS", payload: result.data })
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE", payload: error.message })
      }
    }
    const fetchData2 = async () => {
      dispatch({ type: "FETCH_REQUEST2" })
      try {
        const result = await axios.get('http://localhost:5000/fetchcourse')
        dispatch({ type: "FETCH_SUCCESS2", payload: result.data })
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE2", payload: error.message })
      }
    }
    fetchData2()
    fetchData()
  }, [dispatch])
  //  console.log(student)
  const deleteStudent = async (id) => {
    const student = { id: id }
    try {
      const data = await axios.post("http://localhost:5000/deletestudent", student)
      toast.success("Deleted SuccessFully")
      window.location.reload()
    } catch (error) {
      toast.error(error.message)
    }
  }
  const deleteCourse = async (id) => {
    const course = { id: id }
    try {
      const data = await axios.post("http://localhost:5000/deletecourse", course)
      toast.success("Deleted SuccessFully")
      window.location.reload()
    } catch (error) {
      toast.error(error.message)
    }
  }
  const openPopup = () => {
    // console.log("Enter Data")
    setShowPopup2(true);
  };
  const closePopup2 = () => {
    setShowPopup2(false);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleViews = async (productId) => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
    // Additional logic if needed
    const course = { id: productId }
    try {
      const { data } = await axios.post("http://localhost:5000/fetchOnlylesson", course)
      setLesson(data)
    } catch (error) {
      toast.error(error.message)
    }
  };
  return (
    <div className='dashboard-style'>
      <div className='d-flex'>
        <div className='sidebar-div' style={{ zIndex: 0 }}>
          <Sidebar></Sidebar>
        </div>
        <div className='main-content'>

          <TopNavbar></TopNavbar>
          {/* <Header></Header> */}
          <Container fluid>

            <div className='card my-4 border'>
              <div className='card-body border-bottom'>
                <p className='card-title'><b>Student Details</b></p>
              </div>
              <div className='card-body p-0'>
                <TableContainer className='table-responsive'>
                  <Table className='table table-hover table-borderless'>
                    <TableHead className='thead-light'>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell> Name </TableCell>
                        <TableCell> Email</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {student.map((prod) => (
                        <TableRow key={prod._id}>
                          <TableCell>{prod._id}</TableCell>
                          <TableCell>{prod.name}</TableCell>
                          <TableCell>{prod.email}</TableCell>
                          <TableCell ><Button color='primary' className='btn btn-sm' onClick={() => { deleteStudent(prod._id) }} >Delete</Button></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
            <div className='card my-4 border'>
              <div className='card-body border-bottom'>
                <p className='card-title'><b>Course Detail</b></p>
              </div>
              <div className='card-body p-0'>
              <TableContainer className='table-responsive'>
              <Table className='table table-hover table-borderless'>
                <TableHead className='thead-light'>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell> Name </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {course.map((prod) => (
                    <>
                      <TableRow key={prod._id}>
                        <Modal show={showPopup2} onHide={closePopup2}>
                          <AddChapter onClose={closePopup2} id={prod._id} />
                        </Modal>
                        <TableCell>{prod._id}</TableCell>
                        <TableCell>{prod.name}</TableCell>
                        <TableCell><Button onClick={() => { deleteCourse(prod._id) }} style={{ backgroundColor: "red" }}>Delete</Button></TableCell>
                        <TableCell><Button onClick={openPopup} style={{ backgroundColor: "blue" }}>Add Lesson</Button></TableCell>
                      </TableRow>
                      <TableBody>
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              Lessons in {prod.name}{' '}
                              <Button onClick={() => handleViews(prod._id)}>
                                {isDropdownOpen ? 'Close' : 'View'}
                              </Button>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        {isDropdownOpen && (
                          <TableRow>
                            <TableCell>
                              <ul>
                                {lesson ? (
                                  lesson.map((prods) => (
                                    <li key={prods._id}>Lesson <strong>{prods.name}</strong></li>
                                  ))
                                ) : (
                                  <li>No lessons found</li>
                                )}
                              </ul>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
              </div>
            </div>



           
          </Container>

        </div>
      </div>
    </div>
  );
};

export default TeachDashboard;