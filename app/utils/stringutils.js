import * as _ from 'lodash';

export function isBlank(str) {
  if(_.isNull(str) || _.isUndefined(str)) {
    return true;
  }

  return _.isEmpty(_.trim(str));
}

export function isPresent(str) {
  return !isBlank(str);
}
