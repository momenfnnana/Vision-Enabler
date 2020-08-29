"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constant = _interopRequireDefault(require("@Assets/Constant"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = _reactNative.StyleSheet.create(_defineProperty({
  container: {
    flex: 1,
    backgroundColor: _Constant["default"].primary
  },
  chart: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    paddingBottom: "5%",
    borderBottomColor: "".concat(_Constant["default"].primary, "20"),
    alignItems: "center",
    paddingTop: "7%"
  },
  PerceptionReport: {
    color: _Constant["default"].white,
    fontSize: 22,
    fontFamily: "Altissimo_bold",
    marginVertical: "5%",
    marginLeft: "5%"
  },
  Overall: {
    fontSize: 15,
    color: _Constant["default"].white,
    marginLeft: "5%",
    marginBottom: "10%",
    width: "60%"
  },
  avarageNum: {
    fontSize: 13,
    color: _Constant["default"].white,
    marginLeft: "5%",
    marginBottom: "5%"
  },
  number: {
    color: "#F77700"
  },
  textInput: {
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
    height: 25,
    fontSize: 16,
    marginVertical: 50,
    marginHorizontal: 20
  }
}, "chart", {
  width: 200,
  height: 200
}));

var _default = styles;
exports["default"] = _default;