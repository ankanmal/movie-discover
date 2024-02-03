import { Link } from "@tanstack/react-router"
import {  useRecoilValue } from "recoil"
import { type AuthState, authAtom } from "../../globalAtoms/authStateAtom"

const Navbar = () => {

    const authState=useRecoilValue<AuthState>(authAtom)

  return (
    
    <div className="flex flex-row bg-gray-500">

        <div className=" bg-amber-300 px-4 mx-2">
            
            <Link to="/">LogoComponent</Link>
            </div>
        <div className=" bg-amber-300 px-4 mx-2 grow">
            <Link to="/">SearchBarComp</Link>
            </div>
        { !authState.isAuthenticated  ?
        (
        
        <div className=" bg-amber-300 px-4 mx-2 grow">
        <Link to={"/signin"} search={{redirect:"/"}}>SignIn</Link></div>
        
        )  :
        (
        
            <div className=" bg-amber-300 px-4 mx-2">
            <Link to="/user">ProfilePagecomp</Link>
            </div>
            
        )}

    </div>
  
    
  )
}

export default Navbar