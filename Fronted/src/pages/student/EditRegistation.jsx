import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import axios from 'axios'
import { toast } from "react-toastify"
import {getError} from '../../components/Utils'
import { Store } from "../../components/Store";
function EditRegistation() {
    const location = useLocation();
    const { data } = location.state;
    console.log(data)
    const [name,setName]=useState(data.name)
    const [password,setPassword]=useState(data.password)
    const [email,setEmail]=useState(data.email)
    const [phone,setPhone]=useState(data.phone)
    const [cnic,setCnic]=useState(data.cnic)
    const [department,setDepartment]=useState(data.department)
    const [country,setCountry]=useState(data.country)
    
//    console.log(props)
    // const { data } = props
    const {dispatch}=useContext(Store)
    const [ProfilePic,setProfilePic]=useState()
    const navigate = useNavigate()
    const submitHandler = async (e) => {
        e.preventDefault()
        const Formdata = new FormData(e.currentTarget)
        const actualData = {
            id:data._id,
            email: Formdata.get("email"),
            password: Formdata.get("password"),
            name: Formdata.get("username"),
            phonenumber: Formdata.get("phoneNo"),
            cnic: Formdata.get("cnic"),
            department: Formdata.get("department"),
            country: Formdata.get("country"),
            profilepic:ProfilePic
        }
        // console.log(actualData)
        try {
            localStorage.removeItem("UserInfo")
            const { data } = await axios.post("http://localhost:5000/updateInfo", actualData)
            navigate("/studentlogin")
            toast.success("Student Registred")
        } catch (error) {
            toast.error(getError(error))
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
//   console.log(data)
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
                                                            <h3 class="text-center">Edit Info</h3>
                                                        </div>
                                                    </div>

                                                    <form onSubmit={submitHandler} autocomplete="off" accept-charset="utf-8" id="mform1_AGmwziDIfoCglKq" class="mform">
                                                        <div style={{ display: "none" }}><input name="sesskey" type="hidden" value="CWED6adVBZ" />
                                                            <input name="_qf__login_signup_form" type="hidden" value="1" />
                                                            <input name="mform_isexpanded_id_createuserandpass" type="hidden" value="1" />
                                                            <input name="mform_isexpanded_id_supplyinfo" type="hidden" value="1" />
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
                                                                        <input type="text" class="form-control " value={name} onChange={(e)=>(setName(e.target.value))} name="username" id="id_username" required   size="12" maxlength="100" autocapitalize="none" />
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
                                                                        <input type="password" class="form-control "  onChange={(e)=>(setPassword(e.target.value))} name="password" id="id_password"  required  size="12" maxlength="32" autocomplete="off" />
                                                                        <div class="form-control-feedback invalid-feedback" id="id_error_password">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div></fieldset>
                                                        <fieldset class="clearfix collapsible" id="id_supplyinfo">
                                                            <div class="fcontainer clearfix">
                                                                <div id="fitem_id_phoneNo" class="form-group row  fitem   ">
                                                                    <div class="col-md-3">

                                                                        <label class="col-form-label d-inline " for="id_email">
                                                                            Email address
                                                                        </label>
                                                                    </div>
                                                                    <div class="col-md-9 form-inline felement" data-fieldtype="text">
                                                                        <input type="text" class="form-control " value={email} onChange={(e)=>(setEmail(e.target.value))} name="email" id="id_email"  required  size="25" maxlength="100" />
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
                                                                        <input type="number" class="form-control " value={phone} onChange={(e)=>(setPhone(e.target.value))} name="phoneNo" id="id_email2" required   size="25" maxlength="100" />
                                                                        <div class="form-control-feedback invalid-feedback" id="id_error_email2">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="fitem_id_cnic" class="form-group row  fitem   ">
                                                                    <div class="col-md-3">

                                                                        <label class="col-form-label d-inline " for="id_cnic">
                                                                            CNIC
                                                                        </label>
                                                                    </div>
                                                                    <div class="col-md-9 form-inline felement" data-fieldtype="text">
                                                                        <input type="number" class="form-control " value={cnic} onChange={(e)=>(setCnic(e.target.value))} name="cnic" id="id_firstname" required   size="30" maxlength="100" />
                                                                        <div class="form-control-feedback invalid-feedback" id="id_error_firstname">

                                                                        </div>
                                                                    </div>
                                                                </div><div id="fitem_id_department" class="form-group row  fitem   ">
                                                                    <div class="col-md-3">

                                                                        <label class="col-form-label d-inline " for="id_department">
                                                                            Department
                                                                        </label>
                                                                    </div>
                                                                    <div class="col-md-9 form-inline felement" data-fieldtype="text">
                                                                        <input type="text" class="form-control " value={department} onChange={(e)=>(setDepartment(e.target.value))} name="department" id="id_lastname" required   size="30" maxlength="100" />
                                                                        <div class="form-control-feedback invalid-feedback" id="id_error_lastname">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="fitem_id_country" class="form-group row fitem">
                                                                    <div class="col-md-3">
                                                                        <label class="col-form-label d-inline" for="id_country">
                                                                            Country
                                                                        </label>
                                                                    </div>
                                                                    <div class="col-md-9 form-inline felement" data-fieldtype="text">
                                                                        <input type="text"  class="form-control" value={country} onChange={(e)=>(setCountry(e.target.value))} required name="country" id="id_country" size="20" maxlength="120" accept="image/*" />
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
                        
                    
                    " name="submitbutton" id="id_submitbutton" value="Update" />
                                                                    </span>
                                                                    <div class="form-control-feedback invalid-feedback" id="id_error_submitbutton">

                                                                    </div>
                                                                </div>

                                                                <div class="form-group  fitem   btn-cancel">
                                                                    <label class="col-form-label " for="id_cancel">



                                                                    </label>
                                                                    <span data-fieldtype="submit">
                                                                        <Link to="/studentdashboard">
                                                                            <input type="submit" class="btn
                        
                        btn-secondary
                        
                        " name="cancel" id="id_cancel" value="Cancel" data-skip-validation="1" data-cancel="1" onclick="skipClientValidation = true; return true;" />
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

export default EditRegistation
