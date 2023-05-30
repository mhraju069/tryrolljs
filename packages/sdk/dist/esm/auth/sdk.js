import { __awaiter, __generator, __assign } from '../node_modules/tslib/tslib.es6.js';
import { requestToken, getLogInUrl, getLogOutUrl } from './api.js';
import { NotEnoughDataToRefreshError, CodeVerifierMissingError, IdTokenMissingError } from './errors.js';
import { GrantType } from './types.js';
import { isLastUpdateTimestampExpired, getRandomString, pkceChallengeFromVerifier, safeJsonParse } from './utils.js';

var TOKEN_STORAGE_KEY = 'ROLL_AUTHSDK_TOKEN';
var CODE_STORAGE_KEY = 'ROLL_AUTHSDK_CODE';
var CODE_VERIFIER_STORAGE_KEY = 'ROLL_AUTHSDK_CODE_VERIFIER';
var SDK = /** @class */function () {
  function SDK(config, storage) {
    var _this = this;
    this.refreshTokens = function (force) {
      if (force === void 0) {
        force = false;
      }
      return __awaiter(_this, void 0, void 0, function () {
        var code, hasEnoughDataToRefresh, response;
        var _a, _b, _c;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              return [4 /*yield*/, this.storage.getItem(CODE_STORAGE_KEY)];
            case 1:
              code = _d.sent();
              hasEnoughDataToRefresh = !!((_a = this.token) === null || _a === void 0 ? void 0 : _a.refresh_token) && !!code;
              if (!!hasEnoughDataToRefresh) return [3 /*break*/, 3];
              return [4 /*yield*/, this.clear()];
            case 2:
              _d.sent();
              throw new NotEnoughDataToRefreshError();
            case 3:
              if (!this.isTokenExpired() && !force) {
                return [2 /*return*/];
              }

              _d.label = 4;
            case 4:
              _d.trys.push([4, 7,, 9]);
              return [4 /*yield*/, requestToken({
                issuerUrl: this.config.issuerUrl,
                grantType: GrantType.RefreshToken,
                redirectUri: (_b = this.config) === null || _b === void 0 ? void 0 : _b.redirectUrl,
                clientId: (_c = this.config) === null || _c === void 0 ? void 0 : _c.clientId,
                refreshToken: this.token.refresh_token,
                code: code
              })];
            case 5:
              response = _d.sent();
              return [4 /*yield*/, this.saveTokenFromResponse(response.data)];
            case 6:
              _d.sent();
              return [3 /*break*/, 9];
            case 7:
              _d.sent();
              return [4 /*yield*/, this.clear()];
            case 8:
              _d.sent();
              return [3 /*break*/, 9];
            case 9:
              return [2 /*return*/];
          }
        });
      });
    };

    this.requestAuthToken = function (code, codeVerifier) {
      return __awaiter(_this, void 0, void 0, function () {
        var args, data;
        var _a, _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              args = {
                issuerUrl: this.config.issuerUrl,
                grantType: GrantType.AuthorizationCode,
                redirectUri: (_a = this.config) === null || _a === void 0 ? void 0 : _a.redirectUrl,
                clientId: (_b = this.config) === null || _b === void 0 ? void 0 : _b.clientId,
                code: code,
                codeVerifier: codeVerifier
              };
              return [4 /*yield*/, requestToken(args)];
            case 1:
              data = _c.sent().data;
              return [2 /*return*/, data];
          }
        });
      });
    };
    this.redirectUri = function () {
      return _this.config.redirectUrl;
    };
    this.exchangeCodeForToken = function (code) {
      return __awaiter(_this, void 0, void 0, function () {
        var cachedCodeVerifier, resp;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (this.getAccessToken()) {
                return [2 /*return*/];
              }

              return [4 /*yield*/, this.storage.getItem(CODE_VERIFIER_STORAGE_KEY)];
            case 1:
              cachedCodeVerifier = _a.sent();
              if (!cachedCodeVerifier) {
                throw new CodeVerifierMissingError();
              }
              _a.label = 2;
            case 2:
              _a.trys.push([2, 6,, 8]);
              return [4 /*yield*/, this.requestAuthToken(code, cachedCodeVerifier)];
            case 3:
              resp = _a.sent();
              return [4 /*yield*/, this.setCode(code)];
            case 4:
              _a.sent();
              return [4 /*yield*/, this.saveTokenFromResponse(resp)];
            case 5:
              _a.sent();
              return [3 /*break*/, 8];
            case 6:
              _a.sent();
              return [4 /*yield*/, this.clear()];
            case 7:
              _a.sent();
              return [3 /*break*/, 8];
            case 8:
              return [2 /*return*/];
          }
        });
      });
    };

    this.saveTokenFromResponse = function (data) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!data.error) return [3 /*break*/, 2];
              return [4 /*yield*/, this.clear()];
            case 1:
              _a.sent();
              throw new Error(data.error);
            case 2:
              return [4 /*yield*/, this.setToken(__assign(__assign({}, data), {
                last_update_at: new Date().getTime()
              }))];
            case 3:
              _a.sent();
              _a.label = 4;
            case 4:
              return [2 /*return*/];
          }
        });
      });
    };

    this.restoreTokenFromCache = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var cache;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4 /*yield*/, this.getCache()];
            case 1:
              cache = _a.sent();
              return [4 /*yield*/, Promise.all([cache.code && this.setCode(cache.code), cache.codeVerifier && this.setCodeVerifier(cache.codeVerifier), cache.token && this.setToken(cache.token)])];
            case 2:
              _a.sent();
              return [2 /*return*/];
          }
        });
      });
    };

    this.getCache = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var token, code, codeVerifier, parsedToken, cache;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4 /*yield*/, this.storage.getItem(TOKEN_STORAGE_KEY)];
            case 1:
              token = _a.sent();
              return [4 /*yield*/, this.storage.getItem(CODE_STORAGE_KEY)];
            case 2:
              code = _a.sent();
              return [4 /*yield*/, this.storage.getItem(CODE_VERIFIER_STORAGE_KEY)];
            case 3:
              codeVerifier = _a.sent();
              parsedToken = typeof token === 'string' ? safeJsonParse(token) : token;
              cache = {
                token: parsedToken,
                code: code,
                codeVerifier: codeVerifier
              };
              return [2 /*return*/, cache];
          }
        });
      });
    };
    this.clear = function () {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4 /*yield*/, Promise.all([this.setToken, this.setCode, this.setCodeVerifier].map(function (fn) {
                return fn(undefined);
              }))];
            case 1:
              _a.sent();
              return [2 /*return*/];
          }
        });
      });
    };

    this.isTokenExpired = function () {
      var _a, _b;
      return isLastUpdateTimestampExpired((_a = _this.token) === null || _a === void 0 ? void 0 : _a.last_update_at, (_b = _this.token) === null || _b === void 0 ? void 0 : _b.expires_in);
    };
    this.getAccessToken = function () {
      var _a;
      return (_a = _this.token) === null || _a === void 0 ? void 0 : _a.access_token;
    };
    this.getIdToken = function () {
      var _a;
      return (_a = _this.token) === null || _a === void 0 ? void 0 : _a.id_token;
    };
    this.getRefreshToken = function () {
      var _a;
      return (_a = _this.token) === null || _a === void 0 ? void 0 : _a.refresh_token;
    };
    this.getExpiresIn = function () {
      var _a;
      return (_a = _this.token) === null || _a === void 0 ? void 0 : _a.expires_in;
    };
    this.getError = function () {
      var _a;
      return (_a = _this.token) === null || _a === void 0 ? void 0 : _a.error;
    };
    this.getConfig = function () {
      return _this.config;
    };
    this.getLogInUrl = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var minVerifierLength, codeVerifier, codeChallenge, loginUrl;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              minVerifierLength = 43;
              codeVerifier = getRandomString(minVerifierLength);
              return [4 /*yield*/, pkceChallengeFromVerifier(codeVerifier)];
            case 1:
              codeChallenge = _a.sent();
              return [4 /*yield*/, this.setCodeVerifier(codeVerifier)];
            case 2:
              _a.sent();
              loginUrl = getLogInUrl(__assign(__assign({}, this.config), {
                codeChallenge: codeChallenge
              }));
              return [2 /*return*/, [loginUrl, codeVerifier]];
          }
        });
      });
    };
    this.getLogOutUrl = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var idToken, _a, issuerUrl, redirectUrl;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              idToken = this.getIdToken();
              if (!idToken) {
                throw new IdTokenMissingError();
              }
              _a = this.config, issuerUrl = _a.issuerUrl, redirectUrl = _a.logoutRedirectUrl;
              return [4 /*yield*/, this.clear()];
            case 1:
              _b.sent();
              return [2 /*return*/, getLogOutUrl({
                issuerUrl: issuerUrl,
                redirectUrl: redirectUrl,
                idToken: idToken
              })];
          }
        });
      });
    };
    this.setCode = function (code) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!code) return [3 /*break*/, 2];
              return [4 /*yield*/, this.storage.setItem(CODE_STORAGE_KEY, code)];
            case 1:
              _a.sent();
              return [3 /*break*/, 4];
            case 2:
              return [4 /*yield*/, this.storage.removeItem(CODE_STORAGE_KEY)];
            case 3:
              _a.sent();
              _a.label = 4;
            case 4:
              return [2 /*return*/];
          }
        });
      });
    };

    this.setCodeVerifier = function (codeVerifier) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!codeVerifier) return [3 /*break*/, 2];
              return [4 /*yield*/, this.storage.setItem(CODE_VERIFIER_STORAGE_KEY, codeVerifier)];
            case 1:
              _a.sent();
              return [3 /*break*/, 4];
            case 2:
              return [4 /*yield*/, this.storage.removeItem(CODE_VERIFIER_STORAGE_KEY)];
            case 3:
              _a.sent();
              _a.label = 4;
            case 4:
              return [2 /*return*/];
          }
        });
      });
    };

    this.setToken = function (token) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.token = token;
              if (!token) return [3 /*break*/, 2];
              return [4 /*yield*/, this.storage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(token))];
            case 1:
              _a.sent();
              return [3 /*break*/, 4];
            case 2:
              return [4 /*yield*/, this.storage.removeItem(TOKEN_STORAGE_KEY)];
            case 3:
              _a.sent();
              _a.label = 4;
            case 4:
              return [2 /*return*/];
          }
        });
      });
    };

    this.config = config;
    this.storage = storage;
  }
  return SDK;
}();

export { CODE_STORAGE_KEY, CODE_VERIFIER_STORAGE_KEY, TOKEN_STORAGE_KEY, SDK as default };
