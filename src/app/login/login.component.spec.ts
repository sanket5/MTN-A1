import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { reducers , metaReducers} from '../store/index';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, ReactiveFormsModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        RouterTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display success message after valid login details', () => {
    component.isSubmitted = true;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('.login_success span').textContent) .toContain('Data Submitted Successfully');
  });

  it('should create a login form', () => {
    component.createForm();
    expect(component.loginForm).toBeTruthy();
  });

  it('should alert validation error on login', () => {
    component.loginForm.controls.email.setValue('wrongEmail');
    component.loginForm.controls.password.setValue('pass');
    component.onLogin();
    fixture.detectChanges();
    expect(component.emailErr).toBeTruthy();
    expect(component.passwordErr).toBeTruthy();

    component.loginForm.controls.email.setValue('email@email.com');
    component.loginForm.controls.password.setValue('pass');
    component.onLogin();
    fixture.detectChanges();
    expect(component.emailErr).toBeFalsy();
    expect(component.passwordErr).toBeTruthy();

    component.loginForm.controls.email.setValue('wrongEmail');
    component.loginForm.controls.password.setValue('password1');
    component.onLogin();
    fixture.detectChanges();
    expect(component.emailErr).toBeTruthy();
    expect(component.passwordErr).toBeFalsy();
  });

  it('should display alert validation error on login', () => {
    component.loginForm.controls.email.setValue('wrongEmail');
    component.loginForm.controls.password.setValue('pass');
    const compiled = fixture.debugElement.nativeElement;
    component.onLogin();
    fixture.detectChanges();
    const emailErr = compiled.querySelector('#emailErr').textContent;
    const passErr = compiled.querySelector('#passErr').textContent;
    expect(emailErr).toBe('Must be a valid Email');
    expect(passErr).toBe('Invalid Password, Must have 6-20 characters');
  });


  it('should not validate login', () => {
    component.loginForm.controls.email.setValue('emailom');
    component.loginForm.controls.password.setValue('pass');
    component.onLogin();
    fixture.detectChanges();
    expect(component.isSubmitted).toBeFalsy();
  });

  it('should have get controls functions', () => {
  expect(component.email).toBeTruthy();
  expect(component.password).toBeTruthy();

});

  it('should navigate to dashboard after successfull log in', fakeAsync (() => {
  spyOn(router, 'navigate').and.stub();
  component.loginForm.controls.email.setValue('email@email.com');
  component.loginForm.controls.password.setValue('passworhgfcd');
  component.onLogin();
  tick(2000);
  fixture.detectChanges();
  expect(router.navigate).toHaveBeenCalledWith(['dashboard']);
}) );








});
