import { Box, Button, Grid, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import BoyIcon from '@mui/icons-material/Boy';
function Choices() {
  return (
    <>
      <Grid  container spacing={4} justifyContent="center" sx={{width:"100",marginTop:5,marginBottom:5}}>
          <Box  border={1} borderColor='divider' sx={{p:3}} textAlign='center' component='form' id='signin_form'>
            <h1>Which Type of <br /> Accoount</h1><br />
           <Box sx={{display:"flex"}}>
           <Box sx={{marginLeft:5}}>
            <Link  to='/teacherregistration'>
            <h4>Teacher</h4>
            <BoyIcon sx={{fontSize:80}}/>
            </Link>
            </Box>
            <Box sx={{marginLeft:5}}>
            <Link to='/studentregistration'>
            <h4>Student</h4>
            <BoyIcon sx={{fontSize:80}}/>
            </Link>
            </Box>
           </Box>
          </Box>
      </Grid>
    </>
  )
}

export default Choices