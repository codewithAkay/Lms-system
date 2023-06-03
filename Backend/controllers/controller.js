
const bcrypt = require('bcrypt');
const User = require('../model/User'); 

class Controllers{
    // STUDENT LOGICS
    // Student Register 
    static studentregister=async (req, res) => {
        console.log("Hellow Logic")
        const { name, country, email, password, department, cnic, phoneNo,profilepic } = req.body;
        try {
          // Check if the user already exists
          const existingUser = await User.findOne({ email: email });
          if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
          }
      
          // Hash the password
          const hashedPassword = await bcrypt.hash(password, 10);
      
          // Create a new user object
          const newUser = new User({
            name: name,
            country: country,
            email: email,
            password: hashedPassword,
            subject: subject,
            cnic: cnic,
            department: department,
            profile_picture:profilepic,
            phone: phoneNo,
            isStudent:true
          });
      
      
          const savedUser = await newUser.save();
      
          res.status(201).json(savedUser);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred' });
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
      
        
          res.json({ message: 'Login successful' });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred' });
        }
      }
}

module.exports=Controllers