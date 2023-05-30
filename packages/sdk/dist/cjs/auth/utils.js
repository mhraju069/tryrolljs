'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../node_modules/tslib/tslib.es6.js');
var sha256 = require('crypto-js/sha256');
var Base64Url = require('crypto-js/enc-base64url');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var sha256__default = /*#__PURE__*/_interopDefaultLegacy(sha256);
var Base64Url__default = /*#__PURE__*/_interopDefaultLegacy(Base64Url);

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
  return tslib_es6.__awaiter(void 0, void 0, void 0, function () {
    var hash;
    return tslib_es6.__generator(this, function (_a) {
      hash = sha256__default["default"](value);
      return [2 /*return*/, Base64Url__default["default"].stringify(hash)];
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

exports.getRandomString = getRandomString;
exports.isLastUpdateTimestampExpired = isLastUpdateTimestampExpired;
exports.pkceChallengeFromVerifier = pkceChallengeFromVerifier;
exports.safeJsonParse = safeJsonParse;
