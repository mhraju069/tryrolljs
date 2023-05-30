'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../node_modules/tslib/tslib.es6.js');
var axios = require('axios');
var qs = require('qs');
var utils = require('./utils.js');
var types = require('./types.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var qs__namespace = /*#__PURE__*/_interopNamespace(qs);

var requestClientToken = function (_a) {
  var clientId = _a.clientId,
    clientSecret = _a.clientSecret,
    issuerUrl = _a.issuerUrl,
    scopes = _a.scopes;
  return tslib_es6.__awaiter(void 0, void 0, void 0, function () {
    var body, options, e_1;
    return tslib_es6.__generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 2,, 3]);
          body = {
            grant_type: types.GrantType.ClientCredentials,
            scope: scopes.join(' ') // a string with space seperated scopes
          };

          options = {
            method: 'POST',
            auth: {
              username: clientId,
              password: clientSecret
            },
            headers: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: qs__namespace.stringify(body),
            url: "".concat(issuerUrl, "/token")
          };
          return [4 /*yield*/, axios__default["default"](options)];
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

var requestClientUserToken = function (_a) {
  var issuerUrl = _a.issuerUrl,
    refreshToken = _a.refreshToken,
    code = _a.code,
    grantType = _a.grantType,
    redirectUri = _a.redirectUri,
    clientId = _a.clientId,
    codeVerifier = _a.codeVerifier,
    clientSecret = _a.clientSecret;
  return tslib_es6.__awaiter(void 0, void 0, void 0, function () {
    var body, options, e_2;
    return tslib_es6.__generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 2,, 3]);
          body = {
            code: code,
            refresh_token: refreshToken,
            grant_type: grantType,
            redirect_uri: redirectUri,
            client_id: clientId,
            code_verifier: codeVerifier
          };
          options = {
            method: 'POST',
            headers: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: qs__namespace.stringify(body),
            url: "".concat(issuerUrl, "/token"),
            auth: {
              username: clientId,
              password: clientSecret
            }
          };
          return [4 /*yield*/, axios__default["default"](options)];
        case 1:
          return [2 /*return*/, _b.sent()];
        case 2:
          e_2 = _b.sent();
          throw e_2;
        case 3:
          return [2 /*return*/];
      }
    });
  });
};

var requestToken = function (_a) {
  var issuerUrl = _a.issuerUrl,
    refreshToken = _a.refreshToken,
    code = _a.code,
    grantType = _a.grantType,
    redirectUri = _a.redirectUri,
    clientId = _a.clientId,
    codeVerifier = _a.codeVerifier;
  return tslib_es6.__awaiter(void 0, void 0, void 0, function () {
    var body, options, e_3;
    return tslib_es6.__generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 2,, 3]);
          body = {
            code: code,
            refresh_token: refreshToken,
            grant_type: grantType,
            redirect_uri: redirectUri,
            client_id: clientId,
            code_verifier: codeVerifier
          };
          options = {
            method: 'POST',
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              origin: 'http://localhost:8001' // TODO try remove
            },

            data: qs__namespace.stringify(body),
            url: "".concat(issuerUrl, "/token")
          };
          return [4 /*yield*/, axios__default["default"](options)];
        case 1:
          return [2 /*return*/, _b.sent()];
        case 2:
          e_3 = _b.sent();
          throw e_3;
        case 3:
          return [2 /*return*/];
      }
    });
  });
};

var getLogInUrl = function (_a) {
  var clientId = _a.clientId,
    redirectUrl = _a.redirectUrl,
    scopes = _a.scopes,
    issuerUrl = _a.issuerUrl,
    codeChallenge = _a.codeChallenge;
  var params = {
    client_id: clientId,
    redirect_uri: redirectUrl,
    scopes: scopes,
    response_type: 'code',
    response_mode: 'query',
    state: utils.getRandomString(),
    code_challenge: codeChallenge,
    code_challenge_method: 'S256'
  };
  return "".concat(issuerUrl, "/auth?").concat(qs__namespace.stringify(params, {
    arrayFormat: 'comma'
  }));
};
var getLogOutUrl = function (_a) {
  var issuerUrl = _a.issuerUrl,
    redirectUrl = _a.redirectUrl,
    idToken = _a.idToken;
  var url = "".concat(issuerUrl, "/sessions/logout?post_logout_redirect_uri=").concat(redirectUrl, "&state=").concat(utils.getRandomString(), "&id_token_hint=").concat(idToken);
  return url;
};

exports.getLogInUrl = getLogInUrl;
exports.getLogOutUrl = getLogOutUrl;
exports.requestClientToken = requestClientToken;
exports.requestClientUserToken = requestClientUserToken;
exports.requestToken = requestToken;
