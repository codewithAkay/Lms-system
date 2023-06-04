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
router.post('/createadmin',Controllers.admin)

router.post('/Addcourse',Controllers.Course)





module.exports = router;