import { createFileRoute, redirect } from "@tanstack/react-router";
import UserPage from "../component/UserPageComponent/UsersPage";

export const Route= createFileRoute("/user")({
    beforeLoad:({context, location})=>{
        if(!context.auth.isAuthenticated){
            throw redirect({
                to: '/signin',
                search:{
                    redirect: location.href,
                }
            })
        }
    },
    component: UserPage
})

