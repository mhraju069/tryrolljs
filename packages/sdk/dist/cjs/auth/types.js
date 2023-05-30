'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.GrantType = void 0;
(function (GrantType) {
  GrantType["AuthorizationCode"] = "authorization_code";
  GrantType["RefreshToken"] = "refresh_token";
  GrantType["ClientCredentials"] = "client_credentials";
})(exports.GrantType || (exports.GrantType = {}));
exports.ScopeType = void 0;
(function (ScopeType) {
  ScopeType["Offline"] = "offline";
  ScopeType["ReadTx"] = "read-tx";
  ScopeType["Masquerade"] = "masquerade";
})(exports.ScopeType || (exports.ScopeType = {}));
