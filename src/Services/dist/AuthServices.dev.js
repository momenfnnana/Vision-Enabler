"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activeAccount = exports.forgetPassword = exports.register = exports.login = void 0;

var _Fetching = _interopRequireDefault(require("@Utilities/Fetching"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var login = function login(body) {
  return (0, _Fetching["default"])("/auth/login", 'post', body);
};

exports.login = login;

var register = function register(body) {
  return (0, _Fetching["default"])("/auth/Register", 'post', body);
};

exports.register = register;

var forgetPassword = function forgetPassword(body) {
  return (0, _Fetching["default"])("/forgetPassword", 'post', body);
};

exports.forgetPassword = forgetPassword;

var activeAccount = function activeAccount(body) {
  return (0, _Fetching["default"])("/verify/".concat(body), 'post', body);
};

exports.activeAccount = activeAccount;