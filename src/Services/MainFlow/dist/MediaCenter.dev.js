"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaCenter = void 0;

var _Fetching = _interopRequireDefault(require("@Utilities/Fetching"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MediaCenter = function MediaCenter() {
  return (0, _Fetching["default"])('/photoIndex');
};

exports.MediaCenter = MediaCenter;