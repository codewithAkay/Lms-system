import { Box } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddChapter({ onClose, id }) {
  const [Pdffile, setPdfFile] = useState("");
  const [Excfile, setExcFile] = useState("");
  const [Videofile, setVideoFile] = useState("");
  const handleSubmit = async(event) => {
    event.preventDefault();
    const Formdata = new FormData(e.currentTarget)
    const actualData = {
        id:id,
        name: Formdata.get("name"),
        pdf:Pdffile,
        video:Videofile,
        excersie_pdf:Excfile,
    }
    try {
        const { data } = await axios.post("http://localhost:5000/Addlesson", actualData)
        toast.success("Course Added")
        onClose()
    } catch (error) {
        toast.error(getError(error))
    }
  };
  const handlePdfFile=(e)=>{
    e.preventDefault()
    const reader=new FileReader()
    const file=e.target.files[0]
       reader.onloadend = () => {
         setPdfFile(reader.result);
       };
       reader.readAsDataURL(file);  
}
  const handleExcerciseFile=(e)=>{
    e.preventDefault()
    const reader=new FileReader()
    const file=e.target.files[0]
  
       reader.onloadend = () => {
         setExcFile(reader.result);
       };
       reader.readAsDataURL(file);   
}
  const handleVideoFile=(e)=>{
    e.preventDefault()
    const reader=new FileReader()
    const file=e.target.files[0]
  
       reader.onloadend = () => {
        setVideoFile(reader.result);
       };
       reader.readAsDataURL(file);   
}
  return (
    <>
    <Modal.Header closeButton>
    <Modal.Title>Add Lessons</Modal.Title>
  </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Lesson Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Lesson Name"
            required
            />
        </Form.Group>
        <Form.Group controlId="pdf">
          <Form.Label>PDF :</Form.Label>
          <Form.Control
            type='file'
            placeholder="File"
            required
            onClick={handlePdfFile}
            accept="application/pdf"
            />
        </Form.Group>
        <Form.Group controlId="video">
          <Form.Label>Video :</Form.Label>
          <Form.Control
            type="file"
            placeholder="Select Video of Lesson"
            required
            accept="video/mp4, video/mpeg, video/quicktime, video/x-ms-wmv"
            onClick={handleVideoFile}
            />
        </Form.Group>
        <Form.Group controlId="excersie">
          <Form.Label>Excersie :</Form.Label>
          <Form.Control
            type="file"
            placeholder="Select Excersie PDF"
            required
            onClick={handleExcerciseFile}
            accept="application/pdf"
            />
        </Form.Group>
        <Box sx={{marginTop:'20px'}}>
        <Button  variant="primary" type="submit">
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

export default AddChapter;
