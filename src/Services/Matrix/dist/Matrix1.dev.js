"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMatrix1 = void 0;

var _Fetching = _interopRequireDefault(require("@Utilities/Fetching"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getMatrix1 = function getMatrix1() {
  return (0, _Fetching["default"])("/auth/Matrix/1", 'post');
};

exports.getMatrix1 = getMatrix1;