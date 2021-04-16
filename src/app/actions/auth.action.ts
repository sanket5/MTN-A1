import {Action} from '@ngrx/store'
import { User,AuthState } from '../models/user.model'


export const LOGIN = '[AuthState] LOGIN';
export const LOGIN_ERROR = '[AuthState] LOGIN_ERROR';
 
export class Login implements Action{
    readonly type = LOGIN

    constructor(public payload:AuthState){ }
}

export class LoginError implements Action{
    readonly type = LOGIN_ERROR

    constructor(public payload:AuthState){ }
}

export type AuthAction = Login | LoginError