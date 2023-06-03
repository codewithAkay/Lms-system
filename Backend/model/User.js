const mongoose=require('mongoose')

const userSchema=new mongoose.Schema(
    {
       
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
          cnic: {
            type: String,
          },
          department: {
            type: String,
          },
        is_verified: {
          type: Boolean,
          required: true,
        },
        profile_picture: {
          data: Buffer,
          contentType: String,
        },
       
        phone: {
          type: String,
        },
        isStudent:{
          type:Boolean,
          default:false
        }
      
      },
      {
        timestamps: true,
      }
    );
   

const userModel=mongoose.model("user",userSchema)

module.export = userModel