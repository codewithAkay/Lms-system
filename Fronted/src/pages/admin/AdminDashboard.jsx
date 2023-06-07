import React, { useEffect, useReducer, useState } from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from './AdminSideBar';
import './Dashboard.css'
import { Outlet } from 'react-router-dom';
import TopNavbar from './AdminNavbar';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
const reducer=(state,action)=>{
	switch(action.type){
	  case "FETCH_REQUEST":
		return {...state,loading:true}
	  case "FETCH_SUCCESS":
		return {...state,loading:false,student:action.payload}
	  case "FETCH_FAILURE":
		return{...state,loading:false,student:action.payload}  
	  case "FETCH_REQUEST2":
		return {...state,loading2:true}
	  case "FETCH_SUCCESS2":
		return {...state,loading2:false,course:action.payload}
	  case "FETCH_FAILURE2":
		return{...state,loading2:false,course:action.payload}  
	  default :
	  return " "  
	}
	}
	const initialtState={
		student:[],
		loading:true,
		course:[],
		loading2:true,
		error:''
	  }
const TeachDashboard = () => {
    const [{loading,error,student,course,loading2},dispatch]=useReducer(reducer,initialtState)
    const [courses, setCourses] = useState([]);
	useEffect(()=>{
		const fetchData=async()=>{
		 dispatch({type:"FETCH_REQUEST"})
		 try {
		   const result=await axios.get('http://localhost:5000/fetchstudent')
		   dispatch({type:"FETCH_SUCCESS",payload:result.data})
		 } catch (error) {
		   dispatch({type:"FETCH_FAILURE",payload:error.message})
		 }
		}
		const fetchData2=async()=>{
		 dispatch({type:"FETCH_REQUEST2"})
		 try {
		   const result=await axios.get('http://localhost:5000/fetchcourse')
		   dispatch({type:"FETCH_SUCCESS2",payload:result.data})
		 } catch (error) {
		   dispatch({type:"FETCH_FAILURE2",payload:error.message})
		 }
		}
		fetchData()
		fetchData2()
	   },[])
      //  console.log(student)
       const deleteStudent=async(id)=>{
        console.log('delete me')
        const student={id:id}
        try {
          const data=await axios.post("http://localhost:5000/deletestudent",student)
          toast.success("Deleted SuccessFully")
          window.location.reload()
         } catch (error) {
          toast.error(error.message)
         }
      }
       const deleteCourse=async(id)=>{
        console.log('delete me2')
        const course={id:id}
        try {
          const data=await axios.post("http://localhost:5000/deletecourse",course)
          toast.success("Deleted SuccessFully")
          window.location.reload()
         } catch (error) {
          toast.error(error.message)
         }
      }
    return (
        <div className='dashboard-style'>
            <div className='d-flex'>
                <div className='sidebar-div' style={{zIndex:0}}>
                    <Sidebar></Sidebar>
                </div>
                <div className='main-content'>
                    <TopNavbar></TopNavbar>
                    {/* <Header></Header> */}
                    <Container fluid>
        <h3 >Students Detail</h3>
        <TableContainer style={{marginBottom:"70px"}}>
          <Table>
            <TableHead>
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
                  <TableCell><Button onClick={()=>{deleteStudent(prod._id)}} style={{backgroundColor:"red"}}>Delete</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <h3 >Added Courses</h3>
        <TableContainer style={{marginBottom:"70px"}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell> Name </TableCell>
                <TableCell></TableCell>          
                <TableCell></TableCell>          
              </TableRow>
            </TableHead>
            <TableBody>
               {course.map((prod) => (
                <TableRow key={prod._id}>
                  <TableCell>{prod._id}</TableCell>
                  <TableCell>{prod.name}</TableCell>
                  <TableCell><Button onClick={()=>{deleteCourse(prod._id)}} style={{backgroundColor:"red"}}>Delete</Button></TableCell>
                  <TableCell><Button  style={{backgroundColor:"blue"}}>Add Lesson</Button></TableCell>
                </TableRow>
              ))} 
            </TableBody>
          </Table>
        </TableContainer>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default TeachDashboard;