import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { toast } from "react-toastify"
import {getError} from '../../components/Utils'
import { useContext } from "react"
import { Store } from "../../components/Store"
function TeacherLogin() {
    const {dispatch}=useContext(Store)
    const navigate=useNavigate()
    const submitHandler=async(e)=>{
        e.preventDefault()
        const Formdata=new FormData(e.currentTarget)
        const actualData={
          email:Formdata.get("email"),
          password:Formdata.get("password"),
        }
        console.log(actualData)
        try {
          const {data}=await axios.post("http://localhost:5000/teacherlogin",actualData)
          localStorage.setItem("UserInfo",JSON.stringify(data))
          dispatch({type:'UserLoggedIn',payload:data})
          navigate("/teacherdashboard")
          toast.success("Teacher Logged In")
        } catch (error) {
          toast.error(getError(error))
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
                                <form onSubmit={submitHandler}  id="login">

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
                                        <input type="text" name="email" id="username" class="form-control"  placeholder="Enter Your Email" autocomplete="username" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="sr-only">Password</label>
                                        <input type="password" name="password" id="password" class="form-control" placeholder="Password" autocomplete="current-password" />
                                    </div>
                                    <div class="form-group custom-control custom-checkbox">
                                        <Link class="tdu btn-fpswd float-right" to="/forget">Forgot Password?</Link>
                                    </div>

                                    <button type="submit" class="btn btn-log btn-block btn-thm2" id="loginbtn">Log in</button>
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

export default TeacherLogin
