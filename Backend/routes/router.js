const express = require('express');

const Controllers = require('../controllers/controller');

const router = express.Router();

// Registration route
router.post('/studentregistration',Controllers.studentregister)
router.post('/teacherregistration',Controllers.teacherRegistration)

// Login Route
router.post('/studentlogin',Controllers.studentlogin)
router.post('/teacherlogin',Controllers.teacherLogin)
//update stud by Id
router.post('/updatestu',Controllers.studentUpdate)
//Delete student
router.post('/deletestudent',Controllers.studentDelete)
//Delete course by ID
router.post('/deletecourse',Controllers.deleteCourse)
router.post('/Confrmcode',Controllers.sendConfirmationCode)

router.post('/authcode',Controllers.ConfirmationCode)
router.post('/check',Controllers.codeCheck)

router.post('/checkout',Controllers.checkout)
// create admin

router.post('/Admin',Controllers.Adminlogin)

router.post('/Addcourse',Controllers.Course)
router.post('/Addlesson',Controllers.Lesson)
//student fetch
router.post('/fetchOnlylesson',Controllers.onlyLesson)
router.get('/fetchstudent',Controllers.fetchStudent)
router.get('/fetchcourse',Controllers.fetchCourse)





module.exports = router;