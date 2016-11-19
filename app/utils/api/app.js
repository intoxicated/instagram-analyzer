import * as BaseAPI from './base';
import QueryString from 'query-string';

export function login() {
  return BaseAPI.fetch('/login', {
    method: 'GET',
  });
}

export function requestToken(code) {
  var params = {"code":code};

  let url = '/request_token';
  const qs = QueryString.stringify(params);
  if (qs.length > 0)
    url += `?${qs}`;

  return BaseAPI.fetch(url);
}
