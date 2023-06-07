const mongoose = require('mongoose');


const lessonSchema = new mongoose.Schema({
  id: { 
    type: String,
     required: true
     },
  name: {
     type: String,
      required: true 
    },
  pdf: { 
    type: String,
     required: true 
    },
  video: { 
    type: String 
  },
 exercise: { 
    type: String, 
    required: true
   },
  
});


const Lesson = mongoose.model('Lesson', lessonSchema);


module.exports = Lesson;
