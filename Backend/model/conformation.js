const mongoose=require('mongoose')

const conforamtionSchema=new mongoose.Schema(
    {
        email: String,
        confirmationCode: String,
      });

const conforamtionModel= mongoose.model("conforamtion",conforamtionSchema)

module.exports= conforamtionModel