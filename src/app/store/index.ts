import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as authReducer from '../store/reducers/authreducer.reducer';

export interface State {

  [authReducer.authreducerFeatureKey]: authReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  [authReducer.authreducerFeatureKey]: authReducer.reducer

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
