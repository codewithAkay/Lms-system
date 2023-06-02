const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true,Min:6},
    isAdmin:{type:Boolean,default:false}
})

const userModel=mongoose.model("user",userSchema)

export default userModel