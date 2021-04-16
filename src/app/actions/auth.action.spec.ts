import { AuthAction,Login,LoginError,LOGIN, LOGIN_ERROR} from './auth.action'
import { AuthState } from '../models/user.model'

describe('Login', () => {
    it('should create an instance', () => {
        let initialState:AuthState ={
            isAuthenticated: false,
            user:  null,
            errorMessage: null
        } 
      const action = new Login(initialState)
      expect(action).toBeTruthy();
      expect(action.type).toBe( LOGIN );
    });
});


describe('Login Error', () => {
    it('should create an instance', () => {
        let initialState:AuthState ={
            isAuthenticated: false,
            user:  null,
            errorMessage: null
        } 
      const action = new LoginError(initialState)
      expect(action).toBeTruthy();
      expect(action.type).toBe( LOGIN_ERROR );
    });
});