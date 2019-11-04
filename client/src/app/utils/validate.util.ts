import * as _ from 'lodash';

export class ValidateUtil {
  static isEmptyValue(value) {
    return _.isNil(value);
  }

  static isNotEmptyValue(value) {
    return !_.isNil(value);
  }
}
