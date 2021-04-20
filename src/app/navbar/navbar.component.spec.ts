import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { reducers , metaReducers} from '../store';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [StoreModule.forRoot(reducers, { metaReducers })]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should change selected link',fakeAsync(
  //   ()=>{
  //     spyOn(component, 'activateLink')
  //     let linklist = fixture.debugElement.nativeElement.querySelectorAll('.nav-link')
  //     linklist[0].click()
  //     tick()
  //     fixture.detectChanges()
  //     fixture.whenStable().then(()=>{
  //       expect(component.activateLink).toHaveBeenCalled()
  //     })
  //     linklist[1].click()
  //     tick()
  //     fixture.detectChanges()
  //     fixture.whenStable().then(()=>{
  //       expect(component.activateLink).toHaveBeenCalled()
  //     })
  //   })
  // )

});
