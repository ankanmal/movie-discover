import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navbar from "../component/NavbarComponent/Navbar";

export const Route = createRootRoute({
    component : () => (
        <>
        <Navbar/>
        <hr />
        <Outlet/>
        <TanStackRouterDevtools/>
        
        </>
    )
})