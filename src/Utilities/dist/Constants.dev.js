"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var Constants = {
  apiUrl: 'https://visionenabler.dits.cloud/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'client_id': 4,
    'client_secret': 'rv58bWVxWLkPY3DjPvdZ9MFhodTSe4AUkRp9EWv7'
  }
};

_reactNative.AsyncStorage.getItem('accessToken').then(function _callee(accessToken) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (accessToken) {
            Constants.headers.Authorization = 'Bearer ' + accessToken;
          } // console.log(accessToken);


        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});

var _default = Constants;
exports["default"] = _default;