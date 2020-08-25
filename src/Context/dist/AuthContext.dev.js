"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = exports.Provider = void 0;

var _createDataContext2 = _interopRequireDefault(require("./createDataContext"));

var _AuthServices = require("@Services/AuthServices");

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var authReducer = function authReducer(state, action) {
  switch (action.type) {
    case "signin":
      return {
        token: true
      };

    case "login":
      return {
        token: true
      };

    case "questionFlow":
      return {
        token: true,
        QuestionsFlow: action.payload
      };

    case "pyamentFlow":
      return {
        token: true,
        PaymentFlow: action.payload
      };

    case "change_pdf":
      return _objectSpread({}, state, {
        pdf: action.payload
      });

    default:
      return state;
  }
};

var loginToken = function loginToken(dispatch) {
  return function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: 'login'
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

var tryLocalSignin = function tryLocalSignin(dispatch) {
  return function _callee2() {
    var token;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_reactNative.AsyncStorage.getItem('token'));

          case 2:
            token = _context2.sent;

            if (token) {
              dispatch({
                type: 'signin',
                payload: token
              });
            } else {
              console.log("something went wrong with us");
            }

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

var setQuestionFlow = function setQuestionFlow(dispatch) {
  return function (flowNumber) {
    dispatch({
      type: 'questionFlow',
      payload: flowNumber
    });
    console.log(flowNumber);
  };
};

var setPyamentFlow = function setPyamentFlow(dispatch) {
  return function (flowNumber) {
    dispatch({
      type: 'pyamentFlow',
      payload: flowNumber
    });
    console.log(flowNumber);
  };
};

var changePdf = function changePdf(dispatch) {
  return function (data) {
    dispatch({
      type: 'change_pdf',
      payload: data
    });
  };
};

var _createDataContext = (0, _createDataContext2["default"])(authReducer, {
  loginToken: loginToken,
  setQuestionFlow: setQuestionFlow,
  setPyamentFlow: setPyamentFlow,
  tryLocalSignin: tryLocalSignin,
  changePdf: changePdf
}, {
  token: false,
  QuestionsFlow: 0,
  PaymentFlow: 0,
  pdf: null
}),
    Provider = _createDataContext.Provider,
    Context = _createDataContext.Context;

exports.Context = Context;
exports.Provider = Provider;