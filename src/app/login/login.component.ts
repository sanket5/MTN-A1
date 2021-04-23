import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import {  User, AuthState } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { State } from 'src/app/store/index';
import { login } from '../store/actions/authaction.actions';
import { reducers, metaReducers } from '../store';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSubmitted = false;
  loginForm: FormGroup;

  passwordErr = false;
  emailErr = false;

  authState: Observable<AuthState[]>;

  constructor(private fb: FormBuilder, private store: Store<State>, private authService: AuthService,
              private router: Router
    ) {
   }

  ngOnInit(): void {
    this.createForm();
  }

  // Creating form for login
  createForm(): void{
    this.loginForm = this.fb.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  // get controlls
  get email(): AbstractControl { return this.loginForm.get('email'); }
  get password(): AbstractControl { return this.loginForm.get('password'); }


  onLogin(): void{
    this.emailErr = this.passwordErr = false;
    if (this.loginForm.valid){
      this.login(this.loginForm.value);
    }else{
      if (this.email.invalid && this.password.invalid){
        this.emailErr = this.passwordErr = true;
      }else if (this.email.invalid){
        this.emailErr = true;
      }
      else{
        this.passwordErr = true;
      }
    }
  }

  // Update app states as per the response
  login(payload): void{
    console.log('in login');

    this.authService.login(payload).subscribe((response) => {
      if (response.status === true){
        console.log('in true');
        const p: AuthState = {
          isAuthenticated : true,
          errorMessage: null,
          user : this.loginForm.value
        };
        this.store.dispatch(login({data: p})
        );
        this.router.navigate(['home']);
        this.isSubmitted = true;
        return true;
      }
      else{
        return false;
      }
    });
  }

}
