const mongoose=require('mongoose')

const teacherSchema=new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true,Min:6},
    isAdmin:{type:Boolean,default:false}
})

const teacherModel=mongoose.model("teacher",teacherSchema)

export default teacherModel