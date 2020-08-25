"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = exports.Provider = void 0;

var _createDataContext2 = _interopRequireDefault(require("./createDataContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var authReducer = function authReducer(state, action) {
  switch (action.type) {
    case "add-data":
      return {
        data: payload
      };

    case "change_pdf":
      return _objectSpread({}, state, {
        pdf: action.payload
      });

    default:
      return state;
  }
};

var login = function login(dispatch) {
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

var setQuestionFlow = function setQuestionFlow(dispatch) {
  return function (flowNumber) {
    dispatch({
      type: 'questionFlow',
      payload: flowNumber
    });
    console.log(flowNumber);
  };
};

var addData = function addData(dispatch) {
  return function (data) {
    dispatch({
      type: 'add-data',
      payload: data
    });
    console.log(flowNumber);
  };
};

var changePdf = function changePdf(dispatch) {
  return function (data) {
    dispatch({
      type: 'add-data',
      payload: data
    });
  };
};

var _createDataContext = (0, _createDataContext2["default"])(authReducer, {
  login: login,
  setQuestionFlow: setQuestionFlow,
  changePdf: changePdf
}, {
  data: [],
  pdf: null
}),
    Provider = _createDataContext.Provider,
    Context = _createDataContext.Context;

exports.Context = Context;
exports.Provider = Provider;