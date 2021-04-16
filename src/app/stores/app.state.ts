import * as auth from '../reducers/auth.reducer'
import { User, AuthState } from '../models/user.model'

export interface AppState{
    readonly authState : AuthState[];
}