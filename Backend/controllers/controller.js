
const bcrypt = require('bcrypt');
const User = require('../model/User'); 
const Teacher=require("../model/Teacher")
class Controllers{
    // STUDENT LOGICS
    // Student Register 
    static studentregister=async (req, res) => {
        const { name, country, email, password, department, cnic, phonenumber,profilepic } = req.body;
       
            // Check if the user already exists
            const existingUser = await User.findOne({email:email})
          if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
          }else{             
              // Hash the password
              const hashedPassword = await bcrypt.hash(password, 10);
              
              // Create a new user object
              const newUser = new User({
                  name: name,
                  country: country,
                  email: email,
                  password: hashedPassword,
                  cnic: cnic,
                  department: department,
                  profile_picture:profilepic,
                  phone: phonenumber,
                  isStudent:true
                });
                                
                const savedUser = await newUser.save();
                
                res.status(201).send(savedUser);
                
            }
                
            }
     
    //   Student LOGIN
      static studentlogin= async (req, res) => {
        try {
          const { email, password } = req.body;
      
        
          const user = await User.findOne({ email: email });
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
      
        
          const isPasswordMatch = await bcrypt.compare(password, user.password);
          if (!isPasswordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
          }
      
        
          res.status(200).send(user);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred' });
        }
      }

      // Teacher Logics
      // Teacher Login
      static teacherLogin=async(req,res)=>{
        try {
          const { email, password } = req.body;
      
        
          const user = await Teacher.findOne({ email: email });
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
      
        
          const isPasswordMatch = await bcrypt.compare(password, user.password);
          if (!isPasswordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
          }
      
        
          res.status(200).send(user);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred' });
        }
        
      }
      // Teacher Registration
      static teacherRegistration=async(req,res)=>{
        const { name, country, email, password,  subject, phonenumber,profilepic } = req.body;
        try {
      
          
          const existingTeacher = await Teacher.findOne({ email: email });
          if (existingTeacher) {
            return res.status(409).json({ error: 'Teacher already exists' });
          }
      
          
          const hashedPassword = await bcrypt.hash(password, 10);
      
         
          const newTeacher = new Teacher({
            name: name,
            country: country,
            email: email,
            password: hashedPassword,
            subject: subject,
            profile_picture:profilepic,
            phone: phonenumber,
            isTeacher:true

          });
      
          // Save the new teacher
          const savedTeacher = await newTeacher.save();
      
          res.status(201).json(savedTeacher);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred' });
        }
      }
}

module.exports=Controllers