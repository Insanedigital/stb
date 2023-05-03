import { AuthState } from "./authProvider";
import { IUser } from "../iUser";

type AuthActionsTypes =
    | {type: '[LOGIN]-REQUEST'} 
    | {type: '[LOGIN]-SUCCESS', payload: IUser  }
    | {type: '[LOGOUT]-SUCCESS' }
    | {type: '[LOGOUT]-REQUEST' }
    | {type: '[LOGIN]-ERROR', payload: string }
    | {type: '[LOGOUT]-ERROR', payload: string }

    
export const authReducer = (state: AuthState, action: AuthActionsTypes) => {
    switch (action.type) {
        case '[LOGIN]-REQUEST':
        case '[LOGOUT]-REQUEST':
            return {
               loading: true,
               isLoggedIn: false,
               user: null,
               error: null
            }
        case '[LOGIN]-SUCCESS':
            return {
                ...state,
                loading: false,
                user: {
                    email: action.payload.email,
                    id: action.payload.id
                },
                isLoggedIn: true,
                error: null
            }
        case '[LOGOUT]-SUCCESS':
            return {
                ...state,
                loading: false,
                user: null,
                isLoggedIn: false,
                error: null
            }
        case '[LOGIN]-ERROR':
            return {
                loading: false,
                user: null,
                isLoggedIn: false,
                error: action.payload
            }
        case '[LOGOUT]-ERROR':
            return{
                ...state,
                loading: false,
                isLoggedIn: true,
                error: action.payload
            }
        default:
            return state;
    }
}