const express = require('express');
const bcrypt = require('bcrypt');
const Teacher = require('../model/Teacher');

const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  // ...
});

// Login route
router.post('/login', async (req, res) => {
  // ...
});

module.exports = router;