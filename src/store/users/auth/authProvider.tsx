import { useEffect, useReducer } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

import { IUser } from "../iUser";
import { AuthContext } from "./authContext";
import { authReducer } from "./authReducer";
import { AUTH_FIREBASE } from "../../../firebase/firebase.config";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../navigation/stacks/AuthStackNavigation";


interface Props {
    children: JSX.Element | JSX.Element[]
}

export interface AuthState{
    user: IUser | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: string | null
}

const INITIAL_STATE: AuthState = {
    user: {} as IUser,
    isLoggedIn: false,
    loading: false,
    error: null
}



export const AuthProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer( authReducer, INITIAL_STATE )
    
    const signIn = async (email: string, password: string) =>  {

        dispatch({
            type: '[LOGIN]-REQUEST'
        })

        await signInWithEmailAndPassword(AUTH_FIREBASE, email, password)
            .then(async (userCredential) => {
                dispatch({
                    type: '[LOGIN]-SUCCESS',
                    payload: {
                        email: userCredential.user.email!,
                        id: userCredential.user.uid
                    }
                })

            })
            .catch((error) => {
               dispatch({
                    type: '[LOGIN]-ERROR',
                    payload: error.message
               })
            });         
        }
    const logOut = async () => {
            dispatch({
                type: '[LOGOUT]-REQUEST'
            })

            if(state.isLoggedIn === false){
            }
            await signOut(AUTH_FIREBASE).then(async() => {
                dispatch({
                    type: '[LOGOUT]-SUCCESS'
                })
                
            }).catch((error) => { 
                dispatch({
                    type: '[LOGOUT]-ERROR',
                    payload: typeof error
                })
            })
           
    }


    return(
        <AuthContext.Provider value={{
            ...state,
            signIn,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}