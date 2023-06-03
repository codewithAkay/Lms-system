import { Box, Button, Grid, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import BoyIcon from '@mui/icons-material/Boy';
function Choices() {
  return (
    <>
      <Grid  container spacing={4} justifyContent="center" sx={{width:"100",marginTop:5,marginBottom:5}}>
          <Box  border={1} borderColor='divider' sx={{p:3}} textAlign='center' component='form' id='signin_form'>
            <h1>Belong To</h1><br />
           <Box sx={{display:"flex"}}>
            <Box sx={{marginLeft:2,color:"black"}}>
            <Link to='/admlogin'>
            <h4>Admin</h4>
            <BoyIcon sx={{fontSize:80}}/>
            </Link>
            </Box>
            <Box sx={{marginLeft:5}}>
            <Link to='/teacherlogin'>
            <h4>Teacher</h4>
            <BoyIcon sx={{fontSize:80}}/>
            </Link>
            </Box>
            <Box sx={{marginLeft:5}}>
            <Link to='/studentlogin'>
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