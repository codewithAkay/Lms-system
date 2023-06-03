const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('../model/User'); 
const router = express.Router();








router.post('/register', async (req, res) => {
  try {
    const { name, country, email, password, is_active, link_video, subject, is_verified, phone } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser = new User({
      name: name,
      country: country,
      email: email,
      password: hashedPassword,
      subject: subject,
      cnic: cnic,
      department: department,
      is_verified: is_verified,
      phone: phone,
    });


    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

  
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

  
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

  
    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});







