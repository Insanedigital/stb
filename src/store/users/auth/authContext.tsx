import { createContext } from "react";
import { IUser } from "../iUser";

interface AuthContextProps {
    user: IUser | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: string | null;

    signIn: (email: string, password: string) => Promise<void>;
    logOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps)