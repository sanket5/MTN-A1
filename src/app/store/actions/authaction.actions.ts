import { createAction, props } from '@ngrx/store';
import { AuthState } from 'src/app/models/user.model';

export const login = createAction(
  '[Authaction] Loging in',
  props<{ data: AuthState }>()
);

export const logout = createAction(
  '[Authaction] Loging out',
  props<{ data: AuthState }>()
);

