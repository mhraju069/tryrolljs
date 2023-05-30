import { __awaiter, __generator } from '../node_modules/tslib/tslib.es6.js';
import { requestClientUserToken, requestClientToken } from './api.js';
import { GrantType } from './types.js';
import { safeJsonParse } from './utils.js';

var TOKEN_STORAGE_KEY = 'ROLL_AUTHSDK_CLIENT_TOKEN';
var ClientSDK = /** @class */function () {
  function ClientSDK(config, storage) {
    var _this = this;
    this.issuerUrl = function () {
      return _this.config.issuerUrl;
    };
    this.getClientUserToken = function (code, codeVerifier, redirectUri) {
      return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4 /*yield*/, requestClientUserToken({
                issuerUrl: this.config.issuerUrl,
                clientId: this.config.clientId,
                clientSecret: this.config.clientSecret,
                code: code,
                codeVerifier: codeVerifier,
                grantType: GrantType.AuthorizationCode,
                redirectUri: redirectUri
              })];
            case 1:
              response = _a.sent();
              return [2 /*return*/, response];
          }
        });
      });
    };
    this.generateToken = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (this.getAccessToken()) {
                return [2 /*return*/];
              }

              return [4 /*yield*/, requestClientToken({
                issuerUrl: this.config.issuerUrl,
                clientId: this.config.clientId,
                clientSecret: this.config.clientSecret,
                scopes: this.config.scopes
              })];
            case 1:
              response = _a.sent();
              return [4 /*yield*/, this.saveTokenFromResponse(response.data)];
            case 2:
              _a.sent();
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
              return [4 /*yield*/, this.setToken(data)];
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
              return [4 /*yield*/, this.setToken(cache.token)];
            case 2:
              _a.sent();
              return [2 /*return*/];
          }
        });
      });
    };

    this.getCache = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var token, parsedToken, cache;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4 /*yield*/, this.storage.getItem(TOKEN_STORAGE_KEY)];
            case 1:
              token = _a.sent();
              parsedToken = typeof token === 'string' ? safeJsonParse(token) : undefined;
              cache = {
                token: parsedToken
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
              return [4 /*yield*/, Promise.all([this.setToken].map(function (fn) {
                return fn(undefined);
              }))];
            case 1:
              _a.sent();
              return [2 /*return*/];
          }
        });
      });
    };

    this.getAccessToken = function () {
      var _a;
      return (_a = _this.token) === null || _a === void 0 ? void 0 : _a.access_token;
    };
    this.getExpiresIn = function () {
      var _a;
      return (_a = _this.token) === null || _a === void 0 ? void 0 : _a.expires_in;
    };
    this.getError = function () {
      var _a;
      return (_a = _this.token) === null || _a === void 0 ? void 0 : _a.error;
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
  return ClientSDK;
}();

export { TOKEN_STORAGE_KEY, ClientSDK as default };
