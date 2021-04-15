import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should display success message after valid login details', ()=>{
  //   component.isSubmitted = true;
  //   let compiled = fixture.debugElement.nativeElement
  //   fixture.detectChanges()
  //   expect(compiled.querySelector('.login_success span').textContent) .toContain('Data Submitted Successfully')
  // })

  // it('should alert validation error for email and password',()=>{
  //   component.loginForm.controls.email.setValue('wrongEmail')
  //   component.loginForm.controls.password.setValue('pass')
  //   let compiled = fixture.debugElement.nativeElement
  //   fixture.detectChanges()
  //   let emailErr = compiled.querySelector('#emailErr').textContent
  //   let passErr = compiled.querySelector('#passErr').textContent
  //   expect( emailErr.toContain('Must be a valid Email') && passErr.toContain('Invalid Password, Must have 6-20 characters') )

  // })

});
