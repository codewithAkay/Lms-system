const express = require('express');

const Controllers = require('../controllers/controller');

const router = express.Router();

// Registration route
router.post('/studentregistration',Controllers.studentregister)
router.post('/teacherregistration',Controllers.teacherRegistration)

// Login Route
router.post('/studentlogin',Controllers.studentlogin)
router.post('/teacherlogin',Controllers.teacherLogin)

// create admin

router.post('/Admin',Controllers.Adminlogin)

router.post('/Addcourse',Controllers.Course)
router.post('/Addlesson',Controllers.Lesson)
//student fetch
router.get('/fetchstudent',Controllers.fetchStudent)




module.exports = router;