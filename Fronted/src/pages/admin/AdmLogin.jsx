import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { toast } from "react-toastify"
function AdmLogin() {
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
          const {data}=await axios.post("http://localhost:4000/authAdmin",actualData)
          dispatch({
            type:"USER_SIGIN",payload:data
          })
          localStorage.setItem("UserInfo",JSON.stringify(data))
          navigate("/admindashboard")
          toast.success("Admin Logged In")
          window.location.reload()
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
                                        <h3 class="text-center"><strong>Admin Login</strong></h3>
                                    <input id="anchor" type="hidden" name="anchor" value="" />
                                    <script>document.getElementById('anchor').value = location.hash;</script>
                                    <input type="hidden" name="logintoken" value="imG4lD1Ss876rLBbq5nXNR2bgbTMM3mh" />
                                    <div class="form-group">
                                       
                                        <input type="text" name="email" id="username" class="form-control"  placeholder="Enter Your Email" />
                                    </div>
                                    <div class="form-group">
                                    
                                        <input type="password" name="password" id="password"  class="form-control" placeholder="Password" />
                                    </div>
                                    <div class="form-group custom-control custom-checkbox">
                                        <Link class="tdu btn-fpswd float-right" to="/forget">Forgot Password?</Link>
                                    </div>

                                    <button type="submit" class="btn btn-log btn-block btn-thm2" id="loginbtn">Log in</button>

                                </form>
                              

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdmLogin
