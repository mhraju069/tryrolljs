'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactNative = require('react-native');

var useScrollBlock = function () {
  var scroll = React.useRef(false);
  var blockScroll = function () {
    if (typeof document === 'undefined') return;
    var html = document.documentElement;
    var body = document.body;
    if (!body || !body.style || scroll.current) return;
    var scrollBarWidth = window.innerWidth - html.clientWidth;
    var bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue('padding-right')) || 0;
    /**
     * 1. Fixes a bug in iOS and desktop Safari whereby setting
     *    `overflow: hidden` on the html/body does not prevent scrolling.
     * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
     *    scroll if an `overflow-x` style is also applied to the body.
     */
    html.style.position = 'relative'; /* [1] */
    body.style.position = 'relative'; /* [1] */
    html.style.overflow = 'hidden'; /* [2] */
    body.style.overflow = 'hidden'; /* [2] */
    body.style.paddingRight = "".concat(bodyPaddingRight + scrollBarWidth, "px");
    scroll.current = true;
  };
  var allowScroll = function () {
    if (typeof document === 'undefined') return;
    var html = document.documentElement;
    var body = document.body;
    if (!body || !body.style || !scroll.current) return;
    html.style.position = '';
    html.style.overflow = '';
    body.style.position = '';
    body.style.overflow = '';
    body.style.paddingRight = '';
    scroll.current = false;
  };
  return [blockScroll, allowScroll];
};
var useModal = function () {
  var _a = React.useState(false),
    isOpen = _a[0],
    setIsOpen = _a[1];
  var _b = useScrollBlock(),
    blockScroll = _b[0],
    allowScroll = _b[1];
  var open = React.useCallback(function () {
    if (reactNative.Platform.OS === 'web') {
      blockScroll();
    }
    setIsOpen(true);
  }, [blockScroll]);
  var close = React.useCallback(function () {
    if (reactNative.Platform.OS === 'web') {
      allowScroll();
    }
    setIsOpen(false);
  }, [allowScroll]);
  var toggle = React.useCallback(function () {
    if (isOpen) return close();
    return open();
  }, [isOpen, open, close]);
  return {
    isOpen: isOpen,
    open: open,
    close: close,
    toggle: toggle
  };
};

exports.useModal = useModal;
