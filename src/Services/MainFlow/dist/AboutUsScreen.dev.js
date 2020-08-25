"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHistoryEvents = void 0;

var _Fetching = _interopRequireDefault(require("@Utilities/Fetching"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getHistoryEvents = function getHistoryEvents() {
  return (0, _Fetching["default"])('/history_years');
};

exports.getHistoryEvents = getHistoryEvents;