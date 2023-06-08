import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Store } from "./Store"


const StuProtected=({children})=>{
    const {state}=useContext(Store)
    const {UserInfo}=state
    return   UserInfo && UserInfo.isStudent && UserInfo.is_verified ?  children : <Navigate to='/'/> 
}

export default StuProtected