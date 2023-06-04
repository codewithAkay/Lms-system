import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, Modal, Button, Form } from 'react-bootstrap';
import "./Navbar.css"
const TopNavbar = () => {
    const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setName('');
    setImage(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here

    // Reset form values and close the popup
    setName('');
    setImage(null);
    setShowPopup(false);
  };

  return (
    <Navbar className="w-100 bg-white">
      <Nav>
        <Button className="nav-link" onClick={openPopup}>
          ADD CHAPTER
        </Button>
        <span className="nav-link" onClick={openPopup}>
          ADD LESSON
        </span>
       
      </Nav>

      <Modal show={showPopup} onHide={closePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Add Something</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image:</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}


export default TopNavbar;