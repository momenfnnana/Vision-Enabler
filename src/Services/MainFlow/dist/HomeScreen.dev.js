"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClients = exports.getVisionAndValues = void 0;

var _Fetching = _interopRequireDefault(require("@Utilities/Fetching"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getVisionAndValues = function getVisionAndValues() {
  return (0, _Fetching["default"])('/Vision_and_values');
};

exports.getVisionAndValues = getVisionAndValues;

var getClients = function getClients() {
  return (0, _Fetching["default"])('/clints');
};

exports.getClients = getClients;