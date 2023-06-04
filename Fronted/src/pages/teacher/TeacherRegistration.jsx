import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { toast } from "react-toastify"
import { Store } from "../../components/Store";
function TeacherRegistration() {
    const {dispatch}=useContext(Store)
    const [ProfilePic,setProfilePic]=useState()
    const navigate = useNavigate()
    const submitHandler = async (e) => {
        e.preventDefault()
        const Formdata = new FormData(e.currentTarget)
        const actualData = {
            email: Formdata.get("email"),
            password: Formdata.get("password"),
            name: Formdata.get("username"),
            phonenumber: Formdata.get("phoneNo"),
            subject: Formdata.get("subject"),
            country: Formdata.get("country"),
            profilepic:ProfilePic
        }
        console.log(actualData)
        try {
            const { data } = await axios.post("http://localhost:5000/teacherregistration", actualData)
            localStorage.setItem("UserInfo", JSON.stringify(data))
            dispatch({type:'UserLoggedIn',payload:data})
            navigate("/teacherdashboard")
            toast.success("Teacher Registred ")
        } catch (error) {
            toast.error("Email and Password is Invalid")
        }
    }
    const handleImage=(e)=>{
        e.preventDefault()
        const reader=new FileReader()
        const file=e.target.files[0]
        if (file) {
            const fileSize = file.size;
            const fileSizeInMB = fileSize / (1024 * 1024); // Convert to MB
        
            if (fileSizeInMB > 5) {
              alert("Image size exceeds 5 MB.");
              setProfilePic("") // Clear the file input value
            }
          }
        
        reader.onloadend=()=>{
            setProfilePic(reader.result)
        }
        reader.readAsDataURL(file)
    }
    return (
    <>
            <section class="our-log bgc-fa" id="yui_3_17_2_1_1685721382257_58">
                <div class="container" id="yui_3_17_2_1_1685721382257_57">
                    <div class="row" id="yui_3_17_2_1_1685721382257_56">
                        <div class="col-sm-12 col-lg-6 offset-lg-3" id="yui_3_17_2_1_1685721382257_55">
                            <div class="login_form inner_page" id="yui_3_17_2_1_1685721382257_54">

                                <span id="maincontent"></span><div class="" id="yui_3_17_2_1_1685721382257_53">
                                    <div class="" id="yui_3_17_2_1_1685721382257_52">
                                        <div class="" id="yui_3_17_2_1_1685721382257_51">
                                            <div class="" id="yui_3_17_2_1_1685721382257_50">
                                                <div class="" id="yui_3_17_2_1_1685721382257_49">
                                                    <div class="">

                                                        <div class="heading">
                                                            <h3 class="text-center">New account</h3>
                                                            <p class="text-center">Have an account? <Link class="text-thm" to="/choice">Login</Link></p>
                                                        </div>
                                                    </div>

                                                    <form onSubmit={submitHandler} autocomplete="off" accept-charset="utf-8" id="mform1_AGmwziDIfoCglKq" class="mform">
                                                        <div style={{display:"none"}}><input name="sesskey" type="hidden" value="CWED6adVBZ"/>
                                                            <input name="_qf__login_signup_form" type="hidden" value="1"/>
                                                                <input name="mform_isexpanded_id_createuserandpass" type="hidden" value="1"/>
                                                                    <input name="mform_isexpanded_id_supplyinfo" type="hidden" value="1"/>
                                                                    </div>
                                                                    <fieldset class="clearfix collapsible" id="id_createuserandpass">
                                                                        <div class="fcontainer clearfix">
                                                                            <div id="fitem_id_username" class="form-group row  fitem   ">
                                                                                <div class="col-md-3">
                                                                                    <label class="col-form-label d-inline " for="id_username">
                                                                                        Username
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-md-9 form-inline felement" data-fieldtype="text">
                                                                                    <input type="text" class="form-control " name="username" id="id_username"   size="12" maxlength="100" autocapitalize="none"/>
                                                                                        <div class="form-control-feedback invalid-feedback" id="id_error_username">

                                                                                        </div>
                                                                                </div>
                                                                            </div><div id="fitem_id_passwordpolicyinfo" class="form-group row  fitem femptylabel  ">
                                                                                
                                                                                <div class="col-md-9 form-inline felement" data-fieldtype="static">

                                                                                    <div class="form-control-feedback invalid-feedback" id="id_error_passwordpolicyinfo">

                                                                                    </div>
                                                                                </div>
                                                                            </div><div id="fitem_id_password" class="form-group row  fitem   ">
                                                                                <div class="col-md-3">
                                     
                                                                                    <label class="col-form-label d-inline " for="id_password">
                                                                                        Password
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-md-9 form-inline felement" data-fieldtype="password">
                                                                                    <input type="password" class="form-control " name="password" id="id_password"   size="12" maxlength="32" autocomplete="off"/>
                                                                                        <div class="form-control-feedback invalid-feedback" id="id_error_password">

                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div></fieldset>
                                                                    <fieldset class="clearfix collapsible" id="id_supplyinfo">
                                                                        <legend class="ftoggler"><Link to="#" class="fheader" role="button" aria-controls="id_supplyinfo" aria-expanded="true" id="yui_3_17_2_1_1685721382257_63">More details</Link></legend>
                                                                        <div class="fcontainer clearfix">
                                                                            <div id="fitem_id_phoneNo" class="form-group row  fitem   ">
                                                                                <div class="col-md-3">
                                                                                  
                                                                                    <label class="col-form-label d-inline " for="id_email">
                                                                                        Email address
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-md-9 form-inline felement" data-fieldtype="text">
                                                                                    <input type="text" class="form-control " name="email" id="id_email"   size="25" maxlength="100"/>
                                                                                        <div class="form-control-feedback invalid-feedback" id="id_error_email">

                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                            <div id="fitem_id_" class="form-group row  fitem   ">
                                                                                <div class="col-md-3">
                                                                                  
                                                                                    <label class="col-form-label d-inline " for="id_phoneNo">
                                                                                        Phone No
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-md-9 form-inline felement" data-fieldtype="text">
                                                                                    <input type="number" class="form-control " name="phoneNo" id="id_email2"   size="25" maxlength="100"/>
                                                                                        <div class="form-control-feedback invalid-feedback" id="id_error_email2">

                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                           
                                                                            <div id="fitem_id_subject" class="form-group row  fitem   ">
                                                                                <div class="col-md-3">
                                                                                   
                                                                                    <label class="col-form-label d-inline " for="id_subject">
                                                                                        Subject
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-md-9 form-inline felement" data-fieldtype="text">
                                                                                    <input type="text" class="form-control " name="subject" id="id_lastname"   size="30" maxlength="100"/>
                                                                                        <div class="form-control-feedback invalid-feedback" id="id_error_lastname">

                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                            <div id="fitem_id_country" class="form-group row  fitem   ">
                                                                                <div class="col-md-3">
                                                                                   
                                                                                    <label class="col-form-label d-inline " for="country">
                                                                                        Country
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-md-9 form-inline felement" data-fieldtype="text">
                                                                                    <input  type="text" class="form-control " name="country" id="country"   size="20" maxlength="120"/>
                                                                                        <div class="form-control-feedback invalid-feedback" id="id_error_city">

                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                            <div id="fitem_id_profilepic" class="form-group row  fitem   ">
                                                                                <div class="col-md-3">
                                                                                   
                                                                                    <label class="col-form-label d-inline " for="id_profilepic">
                                                                                        Profile Pic
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-md-9 form-inline felement" data-fieldtype="text">
                                                                                    <input onChange={handleImage} type="file" class="form-control " name="profilepic" id="id_city"   size="20" maxlength="120"/>
                                                                                        <div class="form-control-feedback invalid-feedback" id="id_error_city">

                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                        </div></fieldset><div id="fgroup_id_buttonar" class="form-group row  fitem femptylabel  " data-groupname="buttonar">
                                                                        <div class="col-md-3">
                                                                            <span class="float-sm-right text-nowrap">



                                                                            </span>
                                                                            <label class="col-form-label d-inline " for="fgroup_id_buttonar">

                                                                            </label>
                                                                        </div>
                                                                        <div class="col-md-9 form-inline felement" data-fieldtype="group">

                                                                            <div class="form-group  fitem  ">
                                                                                <label class="col-form-label " for="id_submitbutton">



                                                                                </label>
                                                                                <span data-fieldtype="submit">
                                                                                    <input type="submit" class="btn
                        btn-primary
                        
                    
                    " name="submitbutton" id="id_submitbutton" value="Create my new account"/>
                                                                                </span>
                                                                                <div class="form-control-feedback invalid-feedback" id="id_error_submitbutton">

                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group  fitem   btn-cancel">
                                                                                <label class="col-form-label " for="id_cancel">



                                                                                </label>
                                                                                <span data-fieldtype="submit">
                                                                                   <Link to="/choice">
                                                                                    <input type="submit" class="btn
                        
                        btn-secondary
                        
                        " name="cancel" id="id_cancel" value="Cancel" data-skip-validation="1" data-cancel="1" onclick="skipClientValidation = true; return true;"/>
                        </Link>
                                                                                </span>
                                                                                <div class="form-control-feedback invalid-feedback" id="id_error_cancel">

                                                                                </div>
                                                                            </div>
                                                                            <div class="form-control-feedback invalid-feedback" id="fgroup_id_buttonar">

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
                )
}

                export default TeacherRegistration
