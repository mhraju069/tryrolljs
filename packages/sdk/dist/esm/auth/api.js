import { __awaiter, __generator } from '../node_modules/tslib/tslib.es6.js';
import axios from 'axios';
import * as qs from 'qs';
import { getRandomString } from './utils.js';
import { GrantType } from './types.js';

var requestClientToken = function (_a) {
  var clientId = _a.clientId,
    clientSecret = _a.clientSecret,
    issuerUrl = _a.issuerUrl,
    scopes = _a.scopes;
  return __awaiter(void 0, void 0, void 0, function () {
    var body, options, e_1;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 2,, 3]);
          body = {
            grant_type: GrantType.ClientCredentials,
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
            data: qs.stringify(body),
            url: "".concat(issuerUrl, "/token")
          };
          return [4 /*yield*/, axios(options)];
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
  return __awaiter(void 0, void 0, void 0, function () {
    var body, options, e_2;
    return __generator(this, function (_b) {
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
            data: qs.stringify(body),
            url: "".concat(issuerUrl, "/token"),
            auth: {
              username: clientId,
              password: clientSecret
            }
          };
          return [4 /*yield*/, axios(options)];
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
  return __awaiter(void 0, void 0, void 0, function () {
    var body, options, e_3;
    return __generator(this, function (_b) {
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

            data: qs.stringify(body),
            url: "".concat(issuerUrl, "/token")
          };
          return [4 /*yield*/, axios(options)];
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
    state: getRandomString(),
    code_challenge: codeChallenge,
    code_challenge_method: 'S256'
  };
  return "".concat(issuerUrl, "/auth?").concat(qs.stringify(params, {
    arrayFormat: 'comma'
  }));
};
var getLogOutUrl = function (_a) {
  var issuerUrl = _a.issuerUrl,
    redirectUrl = _a.redirectUrl,
    idToken = _a.idToken;
  var url = "".concat(issuerUrl, "/sessions/logout?post_logout_redirect_uri=").concat(redirectUrl, "&state=").concat(getRandomString(), "&id_token_hint=").concat(idToken);
  return url;
};

export { getLogInUrl, getLogOutUrl, requestClientToken, requestClientUserToken, requestToken };
