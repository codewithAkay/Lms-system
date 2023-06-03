const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('../model/User'); 

const router = express.Router();

///registration

router.post('/register', async (req, res) => {
    try {
      const { name, country, email, password, is_active, is_verified,  subject, phone } = req.body;
  
      
      const existingTeacher = await Teacher.findOne({ email: email });
      if (existingTeacher) {
        return res.status(409).json({ error: 'Teacher already exists' });
      }
  
      
      const hashedPassword = await bcrypt.hash(password, 10);
  
     
      const newTeacher = new Teacher({
        name: name,
        country: country,
        email: email,
        password: hashedPassword,
        is_active: is_active,
        is_verified: is_verified,
        subject: subject,
        phone: phone,
      });
  
      // Save the new teacher
      const savedTeacher = await newTeacher.save();
  
      res.status(201).json(savedTeacher);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  // Login 
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      
      const teacher = await Teacher.findOne({ email: email });
      if (!teacher) {
        return res.status(404).json({ error: 'Teacher not found' });
      }
  
      const isPasswordMatch = await bcrypt.compare(password, teacher.password);
      if (!isPasswordMatch) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  

      res.json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });


module.exports=router