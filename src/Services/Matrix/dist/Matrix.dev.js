"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMatrix = void 0;

var _Fetching = _interopRequireDefault(require("@Utilities/Fetching"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getMatrix = function getMatrix(body) {
  return (0, _Fetching["default"])("/auth/Matrix/".concat(body), 'post', body);
};

exports.getMatrix = getMatrix;