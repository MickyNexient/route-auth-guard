import { it } from 'vitest';
import reducer, { types } from '../../src/reducers/AuthReducer';

describe('Auth Reducer', () => {
    it('returns the default state', () => {
        const state = { isAuthenticated: false }
        const action = { type: types.INIT }
        expect(reducer(state, action)).toEqual(state);
    });

    it('returns as authenticated', () => {
        const state = { isAuthenticated: false }
        const action = { type: types.LOGIN }
        expect(reducer(state, action)).toEqual({ isAuthenticated: true });
    });

    it('returns as unauthenticated', () => {
        const state = { isAuthenticated: true }
        const action = { type: types.LOGOUT }
        expect(reducer(state, action)).toEqual({ isAuthenticated: false });
    });
});