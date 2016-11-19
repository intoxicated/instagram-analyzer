import request from 'utils/request';
import enviromentConfig from 'webpack-config-loader!../../enviromentConfig.js';

const API_URL =  'http://localhost:8080';//enviromentConfig.API_URL;

export function fetch(path, options={}) {
  return request(`${API_URL}${path}`, Object.assign({}, options, {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json; charset=UTF-8',
    },
  }));
}
