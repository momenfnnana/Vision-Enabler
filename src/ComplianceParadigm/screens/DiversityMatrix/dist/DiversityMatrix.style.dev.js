"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constant = _interopRequireDefault(require("@Assets/Constant"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 
var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  },
  compalianceMatrix: {
    fontSize: 22,
    color: _Constant["default"].primary,
    textTransform: "uppercase",
    marginTop: "5%",
    marginLeft: "5%"
  },
  awareness: {
    fontSize: 15,
    color: "#FF7058",
    marginTop: "2%",
    marginLeft: "5%",
    fontFamily: "Altissimo"
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",
    alignSelf: "center",
    width: "90%"
  },
  greatContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRightColor: "#F2F3F7",
    borderRightWidth: 1
  },
  greatDot: {
    backgroundColor: "#44DD7F",
    height: 10,
    width: 10,
    borderRadius: 10,
    marginHorizontal: "7%"
  },
  greatText: {
    color: "#44DD7F"
  },
  avarageContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRightColor: "#F2F3F7",
    borderRightWidth: 1
  },
  avarageDot: {
    backgroundColor: "#FF7058",
    height: 10,
    width: 10,
    borderRadius: 10,
    marginHorizontal: "7%"
  },
  avarageText: {
    color: "#FF7058"
  },
  poorContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRightColor: "#F2F3F7",
    borderRightWidth: 1
  },
  poorDot: {
    backgroundColor: "#FA475F",
    height: 10,
    width: 10,
    borderRadius: 10,
    marginHorizontal: "7%"
  },
  VerypoorDot: {
    backgroundColor: "#000",
    height: 10,
    width: 10,
    borderRadius: 10,
    marginHorizontal: "7%"
  },
  poorText: {
    color: "#FA475F"
  },
  VerypoorText: {
    color: "#000"
  },
  footerContainer: {
    height: "23%",
    backgroundColor: _Constant["default"].primary,
    paddingTop: "2%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50
  },
  footerTitle: {
    fontSize: 16,
    color: _Constant["default"].white,
    marginLeft: "5%",
    paddingTop: "5%"
  },
  footerDescription: {
    fontSize: 13,
    color: _Constant["default"].white,
    marginLeft: "5%",
    paddingTop: "1%"
  },
  avarageRangeContainer2: {
    borderRightColor: "".concat(_Constant["default"].secondary, "30"),
    borderRightWidth: 1,
    paddingRight: "5%"
  },
  topRow: {
    flexDirection: "row",
    marginVertical: 20,
    marginLeft: 50
  },
  Image: {
    marginHorizontal: 10
  },
  leftColumn: {
    alignSelf: "flex-start"
  },
  rowNumCol1: {
    marginVertical: 12,
    backgroundColor: _Constant["default"].primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 4
  },
  rowNum1: {
    color: _Constant["default"].white,
    fontSize: 14
  },
  rowNumCol: {
    marginVertical: 12,
    backgroundColor: _Constant["default"].white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 4
  },
  rowNum: {
    color: _Constant["default"].primary,
    fontSize: 14
  },
  circle: {
    backgroundColor: _Constant["default"].white,
    height: 23,
    width: 23,
    borderColor: _Constant["default"].secondary,
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "4.65%"
  },
  subCircle: {
    height: 15,
    width: 15,
    borderRadius: 10
  }
});

var _default = styles;
exports["default"] = _default;