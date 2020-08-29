"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuestions2 = exports.getQuestions = void 0;

var _Fetching = _interopRequireDefault(require("@Utilities/Fetching"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getQuestions = function getQuestions() {
  return (0, _Fetching["default"])("/auth/Questionnaire/1");
};

exports.getQuestions = getQuestions;

var getQuestions2 = function getQuestions2() {
  return (0, _Fetching["default"])("/auth/getA2");
};

exports.getQuestions2 = getQuestions2;