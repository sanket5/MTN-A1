import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import * as authAction from '../actions/authaction.actions'
import { mergeMap, map } from 'rxjs/operators'
import { User }from 'src/app/models/user.model'



@Injectable()
export class AutheffectEffects {

  sendLoginStatus$ = createEffect(() =>{
    return this.actions$.pipe(
      ofType(authAction.sendUserData),
      mergeMap((user) =>
        this.authService
          .sendUserLoginStatus(user.data)
          .pipe(
            map(data =>
              authAction.sendUserData({ data: data})
            ),
          ))
      )}
  );

  constructor(private actions$: Actions, private authService: AuthService) {}

}
