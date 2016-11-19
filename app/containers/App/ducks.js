import EasyActions from 'redux-easy-actions';
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

const { Actions, Constants } = EasyActions({
  LOGIN(type)  {
    return {type};
  },
  LOGIN_SUCCESS(type, payload) {
    return {type, payload};
  },
  LOGIN_ERROR(type, error) {
    return {type, error};
  },
  LOGOUT(type) {
    return {type};
  },
  REQUEST_TOKEN(type, code) {
    return {type, code};
  },
  REQUEST_TOKEN_SUCCESS(type, payload) {
    return {type, payload};
  },
  REQUEST_TOKEN_ERROR(type, error) {
    return {type, error};
  },
});

const initialState = fromJS({
  user: {},
  error: false,
  loading: false,
  token: false,
  code: false,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.LOGIN:
      return state.set('loading', true);

    case Constants.LOGIN_SUCCESS:
      const { code } = action.payload;
      return state.set('code', code)
                  .set('loading', false);

    case Constants.LOGIN_ERROR:
      return state.set('error', action.error)
                  .set('loading', false);

    case Constants.LOGOUT:
      localStorage.setItem('accessToken', "");
      localStorage.setItem('user', "");
      return state;

    case Constants.REQUEST_TOKEN:
      return state.set('loading', true)
                  .set('user', {});

    case Constants.REQUEST_TOKEN_SUCCESS:
      const { token, user } = action.payload;
      localStorage.setItem('accessToken', token);
      localStorage.setItem('user', user);

      return state.set('user', user)
                  .set('token', token)
                  .set('loading', false);

    case Constants.REQUEST_TOKEN_ERROR:
      return state.set('error', action.error)
                  .set('loading', false);
    default:
      return state;
  }
}

/* selector */
const selectAppDomain = () => state => state.get('app');
const selectApp = () => createSelector(
  selectAppDomain(),
  (substate) => substate.toJS()
);

export {
  selectApp,
  reducer,
  Actions,
  Constants,
};
