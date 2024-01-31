import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
    component : () => (
        <>
        <div className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold">Home</Link>
            <div className="p-2"></div>
            <Link to="/signin" className="[&.active]:font-bold">
            SignIn
            </Link>
            <Link to="/user">Profile Page</Link>

        </div>
        <hr />
        <Outlet/>
        <TanStackRouterDevtools/>
        
        </>
    )
})