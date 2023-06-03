const mongoose=require('mongoose')

const teacherSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
    
    
      country: {
        type: String,
        required: true,
      },
   
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      
      is_active: {
        type: Number,
        required: true,
      },
     
      is_verified: {
        type: Boolean,
        required: true,
      },
      subject: {
        type: String,
      },
      profile_picture: {
        data: Buffer,
        contentType: String,
      },
  
      phone: {
        type: String,
      },
    
    },
    {
      timestamps: true,
    }
  );
const teacherModel=mongoose.model("teacher",teacherSchema)

module.export =teacherModel