import { Component, OnInit } from '@angular/core';
import {  select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { State } from '../store/reducers/authreducer.reducer';
import { selectUser } from '../store/selectors/authselector.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<User>;
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.user = this.store.pipe(select(selectUser));
  }

  // activateLink(e){
  //   document.querySelector('.active').classList.remove('active')
  //   let el = e.target as HTMLElement
  //   el.parentElement.className = 'active'
  // }

}
