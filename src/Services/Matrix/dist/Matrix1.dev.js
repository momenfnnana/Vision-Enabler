"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMatrix1 = void 0;

var _Fetching = _interopRequireDefault(require("@Utilities/Fetching"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getMatrix1 = function getMatrix1(body) {
  return (0, _Fetching["default"])("/auth/Matrix/".concat(body), 'post', body);
};

exports.getMatrix1 = getMatrix1;