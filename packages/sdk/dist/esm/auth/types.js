var GrantType;
(function (GrantType) {
  GrantType["AuthorizationCode"] = "authorization_code";
  GrantType["RefreshToken"] = "refresh_token";
  GrantType["ClientCredentials"] = "client_credentials";
})(GrantType || (GrantType = {}));
var ScopeType;
(function (ScopeType) {
  ScopeType["Offline"] = "offline";
  ScopeType["ReadTx"] = "read-tx";
  ScopeType["Masquerade"] = "masquerade";
})(ScopeType || (ScopeType = {}));

export { GrantType, ScopeType };
