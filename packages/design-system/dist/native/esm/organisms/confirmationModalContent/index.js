import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import 'native-base';
import 'react';
import '../../atoms/typography/index.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import 'react-native';
import { Button } from '../../atoms/button/index.js';
import { margin } from '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import '../../styles/container.js';
import 'react-native-svg';
import '../../atoms/circleImg/index.js';
import '../../atoms/toast/index.js';
import '../../atoms/tooltip/index.js';
import '../../utils/web3.js';
import '@floating-ui/react-native';
import '../../atoms/input/index.js';
import { Modal } from '../modal/index.js';

var ConfirmationModalContent = function (_a) {
  var title = _a.title,
    _b = _a.description,
    description = _b === void 0 ? '' : _b,
    confirmAction = _a.confirmAction,
    cancelAction = _a.cancelAction,
    children = _a.children;
  return jsx(Fragment, {
    children: jsxs(Modal.Content, {
      children: [jsx(Modal.CloseButton, {
        onPress: cancelAction.onPress
      }), jsx(Modal.Header, {
        children: title
      }), jsx(Modal.SubHeader, {
        children: description
      }), jsx(Modal.Body, {
        children: children
      }), jsxs(Modal.Footer, {
        children: [jsx(Button, {
          title: cancelAction.title,
          variant: "secondary",
          onPress: cancelAction.onPress,
          style: margin.mr16
        }), jsx(Button, {
          title: confirmAction.title,
          variant: "primary",
          onPress: confirmAction.onPress
        })]
      })]
    })
  });
};

export { ConfirmationModalContent };
