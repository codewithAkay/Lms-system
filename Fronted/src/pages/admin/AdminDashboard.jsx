import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from './AdminSideBar';
import './Dashboard.css'
import { Outlet } from 'react-router-dom';
import TopNavbar from './AdminNavbar';
const TeachDashboard = () => {
    return (
        <div className='dashboard-style'>
            <div className='d-flex'>
                <div className='sidebar-div'>
                    <Sidebar></Sidebar>
                </div>
                <div className='main-content'>
                    <TopNavbar></TopNavbar>
                    {/* <Header></Header> */}
                    <Container fluid>
                        <Outlet></Outlet>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default TeachDashboard;