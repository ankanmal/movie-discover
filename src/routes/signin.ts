import { createFileRoute } from "@tanstack/react-router";
import {z} from "zod"

import SignIn from "../component/AuthComponent/SignInComp/SignIn";

export const Route = createFileRoute("/signin")({
    validateSearch:z.object({
    redirect: z.string().catch("/")
    }),
    component:SignIn
})

