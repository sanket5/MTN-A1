import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authreducerFeatureKey, State } from '../reducers/authreducer.reducer';

export const selectAuthState = createFeatureSelector<State>(
    authreducerFeatureKey
);


export const selectUser = createSelector(
    selectAuthState,
    (state: State) => {
        return state.user;
    }
);
