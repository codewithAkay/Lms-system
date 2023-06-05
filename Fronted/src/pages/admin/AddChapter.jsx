import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddChapter({ onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, image });
    setName('');
    setImage(null);
  };

  return (
    <>
    <Modal.Header closeButton>
    <Modal.Title>Add Lessons</Modal.Title>
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
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </Form>
    </Modal.Body>
            </>
  );
}

export default AddChapter;
