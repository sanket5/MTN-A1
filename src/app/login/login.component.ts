import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import {  User, AuthState } from '../models/user.model'
import { AppState } from '../stores/app.state'
import * as AuthAction from '../actions/auth.action'
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  isSubmitted: boolean = false
  loginForm:FormGroup

  passwordErr:boolean = false
  emailErr: boolean = false

  authState : Observable<AuthState[]>

  constructor(private fb: FormBuilder, private store: Store<AppState>, private authService: AuthService) {
    this.authState = store.select('authState')
   }

  ngOnInit(): void {
    this.createForm()
  }

  //Creating form for login
  createForm(){
    this.loginForm = this.fb.group({
      email:['', [Validators.email]],
      password:['', [Validators.minLength(6), Validators.maxLength(20)]]
    })
  }

  //get controlls
  get email() { return this.loginForm.get('email')};
  get password() { return this.loginForm.get('password')};


  onLogin(){
    this.emailErr=this.passwordErr = false
    if (this.loginForm.valid){
      this.login(this.loginForm.value)
    }else{
      if(this.email.invalid && this.password.invalid){
        this.emailErr = this.passwordErr = true
      }else if (this.email.invalid){
        this.emailErr = true
      }
      else{
        this.passwordErr = true
      }
    }
  }

  //Update app states as per the response
  login(payload){
    return this.authService.login(payload).subscribe((response)=>{
      if (response.status == true){
        this.store.dispatch( new AuthAction.Login({
          isAuthenticated : true,
          user: this.loginForm.value,
          errorMessage: null
        }) )
        this.isSubmitted = true
        return true
      }
      else{
        this.store.dispatch( new AuthAction.LoginError({
          isAuthenticated : false,
          user: null,
          errorMessage: 'Login Error Occuce'
        }) )
        return false
      }
    })
  }
}
