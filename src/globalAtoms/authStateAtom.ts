import { atom } from "recoil"

export interface AuthState {
    isAuthenticated : boolean,
    user: string | null
}

export const authAtom = atom<AuthState>({
    key: "authAtom",
    default:{ isAuthenticated : false, user: null}
})