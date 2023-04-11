import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useState, useCallback } from 'react';
import { Pressable, View } from 'native-base';
import '../../atoms/typography/index.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import 'react-native-web';
import '../../atoms/button/index.js';
import '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import '../../styles/container.js';
import 'react-native-svg';
import '../../atoms/circleImg/index.js';
import '../../atoms/toast/index.js';
import '@floating-ui/react-dom-interactions';
import '../../utils/web3.js';
import { Popover } from '../../atoms/popover/index.js';
import '../../atoms/input/index.js';

var Dropdown = function (_a) {
  var children = _a.children,
    open = _a.open,
    renderDropdown = _a.renderDropdown;
  var _b = useState(open),
    isOpen = _b[0],
    setIsOpen = _b[1];
  var renderReference = useCallback(function (_a) {
    var reference = _a.reference,
      getReferenceProps = _a.getReferenceProps;
    return jsx(Pressable, __assign({}, getReferenceProps(), {
      children: jsx(View, __assign({
        ref: reference
      }, {
        children: children
      }))
    }));
  }, [children]);
  return jsx(Popover, __assign({
    open: !!(isOpen || open),
    onOpenChange: setIsOpen,
    renderReference: renderReference
  }, {
    children: renderDropdown()
  }));
};

export { Dropdown };
