'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('./node_modules/tslib/tslib.es6.js');
var axios = require('axios');
var utils = require('./utils.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

var requestToken = function (_a) {
  var issuerUrl = _a.issuerUrl,
    refreshToken = _a.refreshToken,
    code = _a.code,
    grantType = _a.grantType,
    redirectUri = _a.redirectUri,
    clientId = _a.clientId;
  return tslib_es6.__awaiter(void 0, void 0, void 0, function () {
    var queryString, e_1;
    return tslib_es6.__generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 2,, 3]);
          queryString = utils.buildQueryString({
            code: code,
            refresh_token: refreshToken,
            grant_type: grantType,
            redirect_uri: redirectUri,
            client_id: clientId
          });
          return [4 /*yield*/, axios__default["default"].post("".concat(issuerUrl, "/token?").concat(queryString), undefined, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })];
        case 1:
          return [2 /*return*/, _b.sent()];
        case 2:
          e_1 = _b.sent();
          throw e_1;
        case 3:
          return [2 /*return*/];
      }
    });
  });
};

exports.requestToken = requestToken;
