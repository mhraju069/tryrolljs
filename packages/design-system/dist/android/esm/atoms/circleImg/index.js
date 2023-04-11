import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { Platform, Image, View } from 'react-native';
import BoringAvatar from 'boring-avatars';
import { Avatar as Avatar$1 } from 'native-base';
import { makeStyles } from '../../styles/utils.js';
import '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import '../../styles/container.js';

var Avatar = Platform.select({
  web: function (_a) {
    var size = _a.size,
      color = _a.color;
    return jsx(BoringAvatar, {
      size: size,
      variant: "marble",
      colors: color
    });
  },
  default: function (_a) {
    var size = _a.size,
      color = _a.color;
    return jsx(Avatar$1, {
      style: {
        width: size,
        height: size
      },
      color: color
    });
  }
});
var styles = makeStyles({
  borderRadius: {
    borderRadius: 100
  },
  bg: {
    backgroundColor: 'grey'
  }
});
var DEFAULT_CIRCLE_IMG_SIZE = 48;
var CircleImg = function (_a) {
  var _b = _a.size,
    size = _b === void 0 ? DEFAULT_CIRCLE_IMG_SIZE : _b,
    style = _a.style,
    uri = _a.uri,
    color = _a.color;
  if (uri) return jsx(Image, {
    source: {
      uri: uri
    },
    style: [styles.borderRadius, styles.bg, {
      height: size,
      width: size
    }, style]
  });
  return jsx(View, __assign({
    style: [styles.borderRadius, style]
  }, {
    children: jsx(Avatar, {
      size: size,
      color: color
    })
  }));
};

export { CircleImg, DEFAULT_CIRCLE_IMG_SIZE };
