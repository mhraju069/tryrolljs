'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactNative = require('react-native');

var openLink = function (link, newTab) {
  if (newTab === void 0) {
    newTab = false;
  }
  if (reactNative.Platform.OS === 'web') {
    if (newTab) {
      window.open(link);
      return;
    }
    window.location.href = link;
    return;
  }
  reactNative.Linking.openURL(link);
};
var isLast = function (index, array) {
  return index === array.length - 1;
};

exports.isLast = isLast;
exports.openLink = openLink;
