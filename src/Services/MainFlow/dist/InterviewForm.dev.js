"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterviewFormPost = void 0;

var _Fetching = _interopRequireDefault(require("@Utilities/Fetching"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InterviewFormPost = function InterviewFormPost(body) {
  return (0, _Fetching["default"])("/interviewCreate", 'post', body);
};

exports.InterviewFormPost = InterviewFormPost;