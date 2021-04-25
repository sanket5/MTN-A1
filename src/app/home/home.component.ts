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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: Observable<User>;
  showData = false;

  constructor(private store: Store<State>, private router: Router) {
  }

  ngOnInit(): void{
    this.user = this.store.pipe(select(selectUser));
  }




}
