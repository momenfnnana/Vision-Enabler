"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constant = _interopRequireDefault(require("@Assets/Constant"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = _reactNative.StyleSheet.create({
  visionList: {
    flexDirection: "row",
    marginVertical: "2%",
    marginHorizontal: 20,
    backgroundColor: _Constant["default"].white,
    shadowColor: _Constant["default"].secondary,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
    borderRadius: 15,
    width: 280
  },
  visionCardTitle: {
    fontSize: 20,
    color: _Constant["default"].secondary,
    marginVertical: "3%",
    textTransform: "uppercase"
  },
  visionCardDescription: {
    fontSize: 14,
    color: _Constant["default"].primary,
    marginVertical: "3%"
  },
  leftCornerImage: {
    width: "60%",
    marginLeft: -155,
    marginTop: 0,
    resizeMode: "contain"
  }
});

var _default = styles;
exports["default"] = _default;