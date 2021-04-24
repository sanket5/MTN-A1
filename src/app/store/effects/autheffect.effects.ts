import { Injectable } from '@angular/core';
import { Actions, createEffect, EffectsFeatureModule, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import * as authAction from '../actions/authaction.actions';
import { mergeMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable()
export class AutheffectEffects {
  constructor(private actions$: Actions, private authService: AuthService,
              private router: Router
    ) {}



  login$ = createEffect(() => {
    console.log('in login effect');

    return this.actions$.pipe(
      ofType(authAction.login),
      tap( action => {
        console.log('in loin ffcr');
        localStorage.setItem('User', JSON.stringify(action.data));
        authAction.loginSuccess(action);
        this.router.navigate(['home']);
      })
      );
    });

    logout$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(authAction.logout),
        tap( action => {
          localStorage.removeItem('User');
          this.router.navigate(['login']);
          return false;
        } )
      );
    });


}
