'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactNativeWeb = require('react-native-web');

var openLink = function (link, newTab) {
  if (newTab === void 0) {
    newTab = false;
  }
  if (reactNativeWeb.Platform.OS === 'web') {
    if (newTab) {
      window.open(link);
      return;
    }
    window.location.href = link;
    return;
  }
  reactNativeWeb.Linking.openURL(link);
};
var isLast = function (index, array) {
  return index === array.length - 1;
};

exports.isLast = isLast;
exports.openLink = openLink;
