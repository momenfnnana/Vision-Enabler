"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constant = _interopRequireDefault(require("@Assets/Constant"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  },
  avarageRangesContainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: "10%"
  },
  avarageRangeContainer1: {
    borderRightColor: "".concat(_Constant["default"].secondary, "30"),
    borderRightWidth: 1,
    paddingRight: "5%"
  },
  avarageRange1: {
    backgroundColor: "#44DD7F",
    height: 4,
    width: "30%",
    borderRadius: 50
  },
  avarageRangeText1: {
    color: _Constant["default"].white,
    marginTop: "10%"
  },
  avarageRange2: {
    backgroundColor: "#F77700",
    height: 4,
    width: "30%",
    borderRadius: 50
  },
  avarageRangeText2: {
    color: _Constant["default"].white,
    marginTop: "10%"
  },
  avarageRangeContainer3: {
    borderRightColor: "".concat(_Constant["default"].secondary, "30"),
    borderRightWidth: 1,
    paddingRight: "5%"
  },
  avarageRange3: {
    backgroundColor: "#FA475F",
    height: 4,
    width: "30%",
    borderRadius: 50
  },
  avarageRangeText3: {
    color: _Constant["default"].white,
    marginTop: "10%"
  },
  chart: {
    height: 510
  },
  descriptionShape: {
    backgroundColor: _Constant["default"].secondary,
    borderRadius: 15,
    height: "50%",
    width: "30%",
    justifyContent: "center",
    alignItems: "center"
  }
});

var _default = styles;
exports["default"] = _default;