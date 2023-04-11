'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactNative = require('react-native');

// Android has some issue while calculating the layout using `.measure`
// This hook is providing an onLayout handler to fix it
var useFloatingLayoutAndroidHandler = function (_a) {
  var x = _a.x,
    y = _a.y;
  var _b = React.useState([0, 0]),
    xy = _b[0],
    setXY = _b[1];
  var onLayout = React.useCallback(function (event) {
    var layout = event.nativeEvent.layout;
    setXY([layout.x, layout.y + layout.height]);
  }, []);
  return reactNative.Platform.select({
    android: {
      xy: xy,
      onLayout: onLayout
    },
    default: {
      xy: [x !== null && x !== void 0 ? x : 0, y !== null && y !== void 0 ? y : 0],
      onLayout: undefined
    }
  });
};

exports.useFloatingLayoutAndroidHandler = useFloatingLayoutAndroidHandler;
