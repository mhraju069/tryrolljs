import { __awaiter, __generator } from './node_modules/tslib/tslib.es6.js';
import axios from 'axios';
import { buildQueryString } from './utils.js';

var requestToken = function (_a) {
  var issuerUrl = _a.issuerUrl,
    refreshToken = _a.refreshToken,
    code = _a.code,
    grantType = _a.grantType,
    redirectUri = _a.redirectUri,
    clientId = _a.clientId;
  return __awaiter(void 0, void 0, void 0, function () {
    var queryString, e_1;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 2,, 3]);
          queryString = buildQueryString({
            code: code,
            refresh_token: refreshToken,
            grant_type: grantType,
            redirect_uri: redirectUri,
            client_id: clientId
          });
          return [4 /*yield*/, axios.post("".concat(issuerUrl, "/token?").concat(queryString), undefined, {
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

export { requestToken };
