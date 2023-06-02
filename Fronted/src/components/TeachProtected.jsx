import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Store } from "./Store"


const TeachProtected=({children})=>{
    const {state}=useContext(Store)
    const {UserInfo}=state
    return  UserInfo &&  UserInfo.isTeacher ?  children : <Navigate to='/login'/> 
}

export default TeachProtected