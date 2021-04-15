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
    console.log(this.loginForm.value);
    if (this.loginForm.valid){
      this.isSubmitted = true
    }else{
      
    }
  }

}
