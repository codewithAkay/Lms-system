const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
  name: {
     type: String, 
     required: true
     },
  description: {
     type: String,
      required: true 
    },
  detail_description: { 
    type: String 
  },
  thumbnail_image: { 
    type: String 
  },
   Teacher_name: {
        type: String,
        required: true,
        
      },
  isActive: { 
    type: Boolean,
     default: false
     },
  price: {
     type: Number,
      required: true
     },
  addedBy: {
     type:String, 
     
    },
  createdAt: {
     type: Date, 
     default: Date.now 
    }
});


const Course = mongoose.model('Course', courseSchema);


module.exports = Course;
