import { Link , getRouteApi, useNavigate} from "@tanstack/react-router"
import {  useSetRecoilState } from "recoil"

import { authAtom, type AuthState } from "../../../globalAtoms/authStateAtom"


 const routeApi= getRouteApi("/signin")

const SignIn =()=>{

    const setAuthState=useSetRecoilState<AuthState>(authAtom)
    const navigate =useNavigate()
     const search= routeApi.useSearch()

    function updateAuthState(){
        setAuthState({isAuthenticated: true, user:"testing" })
        !search.redirect ? navigate({to: '/'}) : navigate({to: search.redirect})
    }
    return(
        <>
            <div>Sign In Page</div>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit" onClick={updateAuthState}>SignIn</button>

            <div>Not Yet Have A Account</div>
            <Link to="/signup"><div>SignUp</div></Link>
        </>
    )
}

export default SignIn