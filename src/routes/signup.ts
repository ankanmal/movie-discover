import { createFileRoute } from "@tanstack/react-router";
import SignUp from "../component/AuthComponent/SignUpComp/SignUp";

export const Route=createFileRoute("/signup")({
    component: SignUp
})