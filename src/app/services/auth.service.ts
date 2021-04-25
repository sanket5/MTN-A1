import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { Action } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(payload): Observable<any>{
    const loginSer = new Observable<Action>((obs) => {
      setTimeout(() => {
        obs.next(payload);
      }, 1000);
    });
    return loginSer;
  }

  sendUserLoginStatus(user: User): Observable<User>{
    return of(user);
  }



}
