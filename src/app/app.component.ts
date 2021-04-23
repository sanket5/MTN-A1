import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { AuthState } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MTN App';

  constructor(private store: Store, private state: State<AuthState>){ }

  ngOnInit(): void{
    // this.isLoggedIn()
  }

  isLoggedIn(): void{
    console.log(this.state.value);

  }

}
