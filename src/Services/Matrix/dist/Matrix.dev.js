"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postMatrixAnswers1 = exports.getMatrix = void 0;

var _Fetching = _interopRequireDefault(require("@Utilities/Fetching"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getMatrix = function getMatrix() {
  return (0, _Fetching["default"])("/auth/Matrix/1", 'post');
};

exports.getMatrix = getMatrix;

var postMatrixAnswers1 = function postMatrixAnswers1(body) {
  return (0, _Fetching["default"])("/auth/MatrixStor/1", 'post', body);
};

exports.postMatrixAnswers1 = postMatrixAnswers1;