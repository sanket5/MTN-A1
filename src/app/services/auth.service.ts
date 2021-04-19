import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(payload): Observable<any>{
    const loginSer = new Observable((obs) => {
      setTimeout(() => {
        payload.status = true;
        obs.next(payload);
      }, 1000);
    });
    return loginSer;
  }



}
