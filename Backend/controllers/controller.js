
const bcrypt = require('bcrypt');
const User = require('../model/User'); 
const Teacher=require("../model/Teacher")
const Admin = require ('../model/Admin')

const router = require('../routes/router');
const Course = require ('../model/course');
const Lesson = require ('../model/lesson');

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
      
        
          const { name, description, detail_description, thumbnail_image, Teacher_name, isActive, price, addedBy } = req.body;
          try {
      
          const newCourse = new Course({
            name: name,
            description: description,
            detail_description: detail_description,
            thumbnail_image: thumbnail_image,
            Teacher_name: Teacher_name,
            isActive: isActive,
            price: price,
            addedBy: addedBy
          });
      
          // Save the new course
          const savedCourse = await newCourse.save();
      
          res.status(201).json(savedCourse);
        } catch (error) {
          console.error('Error creating course:', error);
          res.status(500).json({ error: 'An error occurred' });
        }
      }
      static Lesson = async (req, res) => {
        const { id, title, description, thumbnail_image, file_field } = req.body;
      
        try {
          const newLesson = new Lesson({
            id: id,
            title: title,
            description: description,
            thumbnail_image: thumbnail_image,
            file_field: file_field
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
      static fetchStudent=async(req,res)=>{
        const data=await User.findAll()
        res.status(200).send(data)
      }
    }
    
  


module.exports=Controllers