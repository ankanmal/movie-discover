import { useRecoilValue, useSetRecoilState } from "recoil"

import { authAtom, type AuthState } from "../../globalAtoms/authStateAtom"
import { useNavigate } from "@tanstack/react-router"


const UserPage=()=>{

    const userAuthSignout = useSetRecoilState<AuthState>(authAtom)
    const userData = useRecoilValue<AuthState>(authAtom)
    const navigate= useNavigate({from:'/user'})

    const userSignOut =()=>{
        userAuthSignout({isAuthenticated:false, user:null})
        navigate({to: "/"})
    }

    return(
        <div>
            <div>Users Profile Page</div>
            <div>If you can come to this page even before signin that means protectd route is not working</div>
            <div>{userData.user}</div>
            <button onClick={userSignOut}>SignOut</button>
        </div>
    )
}

export default UserPage