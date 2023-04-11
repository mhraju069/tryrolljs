import { Platform, Linking } from 'react-native-web';

var openLink = function (link, newTab) {
  if (newTab === void 0) {
    newTab = false;
  }
  if (Platform.OS === 'web') {
    if (newTab) {
      window.open(link);
      return;
    }
    window.location.href = link;
    return;
  }
  Linking.openURL(link);
};
var isLast = function (index, array) {
  return index === array.length - 1;
};

export { isLast, openLink };
