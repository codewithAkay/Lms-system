import axios from 'axios';
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../../components/Utils';
import { Box } from '@mui/material';

function AddCourse({ onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [ProfilePic,setProfilePic] = useState(null);
  const navigate=useNavigate()
  const handleSubmit =async (e) => {
    e.preventDefault();
    const Formdata = new FormData(e.currentTarget)
    const actualData = {
        name: Formdata.get("name"),
        description: Formdata.get("description"),
        detail_description: Formdata.get("detail_description"),
        price:Formdata.get("price"),
        coursepic:ProfilePic
    }
    try {
        const { data } = await axios.post("http://localhost:5000/courseregistration", actualData)
        toast.success("Course Added")
    } catch (error) {
        toast.error(getError(error))
    }
  
  };

  const handleImage=(e)=>{
    e.preventDefault()
    const reader=new FileReader()
    const file=e.target.files[0]
    if (file) {
        const fileSize = file.size;
        const fileSizeInMB = fileSize / (1024 * 1024); // Convert to MB
    
        if (fileSizeInMB > 5) {
          alert("Image size exceeds 5 MB.");
          setProfilePic("") // Clear the file input value
        }
      }
    
    reader.onloadend=()=>{
        setProfilePic(reader.result)
    }
    reader.readAsDataURL(file)
}

  return (
    <>
    <Modal.Header closeButton>
    <Modal.Title>Add Courses</Modal.Title>
  </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name='name'
            placeholder="Enter Course Name"
            required
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            required
            name='description'
            
          />
        </Form.Group>
        <Form.Group controlId="detail_description">
          <Form.Label>Detail_Description:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Detail Description"
            required
            name='detail_description'

          />
        </Form.Group>
       
        <Form.Group controlId="price">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="number"
            name='price'
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Price"
            required
          />
        </Form.Group>
        <Form.Group controlId="image">
        <Form.Label>Thumbnail_Image:</Form.Label>
        <Form.Control
          type="file"
          accept="image/*" // Set the accept attribute to restrict to image types
          onChange={handleImage}
          placeholder="thumbnail_image"
          required
        />
      </Form.Group>
      <Box sx={{marginTop:5}}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </Box>
      </Form>
    </Modal.Body>
    </>
  );
}

export default AddCourse;
