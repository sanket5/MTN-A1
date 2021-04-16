import { AuthAction,Login,LoginError,LOGIN, LOGIN_ERROR} from '../actions/auth.action'
import { authReducer,initialState } from './auth.reducer'
import { AuthState } from '../models/user.model'

describe('AuthReducer', () => {
    describe('Reducer handles unknown action', () => {
      it('should return the initial state on login error', () => {
        const action = new LoginError(initialState)
        const result = authReducer([initialState], action);        
        expect(result[0]).toEqual(initialState);
      });
      it('should return the current state', () => {
        let currentState: AuthState = {
            isAuthenticated: true,
            user: { email:"some@email", password:"sdaseads"},
            errorMessage: null
        }
        const action = new Login(currentState)
        const result = authReducer([currentState], action);
        expect(result[0]).toEqual(currentState)
      });
  
    });
  });