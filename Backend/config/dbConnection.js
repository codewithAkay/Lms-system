const mongoose=require('mongoose')

const connectDb=async(DATABASE_URL)=>{
  mongoose.set('strictQuery', false)
    try {
      await mongoose.connect(DATABASE_URL)        
      console.log("Database Connected Successfully")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb