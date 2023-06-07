import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, Modal, Button, Form } from 'react-bootstrap';
import "./Navbar.css"
import AddCourse from './AddCourse';
import AddChapter from './AddChapter';
const TeachNavbar = () => {
    const [showPopup, setShowPopup] = useState(false);
    // const [showPopup2, setShowPopup2] = useState(false);
  

  const openPopup = () => {
    setShowPopup(true);
  };
 

  const closePopup = () => {
    setShowPopup(false);
  };
  

  return (
    <Navbar className="w-100 bg-white">
      <Nav>
       
        <Button className="nav-link" onClick={openPopup}>
         <strong>ADD COURSES</strong>
        </Button>
        {/* <Button className="nav-link" onClick={openPopup2}>
          ADD LESSON
        </Button> */}
       
      </Nav>

      <Modal show={showPopup} onHide={closePopup}>
       <AddCourse onClose={closePopup} />
      </Modal>
      {/* <Modal show={showPopup2} onHide={closePopup2}>
       <AddChapter onClose={closePopup2}  />      
      </Modal> */}
    </Navbar>
  );
}


export default TeachNavbar;