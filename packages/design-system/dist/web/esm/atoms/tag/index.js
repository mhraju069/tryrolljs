import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { View } from 'react-native-web';
import '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import { Body } from '../typography/index.js';

var Tag = function (_a) {
  var title = _a.title,
    color = _a.color;
  return jsx(View, __assign({
    style: [container.borderRadius2XL, padding.p8, {
      backgroundColor: color
    }]
  }, {
    children: jsx(Body, {
      children: title
    })
  }));
};

export { Tag };
