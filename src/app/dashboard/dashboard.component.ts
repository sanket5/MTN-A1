import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState, User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { State } from 'src/app/store/index';
import { logout } from '../store/actions/authaction.actions';
import { selectUser } from '../store/selectors/authselector.selectors';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: Observable<User>
  showData = false;

  constructor(private store: Store<State>, private router: Router) {
  }

  ngOnInit(): void{
    this.user = this.store.pipe(select(selectUser))
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
