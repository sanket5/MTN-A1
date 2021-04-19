import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user data for successfull login', (done: DoneFn) => {
    const loginPayload = {
    email: 'email@email',
    password: 'qwerty123'
    };
    service.login(loginPayload).subscribe((res) => {
      expect(res).toBeTruthy();
      done();
    });
  });

});
