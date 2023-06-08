import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../components/Utils";
import { useContext, useEffect } from "react";
import { Store } from "../components/Store";
import { useLocation, useNavigate } from "react-router-dom";


export default function Confirmationcode(){
    const {state,dispatch}=useContext(Store)
    const {UserInfo}=state
    const location = useLocation();
    const { data} = location.state;
    const navigate=useNavigate()
    const submithandler=async(e)=>{
        e.preventDefault()
      const data2=new FormData(e.currentTarget)
      const actualdata={
        code:data2.get('code'),
        email:data
      }
      try {
        const { data } = await axios.post('http://localhost:5000/check', actualdata);
        localStorage.setItem("UserInfo",JSON.stringify(data))
        dispatch({type:'UserLoggedIn',payload:data})
        navigate('/studentdashboard');
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data && error.response.data.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error('An error occurred');
        }
      }
    }
    useEffect(()=>{
    localStorage.removeItem("UserInfo")
    },[])
    return(
        <>
        <Grid container  justifyContent='center' sx={{marginTop:'50px'}} >
        <Box component='form' sx={{width:'800px'}} onSubmit={submithandler} id='reset-form' textAlign='center'>
            <h2>Verification Code</h2>
            <p>Enter verification code send to your email</p>
          <TextField label='Code'  required placeholder="Enter Your Code" id="email" name="code" fullWidth />
          <Box sx={{mt:3,mb:10}} textAlign='center'>
           <Button variant="contained" type="submit">Confirm</Button>
          </Box>
        </Box>
        </Grid>
        </>
    )
}