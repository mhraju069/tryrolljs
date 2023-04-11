import { __assign, __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { Modal as Modal$1, View, Pressable } from 'native-base';
import { useWindowDimensions } from 'react-native';
import 'react';
import { LargeHeader, Body } from '../../atoms/typography/index.js';
import { useTheme } from '../../hooks/theme.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import { useModal } from '../../hooks/modal.js';
import '../../atoms/button/index.js';
import { white } from '../../styles/colors.js';
import { makeStyles } from '../../styles/utils.js';
import { margin } from '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import 'react-native-svg';
import '../../atoms/circleImg/index.js';
import '../../atoms/toast/index.js';
import '../../atoms/tooltip/index.js';
import '../../utils/web3.js';
import '@floating-ui/react-native';
import '../../atoms/input/index.js';
import SvgCloseCircle from '../../assets/svg/closeCircle.js';

var styles = makeStyles({
  closeButton: {
    position: 'absolute',
    zIndex: 1,
    right: 32,
    top: 24
  },
  content: {
    backgroundColor: white
  }
});
var Modal = function (props) {
  var modal = useModal();
  var _a = useWindowDimensions(),
    height = _a.height,
    width = _a.width;
  return jsx(Modal$1, __assign({
    onClose: modal.close,
    isOpen: modal.isOpen,
    _overlay: {
      style: {
        height: height,
        width: width
      }
    }
  }, props));
};
var ModalContent = function (props) {
  return jsx(Modal$1.Content, __assign({}, props, {
    style: [props.style, styles.content]
  }));
};
var ModalHeader = function (_a) {
  var style = _a.style,
    children = _a.children;
  return jsx(View, __assign({
    style: [style, padding.ph40, padding.pt24, padding.pb8]
  }, {
    children: jsx(LargeHeader, __assign({
      weight: "semiBold"
    }, {
      children: children
    }))
  }));
};
var ModalSubHeader = function (_a) {
  var style = _a.style,
    children = _a.children;
  var theme = useTheme();
  return jsx(View, __assign({
    style: [style, padding.ph40, padding.pb8]
  }, {
    children: jsx(Body, __assign({
      color: theme.text.secondary
    }, {
      children: children
    }))
  }));
};
var ModalBody = function (_a) {
  var style = _a.style,
    children = _a.children,
    rest = __rest(_a, ["style", "children"]);
  return jsx(View, __assign({
    style: [style, padding.ph40, padding.pv16]
  }, rest, {
    children: children
  }));
};
var ModalFooter = function (_a) {
  var style = _a.style,
    children = _a.children;
  return jsx(View, __assign({
    style: [style, container.row, margin.mlauto, padding.ph40, padding.pt16, padding.pb24]
  }, {
    children: children
  }));
};
var ModalCloseButton = function (_a) {
  var onPress = _a.onPress;
  return jsx(Pressable, __assign({
    style: styles.closeButton,
    onPress: onPress
  }, {
    children: jsx(SvgCloseCircle, {})
  }));
};
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.SubHeader = ModalSubHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.CloseButton = ModalCloseButton;

export { Modal };
