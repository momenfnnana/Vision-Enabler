"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = exports.Provider = void 0;

var _createDataContext2 = _interopRequireDefault(require("./createDataContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var authReducer = function authReducer(state, action) {
  switch (action.type) {
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

    case "matrix_questions":
      return _objectSpread({}, state, {
        MatrixQuestions: action.payload
      });

    case "matrix_answers":
      return _objectSpread({}, state, {
        MatrixAnswersArray: [].concat(_toConsumableArray(state.MatrixAnswersArray), [action.payload])
      });

    default:
      return state;
  }
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

var MatrixData = function MatrixData(dispatch) {
  return function _callee(data) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(dispatch({
              type: 'matrix_questions',
              payload: data
            }));

          case 2:
            console.log("questions from context", data);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

var MatrixAnswers = function MatrixAnswers(dispatch) {
  return function _callee2(data) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(dispatch({
              type: 'matrix_answers',
              payload: data
            }));

          case 2:
            console.log("answers from context", data);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

var _createDataContext = (0, _createDataContext2["default"])(authReducer, {
  setQuestionFlow: setQuestionFlow,
  setPyamentFlow: setPyamentFlow,
  changePdf: changePdf,
  MatrixData: MatrixData,
  MatrixAnswers: MatrixAnswers
}, {
  QuestionsFlow: 0,
  PaymentFlow: 0,
  pdf: null,
  MatrixQuestions: [],
  MatrixAnswersArray: []
}),
    Provider = _createDataContext.Provider,
    Context = _createDataContext.Context;

exports.Context = Context;
exports.Provider = Provider;