const mongoose = require('mongoose');


const lessonSchema = new mongoose.Schema({
  id: { 
    type: String,
     required: true
     },
  title: {
     type: String,
      required: true 
    },
  description: { 
    type: String,
     required: true 
    },
  thumbnail_image: { 
    type: String 
  },
  file_field: { 
    type: String, 
    required: true
   },
  createdAt: { 
    type: Date,
     default: Date.now 
    }
});


const Lesson = mongoose.model('Lesson', lessonSchema);


module.exports = Lesson;
