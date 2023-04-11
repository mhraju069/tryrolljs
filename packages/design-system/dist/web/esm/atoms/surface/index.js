import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { View } from 'react-native-web';
import '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';

var Surface = function (_a) {
  var style = _a.style,
    children = _a.children;
  return jsx(View, __assign({
    style: [container.borderRadius, container.shadow, style]
  }, {
    children: children
  }));
};

export { Surface };
