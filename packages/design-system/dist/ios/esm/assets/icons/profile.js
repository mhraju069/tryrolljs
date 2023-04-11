import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgProfile = function SvgProfile(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 2.75a3.686 3.686 0 0 0-3.69 3.69 3.67 3.67 0 0 0 3.505 3.679 2.59 2.59 0 0 1 .362 0A3.686 3.686 0 0 0 12 2.75ZM6.81 6.44A5.186 5.186 0 0 1 12 1.25a5.193 5.193 0 0 1 5.19 5.19v.003c-.012 2.8-2.22 5.083-5.005 5.177a.758.758 0 0 1-.1-.004 1.076 1.076 0 0 0-.188 0 .762.762 0 0 1-.093.004A5.17 5.17 0 0 1 6.81 6.44ZM12.172 12.438c1.928 0 3.895.483 5.414 1.498 1.366.91 2.149 2.184 2.149 3.555 0 1.372-.783 2.648-2.148 3.562-1.524 1.02-3.493 1.507-5.422 1.507-1.929 0-3.897-.487-5.421-1.506-1.367-.91-2.15-2.184-2.15-3.555 0-1.372.783-2.648 2.149-3.562l.002-.002c1.529-1.014 3.499-1.498 5.427-1.498Zm-4.596 2.746c-1.054.706-1.481 1.559-1.481 2.315 0 .755.427 1.606 1.48 2.307h.002c1.226.82 2.887 1.254 4.588 1.254 1.7 0 3.362-.433 4.588-1.253 1.054-.706 1.482-1.56 1.482-2.316 0-.756-.427-1.606-1.48-2.307h-.002c-1.22-.815-2.879-1.246-4.58-1.246-1.702 0-3.366.43-4.597 1.246Z"
  })));
};

export { SvgProfile as default };
