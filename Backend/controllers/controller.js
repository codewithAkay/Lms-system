
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const User = require('../model/User'); 
const Teacher=require("../model/Teacher")
const Admin = require ('../model/Admin')

const router = require('../routes/router');
const Course = require ('../model/course');
const Lesson = require ('../model/lesson');
const conforamtion = require ('../model/conformation');

const fs = require('fs');


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
   

      static teacherRegistration = async (req, res) => {
        const { name, country, email, password, subject, phonenumber } = req.body;
        try {
          const existingTeacher = await Teacher.findOne({ email: email });
          if (existingTeacher) {
            return res.status(409).json({ error: 'Teacher already exists' });
          }
      
          const hashedPassword = await bcrypt.hash(password, 10);
      
          // Read the profile picture file as a Buffer
          let profilePicture = null;
          if (req.file) {
            profilePicture = fs.readFileSync(req.file.path);
          }
      
          // Delete the temporary file after reading it
          if (req.file) {
            fs.unlinkSync(req.file.path);
          }
      
          const newTeacher = new Teacher({
            name: name,
            country: country,
            email: email,
            password: hashedPassword,
            subject: subject,
            profile_picture: {
              data: profilePicture,
              contentType: req.file ? req.file.mimetype : null
            },
            phone: phonenumber,
            isTeacher: true
          });
      
          const savedTeacher = await newTeacher.save();
      
          res.status(201).json(savedTeacher);
        } catch (error) {
          console.error('Error in teacherRegistration:', error);
          res.status(500).json({ error: 'An error occurred' });
        }
      };
      
      // Admin Registration
static admin = async (req, res) => {
  
    try {
      const { email, password,  } = req.body;
  
      // Check if the admin already exists
      const existingAdmin = await Admin.findOne({ email: email });
      if (existingAdmin) {
        return res.status(409).json({ error: 'Admin already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new admin object
      const newAdmin = new admin({
        email: email,
        password: hashedPassword,
       
        isAdmin: true
      });
  
      // Save the new admin 
      await newAdmin.save();
  
      res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
      console.error('Error creating admin:', error);
      res.status(500).json({ error: 'Failed to create admin' });
    }
  }


  //admin login
  static Adminlogin=async(req,res)=>{
    try {
      const { email, password } = req.body;
  
    
      const admin = await Admin.findOne({ email: email });
      if (!admin) {
        return res.status(404).json({ error: 'User not found' });
      }
  
    
      const isPasswordMatch = await bcrypt.compare(password, admin.password);
      if (!isPasswordMatch) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
    
      res.status(200).send(admin);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
    
  }


 // Create a new course object


    static Course = async (req, res) => {
      
        
          const { name, description, detail_description,coursepic,price } = req.body;
          try {
      
          const newCourse = new Course({
            name: name,
            description: description,
            detail_description: detail_description,
            thumbnail_image: coursepic,
            isActive: true,
            price: price,
          });
      
          // Save the new course
          const savedCourse = await newCourse.save();
      
          res.status(201).json(savedCourse);
        } catch (error) {
          console.error('Error creating course:', error);
          res.status(500).json({ error: 'An error occurred' });
        }
      }

      //Delete course by ID
      static deleteCourse = async (req, res) => {
        const { id } = req.body;
      
        try {
          
          const deletedCourse = await Course.findByIdAndDelete(id);
      
          if (!deletedCourse) {
            return res.status(404).json({ error: 'Course not found' });
          }
      
          res.status(200).json({ message: 'Course deleted successfully' });
        } catch (error) {
          console.error('Error deleting course:', error);
          res.status(500).json({ error: 'An error occurred' });
        }
      }
      static Lesson = async (req, res) => {
        const { id, name, pdf, video, exercise_pdf } = req.body;
        
        try {
          const newLesson = new Lesson({
           id: id,
           name: name,
           pdf: pdf,
           video: video,
          exercise_pdf: exercise_pdf
          });
      
          // Save the new lesson
          const savedLesson = await newLesson.save();
      
          res.status(201).json(savedLesson);
        } catch (error) {
          console.error('Error creating lesson:', error);
          res.status(500).json({ error: 'An error occurred' });
        }
      }
      //fetch student
      static fetchStudent = async (req, res) => {
        try {
          const data = await User.find({}); 
          res.status(200).send(data);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      }
      static fetchCourse = async (req, res) => {
        try {
          const data = await Course.find({}); 
          res.status(200).send(data);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      }
   
       static onlyLesson=async(req,res)=>{
        const { id } = req.body;
       const data = await Lesson.find({ id: id }, { _id: 1, name: 1 });
        res.status(200).send(data)
       }

      // Student UPDATE through ID
static studentUpdate = async (req, res) => {
  try {
    const { id } = req.body; 
    const {name, country, email, hashedPassword, department, cnic, phonenumber,profilepic } = req.body; 

 
    const updatedStudent = await User.findByIdAndUpdate(
      id,
      {   name: name,
        country: country,
        email: email,
        password: hashedPassword,
        cnic: cnic,
        department: department,
        profile_picture:profilepic,
        phone: phonenumber,
        isStudent:true },
      
    );

    if (!updatedStudent) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).send(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}
// Student DELETE by ID
static studentDelete = async (req, res) => {
  try {
    const { id } = req.body; 
  
    const deletedStudent = await User.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}



///forget Password


  static sendConfirmationCode = async (req, res) => {
    try {
      const { email } = req.body;

      // Check if the user exists in the database
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Generate a random confirmation code
      const confirmationCode = Math.random().toString(36).slice(-8);

      // Store the confirmation code in the database
      user.confirmationCode = confirmationCode;
      await user.save();

      // Send the confirmation email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'donald.duck0762@gmail.com',
          pass: 'bxlshrmgvwhvaave',
        },
      });

      const mailOptions = {
        from: 'donald.duck0762@gmail.com',
        to: email,
        subject: 'Password Reset Confirmation Code',
        text: `Your confirmation code is: ${confirmationCode}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Failed to send confirmation code' });
        }
        console.log('Email sent:', info.response);
        res.json({ message: 'Confirmation code sent successfully' });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static resetPassword = async (req, res) => {
    try {
      const { email, confirmationCode, newPassword } = req.body;

      // Check if the user exists in the database
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Check if the confirmation code matches
      if (user.confirmationCode !== confirmationCode) {
        return res.status(400).json({ message: 'Invalid confirmation code' });
      }

      // Update the user's password
      user.password = newPassword;
      user.confirmationCode = null;
      await user.save();

      res.json({ message: 'Password reset successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}



    
  


module.exports=Controllers