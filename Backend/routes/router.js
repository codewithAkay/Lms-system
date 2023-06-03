const express = require('express');

const Controllers = require('../controllers/controller');

const router = express.Router();

// Registration route
router.post('/studentregistration',Controllers.studentregister)

router.get('/get',(req,res)=>{
  res.send("Hellowe")
})
// Login route


module.exports = router;