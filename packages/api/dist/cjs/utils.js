'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var buildQueryString = function (object) {
  return Object.keys(object).map(function (key) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(object[key]);
    return "".concat(encodedKey, "=").concat(encodedValue);
  }).join('&');
};

exports.buildQueryString = buildQueryString;
