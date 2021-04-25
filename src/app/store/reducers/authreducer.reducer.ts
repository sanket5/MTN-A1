import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { login, loginSuccess, logout } from '../actions/authaction.actions';


export const authreducerFeatureKey = 'authreducer';

export interface State {
  isAuthenticated: boolean;
  user: null | User;
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null ,
  errorMessage: null,
};

export const reducer = createReducer(
  initialState,
  on(loginSuccess, logout, (state, action) => {
    return {
        ...state,
        isAuthenticated: action.data.isAuthenticated,
        user: action.data.user,
        errorMessage: action.data.errorMessage
      };
  }),


);

