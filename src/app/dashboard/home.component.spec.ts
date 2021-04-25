import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { reducers, metaReducers } from '../store/index';
import { Store, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { State } from 'src/app/store/index';
import {Location} from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  // let store: Store<State>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [StoreModule.forRoot(reducers, { metaReducers }),
        RouterTestingModule,
        AppRoutingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    // store = TestBed.get(store)
    router = TestBed.inject(Router);
    fixture.detectChanges();

  });
  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should clear current state', ()=>{
  //   component.logOut()
  //   fixture.detectChanges()
  //   store.select('authreducer').subscribe(res=>{
  //       res.isAuthenticated == false`
  //   })

  // })



});
