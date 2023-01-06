var buildQueryString = function (object) {
  return Object.keys(object).map(function (key) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(object[key]);
    return "".concat(encodedKey, "=").concat(encodedValue);
  }).join('&');
};

export { buildQueryString };
