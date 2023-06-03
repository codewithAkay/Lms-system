const express = require('express');

const Controllers = require('../controllers/controller');

const router = express.Router();

// Registration route
router.post('/studentregistration',Controllers.studentregister)
router.post('/teacherregistration',Controllers.teacherRegistration)

// Login Route
router.post('/studentlogin',Controllers.studentlogin)
router.post('/teacherlogin',Controllers.teacherLogin)

router.get('/get',(req,res)=>{
  res.send("Hellowe")
})
// Login route


module.exports = router;