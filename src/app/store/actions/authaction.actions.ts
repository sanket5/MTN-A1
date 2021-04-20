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

export const sendUserData = createAction(
  '[auth effects] send user data',
    props<{ data: User }>()
);

