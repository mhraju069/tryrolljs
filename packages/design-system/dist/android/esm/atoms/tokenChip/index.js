import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { View } from 'react-native';
import { margin } from '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import { CircleImg } from '../circleImg/index.js';
import { Body } from '../typography/index.js';

var TokenChip = function (_a) {
  var symbol = _a.symbol,
    logo = _a.logo,
    _b = _a.size,
    size = _b === void 0 ? 24 : _b;
  return jsxs(View, __assign({
    style: [container.row, container.alignCenter]
  }, {
    children: [jsx(CircleImg, {
      size: size,
      uri: logo
    }), jsx(Body, __assign({
      style: margin.ml4
    }, {
      children: symbol
    }))]
  }));
};

export { TokenChip };
