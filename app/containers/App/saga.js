import { delay } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  Actions,
  Constants,
} from './ducks';

import * as API from 'utils/api/app';

function handleHttpError(action) {
  const { error } = action;
  if (!error || !error.response || !error.response.status) {
    return false;
  }
  switch (error.response.status) {
    case 401:
    case 403:
      browserHistory.push('/');
      return true;
    case 500:
      //redirect to other path
      //or... put some action to handle in other reducer
      break;
  }
  return false;
}

export function* watchError () {
  while(true) {
    var action = yield take('*');
    if (action.type.indexOf("_ERROR") === -1) {
      continue;
    }
    if (handleHttpError(action)) {
      continue;
    }
  }
}

export function* watchLocationChange () {
  while (true) {
    const { payload } = yield take(LOCATION_CHANGE);
  }
}

export function* login() {
  const res = yield API.login();

  if(!res.err) {
    yield put(Actions.LOGIN_SUCCESS(res.data));
    window.location.assign(res.data.redirect_uri);
  } else {
    yield put(Actions.LOGIN_ERROR(res.err));
  }
}

export function* watchLogin() {
  while (true) {
    yield take(Constants.LOGIN);
    yield call(login);
  }
}

export function* logout() {

  const res = yield API.logout();
  if(!res.err) {
    yield put(Actions.LOGOUT_SUCCESS(res.data));
  } else {
    yield put(Actions.LOGOUT_ERROR(res.err));
  }
}

export function* watchLogout() {
  while (true) {
    yield take(Constants.LOGOUT);
    yield call(logout);
  }
}

export function* requestToken(code) {
  const res = yield API.requestToken(code);
  if(!res.err) {
    console.log(res.data);
    yield put(Actions.REQUEST_TOKEN_SUCCESS(res.data));
  } else {
    yield put(Actions.REQUEST_TOKEN_ERROR(res.err));
  }
}

export function* watchRequestToken() {
  while (true) {
    const { code } = yield take(Constants.REQUEST_TOKEN);
    yield call(requestToken, code);
  }
}

export default function* saga() {
  yield [
    watchError(),
    watchLogin(),
    //watchLogout(),
    watchRequestToken(),
    watchLocationChange(),
  ];
}
