import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';

import { StoreModule } from '@ngrx/store'
import { authReducer } from '../app/reducers/auth.reducer'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      authReducer: authReducer
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
