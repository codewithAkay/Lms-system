import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Store } from "./Store"


const StuProtected=({children})=>{
    const {state}=useContext(Store)
    const {UserInfo}=state
    return   UserInfo && UserInfo.isStudent ?  children : <Navigate to='/login'/> 
}

export default StuProtected