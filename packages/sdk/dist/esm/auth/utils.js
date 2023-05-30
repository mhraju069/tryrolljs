import { __awaiter, __generator } from '../node_modules/tslib/tslib.es6.js';
import sha256 from 'crypto-js/sha256';
import Base64Url from 'crypto-js/enc-base64url';

var isLastUpdateTimestampExpired = function (lastUpdateTimestamp, expirationInSeconds) {
  if (expirationInSeconds === void 0) {
    expirationInSeconds = 0;
  }
  if (!lastUpdateTimestamp) {
    return true;
  }
  var now = new Date();
  var expirationInMiliseconds = expirationInSeconds * 1000;
  return now.getTime() - lastUpdateTimestamp >= expirationInMiliseconds;
};
var getRandomString = function (minLength) {
  if (minLength === void 0) {
    minLength = 16;
  }
  var getFiveRandomChars = function () {
    return Math.random().toString(36).slice(-5);
  };
  return Array(Math.round(minLength / 5)).fill(0).reduce(function (acc) {
    return acc + getFiveRandomChars();
  }, '');
};
var pkceChallengeFromVerifier = function (value) {
  return __awaiter(void 0, void 0, void 0, function () {
    var hash;
    return __generator(this, function (_a) {
      hash = sha256(value);
      return [2 /*return*/, Base64Url.stringify(hash)];
    });
  });
};
var safeJsonParse = function (value) {
  try {
    return JSON.parse(value);
  } catch (e) {
    return undefined;
  }
};

export { getRandomString, isLastUpdateTimestampExpired, pkceChallengeFromVerifier, safeJsonParse };
