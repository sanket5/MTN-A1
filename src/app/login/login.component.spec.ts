import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '../reducers/auth.reducer';
import { async } from '@angular/core/testing';


import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[FormsModule, ReactiveFormsModule,
        StoreModule.forRoot(authReducer)
      
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display success message after valid login details', ()=>{
    component.isSubmitted = true;
    let compiled = fixture.debugElement.nativeElement
    fixture.detectChanges()
    expect(compiled.querySelector('.login_success span').textContent) .toContain('Data Submitted Successfully')
  })

  it('should create a login form',()=>{
    component.createForm()
    expect(component.loginForm).toBeTruthy()
  })

  it('should alert validation error on login',()=>{
    component.loginForm.controls.email.setValue('wrongEmail')
    component.loginForm.controls.password.setValue('pass')
    component.onLogin()
    fixture.detectChanges()
    expect(component.emailErr).toBeTruthy()
    expect(component.passwordErr).toBeTruthy()

    component.loginForm.controls.email.setValue('email@email.com')
    component.loginForm.controls.password.setValue('pass')
    component.onLogin()
    fixture.detectChanges()
    expect(component.emailErr).toBeFalsy()
    expect(component.passwordErr).toBeTruthy()

    component.loginForm.controls.email.setValue('wrongEmail')
    component.loginForm.controls.password.setValue('password1')
    component.onLogin()
    fixture.detectChanges()
    expect(component.emailErr).toBeTruthy()
    expect(component.passwordErr).toBeFalsy()
  })

  it('should display alert validation error on login',()=>{
    component.loginForm.controls.email.setValue('wrongEmail')
    component.loginForm.controls.password.setValue('pass')
    let compiled = fixture.debugElement.nativeElement
    component.onLogin()
    fixture.detectChanges()
    let emailErr = compiled.querySelector('#emailErr').textContent
    let passErr = compiled.querySelector('#passErr').textContent
    expect(emailErr).toBe('Must be a valid Email')
    expect(passErr).toBe('Invalid Password, Must have 6-20 characters')
  })

  it('should validate login', fakeAsync(( )=>{
    let loginPayload = {
      email: 'email@email',
      password: 'qwerty123'
    }
    component.login(loginPayload)
    
    tick(2000);
    fixture.detectChanges()
      expect(component.isSubmitted).toBeTruthy()
    }))

  it('should not validate login',()=>{
    component.loginForm.controls.email.setValue('emailom')
    component.loginForm.controls.password.setValue('pass')
    component.onLogin()
    fixture.detectChanges()
    expect(component.isSubmitted).toBeFalsy()
  })

it('should have get controls functions', ()=>{
  expect(component.email).toBeTruthy()
  expect(component.password).toBeTruthy()

})








});
