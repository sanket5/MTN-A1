import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) { }

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
      this.isSubmitted = true
      setTimeout(() => {
        this.isSubmitted = false
      }, 3000);
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

}
