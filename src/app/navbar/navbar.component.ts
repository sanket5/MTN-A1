import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState, User } from '../models/user.model';
import { logout } from '../store/actions/authaction.actions';
import { State } from '../store/reducers/authreducer.reducer';
import { selectUser } from '../store/selectors/authselector.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<User>;
  constructor(private store: Store<State>, private router: Router) { }

  ngOnInit(): void {

    this.user = this.store.pipe(select(selectUser));
  }

  activateLink(e): void {
    if (document.querySelector('.active')){
      document.querySelector('.active').classList.remove('active');
      const el = e.target as HTMLElement;
      el.parentElement.className = 'active';
    }

  }

  logOut(): void{
    const payload: AuthState = {
      isAuthenticated : false,
      errorMessage: null,
      user : null
    };
    this.store.dispatch(logout({data: payload}));
    localStorage.removeItem('User');
    this.router.navigate(['login']);
  }

}
