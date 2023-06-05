import React, { useEffect, useReducer } from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from './AdminSideBar';
import './Dashboard.css'
import { Outlet } from 'react-router-dom';
import TopNavbar from './AdminNavbar';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
const reducer=(state,action)=>{
	switch(action.type){
	  case "FETCH_REQUEST":
		return {...state,loading:true}
	  case "FETCH_SUCCESS":
		return {...state,loading:false,student:action.payload}
	  case "FETCH_FAILURE":
		return{...state,loading:false,student:action.payload}  
	  default :
	  return " "  
	}
	}
	const initialtState={
		student:[],
		loading:true,
		error:''
	  }
const TeachDashboard = () => {
    const [{loading,error,student},dispatch]=useReducer(reducer,initialtState)
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
		fetchData()
	   },[])
       console.log(student)
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
        <h3 >Student Details</h3>
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
              {/* {patient.map((prod) => ( */}
                {/* <TableRow >
                  <TableCell>1</TableCell>
                  <TableCell>Zarar</TableCell>
                  <TableCell>zarar@email.com</TableCell>
                  <TableCell><button  style={{backgroundColor:"red"}}>Delete</button></TableCell>
                </TableRow> */}
              {/* ))} */}
              {student.map((prod) => (
                <TableRow key={prod.id}>
                  <TableCell>{prod.id}</TableCell>
                  <TableCell>{prod.name}</TableCell>
                  <TableCell>{prod.email}</TableCell>
                  <TableCell><button  style={{backgroundColor:"red"}}>Delete</button></TableCell>
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
                <TableCell>Lesson</TableCell>          
                <TableCell></TableCell>          
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {patient.map((prod) => ( */}
                <TableRow >
                  <TableCell>1</TableCell>
                  <TableCell>Javascript</TableCell>
                  <TableCell>20</TableCell>
                  <TableCell><button  style={{backgroundColor:"red"}}>Delete</button></TableCell>
                </TableRow>
              {/* ))} */}
              {/* {patient.map((prod) => (
                <TableRow key={prod.id}>
                  <TableCell>{prod.id}</TableCell>
                  <TableCell>{prod.name}</TableCell>
                  <TableCell>{prod.email}</TableCell>
                  <TableCell><button onClick={()=>{
                    handleDeletePat(prod.id)
                  }} style={{backgroundColor:"red"}}>Delete</button></TableCell>
                </TableRow>
              ))} */}
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