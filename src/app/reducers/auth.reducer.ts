
import { Action } from '@ngrx/store'
import { AuthState, User}  from '../models/user.model'
import * as authActions from '../actions/auth.action'


export const initialState : AuthState={
    isAuthenticated: false,
    user:  null,
    errorMessage: null
}

export function authReducer( state: AuthState[] = [initialState], action: authActions.AuthAction ){
    switch(action.type){
        case authActions.LOGIN:
            return [...state, action.payload]
        default:
            return state
    }
}
