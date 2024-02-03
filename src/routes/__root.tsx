import {  createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navbar from "../component/NavbarComponent/Navbar";
import { type AuthState } from "../globalAtoms/authStateAtom";

interface MyRouterContext {
    auth: AuthState
}


export const Route = createRootRouteWithContext<MyRouterContext>()({
    component : () => (
        <>
        <Navbar/>
        <hr />
        <Outlet/>
        <TanStackRouterDevtools/>
        
        </>
    )
})