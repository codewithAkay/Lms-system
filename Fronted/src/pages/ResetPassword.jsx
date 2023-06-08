import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../components/Utils";
import { Store } from "../components/Store";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function Resetpassword(){
    const {state,dispatch}=useContext(Store)
    const {UserInfo}=state
    const {id}=useParams()
    const navigate=useNavigate()
    const submithandler=async(e)=>{
        e.preventDefault()
      const data=new FormData(e.currentTarget)
      const actualdata={
        id:id,
        password:data.get('password'),
        confirm_password:data.get('confirm_password')
      }
      
        try {
            await axios.post('http://localhost:5000/resetpassword',actualdata)
            toast.success("Password Update SuccessFully")
            navigate('/login')
        } catch (error) {
            toast.error(getError(error))
        }    

    }
    return(
        <>
        <Grid container  justifyContent='center' sx={{marginTop:'50px'}} >
        <Box component='form' sx={{width:'800px'}} onSubmit={submithandler} id='reset-form' textAlign='center'>
            <h2>Enter New Password</h2>
            <p></p>
          <TextField type="password" label='Password' margin="normal" required placeholder="Enter Your Password" id="email" name="password" fullWidth />
          <TextField type="password" label='Confirm Password' margin="normal" required placeholder="Enter Your Confirm password" id="email" name="confirm_password" fullWidth />
          <Box sx={{mt:3,mb:10}} textAlign='center'>
           <Button variant="contained" type="submit">Confirm</Button>
          </Box>
        </Box>
        </Grid>
        </>
    )
}