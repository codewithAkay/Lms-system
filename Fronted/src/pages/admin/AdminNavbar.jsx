import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, Modal, Button, Form } from 'react-bootstrap';
import "./Navbar.css"
// import AddCourse from './AddCourse';
// import AddChapter from './AddChapter';
const TeachNavbar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const openPopup = () => {
    setShowPopup(true);
  };
  const openPopup2 = () => {
    setShowPopup2(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  const closePopup2 = () => {
    setShowPopup2(false);
  };

  return (
    <Navbar className="w-100 bg-white">
      <Nav>
        <Button className="nav-link" >
          ADD COURSES
        </Button>
        <Button className="nav-link" >
          ADD LESSON
        </Button>
        {/* <Button className="nav-link" onClick={openPopup}>
          ADD COURSES
        </Button>
        <Button className="nav-link" onClick={openPopup2}>
          ADD LESSON
        </Button> */}
       
      </Nav>

      {/* <Modal show={showPopup} onHide={closePopup}>
       <AddCourse onClose={closePopup} />
      </Modal>
      <Modal show={showPopup2} onHide={closePopup2}>
       <AddChapter onClose={closePopup2}  />      
      </Modal> */}
    </Navbar>
  );
}


export default TeachNavbar;