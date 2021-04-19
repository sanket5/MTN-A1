import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { State } from 'src/app/store/index';
import { logout } from '../store/actions/authaction.actions';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  appState: AuthState;
  showData = false;

  constructor(private store: Store<State>, private router: Router) {
    this.store.select('authreducer')
    .subscribe(d => {
      this.appState = d;
      if (this.appState.user){
        this.showData = true;
      }
    });
  }

  ngOnInit(): void{
  }


  logOut(): void{
    const payload: AuthState = {
      isAuthenticated : false,
      errorMessage: null,
      user : null
    };
    this.store.dispatch(logout({data: payload}));
    this.router.navigate(['login']);
  }

}
