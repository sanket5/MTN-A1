import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AutheffectEffects } from './autheffect.effects';

describe('AutheffectEffects', () => {
  let actions$: Observable<any>;
  let effects: AutheffectEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AutheffectEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AutheffectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
