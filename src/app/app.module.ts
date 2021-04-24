import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

import { StoreModule } from '@ngrx/store';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { UsernamePipe } from './pipes/username.pipe';
import { AutheffectEffects } from './store/effects/autheffect.effects';
// import { AutheffectEffects } from './store/effects/autheffect.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    UsernamePipe,
  ],
  imports: [
    BrowserModule,
    // StoreModule.forRoot({
    //   authReducer: authReducer
    // }),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // EffectsModule.forRoot([AutheffectEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
