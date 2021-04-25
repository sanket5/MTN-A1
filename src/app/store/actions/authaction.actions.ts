import { createAction, props } from '@ngrx/store';
import { AuthState, User } from 'src/app/models/user.model';

export const login = createAction(
  '[Authaction] Loging in',
  props<{ data: AuthState }>()
);

export const logout = createAction(
  '[Authaction] Loging out',
  props<{ data: AuthState }>()
);

export const loginSuccess = createAction(
  '[Authaction] Login Success',
  props<{ data: AuthState }>()
);

export const loginError = createAction(
  '[Authaction] Login failure',
  props<{ data: Error }>()
);

