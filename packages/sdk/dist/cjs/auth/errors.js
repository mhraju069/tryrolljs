'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../node_modules/tslib/tslib.es6.js');

var NOT_ENOUGH_DATA_TO_REFRESH_ERROR_MESSAGE = 'Not enough data to refresh.';
var ID_TOKEN_MISSING_ERROR_MESSAGE = 'Id token is missing.';
var CODE_VERIFIER_MISSING_ERROR_MESSAGE = 'Code verifier is missing.';
var NotEnoughDataToRefreshError = /** @class */function (_super) {
  tslib_es6.__extends(NotEnoughDataToRefreshError, _super);
  function NotEnoughDataToRefreshError() {
    var _newTarget = this.constructor;
    var _this = _super.call(this, NOT_ENOUGH_DATA_TO_REFRESH_ERROR_MESSAGE) || this;
    Object.setPrototypeOf(_this, _newTarget.prototype);
    return _this;
  }
  return NotEnoughDataToRefreshError;
}(Error);
var IdTokenMissingError = /** @class */function (_super) {
  tslib_es6.__extends(IdTokenMissingError, _super);
  function IdTokenMissingError() {
    var _newTarget = this.constructor;
    var _this = _super.call(this, ID_TOKEN_MISSING_ERROR_MESSAGE) || this;
    Object.setPrototypeOf(_this, _newTarget.prototype);
    return _this;
  }
  return IdTokenMissingError;
}(Error);
var CodeVerifierMissingError = /** @class */function (_super) {
  tslib_es6.__extends(CodeVerifierMissingError, _super);
  function CodeVerifierMissingError() {
    var _newTarget = this.constructor;
    var _this = _super.call(this, CODE_VERIFIER_MISSING_ERROR_MESSAGE) || this;
    Object.setPrototypeOf(_this, _newTarget.prototype);
    return _this;
  }
  return CodeVerifierMissingError;
}(Error);

exports.CodeVerifierMissingError = CodeVerifierMissingError;
exports.IdTokenMissingError = IdTokenMissingError;
exports.NotEnoughDataToRefreshError = NotEnoughDataToRefreshError;
