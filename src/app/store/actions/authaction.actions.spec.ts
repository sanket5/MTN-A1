import * as Authaction from './authaction.actions';

describe('Store > Data > DataActions', () => {
    it('SHOULD create a login action', () => {
      const action = Authaction.login;
      expect(action.type).toEqual( '[Authaction] Loging in');
    });
});
describe('Store > Data > DataActions', () => {
    it('SHOULD create a logout action', () => {
      const action = Authaction.logout;
      expect(action.type).toEqual( '[Authaction] Loging out');
    });
});

describe('Store > Data > DataActions', () => {
    it('SHOULD create a login success action', () => {
      const action = Authaction.loginSuccess;
      expect(action.type).toEqual( '[Authaction] Login Success');
    });
});
describe('Store > Data > DataActions', () => {
    it('SHOULD create a login failure action', () => {
      const action = Authaction.loginError;
      expect(action.type).toEqual(  '[Authaction] Login failure' );
    });
});
