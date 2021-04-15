import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  loginForm:FormGroup

  ngOnInit(): void {
    this.createForm()
  }

  //Creating form for login
  createForm(){
    this.loginForm = this.fb.group({
      email:['',],
      password:['',]
    })
  }

  onLogin(){
    console.log(this.loginForm.value);
  }

}
