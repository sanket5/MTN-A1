import { Injectable } from '@angular/core';
import { act, Actions, createEffect, EffectsFeatureModule, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import * as authAction from '../actions/authaction.actions';
import { mergeMap, map, tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { merge, Observable, of } from 'rxjs';
import { Action, createAction } from '@ngrx/store';
import { AuthState } from 'src/app/models/user.model';


@Injectable()
export class AutheffectEffects {
  constructor(private actions$: Actions, private authService: AuthService,
              private router: Router
    ) {}

  $login = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction.login),
      // tap(() => {  console.log('in login effect');
      //  }),
       mergeMap((action) => {
        return this.authService.login(action.data).pipe(
          map(res => {
            localStorage.setItem('User', JSON.stringify(res.user));
            return authAction.loginSuccess({data: res});
          } ),
          catchError(error => of(authAction.loginError({data: error})) ),
          tap(() => console.log('effect finished'))
        );
       })
    )
  );

  $loginSucces = createEffect(() =>
       this.actions$.pipe(
         ofType(authAction.loginSuccess),
         tap(() => this.router.navigate(['home']) )
       ), { dispatch: false
      }
  );

}
