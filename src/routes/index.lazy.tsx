import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
    component: Index,
})

function Index(){
    return (
        <div className="p-2">
            <h2>Welcome Home to the Movie Discover Page</h2>
        </div>
    )
}