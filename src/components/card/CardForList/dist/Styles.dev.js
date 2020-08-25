"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constant = _interopRequireDefault(require("@Assets/Constant"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = _reactNative.StyleSheet.create({
  card: {
    flexDirection: "row",
    alignSelf: "center",
    height: 200,
    width: "80%",
    backgroundColor: _Constant["default"].white,
    marginVertical: "5%",
    borderRadius: 10,
    shadowColor: '#EEE9E9',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 4
  },
  textWithImage: {
    padding: 15,
    width: "100%"
  },
  title: {
    fontSize: 20,
    color: _Constant["default"].secondary,
    marginVertical: "3%",
    fontFamily: "DINNextLTProRegular"
  },
  description: {
    fontSize: 14,
    color: _Constant["default"].primary,
    fontFamily: "DINNextLTProRegular"
  },
  img: {
    marginVertical: "3%",
    height: 100,
    width: 100,
    resizeMode: "contain"
  },
  leftImage: {
    position: "absolute",
    right: 0,
    top: 0,
    resizeMode: "contain"
  }
});

var _default = styles;
exports["default"] = _default;