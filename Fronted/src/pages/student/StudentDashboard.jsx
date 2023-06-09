import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Sidebar from './StudentSideBar';
import './Dashboard.css'
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Outlet } from 'react-router-dom';
import TopNavbar from './StudentNavbar';
const TeachDashboard = () => {
    const videoBase64 = "Base64 encoded video data";
  const pdfBase64s = ["Base64 encoded PDF data 1", "Base64 encoded PDF data 2"];
   const [user,setUser]=useState(true)
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return (
        <div className='dashboard-style'>
            <div className='d-flex'>
                <div className='sidebar-div' style={{zIndex:0}}>
                    <Sidebar></Sidebar>
                </div>
                <div className='main-content'>
                    {/* <TopNavbar></TopNavbar> */}
                    {/* <Header></Header> */}
                    <Container fluid>
                    {user?
                    <>
            <div className='card my-4 border'>
              <div className='card-body border-bottom'>
                <p className='card-title'><b>Course You Purchased</b></p>
              </div>
              <div className='card-body p-0'>
              <Row>
        <Col md={12} className="mb-4">
          <Card>
            <Card.Header>Video</Card.Header>
            <Card.Body>
            <video width="100%" height="400" controls>
                <source src={`data:video/mp4;base64,${videoBase64}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} className="mb-4">
          <Card>
            <Card.Header>PDF Files</Card.Header>
            <Card.Body>
            {pdfBase64s.map((base64, index) => (
                <div key={index} className="mb-4">
                  <Document
                    file={{ data: base64, format: "base64" }}
                    options={{ cMapUrl: "cmaps/", cMapPacked: true }}
                  >
                    <Page pageNumber={1} width={200} />
                  </Document>
                  <a href={`data:application/pdf;base64,${base64}`} target="_blank" rel="noopener noreferrer" className="card-link">
                    Open PDF {index + 1}
                  </a>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
              </div>
            </div>
            </>: 
            <>
            <div className='card my-4 border'>
              <div className='card-body border-bottom'>
                <p className='card-title'><b>You Have not Purchased Any Course</b></p>
              </div>
              <div className='card-body p-0'>
                <p className='ml-2'>Please Go to Courses and purchase Course</p>
                </div></div>
                   </>
            }
                    </Container>
                </div>
                </div>
                </div>
    );
};

export default TeachDashboard;