import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { toast } from "react-toastify"
import { useContext } from "react"
import { Store } from "../../components/Store"
import { Box, Button } from "@mui/material"
function StudentLogin() {
    const {dispatch}=useContext(Store)
    const navigate=useNavigate()
    const submitHandler=async(e)=>{
        e.preventDefault()
        const Formdata=new FormData(e.currentTarget)
        const actualData={
          email:Formdata.get("email"),
          password:Formdata.get("password"),
        }
        try {
          const {data}=await axios.post("http://localhost:5000/studentlogin",actualData)
  
          const {data2}=await axios.post('http://localhost:5000/authcode',{email:actualData.email})
          toast.success("Confirmation Code send to email please check")
          navigate('/confirmationpage', { state: { data: actualData.email } });      
        } catch (error) {
          toast.error("Email and Password is Invalid")
        }
       }
    return (
        <>
            <section class="our-log bgc-fa">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-lg-6 offset-lg-3">
                            <div class="login_form inner_page">

                                <span id="maincontent"></span><div class="my-1 my-sm-5"></div>
                                <form  id="login" onSubmit={submitHandler}>

                                    <div class="heading">
                                        <h3 class="text-center">Login to your account</h3>
                                        <p class="text-center">Don't have an account? <Link class="text-thm" to="/registration">Sign Up!</Link></p>
                                    </div>


                                    <input id="anchor" type="hidden" name="anchor" value="" />
                                    <script>document.getElementById('anchor').value = location.hash;</script>
                                    <input type="hidden" name="logintoken" value="imG4lD1Ss876rLBbq5nXNR2bgbTMM3mh" />
                                    <div class="form-group">
                                        <label for="username" class="sr-only">
                                            Username
                                        </label>
                                        <input type="text" name="email" id="username" class="form-control"  placeholder="Enter your Email" autocomplete="username" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="sr-only">Password</label>
                                        <input type="password" name="password" id="password"  class="form-control" placeholder="Password" autocomplete="current-password" />
                                    </div>
                                    <div class="form-group custom-control custom-checkbox">
                                        <Link class="tdu btn-fpswd float-right" to="/forget">Forgot Password?</Link>
                                    </div>

                                    <Box textAlign='center'>
                                    <Button type="submit" sx={{width:"100%"}} variant="contained" color="primary">Log in</Button>
                                    </Box>
                                    <Link to="/registration"><button type="submit" class="btn btn-secondary">Create new account</button></Link>

                                </form>
                              

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StudentLogin
