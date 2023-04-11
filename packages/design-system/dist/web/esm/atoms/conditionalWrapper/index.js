import { jsx } from 'react/jsx-runtime';
import { Fragment } from 'react';

var ConditionalWrapper = function (_a) {
  var condition = _a.condition,
    wrapper = _a.wrapper,
    children = _a.children;
  return condition ? wrapper(children) : jsx(Fragment, {
    children: children
  });
};

export { ConditionalWrapper };
