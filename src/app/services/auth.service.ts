import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(payload){
    const loginSer = Observable.create((obs)=>{
      setTimeout(() => {
        payload.status = true
        obs.next(payload)
      }, 1000);
    })
    return loginSer
  }

  

}
