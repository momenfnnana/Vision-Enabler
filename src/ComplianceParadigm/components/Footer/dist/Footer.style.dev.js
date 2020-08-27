"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constant = _interopRequireDefault(require("@Assets/Constant"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = _reactNative.StyleSheet.create({
  contianer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: _Constant["default"].white,
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    paddingVertical: "3%"
  },
  goback: {
    backgroundColor: _Constant["default"].white,
    borderColor: _Constant["default"].primary,
    borderWidth: 2,
    paddingVertical: "3%",
    paddingHorizontal: "7%",
    borderRadius: 50,
    marginBottom: "2%"
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  screenButton: {
    borderRadius: 20,
    margin: 5
  },
  nextButtonContainer: {
    backgroundColor: _Constant["default"].primary,
    paddingVertical: "3%",
    paddingHorizontal: "7%",
    borderRadius: 50,
    marginBottom: "2%"
  },
  next: {
    color: _Constant["default"].white,
    fontSize: 16
  }
});

var _default = styles;
exports["default"] = _default;