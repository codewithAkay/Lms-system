import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../components/Utils";
import { useContext } from "react";
import { Store } from "../components/Store";
import { useNavigate } from "react-router-dom";


export default function Confirmationcode(){
    const {state,dispatch}=useContext(Store)
    const {UserInfo}=state
    const navigate=useNavigate()
    const submithandler=async(e)=>{
        e.preventDefault()
      const data=new FormData(e.currentTarget)
      const actualdata={
        code:data.get('code')
      }
      if(actualdata.email){
        try {
            await axios.post('http://localhost:5000/Confrmcode',actualdata)
            navigate('/resetpassword')
        } catch (error) {
            toast.error(getError(error))
        }    
      }else{
        toast.error("All Fields are required")
      }


    }
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