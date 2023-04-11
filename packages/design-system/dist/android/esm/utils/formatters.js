var commafy = function (n, digits) {
  if (digits === void 0) {
    digits = 2;
  }
  var fallback = 0;
  if (!n) return fallback.toFixed(digits);
  var handleOutput = function (num) {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    });
  };
  if (typeof n === 'string') {
    return handleOutput(Number(n));
  }
  return handleOutput(n);
};
var truncateText = function (str, len) {
  if (str.length < len) return str;
  return "".concat(str.substring(0, len), "...");
};

export { commafy, truncateText };
